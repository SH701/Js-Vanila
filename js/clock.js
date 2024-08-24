const clock = document.querySelector("#clock");

function getClock() {
  const date = new Date();
  const Hours = ("00" + date.getHours().toString()).slice(-2);
  const Minutes = ("00" + date.getMinutes().toString()).slice(-2);
  const Seconds = ("00" + date.getSeconds().toString()).slice(-2);

  clock.innerText = `${Hours}:${Minutes}:${Seconds}`;
  clock.style.fontFamily ="Segoe UI Variable", "Segoe UI", "sans-serify"
  clock.style.fontSize = "32px";
  clock.style.fontWeight="bold"
}

getClock();
setInterval(getClock, 1000);
