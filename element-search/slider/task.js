const sliderItem = document.querySelectorAll('.slider__item')
const arr1 = Array.from(sliderItem)

let indexCurr = 0;

// счетчик для стрелок слайдера
function counter(index) {
    if(index > sliderItem.length - 1) {
        index = index % sliderItem.length;
    } else if (index < -sliderItem.length) {
        index = index % sliderItem.length * -1
    } else if (index < 0) {
        index = sliderItem.length + indexCurr
        
    }
    return index;
}

// отключение всех активных картинок
function deactiveSlider() {
    const allSliders = document.querySelectorAll('.slider__item');
    allSliders.forEach(element => {
      element.classList.remove('slider__item_active')
    })
  }

// отключение всех активных точек
function deactiveDot() {
    const allDots = document.querySelectorAll('.slider__dot');
    allDots.forEach(element => {

      element.classList.remove('slider__dot_active')
    })
  }

// действие для стрелки вперед
const nextClick = document.querySelector('.slider__arrow_next')
nextClick.onclick = () => {
    indexCurr++;
    deactiveSlider();
    deactiveDot();
    arr1[counter(indexCurr)].classList.add('slider__item_active');
    arr2[counter(indexCurr)].classList.add('slider__dot_active');


}

// действие для стрелки назад
const prevClick = document.querySelector('.slider__arrow_prev')
prevClick.onclick = () => {
    indexCurr--;
    deactiveSlider();
    deactiveDot();
    arr1[counter(indexCurr)].classList.add('slider__item_active');
    arr2[counter(indexCurr)].classList.add('slider__dot_active');
}

// действие для точек
const dotItem = document.querySelectorAll('.slider__dot')
const arr2 = Array.from(dotItem);
for(let i = 0; i < arr2.length; i++) {
    arr2[i].onclick = () => {
        deactiveSlider();
        console.log(arr2);
        deactiveDot();
        console.log(arr2);
        arr2[i].classList.add('slider__dot_active');
        arr1[i].classList.add('slider__item_active');
        console.log(arr2);
    }
}


// определение индекса для активной стартовой картинки
const indexStart = () => {
    for(let i = 0; i < arr1.length; i++) {
        if(arr1[i].className == 'slider__item slider__item_active')
        return i;
    }
}

// активирование точки, которая соответствует активной стартовой картинки
arr2[indexStart()].classList.add('slider__dot_active')