AFRAME.registerComponent('listener', {
  tick: function () {
  }
});

const enterButton = document.querySelector('.splash__button')
const splash = document.querySelector('.splash');
const poster = document.querySelector('a-image');

poster.addEventListener('click', () => {
  alert('Enter')
})

enterButton.addEventListener('click', () => {

  splash.style.display = 'none';
});






