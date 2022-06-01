self.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open("v1").then((cache) => {
      return cache.addAll(["offline.html"]);
    })
  );

  self.skipWaiting();
  console.log("Service worker installed", new Date().toLocaleTimeString());
});

self.addEventListener("activate", () => {
  self.skipWaiting();
  console.log("Service worker activated", new Date().toLocaleTimeString());
});

self.addEventListener("fetch", async (e) => {
  if (!navigator.onLine) {
    console.log("Offline!");

    e.respondWith(
      caches.match(e.request).then((res) => {
        console.log("Response: ", res);

        if (res) {
          return res;
        } else {
          return caches.match(new Request("offline.html"));
        }
      })
    );
  } else {
    console.log("Online!");
    const res = await updateCache(e.request);
    return res;
  }
});

async function updateCache(req) {
  if (req.method === "GET") {
    const res = await fetch(req);
    const cache = await caches.open("v1");

    cache.put(req, res.clone());

    return res;
  }
}
