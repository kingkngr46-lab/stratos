const VERSION = 'v10';
const CACHE = `mission-control-${VERSION}`;
const ASSETS = [
  './',
  './index.html',
  './manifest.json',
  './icon-72.png',
  './icon-96.png',
  './icon-128.png',
  './icon-144.png',
  './icon-152.png',
  './icon-192.png',
  './icon-384.png',
  './icon-512.png',
  './nature-1.png',
  './nature-2.png',
  './nature-3.png',
  './nature-4.png',
  './nature-5.png',
  './nature-6.png',
];

self.addEventListener('install', e=>{
  e.waitUntil(
    caches.open(CACHE)
      .then(c=>c.addAll(ASSETS))
      .then(()=>self.skipWaiting())
  );
});

self.addEventListener('activate', e=>{
  e.waitUntil(
    caches.keys()
      .then(keys=>Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k))))
      .then(()=>self.clients.claim())
  );
});

// cache-first for the app shell, network falling back to cache for everything else,
// and an offline fallback to the cached index.html for navigations that fail entirely.
self.addEventListener('fetch', e=>{
  if(e.request.method !== 'GET') return;
  const isNavigation = e.request.mode === 'navigate';

  e.respondWith(
    caches.match(e.request).then(cached=>{
      const fetchPromise = fetch(e.request).then(res=>{
        if(res && res.status===200){
          const clone = res.clone();
          caches.open(CACHE).then(c=>c.put(e.request, clone));
        }
        return res;
      }).catch(()=>{
        if(cached) return cached;
        if(isNavigation) return caches.match('./index.html');
        return undefined;
      });
      return cached || fetchPromise;
    })
  );
});

self.addEventListener('message', e=>{
  if(e.data === 'SKIP_WAITING') self.skipWaiting();
});
