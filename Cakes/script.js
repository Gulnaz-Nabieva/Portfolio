let productsButton = document.querySelector('#products__cardsWrapper__card__cardButton')

productsButton.addEventListener('mouseover', function() {
    productsButton.style.transform = 'scale(1.1)'
    productsButton.style.transition = '0.5s'
})


productsButton.addEventListener('mouseout', function() {
    productsButton.style.transform = 'scale(1)'
})

let productsBlock = document.querySelector('#productsBlock')
let closeButton = document.querySelector('.products__cardsWrapper__card__block__closeBlock')

productsButton.addEventListener('click', function() {
    productsBlock.style.display = 'block'
})

closeButton.addEventListener('click', function() {
    productsBlock.style.display = 'none'
})



function SlidesCakes (activeSlide) {
    let slides = document.querySelectorAll('.finishedOrder__img')
    slides[activeSlide].classList.add('active')

    for (const slide of slides) {
        slide.addEventListener('click', () => {
            ClearActiveSlides()
            slide.classList.add('active')
        })
    }

    function ClearActiveSlides () {
        slides.forEach((slide) => {
            slide.classList.remove('active')
        })
    }
}

SlidesCakes(2)


const sliderLineItems = document.querySelectorAll('.comment_boxProfile');
const sliderLine = document.querySelector('.commentsScreen__div'); 
const slideWidth = 721; 

let activeIndex = 2;
offset = -1442 + (activeIndex * slideWidth);

function setActiveSlide(index) {
    for (let i = 0; i < sliderLineItems.length; i++) {
        sliderLineItems[i].classList.remove('active');
        sliderLineItems[i].style.transform = 'scale(1)';
    }

    activeIndex = index;

    sliderLineItems[activeIndex].classList.add('active');
    sliderLineItems[activeIndex].style.transform = 'scale(1.25)';

    let sliderWidth = document.querySelector('.comments_slider').offsetWidth;
    let activeSlideWidth = document.querySelector('.comment_boxProfile.active').offsetWidth;
    let offset = -((activeIndex * (slideWidth + 100)) - (sliderWidth / 2) + (activeSlideWidth / 2));  
    sliderLine.style.left = offset + 'px';

    sliderLineItems[activeIndex].style.transition = 'transform 0.3s';
}

setActiveSlide(activeIndex);

document.querySelector('.commentsScreen__buttonDiv__buttonNEXT').addEventListener('click', function(){
    activeIndex = (activeIndex + 1) % sliderLineItems.length;
    setActiveSlide(activeIndex);
});

document.querySelector('.commentsScreen__buttonDiv__buttonPREV').addEventListener('click', function () {
    activeIndex = (activeIndex + sliderLineItems.length - 1) % sliderLineItems.length;
    setActiveSlide(activeIndex);
});


let container = document.querySelector('.commentsScreen__form__container')
let input = document.querySelector('.commentsScreen_form__textarea')
let commentsButton = document.querySelector('.commentsScreen_button')

commentsButton.addEventListener('click', function () {
    container.style.display = 'block'
    let text = input.value
    let div = document.createElement('div')
    div.classList.add ('commentContainer')
    div.innerHTML = `
        <p>${text}</p>
        <button class="deleteButton">Удалить</button>`
    container.appendChild(div)  

     let deleteButton = document.querySelectorAll('.deleteButton')  

    deleteButton.forEach (function(button){
         deleteButton.addEventListener('click', function() {
         let parentElement = button.parentElement
         parentElement.parentNode.removeChild(parentElement)
         })
     })

})