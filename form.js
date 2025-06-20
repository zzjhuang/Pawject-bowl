document.getElementById("reservationForm").addEventListener("submit", function (e) {
  e.preventDefault(); // 先阻止預設提交

  const adultSelect = document.getElementById("adultInput");
  const childSelect = document.getElementById("childInput");
  const limitError = document.getElementById("limitError");

  const dateInput = document.getElementById("datePicker");
  const selectedTime = document.getElementById("selectedTime");
  const dateError = document.getElementById("dateError");
  const timeError = document.getElementById("timeError");

  const adultCount = parseInt(adultSelect.value) || 0;
  const childCount = parseInt(childSelect.value) || 0;
  const total = adultCount + childCount;

  const dateValue = dateInput.value.trim();
  const timeValue = selectedTime.value.trim();

  let hasError = false;

  // 驗證人數
  if (total === 0) {
    limitError.style.display = "inline";
    hasError = true;
  } else {
    limitError.style.display = "none";
  }

  // 驗證日期
  if (dateValue === "") {
    dateError.style.display = "inline";
    hasError = true;
  } else {
    dateError.style.display = "none";
  }

  // 驗證時段
  if (timeValue === "") {
    timeError.style.display = "inline";
    hasError = true;
  } else {
    timeError.style.display = "none";
  }

  // ✅ 若都通過，跳轉
  if (!hasError) {
    localStorage.setItem('res_adults', adultCount);
    localStorage.setItem('res_children', childCount);
    localStorage.setItem('res_date', dateValue);
    localStorage.setItem('res_time', timeValue);
    window.location.href = "order2.html";
  }
});

// 人數變動時更新兒童選單
const adultSelect = document.getElementById("adultInput");
const childSelect = document.getElementById("childInput");
adultSelect.addEventListener("change", function () {
  const adultCount = parseInt(adultSelect.value) || 0;
  const maxTotal = 6;
  const maxChild = Math.max(0, maxTotal - adultCount);

  childSelect.innerHTML = '<option value="0">請選擇</option>';
  for (let i = 0; i <= maxChild; i++) {
    const option = document.createElement("option");
    option.value = i;
    option.textContent = `${i} 位`;
    childSelect.appendChild(option);
  }

  if (parseInt(childSelect.value) > maxChild) {
    childSelect.value = "0";
  }
});

