    const ToCacheFileList=[
    "./",
    "./index.html",
    "./style.css",
    "./main.js",
    "./sw.js",
    "/ASSETS/0.png",
    "/ASSETS/0.ttf",
    "/ASSETS/0.jpeg",
    "/ASSETS/1.jpeg",
    "/ASSETS/2.jpeg",
    "/ASSETS/3.jpeg",
    "/ASSETS/4.jpeg",
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