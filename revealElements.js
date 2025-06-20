const revealElements = document.querySelectorAll('.reveal');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('active');  // 進入畫面加上 active 觸發動畫
      observer.unobserve(entry.target);      // 觸發過後不再監測，效能更好
    }
  });
}, { threshold: 0.05 }); // 當元素有5%進入視窗時觸發

revealElements.forEach(el => observer.observe(el));


///左右滑入特效

document.addEventListener("DOMContentLoaded", () => {
  const slideSections = document.querySelectorAll(".reveal-on-scroll");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        if (entry.target.classList.contains("from-left")) {
          entry.target.classList.add("section-slide-in");
        } else if (entry.target.classList.contains("from-right")) {
          entry.target.classList.add("section-slide-in-right");
        }
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1
  });

  slideSections.forEach((section) => {
    observer.observe(section);
  });
});


// const ansrevealElements = document.querySelectorAll('.ansreveal');

// const observer2 = new IntersectionObserver(entries => {
//   entries.forEach(entry => {
//     if (entry.isIntersecting) {
//       entry.target.classList.add('active');  // 進入畫面加上 active 觸發動畫
//     }
//   });
// }, { threshold: 0.05 }); // 當元素有5%進入視窗時觸發

// ansrevealElements.forEach(el => observer.observe(el));