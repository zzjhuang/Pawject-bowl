

document.addEventListener('DOMContentLoaded', () => {

  console.log('DOM loaded');

 
 
 
 
 
 document.querySelector('.sala-menu').style.display = 'none';
  document.querySelector('.drink-menu').style.display = 'none';
  document.querySelector('.dog-menu').style.display = 'none';

document.getElementById('menubtn').addEventListener('click', function () {
  // 顯示 FAQ 區塊
  document.querySelector('.main-menu').style.display = 'block';

  // 隱藏其他區塊
  document.querySelector('.sala-menu').style.display = 'none';
  document.querySelector('.drink-menu').style.display = 'none';
  document.querySelector('.dog-menu').style.display = 'none';
});

document.getElementById('salabtn').addEventListener('click', function () {
  // 顯示 Adopt 區塊
  document.querySelector('.sala-menu').style.display = 'block';

  // 隱藏其他區塊
  document.querySelector('.main-menu').style.display = 'none';
  document.querySelector('.drink-menu').style.display = 'none';
  document.querySelector('.dog-menu').style.display = 'none';
});


document.getElementById('drinkbtn').addEventListener('click', function () {
  // 顯示 qual 區塊
  document.querySelector('.drink-menu').style.display = 'block';

  // 隱藏其他區塊
  document.querySelector('.main-menu').style.display = 'none';
  document.querySelector('.sala-menu').style.display = 'none';
  document.querySelector('.dog-menu').style.display = 'none';
});


document.getElementById('dogfoodbtn').addEventListener('click', function () {
  // 顯示 process 區塊
  document.querySelector('.dog-menu').style.display = 'block';

  // 隱藏其他區塊
  document.querySelector('.main-menu').style.display = 'none';
  document.querySelector('.drink-menu').style.display = 'none';
  document.querySelector('.sala-menu').style.display = 'none';
});


});