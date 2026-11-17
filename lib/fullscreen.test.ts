import test from 'node:test';
import assert from 'node:assert/strict';
import {
  detectDisplayMode,
  exitDocumentFullscreen,
  getActiveFullscreenElement,
  getFullscreenNextAction,
  getFullscreenSupport,
  isAndroidUserAgent,
  isIOSUserAgent,
  requestElementFullscreen,
} from './fullscreen';

test('getFullscreenSupport accurately reports supported, missing, and blocked states', () => {
  const supported = getFullscreenSupport(
    { fullscreenEnabled: true },
    { requestFullscreen: async () => undefined }
  );
  assert.equal(supported.supported, true);

  const webkitSupported = getFullscreenSupport(
    { webkitFullscreenEnabled: true },
    { webkitRequestFullscreen: () => undefined }
  );
  assert.equal(webkitSupported.supported, true);

  const blocked = getFullscreenSupport(
    { fullscreenEnabled: false },
    { requestFullscreen: async () => undefined }
  );
  assert.equal(blocked.supported, false);

  const unsupported = getFullscreenSupport({ fullscreenEnabled: true }, {});
  assert.equal(unsupported.supported, false);
});

test('requestElementFullscreen passes navigationUI hide, falls back cleanly, and catches rejections', async () => {
  const receivedOptions: unknown[] = [];
  const resOk = await requestElementFullscreen(
    {
      requestFullscreen: async (opts) => {
        receivedOptions.push(opts);
      },
    },
    { fullscreenEnabled: true }
  );
  assert.equal(resOk.ok, true);
  assert.deepEqual(receivedOptions, [{ navigationUI: 'hide' }]);

  // Browser rejects options dictionary on first call, succeeds on no-arg retry
  let calls = 0;
  const resFallback = await requestElementFullscreen(
    {
      requestFullscreen: async (opts) => {
        calls++;
        if (opts) throw new TypeError('Invalid option');
      },
    },
    { fullscreenEnabled: true }
  );
  assert.equal(resFallback.ok, true);
  assert.equal(calls, 2);

  // Browser blocks fullscreen (e.g., policy or user-activation error)
  const resBlocked = await requestElementFullscreen(
    {
      requestFullscreen: async () => {
        throw new Error('Permissions check failed');
      },
    },
    { fullscreenEnabled: true }
  );
  assert.equal(resBlocked.ok, false);
  assert.equal(resBlocked.reason, 'blocked');
});

test('exitDocumentFullscreen and getActiveFullscreenElement handle standard and webkit APIs', async () => {
  const fakeEl = {} as Element;
  assert.equal(getActiveFullscreenElement({ fullscreenElement: fakeEl }), fakeEl);
  assert.equal(getActiveFullscreenElement({ webkitFullscreenElement: fakeEl }), fakeEl);
  assert.equal(getActiveFullscreenElement({ fullscreenElement: null }), null);

  let exited = false;
  const res = await exitDocumentFullscreen({
    fullscreenElement: fakeEl,
    exitFullscreen: async () => {
      exited = true;
    },
  });
  assert.equal(res.ok, true);
  assert.equal(exited, true);

  assert.equal(getFullscreenNextAction(false), 'enter');
  assert.equal(getFullscreenNextAction(true), 'exit');
});

test('detectDisplayMode identifies standalone, fullscreen, minimal-ui, iOS standalone, and browser modes', () => {
  assert.deepEqual(
    detectDisplayMode({
      matchMedia: (q) => ({ matches: q === '(display-mode: standalone)' }),
      navigator: {},
    }),
    { isStandalone: true, displayMode: 'standalone' }
  );

  assert.deepEqual(
    detectDisplayMode({
      matchMedia: (q) => ({ matches: q === '(display-mode: fullscreen)' }),
      navigator: {},
    }),
    { isStandalone: true, displayMode: 'fullscreen' }
  );

  assert.deepEqual(
    detectDisplayMode({
      matchMedia: () => ({ matches: false }),
      navigator: { standalone: true },
    }),
    { isStandalone: true, displayMode: 'standalone' }
  );

  assert.deepEqual(
    detectDisplayMode({
      matchMedia: () => ({ matches: false }),
      navigator: {},
    }),
    { isStandalone: false, displayMode: 'browser' }
  );
});

test('user-agent helpers recognize Android tablets and iOS devices accurately', () => {
  assert.equal(
    isAndroidUserAgent(
      'Mozilla/5.0 (Linux; Android 15; Xiaomi Pad 8) AppleWebKit/537.36 Chrome/131.0.0.0 Safari/537.36'
    ),
    true
  );
  assert.equal(
    isIOSUserAgent('Mozilla/5.0 (iPad; CPU OS 18_0 like Mac OS X)'),
    true
  );
  assert.equal(
    isIOSUserAgent('Mozilla/5.0 (Linux; Android 15; Xiaomi Pad 8)'),
    false
  );
});
