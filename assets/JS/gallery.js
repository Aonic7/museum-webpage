let images = [
    "../img/galery/galery1.jpg",
    "../img/galery/galery2.jpg",
    "../img/galery/galery3.jpg",
    "../img/galery/galery4.jpg",
    "../img/galery/galery5.jpg",
    "../img/galery/galery6.jpg",
    "../img/galery/galery7.jpg",
    "../img/galery/galery8.jpg",
    "../img/galery/galery9.jpg",
    "../img/galery/galery10.jpg",
    "../img/galery/galery11.jpg",
    "../img/galery/galery12.jpg",
    "../img/galery/galery13.jpg",
    "../img/galery/galery14.jpg",
    "../img/galery/galery15.jpg"
];
const imgContainer = document.querySelector('.picture-inner-container');

for (let i = 0; i < 15; i++) {
    let num = getRandomNumber(15 - i);
    let imgItem = document.createElement('img');
    imgItem.src = images[num];
    imgItem.alt = 'galleryImage';
    images.splice(num, 1);
    imgContainer.appendChild(imgItem);
}

function getRandomNumber(num) {
    return Math.floor(Math.random() * num)
}

imgContainer.children[0].style.margin = `50px 0 0 0`;
imgContainer.children[10].style.margin = `50px 0 0 0`;



//smooth animation

const elemImg = document.querySelectorAll('.picture-inner-container img');

let observer = new IntersectionObserver((entries => {
    entries.forEach(entry => {
        if (entry.intersectionRatio > 0) {
            entry.target.classList.add('animate');
        } else {
            entry.target.classList.remove('animate');
        }
    })
}));

elemImg.forEach(elemImg => {
    observer.observe(elemImg);
})

//idea from https://alligator.io/js/intersection-observer
//https://dev.to/ljcdev/introduction-to-scroll-animations-with-intersection-observer-d05