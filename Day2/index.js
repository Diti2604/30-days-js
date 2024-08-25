const secondHandles = document.querySelector(".sec-handle");
const minutesHandles = document.querySelector(".min-handle");
const hoursHandles = document.querySelector(".hour-handle");

function setDate() {
  const now = new Date();
  const seconds = now.getSeconds();
  const secondsDegrees = (seconds / 60) * 360;
  secondHandles.style.transform = `translate(-50%, -100%) rotate(${secondsDegrees}deg)`;

  const minutes = now.getMinutes();
  const minutesDegrees = (minutes / 60) * 360;

  minutesHandles.style.transform = `translate(-50%, -100%) rotate(${minutesDegrees}deg)`;

  const hours = now.getHours();
  const hoursDegrees = (hours / 12) * 360;

  hoursHandles.style.transform = `translate(-50%, -100%) rotate(${hoursDegrees}deg)`;
}

setInterval(setDate, 1000);
