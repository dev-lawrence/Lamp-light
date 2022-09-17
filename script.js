const toggleMenu = document.querySelector('.toggle-menu');
const nav = document.querySelector('.nav');
const onSwitch = document.querySelector('#on');
const radioButtons = document.querySelectorAll('.switch__wrapper input');
const light = document.querySelector('.light');

// Function for menu toggle
const showMenu = () => {
  nav.classList.toggle('showNav');
  toggleMenu.classList.toggle('close');
  document.querySelector('body').classList.toggle('fixed');
};

// Function for lamp
const enableLight = () => {
  light.classList.add('showLight');
  document.querySelector('h1').classList.add('color');
  document.querySelector('.audio').play();
};

const disableLight = () => {
  light.classList.remove('showLight');
  document.querySelector('h1').classList.remove('color');
  document.querySelector('.audio').play();
};

// Fuction for on/off switch
radioButtons.forEach((button) => {
  button.addEventListener('click', () => {
    if (onSwitch.checked) {
      enableLight();
    } else {
      disableLight();
    }
  });
});

// Event listener
toggleMenu.addEventListener('click', showMenu);
