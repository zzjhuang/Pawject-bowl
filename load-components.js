// 載入 header.html
fetch('header.html')
  .then(response => response.text())
  .then(data => {
    document.getElementById('header-container').innerHTML = data;
  });

// 載入 footer.html 並綁定「回到最上方」按鈕
fetch('footer.html')
  .then(response => response.text())
  .then(data => {
    document.getElementById('footer-container').innerHTML = data;

    // 延遲一點時間再綁定，確保 DOM 已渲染
    setTimeout(() => {
      const topIcon = document.querySelector('.footer-top-icon');
      if (topIcon) {
        topIcon.addEventListener('click', () => {
          window.scrollTo({
            top: 0,
            behavior: 'smooth'
          });
        });
      }
    }, 0);
  });
