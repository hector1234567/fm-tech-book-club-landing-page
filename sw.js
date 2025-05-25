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
        "/assets/images/favicon-32x32.png",
        "/assets/images/icon-arrow-down.svg",
        "/assets/images/icon-arrow-up.svg",
        "/assets/images/icon-check.svg",
        "/assets/images/icon-star.svg",
        "/assets/images/image-avatars.webp",
        "/assets/images/logo-bluesky.svg",
        "/assets/images/logo-linkedin.svg",
        "/assets/images/logo.svg",
        "/assets/images/logos-tech.svg",
        "/assets/images/pattern-arrow.svg",
        "/assets/images/pattern-circle.png",
        "/assets/images/pattern-dark-bg.svg",
        "/assets/images/pattern-glow.svg",
        "/assets/images/pattern-light-bg.svg",
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
