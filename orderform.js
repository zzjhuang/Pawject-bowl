


      // 自動生成 11:00~20:00 的時段
      const timeSlotsContainer = document.getElementById("timeSlots");
      const selectedTimeInput = document.getElementById("selectedTime");

      for (let hour = 11; hour <= 20; hour++) {
        const time = `${hour.toString().padStart(2, "0")}:00`;
        const btn = document.createElement("div");
        btn.className = "time-slot";
        btn.textContent = time;
        btn.addEventListener("click", () => {
          // 清除所有選擇
          document
            .querySelectorAll(".time-slot")
            .forEach((el) => el.classList.remove("selected"));
          btn.classList.add("selected");
          selectedTimeInput.value = time;
        });
        timeSlotsContainer.appendChild(btn);
      }


//內嵌月曆
  flatpickr("#calendar", {
    inline: true,
    defaultDate: "today",
    dateFormat: "Y-m-d", // 對應 input value 格式
    minDate: "today",
    maxDate: "2025-07-02", // 你可以依需求調整
    onChange: function(selectedDates, dateStr, instance) {
      document.getElementById('selectedDate').value = dateStr;
    }
  });