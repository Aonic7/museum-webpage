const slides = document.querySelectorAll('.slider-welcome__slide'),
    right = document.querySelector('.right-arrow'),
    left = document.querySelector('.left-arrow'),
    dots = document.querySelectorAll('.dot'),
    slideNum = document.querySelector('.current');

let slidesIndex = 0;

//removes all active 
const currentPic = (val) => {
    slides.forEach(elem => elem.classList.remove('active')); //pictures
    dots.forEach(elem => elem.classList.remove('active')); //dots     
    slides[val].classList.add('active'); //pictures
    dots[val].classList.add('active'); //dots   
}

//swipe to the left

const leftSwipe = val => {
    slides.forEach(elem => elem.classList.remove('left-arrow'));
    slides.forEach(elem => elem.classList.remove('right-arrow'));
    slides[val].classList.add('left-arrow');
    slides[val - 2].classList.add('right-arrow');
}

//swipe to the right
const rightSwipe = (val) => {
    slides.forEach(elem => elem.classList.remove('left-arrow'));
    slides.forEach(elem => elem.classList.remove('right-arrow'));
    slides[val].classList.add('right-arrow');
    slides[val + 2].classList.add('left-arrow');
}


//next picture
const nextPic = () => {
    if (slidesIndex !== slides.length - 1) {
        slidesIndex += 1;
        slideNum.innerHTML = `0${slidesIndex + 1}`;
        currentPic(slidesIndex);
        rightSwipe(slidesIndex - 1);
    } else {
        slidesIndex = 0;
        slideNum.innerHTML = `0${slidesIndex + 1}`;
        currentPic(slidesIndex);
        rightSwipe(slides.length - 1);
    }
}

// previos picture
const prevPic = () => {
    if (slidesIndex !== 0) {
        slidesIndex -= 1;
        slideNum.innerHTML = `0${slidesIndex + 1}`
        currentPic(slidesIndex);
        leftSwipe(slidesIndex + 1);
    } else {
        slidesIndex = 4;
        slideNum.innerHTML = `0${slidesIndex + 1}`;
        currentPic(slidesIndex);
        leftSwipe(0);
    }
}

right.addEventListener('click', nextPic, rightSwipe);
left.addEventListener('click', prevPic, leftSwipe);

const clickOnDots = () => {
    slides.forEach(elem => elem.classList.remove('left-arrow'));
    slides.forEach(elem => elem.classList.remove('right-arrow'));
}

//swipe by dots
dots.forEach((elem, i) => {
    elem.addEventListener('click', () => {
        slidesIndex = i;
        currentPic(i);
        clickOnDots()
        slideNum.innerHTML = `0${i + 1}`;
    })
})

// Mouse events
items.onmousedown = dragStart;