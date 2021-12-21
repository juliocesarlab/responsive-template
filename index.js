const menuButton = document.querySelector('.menu-button')
const menuLines = document.querySelectorAll('.line')
const menu = document.querySelector('.links')

menuButton.addEventListener('click', () => {
  menuLines[0].classList.toggle('hide')
  menuLines[1].classList.toggle('flip-right')
  menuLines[2].classList.toggle('flip-left')

  menu.classList.toggle('show')
})