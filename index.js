class Clock {
  date = new Date();
  h = 0;
  m = 0;
  s = 0;
  selector = 0;
  time;

  light_selector = 0;
  multiplier_h = 0;
  multiplier_m = 0;

  buttonLight = document.querySelector(".light");
  butonIncrease = document.querySelector(".increase");
  buttonMode = document.querySelector(".mode");
  constructor() {}

  _showTime() {
    this.date = new Date();
    this.date.setHours(this.date.getHours() + this.multiplier_h);
    this.date.setMinutes(this.date.getMinutes() + this.multiplier_m);

    this.h = this.date.getHours(); // 0 - 23
    this.m = this.date.getMinutes(); // 0 - 59
    this.s = this.date.getSeconds(); // 0 - 59
    var session = "AM";

    if (this.h == 0) {
      this.h = 12;
    }

    if (this.h > 12) {
      this.h = this.h - 12;
      session = "PM";
    }

    this.h = this.h < 10 ? "0" + this.h : this.h;
    this.m = this.m < 10 ? "0" + this.m : this.m;
    this.s = this.s < 10 ? "0" + this.s : this.s;

    this.time = this.h + ":" + this.m + ":" + this.s + " " + session;

    document.getElementById("MyClockDisplay").innerText = this.time;
    document.getElementById("MyClockDisplay").textContent = this.time;

    setTimeout(this._showTime.bind(this), 1000);
  }
}
let clock = new Clock();
clock._showTime();
window.setInterval(clock._showTime.bind(clock), 1000);

clock.buttonMode.addEventListener("click", async function () {
  clock.selector += 1;

  if (clock.selector === 3) {
    clock.selector = 0;

    clock._showTime();
  }
});

clock.butonIncrease.addEventListener("click", async function () {
  if (clock.selector !== 0) {
    if (clock.selector === 1) {
      clock.multiplier_h += 1;
    } else {
      clock.multiplier_m += 1;
    }
    clock._showTime();
  }
});

clock.buttonLight.addEventListener("click", async function () {
  if (clock.light_selector === 0) {
    clock.light_selector = 1;

    document.getElementById("MyClockDisplay").style.background = "white";
    document.getElementById("MyClockDisplay").style.color = "black";
  } else {
    clock.light_selector = 0;
    document.getElementById("MyClockDisplay").style.background = "black";
    document.getElementById("MyClockDisplay").style.color = "#17d4fe";
  }
});
