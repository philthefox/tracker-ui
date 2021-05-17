
/* eslint-disable no-restricted-globals */

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open('v1').then(cache => cache.addAll([
      './sw/',
      './sw/index.html',
    ])),
  );
});
