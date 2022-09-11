const cacheName = "knott-app-cache-dev-version";

const cacheAssets = [
  "/",
  "/index.html",
  "/assets/app.js",
  "/assets/app.css",
];

// BEYOND THIS LINE, DO NOT EDIT !!!

self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(cacheName).then(cache => {
      cache.addAll(cacheAssets)
    })
  );
});

self.addEventListener("fetch", fetchEvent => {
  fetchEvent.respondWith(
    caches.match(fetchEvent.request).then(res => {
      return res || fetch(fetchEvent.request)
    })
  );
});

