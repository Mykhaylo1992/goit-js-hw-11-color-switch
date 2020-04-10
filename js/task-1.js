const  colors  = [
    '#FFFFFF',
    '#2196F3',
    '#4CAF50',
    '#FF9800',
    '#009688',
    '#795548',
 ];
 const color = {
    startBn: document.querySelector('button[data-action="start"]'),
    stoptBn: document.querySelector('button[data-action="stop"]'),
 };
//  console.log(color.startBn);
 
color.startBn.addEventListener('click',setBg)
 let idstop=null
 let isActive =false
function setBg() {
   if(isActive)return
    isActive=true
idstop=  setInterval(()=>{
      const rondomIntegerFromInterval = (min,max) => Math.floor(Math.random() * (max - min + 1) + min); 
document.body.style.backgroundColor= colors[rondomIntegerFromInterval(0,colors.length-1)];
   // console.log(idstop);
   
        
   },1000);
 };
 color.stoptBn.addEventListener('click',stop)
 function stop (){
    isActive=false
    clearInterval(idstop)
 };




