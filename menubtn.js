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
        const offset = 1200; // 根據你的 header 高度調整
        const top = targetElement.getBoundingClientRect().top + window.pageYOffset - offset;
        window.scrollTo({ top, behavior: 'smooth' });
      }

      // 更新網址 hash
      history.pushState(null, null, href);
    });
  });
});
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
      const targetId = this.getAttribute("href");
      const targetElement = document.querySelector(targetId);

      if (!targetElement) return;

      e.preventDefault();

      if (window.innerWidth <= 768) {
        if (targetId === "#menu") {
          // ✅ 只有健康餐盒加 offset
          const offset = 1000; // 自行調整這個數字
          const top = targetElement.getBoundingClientRect().top + window.pageYOffset - offset;

          window.scrollTo({
            top,
            behavior: "smooth"
          });
        } else {
          // 其他直接用原生滑動
          targetElement.scrollIntoView({
            behavior: "smooth"
          });
        }
      } else {
        // 桌機只換 hash，不捲動
        history.pushState(null, null, targetId);
      }
    });
  });
});