var carousel = document.getElementById('carousel');
var carouselInner = carousel.querySelector('.carousel-inner');
var items = carouselInner.getElementsByClassName('carousel-item');
var prevBtn = carousel.querySelector('.carousel-control-prev');
var nextBtn = carousel.querySelector('.carousel-control-next');
var indicators = carousel.querySelectorAll('.carousel-indicators button');

function goToIndex(index) {
    var itemWidth = carouselInner.clientWidth;
    carouselInner.style.transform = 'translateX(' + -index * itemWidth + 'px)';
    indicators[index].classList.add('active');
    indicators[index].classList.remove('carousel-item-prev');
    indicators[index].classList.remove('carousel-item-next');
}

function autoPlay() {
    var index = 0;
    setInterval(function () {
        index = (index + 1) % items.length;
        goToIndex(index);
    }, 3000); // 3秒切换一次
}

prevBtn.addEventListener('click', function () {
    var index = 0;
    for (var i = 0; i < items.length; i++) {
        if (items[i].classList.contains('active')) {
            index = i;
            break;
        }
    }
    goToIndex((index - 1 + items.length) % items.length);
});

nextBtn.addEventListener('click', function () {
    var index = 0;
    for (var i = 0; i < items.length; i++) {
        if (items[i].classList.contains('active')) {
            index = i;
            break;
        }
    }
    goToIndex((index + 1) % items.length);
});

for (var i = 0; i < indicators.length; i++) {
    indicators[i].addEventListener('click', function () {
        goToIndex(i);
    });
}

autoPlay(); // 开启自动播放
