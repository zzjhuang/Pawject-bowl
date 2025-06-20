window.addEventListener("DOMContentLoaded", () => {
  // 1. 取得資料
  const name = localStorage.getItem("name");
  const gender = localStorage.getItem("gender");
  const dateStr = localStorage.getItem("res_date"); // 格式：2025/05/15
  const time = localStorage.getItem("res_time");
  const adults = localStorage.getItem("res_adults");
  const children = localStorage.getItem("res_children");

  // 2. 姓名 + 稱謂處理
  let title = "";
  if (gender === "sir") title = "先生";
  else if (gender === "madam") title = "女士";

  const fullName = name ? `${name}${title}` : "貴賓";

  const greeting = `${fullName}您好<br>您已完成訂位，訂位資訊:`;
  document.getElementById("greetingText").innerHTML = greeting;

  // 3. 日期轉換（含星期幾）
  if (dateStr) {
    const [year, month, day] = dateStr.split("-").map(Number);
    console.log("讀到的日期：", dateStr);

    const dateObj = new Date(year, month - 1, day);
    const weekdayList = ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"];
    const weekday = weekdayList[dateObj.getDay()];
    const dateDisplay = `${year}年${month}月${day}日 ${weekday}`;
    document.getElementById("finalDate").textContent = dateDisplay;
  }

  // 4. 時段顯示
  if (time) {
    document.getElementById("finalTime").textContent = time;
  }

  // 5. 人數文字處理
  let peopleText = "";
  if (adults && parseInt(adults) > 0) {
    peopleText += `${adults}位大人`;
  }
  if (children && parseInt(children) > 0) {
    if (peopleText) peopleText += "";
    peopleText += `${children}位兒童`;
  }

  document.getElementById("finalPeople").textContent = peopleText;
});
