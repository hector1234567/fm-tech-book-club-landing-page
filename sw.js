self.addEventListener("install", function (event) {
  event.waitUntil(
    caches.open("static").then(function (cache) {
      cache.addAll([
        "/",
        "/index.html",
        "/css/style.css",
        "/assets/fonts/inter/Inter-VariableFont_opsz,wght.ttf",
        "/assets/fonts/martian-mono/MartianMono-VariableFont_wdth,wght.ttf",
        "/assets/images/image-hero-desktop.webp",
        "/assets/images/image-hero-mobile.webp",
        "/assets/images/image-hero-tablet.webp",
        "/assets/images/image-not-average-desktop.webp",
        "/assets/images/image-not-average-mobile.webp",
        "/assets/images/image-not-average-tablet.webp",
        "/assets/images/image-read-together-desktop.webp",
        "/assets/images/image-read-together-mobile.webp",
        "/assets/images/image-read-together-tablet.webp",
      ]);
    })
  );
});

self.addEventListener("fetch", function (event) {
  event.respondWith(
    caches.match(event.request).then(function (response) {
      if (response) {
        return response;
      } else {
        return fetch(event.request);
      }
    })
  );
});
