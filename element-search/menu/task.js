const menuLink = document.querySelectorAll('.menu__link')

Array.from(menuLink).forEach(element => {
  if(element.nextElementSibling) {
      console.log(element.nextElementSibling); 
    element.onclick = () => {
      closeSubMenu();
      element.nextElementSibling.classList.toggle('menu_active')
      return false
    }
  }
});

function closeSubMenu() {
  const allSubMenu = document.querySelectorAll('.menu_active');
  Array.from(allSubMenu).forEach(element => {
    element.classList.remove('menu_active')
  })
}