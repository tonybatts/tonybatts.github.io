const cacheName = "version-1.6"

self.addEventListener("install", function (event) {
  event.waitUntil(preLoad());
});

var preLoad = function () {
  console.log("Installing web app");
  return caches.open("offline").then(function (cache) {
    console.log("caching index and important routes");
    return cache.addAll(["/"]);
  });
};

self.addEventListener("fetch", function (event) {
  event.respondWith(checkResponse(event.request).catch(function () {
    return returnFromCache(event.request);
  }));
  event.waitUntil(addToCache(event.request));
});

var checkResponse = function (request) {
  return new Promise(function (fulfill, reject) {
    fetch(request).then(function (response) {
      if (response.status !== 404) {
        fulfill(response);
      } else {
        reject();
      }
    }, reject);
  });
};
const controller = new AbortController();
const { signal } = controller
var addToCache = function (request) {
  return caches.open("offline").then(function (cache) {
    return fetch(request, { signal }).then(function (response) {
      if (response.url.includes("pokemon")) {
        controller.abort()
      } else {
        console.log(response.url + " was cached");
        return cache.put(request, response);
      }
      // console.log(response.url + " was cached");
      // return cache.put(request, response);
    }).catch(e => {
      console.log(`Pokemon was not cached :)`);
    });
  });
};

var returnFromCache = function (request) {
  return caches.open("offline").then(function (cache) {
    return cache.match(request).then(function (matching) {
      if (!matching || matching.status == 404) {
        return cache.match("offline.html");
      } else {
        return matching;
      }
    });
  });
};
self.addEventListener('message', function (event) {
  if (event.data.action === 'skipWaiting') {
    self.skipWaiting();
  }
});
