document.querySelectorAll('.slider-container').forEach(container => {
  const wrapper = container.querySelector('.card-wrapper');
  const cards = wrapper.querySelectorAll('.card');
  const totalCards = cards.length;
  let currentIndex = 0;

  // 1. 設定 CSS 變數
  wrapper.style.setProperty('--card-count', totalCards);

  // 2. 更新位置
  function updateSlider() {
  const cardSpacing = cards[1].getBoundingClientRect().left - cards[0].getBoundingClientRect().left;
  wrapper.style.transform = `translateX(-${currentIndex * cardSpacing}px)`;
}
  // 3. 按鈕綁定事件
  container.querySelector('.next-btn').addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % totalCards;
    updateSlider();
  });

  container.querySelector('.prev-btn').addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + totalCards) % totalCards;
    updateSlider();
  });

  // 初始顯示
  updateSlider();
});