self.addEventListener('install', (e) => {
 console.log('Service Worker: Gevestigd');
});

self.addEventListener('fetch', (e) => {
 // Dit zorgt ervoor dat de app werkt via het web
 e.respondWith(fetch(e.request));
});
