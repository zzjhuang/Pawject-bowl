  const cards = document.querySelectorAll('.card-carousel .card');
  const prevBtn = document.querySelector('.carousel-btn.prev');
  const nextBtn = document.querySelector('.carousel-btn.next');
  const touchTarget = document.querySelector('.card-carousel');

  let current = 0;

  // 顯示指定卡片
  function showCard(index) {
    cards.forEach((card, i) => {
      card.classList.toggle('active', i === index);
    });
  }

  // 點擊按鈕切換
  prevBtn.addEventListener('click', () => {
    current = (current - 1 + cards.length) % cards.length;
    showCard(current);
  });

  nextBtn.addEventListener('click', () => {
    current = (current + 1) % cards.length;
    showCard(current);
  });

  // 手機滑動切換
  let startX = 0;
  let endX = 0;

  touchTarget.addEventListener("touchstart", (e) => {
    startX = e.touches[0].clientX;
  });

  touchTarget.addEventListener("touchend", (e) => {
    endX = e.changedTouches[0].clientX;
    handleSwipe();
  });

  function handleSwipe() {
    const delta = endX - startX;
    const threshold = 50; // 最小滑動距離（可微調）

    if (Math.abs(delta) > threshold) {
      if (delta > 0) {
        // 👈 向右滑：上一張
        current = (current - 1 + cards.length) % cards.length;
      } else {
        // 👉 向左滑：下一張
        current = (current + 1) % cards.length;
      }
      showCard(current);
    }
  }

  // 初始顯示
  showCard(current);