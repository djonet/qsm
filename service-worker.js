self.addEventListener('install', event => {
  event.waitUntil(
    caches.open('qcms-cache-v1').then(cache => {
      return cache.addAll([
        '/qsm/',
        '/qsm/index.html',
        '/qsm/login.html',
        '/qsm/lessons.html'
      ]);
    })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => response || fetch(event.request))
  );
});
