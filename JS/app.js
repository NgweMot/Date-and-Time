const day = document.querySelector("#day");
const hrs = document.querySelector("#hrs");
const mins = document.querySelector("#mins");
const sec = document.querySelector("#sec");

setInterval(() => {
  const currentTime = new Date();
  let currentSecond = currentTime.getSeconds();
  let currentMinute = currentTime.getMinutes();
  let currentHour = currentTime.getHours();
  let currentDate=currentTime.getDate()

  day.innerHTML =(currentDate<10?"0":"") + currentTime.getDate();
  hrs.innerHTML = (currentHour < 10 ? "0" : "") +currentTime.getHours();
  mins.innerHTML = (currentMinute < 10 ? "0" : "") + currentTime.getMinutes();
  sec.innerHTML = (currentSecond < 10 ? "0" : "") + currentTime.getSeconds();
}, 1000);
