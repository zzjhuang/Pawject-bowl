  document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener("click", function (e) {
        const targetId = this.getAttribute("href");
        const targetElement = document.querySelector(targetId);

        if (!targetElement) return;

        // 阻止預設行為（不管是哪種尺寸）
        e.preventDefault();

        if (window.innerWidth <= 768) {
          // ✅ 手機才執行滾動
          targetElement.scrollIntoView({
            behavior: "smooth"
          });
        } else {
          // ✅ 桌機只換網址 hash，不跳動
          history.pushState(null, null, targetId);
        }
      });
    });
  });

