const thumbTrack = document.getElementById("thumbTrack");
const mainImage = document.getElementById("mainImage");

const images = [
  "asset/indexpic/dogpw01.webp",
  "asset/indexpic/dogpw02.png",
  "asset/indexpic/dogpw03.jpg",
  "asset/indexpic/dogpw04.jpg",
  "asset/indexpic/dogpw05.jpg",
  "asset/indexpic/dogpw06.jpg",
  "asset/indexpic/dogpw09.jpg",
  "asset/indexpic/dogpw10.jpg",
  "asset/indexpic/dogpw11.jpeg",
];

let currentIndex = 0;

function renderThumbnails() {
  thumbTrack.innerHTML = "";
  images.forEach((src, index) => {
    const thumb = document.createElement("img");
    thumb.src = src;
    thumb.classList.add("thumb");
    if (index === currentIndex) thumb.classList.add("active");

    thumb.addEventListener("click", () => {
      currentIndex = index;
      updateMain();
    });

    thumbTrack.appendChild(thumb);
  });
}

function updateMain() {
  mainImage.src = images[currentIndex];

  // highlight active thumb
  document.querySelectorAll(".thumb").forEach((thumb, i) => {
    thumb.classList.toggle("active", i === currentIndex);
  });

  // scroll thumbnail into view (核心功能)
  const activeThumb = document.querySelectorAll(".thumb")[currentIndex];
  if (activeThumb) {
    activeThumb.scrollIntoView({
      behavior: "smooth",
      inline: "center",
      block: "nearest"
    });
  }
}

// 按鈕左右切換主圖
document.querySelector(".nav-button.left").addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  updateMain();
});

document.querySelector(".nav-button.right").addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % images.length;
  updateMain();
});

renderThumbnails();
updateMain();

// ✅ 手機滑動主圖切換
let startX = 0;
let endX = 0;

mainImage.addEventListener("touchstart", (e) => {
  startX = e.touches[0].clientX;
});

mainImage.addEventListener("touchend", (e) => {
  endX = e.changedTouches[0].clientX;
  handleSwipe();
});

function handleSwipe() {
  const delta = endX - startX;
  const threshold = 50; // 最小滑動距離

  if (Math.abs(delta) > threshold) {
    if (delta > 0) {
      // 向右滑（上一張）
      currentIndex = (currentIndex - 1 + images.length) % images.length;
    } else {
      // 向左滑（下一張）
      currentIndex = (currentIndex + 1) % images.length;
    }
    updateMain();
  }}