let offset = 0;
let dotIndex = 0;
const swiperWrapper = document.querySelector('.swiper__wrapper');
const dots = document.querySelectorAll('.slide__dot');
const dotsTwo = document.querySelectorAll('.slide__dot-two')
const swiperWrapperTwo = document.querySelector('.two-wrapper');

document.querySelector('.two-next').addEventListener('click', function(){
    offset += 270;
    dotIndex++
    if(offset > 810){
        offset = 0;
        dotIndex = 0
    }
    swiperWrapperTwo.style.left = -offset + "px";
    thisSlideTwo(dotIndex);
})
document.querySelector('.two-prev').addEventListener('click', function(){
    offset -= 270;
    dotIndex--
    if(offset < 0){
        offset = 810;
        dotIndex = (dots.length - 1)
    }
    swiperWrapperTwo.style.left = -offset + "px";
    thisSlideTwo(dotIndex);
})
function thisSlideTwo(index){
    for(let dot of dotsTwo){
        dot.classList.remove('active__dot-two')
    }
    dotsTwo[index].classList.add('active__dot-two')
}

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
