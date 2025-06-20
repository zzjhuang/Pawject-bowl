 document.querySelector('.AdoptionGuidelines').style.display = 'none';
  document.querySelector('.qual').style.display = 'none';
  document.querySelector('.process').style.display = 'none';

document.getElementById('faqbtn').addEventListener('click', function () {
  // 顯示 FAQ 區塊
  document.getElementById('faq').style.display = 'block';

  // 隱藏其他區塊
  document.querySelector('.AdoptionGuidelines').style.display = 'none';
  document.querySelector('.qual').style.display = 'none';
  document.querySelector('.process').style.display = 'none';
});

document.getElementById('Adoptbtn').addEventListener('click', function () {
  // 顯示 Adopt 區塊
  document.getElementById('adopt').style.display = 'block';

  // 隱藏其他區塊
  document.querySelector('.quelist').style.display = 'none';
  document.querySelector('.qual').style.display = 'none';
  document.querySelector('.process').style.display = 'none';
});


document.getElementById('qualbtn').addEventListener('click', function () {
  // 顯示 qual 區塊
  document.getElementById('qual').style.display = 'block';

  // 隱藏其他區塊
  document.querySelector('.quelist').style.display = 'none';
  document.querySelector('.process').style.display = 'none';
  document.querySelector('.AdoptionGuidelines').style.display = 'none';
});


document.getElementById('processbtn').addEventListener('click', function () {
  // 顯示 process 區塊
  document.getElementById('process').style.display = 'block';

  // 隱藏其他區塊
  document.querySelector('.quelist').style.display = 'none';
  document.querySelector('.qual').style.display = 'none';
  document.querySelector('.AdoptionGuidelines').style.display = 'none';
});