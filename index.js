// get image and set it in array

let sliderImages = Array.from(document.querySelectorAll('.slider-container img'));

let slideCount = sliderImages.length;

let currentSlide = 1;

let slidNumberElement = document.getElementById('slide-number');

let nextBtn = document.getElementById('next');
let prevBtn = document.getElementById('prev');

let paginationElement = document.createElement('ul');
paginationElement.setAttribute('id', 'pagination-ul')

for (let i = 1; i <= slideCount; i++){
    let paginationItem = document.createElement('li');
    paginationItem.setAttribute('data-index', i);

    paginationItem.appendChild(document.createTextNode(i));

    paginationElement.appendChild(paginationItem);
}
document.getElementById('indicators').appendChild(paginationElement); 

let paginationCreateUL = document.getElementById('pagination-ul');

let paginationBullets = Array.from(document.querySelectorAll('#pagination-ul li'))

for (let i = 0; i < paginationBullets.length; i++){
    paginationBullets[i].onclick = function () {
        currentSlide = parseInt(this.getAttribute('data-index'));
        theCheacker();
    }
}


theCheacker();

nextBtn.onclick = nextSlide;
prevBtn.onclick = prevSlide;

function nextSlide () {
    if (nextBtn.classList.contains('disabled')) {
        return false;
    } else {
        currentSlide++;
        theCheacker();
    }
}

function prevSlide () {
    if (prevBtn.classList.contains('disabled')) {
        return false;
    } else {
        currentSlide--;
        theCheacker();
    }
}

function theCheacker() {
    slidNumberElement.textContent = 'slide # ' + (currentSlide) + ' of ' + (slideCount);
    removeAllActive();
    sliderImages[currentSlide - 1].classList.add('active');
    paginationCreateUL.children[currentSlide - 1].classList.add('active');

    if (currentSlide == 1) {
        prevBtn.classList.add('disabled')
    } else {
        prevBtn.classList.remove('disabled')
    }
    if (currentSlide == slideCount) {
        nextBtn.classList.add('disabled')
    } else {
        nextBtn.classList.remove('disabled')
    }
}

function removeAllActive() {
    sliderImages.forEach(img => {
        img.classList.remove('active')
    });
    paginationBullets.forEach(bullets => {
        bullets.classList.remove('active')
    });
}
