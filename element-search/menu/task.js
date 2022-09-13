// const menuLink = document.querySelectorAll('.menu__link')
// console.log(menuLink.length);
// console.log(menuLink[0].href);
// Array.from(menuLink).forEach(element => {
  // console.log(element.className);
  // console.log(element.closest('.menu_sub'))

// })


// let menuItem = document.querySelectorAll('.menu__item')

// menuItem.forEach(element => {
// let child = element.children
// console.log(child);
//   Array.from(child).forEach(el => {

//   // console.log(el.className);
//     element.onclick = () => {
//       if(el.className == 'menu menu_sub') {
//         el.className = 'menu menu_sub menu_active'
//   } 
  
//   }

// })
// })

let menuSub = document.querySelectorAll('.menu_sub')
console.log(menuSub);
for(let i = 0; i < menuSub.length; i++) {
  if(menuSub[i].closest('.menu__item')) {
    menuSub[i].closest('.menu__item').onclick = () => {
      menuSub[i].className.add('menu_active')
    }
    
  }

}
// Array.from(menuSub).forEach(el2 => {
//   console.log(el2.closest('.menu__item'));
//   el2.closest('.menu__item').onclick = () => {
//     el2.className = 'menu menu_sub menu_active'
//   }
//   }
// )






