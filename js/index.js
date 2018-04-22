"use strict";
var state = true;
function toggleLight() {
  var image = document.getElementById("image");
  state = !state;
  image.src = state ? "img/on.jpg" : "img/off.jpg"; 
}

var timeLeft = 0;
var setting = 0;

function setTimer(){
  var time = document.getElementById("time").value;
  if (isNaN(time)) {
    alert("請輸入數字！");
  }else if (time == "") {
    alert("請填入秒數！");
  }else{
    timeLeft = time;
    setting = setInterval(countDownTimer, 1000);
    document.getElementById("timer").innerHTML = "倒數時間：" + timeLeft;
    document.getElementById("time").value = " ";
  }
  }

function countDownTimer() {
  timeLeft = timeLeft - 1;
  if (timeLeft <= 0) {
    document.getElementById("image").src = "img/off.jpg";
    clearInterval(setting);
    state = false;
  }
  document.getElementById("timer").innerHTML = "倒數時間：" + timeLeft;
}

