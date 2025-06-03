const leftThumbs = document.getElementById("leftThumbs");
const rightThumbs = document.getElementById("rightThumbs");
const mainImage = document.getElementById("mainImage");

const images = [
 "asset/indexpic/dogpw01.webp",
 "asset/indexpic/dogpw02.png",
 "asset/indexpic/dogpw03.jpg",
 "asset/indexpic/dogpw04.jpg" ,
 "asset/indexpic/dogpw05.jpg",
 "asset/indexpic/dogpw06.jpg" ,
 "asset/indexpic/dogpw07.jpg", 
 "asset/indexpic/dogpw08.jpg",
 "asset/indexpic/dogpw09.jpg", 
  "asset/indexpic/dogpw10.jpg",
   "asset/indexpic/dogpw11.jpeg", 
];

let currentIndex = 0;

function renderThumbnails() {
  leftThumbs.innerHTML = "";
  rightThumbs.innerHTML = "";

  images.forEach((src, index) => {
    const thumb = document.createElement("img");
    thumb.src = src;
    thumb.classList.add("thumb");
    if (index === currentIndex) thumb.classList.add("active");

    thumb.addEventListener("click", () => {
      currentIndex = index;
      updateMain();
    });

    if (index < images.length / 2) {
      leftThumbs.appendChild(thumb);
    } else {
      rightThumbs.appendChild(thumb);
    }
  });
}

function updateMain() {
  mainImage.src = images[currentIndex];
  document.querySelectorAll(".thumb").forEach((thumb, i) => {
    thumb.classList.toggle("active", i === currentIndex);
  });
}

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
