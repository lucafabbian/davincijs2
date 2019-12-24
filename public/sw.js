importScripts('https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js');
workbox.setConfig({debug: false})

workbox.routing.registerRoute(
  /\/davincijs2\/public/,
  new workbox.strategies.StaleWhileRevalidate(),
);
