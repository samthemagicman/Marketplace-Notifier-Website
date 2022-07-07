'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "01eb2c11c2685e04a0e3b0556549b914",
".git/config": "80fdae5c533dcafbc6391b916eef52ed",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "9089dc083aa90626a5a1e06d76fb1bf4",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "aa878bb23af5a8d2fd9cb06968a8f300",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "33e5f31d3ca3a18515d7bd61c19efb01",
".git/logs/refs/heads/main": "33e5f31d3ca3a18515d7bd61c19efb01",
".git/logs/refs/remotes/origin/HEAD": "4c7ad1a5b29350e4d120105add984725",
".git/logs/refs/remotes/origin/main": "1ab2d203e34b0276a724f3ea910036b6",
".git/objects/24/0a3cad9acfe8baace5d586a930c4962010611f": "c002ff7bb7d986bc303fa53567143c0f",
".git/objects/25/c38cc989befa033ef8362635411bcbcc945942": "392f55846309e15d1a7f4b07c21a8600",
".git/objects/54/8ac8643f0a530959091210d4c20ee048e42267": "a019057caab8f9939575ea0527d121fa",
".git/objects/5a/fe137b33f9d5db154e77df1bb1f2f762c43c6b": "ffded6b88c7e126917817e9d75dddabd",
".git/objects/5f/b3ab4f53b9c2ef93d560d01d29ed6c67dd71f0": "e27742f66de8bb021aec8f2e1bc95fc4",
".git/objects/69/2db9481a4ad22a0087dd91285868d9afe5f4e8": "8582db42c3d526d86a7e096232af4e8b",
".git/objects/9a/c1a2762673b0e2263562df15cf54aea99c019b": "f0638703feb0be401cc9a316be4f4144",
".git/objects/a2/60e39131999a3fb503089e3feb1c3a0469c36c": "171de007f745b21e9c2550f77c677a31",
".git/objects/b9/38716ab4b130b9cdbfa29beb17cb4869fa7cf8": "d209e7eddc254ff988a306f4d28a6607",
".git/objects/c7/7b7464b049c7d6666155c61df5f486f241f760": "4ab8ee67a3eb5dc207a2be6cb6cffe4e",
".git/objects/cf/9488ba0630226c1d70c66941e7463d199c7261": "662130af478b9acab0ce2687c34ae53f",
".git/objects/e9/bcd338f1ea76bdc333392d731f84d414e909d5": "e4096cf59b8fa3bb70dd4c54a004b914",
".git/objects/f3/2c7d3ed6fb9658e758d794be2368a4f0ffb546": "cfea9d550571ced031ba0e7f5d216d93",
".git/objects/pack/pack-58bc1e347d1c4595df523c9d28a5f178d07146b0.idx": "6a6a11d39b8910eba3c1b42df7e13dc9",
".git/objects/pack/pack-58bc1e347d1c4595df523c9d28a5f178d07146b0.pack": "e5470e6a144207fa96ee6e82474c5417",
".git/packed-refs": "aff8ced3af808e2bb041681150865e70",
".git/refs/heads/main": "77c72d0b4e9537356884f8364a555b8e",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/refs/remotes/origin/main": "77c72d0b4e9537356884f8364a555b8e",
"assets/AssetManifest.json": "91d4f119db3aaf3d9a44ce5f4b3a035a",
"assets/assets/config/default.conf": "11fd9162606ca23ad061927b47ec1649",
"assets/assets/config/development.conf": "07c24270942cd0ef761815d6966ef4c6",
"assets/assets/config/development_android.conf": "92202c58c09ddc058a3dbf0a90a6a1c3",
"assets/assets/config/production.conf": "5a4c4bbd28fc23f4df005e2fe4b4b247",
"assets/assets/images/google-play-badge.png": "db9b21a1c41f3dcd9731e1e7acfdbb57",
"assets/assets/images/google_logo.png": "0cd7e66def2b5e9a593cbe0791b8db0b",
"assets/assets/images/google_logo_small.png": "d5bfe5cfce5f815029b244e5b77187b3",
"assets/assets/images/stripe_logo.png": "e9ea4456945e9c1bb505b79897da4cb0",
"assets/assets/images/stripe_logo_small.png": "2b89f9d6feac08e0f8709a611aa2d38c",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/NOTICES": "ecb27d934d34753b2a9adb1a348d1cdc",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/fluttertoast/assets/toastify.js": "e7006a0a033d834ef9414d48db3be6fc",
"canvaskit/canvaskit.js": "3725a0811e16affbef87d783520e61d4",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"canvaskit/profiling/canvaskit.js": "491df729e7b715d86fc167feabea031a",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"CNAME": "18c974f168b4baaa55970516028216d9",
"favicon.ico": "016252b45535f5b74d1c334ca8624b6d",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"firebase-messaging-sw.js": "1f189f03f1ae8945ea4a1aa67f8d6d0a",
"flutter.js": "57bec8d5c24a3a80888b8466d37be1d0",
"icon.ico": "3a0e1d8de2ca9b2a5288bf8eccb2481b",
"icon.png": "e7737be71f27070487918d64b7fad154",
"icons/apple-touch-icon.png": "8fea2e46fa778fa6cad56606aa840f51",
"icons/Icon-192.png": "e2dfb3eb0b9964a2557f9a2e7f847c62",
"icons/Icon-512.png": "f11d9f989b3e61e74b108909611d956c",
"icons/Icon-maskable-192.png": "f7598be1b42cf8374b7e506edc81c8d2",
"icons/Icon-maskable-512.png": "5d0da19c3f49981e133d5b2cab2f70b6",
"index.html": "d06be0edfaf7749e763665e4ee778b11",
"/": "d06be0edfaf7749e763665e4ee778b11",
"main.dart.js": "f4972ee07b5562f60a28b4b2683bce06",
"manifest.json": "6c9fad5350d48fb7b92c7261474ab2c0",
"privacy-policy.html": "e2c538c26c4a15d94b48520a312438e1",
"version.json": "15700fe41b208a9cfe2fc4504978fc32"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
