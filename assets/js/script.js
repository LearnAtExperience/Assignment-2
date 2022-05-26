document.querySelector('.navbarToggler').onclick = () => {
  document.querySelector('.line1').classList.toggle('anim1');
  document.querySelector('.line2').classList.toggle('anim2');
  document.querySelector('.line3').classList.toggle('anim3');
  document.querySelector('.navMenu').classList.toggle('anim4');
}