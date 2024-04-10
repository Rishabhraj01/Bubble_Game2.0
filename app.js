var value = 0;

function bubblemaker() {
  var select = "";

  for (var i = 1; i < 190; i++) {
    var ref = Math.floor(Math.random() * 10);
    select += `<div class="bubble">${ref}</div>`;
  }
  document.querySelector(".footer").innerHTML = select;
}

function handleTimer() {
  var timer = 60;
  var timeInterval = setInterval(() => {
    if (timer > 0) {
      timer--;
      document.querySelector("#timer").textContent = timer;
    } else {
      clearInterval(timeInterval);
      document.querySelector("#pbtm").innerHTML = "<h2>Game Over</h2>";
    }
  }, 1000);
}

function hitting() {
  value = Math.floor(Math.random() * 10);
  document.querySelector("#hitval").textContent = value;
}

function scoreUpdater() {
  var score = Number(document.querySelector("#scoreval").textContent);
  score += 5;
  document.querySelector("#scoreval").textContent = score;
}

function game() {
  var elem = document.querySelector("#pbtm");
  elem.addEventListener("click", (event) => {
    if (Number(event.target.textContent) === value) {
      scoreUpdater();
      bubblemaker();
      hitting();
    }
  });
}

hitting();
bubblemaker();
handleTimer();
game();
