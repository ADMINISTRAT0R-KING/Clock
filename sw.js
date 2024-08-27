    const ToCacheFileList=[
    "./",
    "/Clock/index.html",
    "/Clock/style.css",
    "/Clock/main.js",
    "/Clock/sw.js",
    "/Clock/ASSETS/0.png",
    "/Clock/ASSETS/0.ttf",
    "/Clock/ASSETS/0.jpeg",
    "/Clock/ASSETS/1.jpeg",
    "/Clock/ASSETS/2.jpeg",
    "/Vlock/ASSETS/3.jpeg",
    "/Clock/ASSETS/4.jpeg",
  ],CacheName='V2';
  
  
  self.addEventListener('install',(event)=>{
    event.waitUntil(
      caches.open(CacheName).then((cache)=>{
        return cache.addAll(ToCacheFileList);
      }).then(()=>{
        return self.skipWaiting();
      })
    )
  });
  
  self.addEventListener('fetch',(event)=>{
    event.respondWith(
      caches.match(event.request).then((response)=>{
        return response || fetch(event.request);
      })
    )
  })
