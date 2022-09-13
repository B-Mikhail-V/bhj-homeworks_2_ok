const el1 = document.querySelector('.show-success');
const el2 = document.querySelector('.btn_success');
const el3 = document.querySelectorAll('.modal__close_times');

el1.onclick = () => {
    el1.closest('.modal_active').className = 'modal';
    el2.closest('.modal').className = 'modal_success';
}
el3[1].onclick = () => {
    el2.closest('.modal_success').className = 'modal';
}