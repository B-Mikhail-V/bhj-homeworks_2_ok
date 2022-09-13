const sliderItem = document.querySelectorAll('.slider__item')
const arr1 = Array.from(sliderItem)

let indexCurr = 0;

function counter(index) {
    // indexCurr++;
    if(index > sliderItem.length - 1) {
        index = index % sliderItem.length;
    } else if (index < -sliderItem.length) {
        index = index % sliderItem.length * -1
    } else if (index < 0) {
        index = sliderItem.length + indexCurr
        
    }
    return index;
}

function deactiveSlider(arr) {
    const allSubMenu = document.querySelectorAll('.menu_active');
    arr.forEach(element => {
      element.classList.remove('slider__item_active')
    })
  }


const nextClick = document.querySelector('.slider__arrow_next')
nextClick.onclick = () => {
    indexCurr++;
    deactiveSlider(arr1)
    sliderItem[counter(indexCurr)].classList.add('slider__item_active')
}

const prevClick = document.querySelector('.slider__arrow_prev')
prevClick.onclick = () => {
    indexCurr--;
    deactiveSlider(arr1)
    sliderItem[counter(indexCurr)].classList.add('slider__item_active')
}
