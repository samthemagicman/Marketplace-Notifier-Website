'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "aa1066d729fce2bb8798336cc1007bae",
".git/config": "f3721ad0e85ce6c8e993d4ed31937ec3",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "9e7b3523d6777c233a88bdf69d3949ff",
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
".git/index": "38e8b49dd5d1e0d35a9cfbf76b7084a6",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "b783b7da653dd74e55109bd34e9f612f",
".git/logs/refs/heads/main": "b783b7da653dd74e55109bd34e9f612f",
".git/logs/refs/remotes/origin/main": "3c7158b2192083be577dd4a6f3448a3d",
".git/objects/02/0f5e56a927a04113ecb38d06238b0c2998ee52": "b74ec5f14b7d6eaa207cddb2b632edf0",
".git/objects/0d/0df08f7c3e147a8ae36017cf81a96e35b73717": "106e868f28a72727fb6fb0fa71123633",
".git/objects/14/c51e2d9fd71d890ec94e590ce537c2fbbf192b": "41887a6b65bbf6bd2fff7fe320a7bff6",
".git/objects/15/1641973f378bc65a230070126da07bc18412af": "82900dd6ff8a62bfbe940b43c9eac48c",
".git/objects/1d/7189a99c3ade846eb04092bc25bd4ada5d7a7d": "09a7822bea7ed16fa8e4f16b40b6cb8e",
".git/objects/20/22a551dba5d468cb6dd08bdc2581ffac9b89b3": "fcba90210d3c34624e73367adddafb0b",
".git/objects/24/5ff2d366bc6862f2d54a03093890cb1ea47f7c": "6cb19128a842c631ceeb61f6dfca983a",
".git/objects/24/b1f14dd348b07c9b8373758bde9ac14d16fd92": "dbf45d6c044044561758a334420e9569",
".git/objects/26/8e5666d67a95a3db2874b3ed2936605855fbe2": "d3c270a9cded64ade67e9985a2a80b13",
".git/objects/2d/103fb8a4922a7021859d0de600f729ccf449a5": "f538b1c2ef7dd00c99d9b8943df19cfd",
".git/objects/2d/cf3542c874e33cd8ab86ceb6f0ec444228aa78": "66baad0ae5d874f09b6eee790095bc65",
".git/objects/3b/f83e14f7cfd58a165955295d49fa3b2ef1a8d0": "fb2cc2445cd3e5bbc85b3b3f70802604",
".git/objects/3d/17d707c7b89de204eb0de6a42eadff42649d4f": "35b6c3a5a7d4a2f621e31d782eeaf341",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/4e/89617a3696bd10c155ec378f4a65a9f89e9e3a": "d8056e20bae90d092b619c895129e982",
".git/objects/4e/c1703fa4b68a358ed4a5fb0a7bdbea116b6007": "c2d7d4ba672c0b0619a1b18345427445",
".git/objects/5b/14aabe5ebc13551b95b7b6028d77b74cb20728": "acb85bfb41dc890b9bb79c10a40e667a",
".git/objects/5d/45c2b778b3ebdd8a13e1a659fc7d59b14f3abc": "cdae1acb3b944380513b4d40f63f7271",
".git/objects/6f/9509c88bed7080d496fc5e1d87a9315e30549d": "c02716d7aaed30ce1c5697a2fb40d317",
".git/objects/75/9ce388753a436f40b75f574d1377077a7a40ec": "22405202bcf8e16da18d3b49990c9820",
".git/objects/76/8651b2e249c2517c7b37bdbeea0a5d8bfbb707": "495b1c4fefa633f6afe4dc5840ebe18f",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7b/9b2e283331a350a679450432000c24617871ff": "cc2db69af40290f59366d220273a0655",
".git/objects/88/27773f505914dc4636aed88bfe811577a17322": "af21308d84afbfbee63949b3d94fa9a3",
".git/objects/88/36f47aac166d7ccb042da90a4f230fb24256ff": "5230ba28562eff7bf8fc26d7e1495e7f",
".git/objects/8a/0c16c55d4cc7f9c866e0bcb72ec805387162a9": "f77cea4327d41a094ff3e13445f6430c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/9b/b5ef0dd296358a887d1e94ae9ad30cf3f4954c": "eb2c29a9b2760429eed3a64201127b3a",
".git/objects/9d/268901afe3a208782ed649b61493a07964eb3b": "857881dceb443af015022540d163a9c0",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/b4/195b67825a299ea3a5ee54ac31938d92d6373a": "50ad4d46f61088dc1a29a5937c082d3d",
".git/objects/b4/56ce25e9d3abf838b3fb96a14f3fbde6669f44": "17b2ff15d2a42aa3e1dc045311b04fa0",
".git/objects/c0/41e355ac48fc88341329c40dda9c8267d735e7": "d3fb0c600e4b0d0b554fc9d0bd532065",
".git/objects/cc/486e76e83a520a1854e0d265f424152910a47a": "84f19844f2473541cfee159507a7c23a",
".git/objects/cc/df4129fd48596e5dba6769c38463d3a0477469": "0d409f25d97a0b01687f546ea847b6e0",
".git/objects/cd/22076013ce8b84475eae9bb4cd6c60b5460fbe": "81c620e2d6cbe5638d6c90ee25886389",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/da/e8b52a9ab584d247c34407783fa5e37dcafcc4": "98954b63655c88d133e04a6a7585a20e",
".git/objects/de/28db843d7df6ed23b8a7526f6b6b4a83425fe7": "797e4f7b3d8dced098c51679ff33e848",
".git/objects/df/e0770424b2a19faf507a501ebfc23be8f54e7b": "76f8baefc49c326b504db7bf751c967d",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e6/b53e72b2bc8171f14dd55d07d377b8fc0d5ab1": "48b3b7367e141e7ca52f21aaca7497b7",
".git/objects/e9/e575d0b36ebd696294496017834c26b62e1505": "8eca52e53d59927cc7c00a13888ea67b",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ed/0edecd317f0b11fc478f62894e7511b6115fb0": "9bec71db5c9a9ed1622b2fc5fd8452d7",
".git/refs/heads/main": "bc0c78bf374234026501002e7016003b",
".git/refs/remotes/origin/main": "bc0c78bf374234026501002e7016003b",
"assets/AssetManifest.json": "1137362d21c7dfc9885bfcc7ec4da939",
"assets/assets/config/default.conf": "46cd72a1b04c6836a595b84f79493a3f",
"assets/assets/config/development.conf": "d495321152abff5a194f2fcba86d3e56",
"assets/assets/config/development_android.conf": "5128a776308c6a6b06d58fcbaca5103e",
"assets/assets/config/production.conf": "b9e56f50bc4f87d202c7836f98ca939e",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/NOTICES": "60fae8a39d37bac4692b6ab3f3670de1",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"firebase-messaging-sw.js": "1f189f03f1ae8945ea4a1aa67f8d6d0a",
"flutter.js": "0816e65a103ba8ba51b174eeeeb2cb67",
"icon.ico": "3a0e1d8de2ca9b2a5288bf8eccb2481b",
"icon.png": "e7737be71f27070487918d64b7fad154",
"icons/Icon-192.png": "a20c687c9c11fcfb886e6cf77ca7d07e",
"icons/icon-512.png": "3fe0d7e8a82f027fc31a39ad6a5f4cbf",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "24357cdd2fd2ba399b4925654f3fd21e",
"/": "24357cdd2fd2ba399b4925654f3fd21e",
"main.dart.js": "6e47c4db8b6c085f91bd02ce0d5877f7",
"manifest.json": "6c9fad5350d48fb7b92c7261474ab2c0",
"version.json": "aba6ca598ac0a6c959b361cb5808a078"
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
