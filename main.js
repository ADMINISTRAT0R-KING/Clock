  //Clock Working Making Clock Work
  function TimeChange(CurrentTime=new Date().toLocaleTimeString('en-us',{hour12: false,hour: '2-digit',minute: '2-digit',second: '2-digit'}).split(':')){
    d_hours.innerText=CurrentTime[0];
    d_minuts.innerText=CurrentTime[1];
    d_seconds.innerText=CurrentTime[2];
  }TimeChange();
  setInterval(TimeChange,1000);
  
  
  //Initlazing Website To Make It Installable PWA
  fetch('./sw.js');
  if(!(navigator.serviceWorker || 'serviceWorker' in navigator)){
    confirm('Browser Support error: Unable To Register Service-Worker Browser Dose Not Support Service-Workers!')
  }else{
    navigator.serviceWorker.register('./sw.js').then((reg)=>{
      //reg
    }).catch((err)=>{
      confirm('Service-Worker Registration error: '+err.message);
    })
  }//Registrating Service-Worker
  
  
  //showing install prompt
  window.addEventListener("beforeinstallprompt",(e)=>{
    e.preventDefault();
    window.InstallPrompt=e;
    window.onclick=()=>{
      window.InstallPrompt.prompt();
    }
  });