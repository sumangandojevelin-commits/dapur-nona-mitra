const CACHE_NAME = 'dapur-nona-cache-vfinal';
const urlsToCache = [
  '/dapur-nona-mitra/',
  '/dapur-nona-mitra/index.html',
  '/dapur-nona-mitra/manifest.json',
  '/dapur-nona-mitra/LOGO_DAPUR_NONA.png'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        return response || fetch(event.request);
      })
  );
});
