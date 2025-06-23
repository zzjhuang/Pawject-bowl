// 載入 header.html

document.addEventListener('DOMContentLoaded', () => {
  const headerContainer = document.getElementById('header-container');
  if (!headerContainer) {
    console.warn('⚠️ 沒找到 #header-container 元素');
    return;
  }

  fetch('header.html')
    .then(res => res.text())
    .then(data => {
      headerContainer.innerHTML = data;
      bindHamburger(); // 確保 header 載入完成後才綁定事件
    });
    window.addEventListener('DOMContentLoaded', () => {
  setTimeout(() => {
    window.scrollTo(0, 0);
  }, 50);
});
});

function bindHamburger() {
  const menuToggle = document.getElementById('menuToggle');
  const overlay = document.getElementById('overlay');

  if (menuToggle && overlay) {
    menuToggle.addEventListener('click', () => {
      menuToggle.classList.toggle('active');
      overlay.classList.toggle('active');
    });
  } else {
    console.warn("⚠️ 找不到 menuToggle 或 overlay");
  }
}

// 載入 footer.html 並綁定「回到最上方」按鈕
fetch('footer.html')
  .then(response => response.text())
  .then(data => {
    document.getElementById('footer-container').innerHTML = data;

setTimeout(() => {
  const topIcons = document.querySelectorAll('.footer-top-icon');
  topIcons.forEach(icon => {
    icon.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  });
}, 0);
  });

