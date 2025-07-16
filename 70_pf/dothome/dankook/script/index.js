const slidegnb = document.querySelector('.slide_gnb');
const inner = document.querySelectorAll('.nav_inner');
let idx = 0;

setInterval(() => {
  idx = (idx + 1) % inner.length;
  slidegnb.style.transition = "transform .3s ease";
  slidegnb.style.transform = `translateX(-${idx*100}vw)`;
  if( idx === inner.length-1){
    setTimeout(()=>{
        slidegnb.style.transition = 'none';
        idx=0;
        slidegnb.style.transform = `translateX(-${idx*100}vw)`;
    },300)
    
  }
}, 3000);