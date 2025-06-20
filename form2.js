



  window.addEventListener('DOMContentLoaded', () => {
    const adults = localStorage.getItem('res_adults');
    const children = localStorage.getItem('res_children');
    const date = localStorage.getItem('res_date');
    const time = localStorage.getItem('res_time');

    // 人數格式處理
    let peopleText = '';
    if (adults > 0) {
      peopleText += `${adults}位大人`;
    }
    if (children > 0) {
      peopleText += `${adults > 0 ? '' : ''}${children}位兒童`;
    }

    // 填入畫面中
    if (peopleText) document.getElementById('peonum').textContent = peopleText;
    if (date) document.getElementById('date').textContent = date;
    if (time) document.getElementById('time').textContent = time;
  });


document.addEventListener("DOMContentLoaded", () => {
  const dogCheckList = document.getElementById("dogchecklist");
  const heartwormSection = document.querySelector('input[name="cneck3"]').closest(".check");

  dogCheckList.style.display = "none";
  heartwormSection.style.display = "none";

  const takeDogRadio = document.getElementById("takedog");
  const noneDogRadio = document.getElementById("nonedog");

  // 當點選「會帶毛小孩」時顯示區塊
  takeDogRadio.addEventListener("change", () => {
    dogCheckList.style.display = "block";
    heartwormSection.style.display = "block";
  });

  // 點選「不帶毛小孩」時隱藏
  noneDogRadio.addEventListener("change", () => {
    dogCheckList.style.display = "none";
    heartwormSection.style.display = "none";
  });
});

document.getElementById("reservationForm").addEventListener("submit", function (e) {
  e.preventDefault();

  let hasError = false;

  // 清除錯誤訊息
  document.querySelectorAll(".error-message").forEach(el => el.style.display = "none");

  const name = document.getElementById("name").value.trim();
  const phone = document.getElementById("phonenum").value.trim();
  const gender = document.querySelector('input[name="gender"]:checked');
  const takedog = document.querySelector('input[name="cneck1"]:checked');
  const dogType = document.querySelector('input[name="cneck2"]:checked');
  const heartworm = document.querySelector('input[name="cneck3"]:checked');
  const agree = document.querySelector('input[name="agree"]:checked');

  // 驗證：姓名
  if (name === "") {
    document.getElementById("nameError").style.display = "inline";
    hasError = true;
  }

  // 驗證：性別
  if (!gender) {
    hasError = true;
  }



    // 手機號碼驗證 
if (phone === "+886" || phone.length < 10) {
  document.getElementById("phoneError").style.display = "inline";
  hasError = true;
} else {
  document.getElementById("phoneError").style.display = "none";
}
  

  // 驗證：是否帶毛小孩
  if (!takedog) {
    document.getElementById("checkError").style.display = "inline";
    hasError = true;
  }

  // 若選擇會帶毛小孩，才驗證特殊犬種問題
  if (takedog && takedog.value === "yes") {
    if (!dogType) {
    document.getElementById("dogTypeError").style.display="inline";
    hasError = true;
    }
    else if (dogType.value === "no") {
    alert("很抱歉，本店目前不接待特定攻擊性較高的犬種");
    hasError = true;
  }
  }

  // 驗證：心絲蟲
  if (takedog && takedog.value === "yes") {
  if (!heartworm) {
    document.getElementById("heartwormError").style.display="inline";
    hasError = true;
  }
else if (heartworm.value === "no") {
    alert("必須施打心絲蟲藥才可入內");
    hasError = true;
  }


}

  // 驗證：是否勾選同意
  if (!agree) {
    alert("請勾選同意訂位須知");
    hasError = true;
  }

  if (!hasError) {
  const name = document.getElementById("name").value.trim();
  const gender = document.querySelector('input[name="gender"]:checked');

  localStorage.setItem('name', name);

  if (gender) {
    localStorage.setItem('gender', gender.value); // 儲存稱謂 sir / madam / third
  }

  window.location.href = "thank.html";
}
});
document.getElementById("goBackBtn").addEventListener("click", function () {
  window.history.back();
});

//還需驗證 手機號碼



// 彈出的小卡
const showModalBtn = document.getElementById("showModal");
  const modal = document.getElementById("modal");
  const closeModalBtn = document.getElementById("closeModal");

  showModalBtn.addEventListener("click", function (e) {
    e.preventDefault(); // 阻止超連結跳轉
    modal.style.display = "block";
  });

  closeModalBtn.addEventListener("click", function () {
    modal.style.display = "none";
  });

  // 點擊 modal 背景時關閉
  window.addEventListener("click", function (e) {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  });
//需將資料儲存到下個頁面使用