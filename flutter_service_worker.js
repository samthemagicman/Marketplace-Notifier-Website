'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "01eb2c11c2685e04a0e3b0556549b914",
".git/config": "80fdae5c533dcafbc6391b916eef52ed",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "e1106d21c9e2d11497d94d90177d2f32",
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
".git/index": "32768a89e693bbff94680c37ee0f96e4",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "33fb58767fe9c580b7da4989060b42c0",
".git/logs/refs/heads/main": "33fb58767fe9c580b7da4989060b42c0",
".git/logs/refs/remotes/origin/HEAD": "9029218c6c6f6e3255d463b4e09365b9",
".git/logs/refs/remotes/origin/main": "0286395dbeef9dbefadbeb5a8ba715e1",
".git/objects/31/d2e010b83114c1b55f59058f37736ab7fa3815": "e9c0aeade8536954d53f0c599af46a0c",
".git/objects/32/8738ee3687679fa1cd9f90b3a6baa29f86b550": "4d781fbe2646517ca2ca412bfca54a13",
".git/objects/3e/eced34d08e13858e1b20428caf6772d361de2d": "75345f208d78b2f82971e1ebec8bf06f",
".git/objects/50/f447fee5b04b4a5ac73c3dfb4fae27a847c4bc": "dde2689744d489f23fd978fe83ada40f",
".git/objects/52/2c5d7100a84b19e6fc993e81f5987991dfc65c": "c4787ae5bd5601d064f6fca65195f358",
".git/objects/74/a7f7778c9e52e12d6ad13255e26449cebcd133": "f3a71754ae9a689d2b1caf88cc5a3776",
".git/objects/87/ecca677ce56ea50c9a366988f9886157110208": "84f5997378f758569d7561adc908ef17",
".git/objects/89/dfd605b6c70e83155f506e9fd8592f5bd8f6b5": "54a85b363d268f98de1c2abc9757d1ae",
".git/objects/8a/618f4370d66a9566962523d540be5b25dfd8bd": "75f7a632f4e17139c3f04cc1ec280410",
".git/objects/8d/daef8129a2ad34583d8e0bd03c46327f8dea16": "eefa51c729a78d874c287d5e992dccbc",
".git/objects/93/94200d097c4bf816df0232fc1e782a9ff87003": "83c7b45f0dee6ccd31be848c28ddbba5",
".git/objects/95/7017e330fecd1381bef13bd00584ce81e11a7c": "6cca5ec14d15a627a387054db0ad524a",
".git/objects/96/4e3c9f3fe3b8125a66d0745a82faca39e51822": "a4a767343f4bdcd2d431de0fc35bd8c8",
".git/objects/9b/7492e4ab93321e6262ca3592122b40055a51b7": "df1a761d83ddd722499ff69dd8b6c3c7",
".git/objects/a1/68780131c0243e2b4c739fe0f0fc7e15957921": "96ede0bea476a47c5a5d81b9719fe0cf",
".git/objects/b5/d995f11d601f83e63aa59c6cd6eba02644f87b": "82778792e87ff4b1d92133e54b3e0218",
".git/objects/c4/4f6811d7898541dd7cba99be953e34bc5ab2d9": "6347c1bc95710e919a945633a6243e20",
".git/objects/cb/5728a571177a8e9e5903d93524ac596d211d06": "09f2f09c5c2de85228307d16b6c2b621",
".git/objects/e1/ce1f48c331de867e3ea5e946a188052b0e3a58": "03a72360b906244d2f68d3b78263e79c",
".git/objects/pack/pack-f427e4ba23104a21e2fe9470dab9e29fe41a52df.idx": "40689a041106371a3bff0f23bb56070b",
".git/objects/pack/pack-f427e4ba23104a21e2fe9470dab9e29fe41a52df.pack": "326f4e0639e4d8f0cd75efcd39754a77",
".git/packed-refs": "0684e06c15036d7d5c4f7722f8b71893",
".git/refs/heads/main": "9b2f4512df5f687270cfb226ff6d39f2",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/refs/remotes/origin/main": "9b2f4512df5f687270cfb226ff6d39f2",
"assets/AssetManifest.json": "3204829fc2179a7383b55eb44304cc15",
"assets/assets/config/default.conf": "4e63f87ef0b13a81471714285e39cdb4",
"assets/assets/config/development.conf": "9093a6656104aeb336ff886643fcb9d3",
"assets/assets/config/development_android.conf": "90f45957565690f3267bd0cf55bd27d7",
"assets/assets/config/production.conf": "5a4c4bbd28fc23f4df005e2fe4b4b247",
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
"index.html": "8d68ff7a97b42eea6aaf1c63ce785191",
"/": "8d68ff7a97b42eea6aaf1c63ce785191",
"main.dart.js": "34040b52b47cebf894edac7dc5ad54b5",
"manifest.json": "6c9fad5350d48fb7b92c7261474ab2c0",
"privacy-policy.html": "e2c538c26c4a15d94b48520a312438e1",
"version.json": "6aa7652722827069d23717af25790dd2"
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
