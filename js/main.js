let offset = 0;
let dotIndex = 0;
const swiperWrapper = document.querySelector('.swiper__wrapper');
const dots = document.querySelectorAll('.slide__dot');




document.querySelector('.swiper__next').addEventListener('click', function(){
    offset += 270;
    dotIndex++
    if (offset > 810){
        offset = 0;
        dotIndex = 0;
    }
    swiperWrapper.style.left = -offset  + "px";
    thisSlide(dotIndex);
});
document.querySelector('.swiper__prev').addEventListener('click', function(){
    offset -= 270;
    dotIndex--
    if (offset < 0){
        offset = 810;
        dotIndex = (dots.length - 1);
    }
    swiperWrapper.style.left = -offset  + "px";
    thisSlide(dotIndex);
});

function thisSlide(index){
    for(let dot of dots){
        dot.classList.remove('active__dot');
    }
    dots[index].classList.add('active__dot');
}
