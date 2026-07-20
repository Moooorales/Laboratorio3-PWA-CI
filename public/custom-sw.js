/* ===========================================
   Service Worker Personalizado
   Laboratorio PWA
=========================================== */

console.log("[SW] custom-sw.js cargado");

// Evento Install
self.addEventListener("install", (event) => {
    console.log("[SW] Service Worker instalado");
    self.skipWaiting();
});

// Evento Activate
self.addEventListener("activate", (event) => {
    console.log("[SW] Service Worker activado");
    event.waitUntil(clients.claim());
});

// Evento Fetch
self.addEventListener("fetch", (event) => {
    console.log("[SW] Recurso solicitado:", event.request.url);

    event.respondWith(
        fetch(event.request).catch(() => caches.match(event.request))
    );
});

// Evento Message
self.addEventListener("message", (event) => {
    console.log("[SW] Mensaje recibido:", event.data);
});

// Importar el Service Worker generado por Angular
importScripts("./ngsw-worker.js");