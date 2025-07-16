const slide = document.querySelector('.slide');
const inner = document.querySelectorAll('.inner');
const after = document.querySelector('.after');
const before = document.querySelector('.before');

idx = 1;

slide.style.transition = 'transform 0.5s ease';
slide.style.transform = `translateX(-${idx*100}vw)`;

const slideMove = (()=>{
    slide.style.transition = 'transform 0.5s ease';
    slide.style.transform = `translateX(-${idx*100}vw)`;
    if( idx === inner.length-1) {
        setTimeout(() => {
            slide.style.transition = 'none';
            idx = 1;
            slide.style.transform = `translateX(-${idx*100}vw)`;            
        }, 500);
    }
});


after.addEventListener("click",()=>{
    idx++;
    slide.style.transition = "transform 0.5s ease";
    slide.style.transform = `translateX(-${idx*100}vw)`;
    if (idx === inner.length){
        setTimeout(() => {
            slide.style.transition = 'none';
            idx = 1;
            slide.style.transform = `translateX(-${idx*100}vw)`;
        }, 10);
        setTimeout(() => {
            idx=2;
            slide.style.transition = "transform 0.5s ease";
            slide.style.transform = `translateX(-${idx*100}vw)`;
        }, 50);
        
    }
});

before.addEventListener("click",()=>{
    idx--;
    slide.style.transform = `translateX(-${idx*100}vw)`;
    if( idx === 0 ) {
        setTimeout(() => {
            slide.style.transform= `trnaslateX(-${idx*100}vw)`;
            slide.style.transition ='none';
            idx = 5;
            slide.style.transform = `translateX(-${idx*100}vw)`;
        }, 10);
        setTimeout(()=>{
            idx = 4;
            slide.style.transition = "transform 0.5s ease";
            slide.style.transform = `translateX(-${idx*100}vw)`;
        },50)
    }
});

setInterval(()=>{
    idx++;
    slideMove();
},3000)
