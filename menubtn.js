document.addEventListener('DOMContentLoaded', () => {
  document.querySelector('.sala-menu').style.display = 'none';
  document.querySelector('.drink-menu').style.display = 'none';
  document.querySelector('.dog-menu').style.display = 'none';

  document.querySelectorAll('.m-list li a').forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();

      const href = link.getAttribute('href');
      const targetElement = document.querySelector(href);

      // 切換區塊
      if (href === '#menu') {
        document.querySelector('.main-menu').style.display = 'block';
        document.querySelector('.sala-menu').style.display = 'none';
        document.querySelector('.drink-menu').style.display = 'none';
        document.querySelector('.dog-menu').style.display = 'none';
      } else if (href === '#sala') {
        document.querySelector('.main-menu').style.display = 'none';
        document.querySelector('.sala-menu').style.display = 'block';
        document.querySelector('.drink-menu').style.display = 'none';
        document.querySelector('.dog-menu').style.display = 'none';
      } else if (href === '#drink') {
        document.querySelector('.main-menu').style.display = 'none';
        document.querySelector('.sala-menu').style.display = 'none';
        document.querySelector('.drink-menu').style.display = 'block';
        document.querySelector('.dog-menu').style.display = 'none';
      } else if (href === '#dogfood') {
        document.querySelector('.main-menu').style.display = 'none';
        document.querySelector('.sala-menu').style.display = 'none';
        document.querySelector('.drink-menu').style.display = 'none';
        document.querySelector('.dog-menu').style.display = 'block';
      }

      // 滾動控制
      if (window.innerWidth <= 768 && targetElement) {
        const offset = 80; // 根據你的 header 高度調整
        const top = targetElement.getBoundingClientRect().top + window.pageYOffset - offset;
        window.scrollTo({ top, behavior: 'smooth' });
      }

      // 更新網址 hash
      history.pushState(null, null, href);
    });
  });
});
