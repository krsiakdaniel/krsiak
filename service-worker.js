self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open('resume-site').then((cache) => cache.addAll([
      '/',
      '/index.html',
      '/main.css',
      '/favicon.png',
      '/lucky-star.svg',
      '/daniel_krsiak_resume.pdf',
      '/icons/icon-512x512.png',
      '/icons/icon-384x384.png',
      '/icons/icon-256x256.png',
      '/icons/icon-192x192.png',
      '/icons/apple-touch-icon.png',
      '/icons/apple-touch-icon-180x180.png',
      '/icons/apple-touch-icon-152x152.png',
      '/icons/apple-touch-icon-144x144.png',
      '/icons/apple-touch-icon-120x120.png',
      '/icons/apple-touch-icon-114x114.png',
      '/icons/apple-touch-icon-76x76.png',
      '/icons/apple-touch-icon-72x72.png',
      '/icons/apple-touch-icon-57x57.png',
    ])),
  );
});

self.addEventListener('fetch', (e) => {
  console.log(e.request.url);
  e.respondWith(
    caches.match(e.request).then((response) => response || fetch(e.request)),
  );
});
