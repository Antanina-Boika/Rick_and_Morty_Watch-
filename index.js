const clockContainer = document.querySelector(".timepiece");

const hourHand = document.createElement("div");
clockContainer.appendChild(hourHand);
hourHand.style.cssText = `position: absolute;
                              width: 110px;
                              border: 7px solid #0c0a10;
                              border-radius: 6px;
                              left: 45%;
                              top: 50%;
                              transform-origin: 22px 2px;
                              background-color:#0c0a10;`;
const minuteHand = document.createElement("div");
clockContainer.appendChild(minuteHand);
minuteHand.style.cssText = ` position: absolute;
                                 width: 200px;
                                 border: 5px solid #0c0a10;
                                 border-radius: 4px;
                                 left: 45%;
                                 top: 50%;
                                 transform-origin: 22px 2px;;
                                 background-color:#0c0a10;`;
const secondHand = document.createElement("div");
clockContainer.appendChild(secondHand);
secondHand.style.cssText = `position: absolute;
                                width: 250px;
                                background: white;
                                border: 2px solid #127c2c;
                                border-radius: 2px;
                                left: 45%;
                                top: 50%;
                                transform-origin: 22px 2px;`;

const degInOneHour = 6;

function oClock() {
  let currenTime = new Date();
  let hour = currenTime.getHours() * 30;
  let degInOneMinute = currenTime.getMinutes() * degInOneHour;
  let degInOneSecond = currenTime.getSeconds() * degInOneHour;
  // Для перемещения часовой стрелки блок разбивается на 12 частей.
  // Вычислить на сколько градусов смещается стрелка за один час можно  путем: 360/12=30градусов.
  // Перемещение часовой стрелки в течение часа мы получаем путем получения текущего значения минут,
  //  последующего деления их на количество минут в часе и умножением получившейся части на 30 градусов.
  hourHand.style.cssText += `transform: rotate(${
    hour + (currenTime.getMinutes() / 60) * 30 - 90
  }deg);`;
  // Для перемещения часовой стрелки блок разбивается на  60 частей.
  // Вычислить на сколько градусов смещается стрелка за одну минуту можно  путем: 360/60=6градусов.
  // Перемещение  минутной стрелки в течении минуты путем получения текущего значения секунд,
  // последующего деления их  на количество секунд в минуте и умножением получившейся части на 6 градусов.
  minuteHand.style.cssText += `transform: rotate(${
    degInOneMinute + (currenTime.getSeconds() / 60) * 6 - 90
  }deg);`;
  // // Для перемещения  секундной стрелки пблок разбивается на 60 частей.
  // Вычислить на сколько градусов смещается стрелка за одну сукунду можно  путем: 360/60=6градусов.
  secondHand.style.cssText += `transform: rotate(${degInOneSecond - 90}deg);`;
}

setInterval(oClock, 100);
const digitalWatchContainer = document.querySelector(".digital_watch");
const dayOfTheWeek = document.querySelector(".day_of_the_week");
const date = document.querySelector(".date");

const week = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const month = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

function showDate() {
  dayOfTheWeek.innerHTML = week[new Date().getDay()];
  date.innerHTML =
    new Date().getDate() +
    " " +
    month[new Date().getMonth()] +
    " " +
    new Date().getFullYear();
}

showDate();

function digitalWatch() {
  const time = new Date();
  const hours = time.getHours();
  let minutes = time.getMinutes();
  let seconds = time.getSeconds();
  minutes = minutes <= 9 ? "0" + minutes : minutes;
  seconds = seconds <= 9 ? "0" + seconds : seconds;
  digitalWatchContainer.innerHTML = `${hours}:${minutes}:${seconds}`;
}
digitalWatch();
setInterval(digitalWatch, 1000);
