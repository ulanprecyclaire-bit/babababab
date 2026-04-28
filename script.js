let rotation = 0;
let allowRetry = false;
let score = 0;
let reward50 = false;
let reward100 = false;

/* 🔐 PASSWORD */
function unlock() {
  const p = document.getElementById("pass").value;

  if (p === "Babi 0328") {
    document.getElementById("login").style.display = "none";
    document.getElementById("main").classList.remove("hidden");
  } else {
    document.getElementById("msg").innerHTML = "Incorrect ❌";
    document.getElementById("hint").innerHTML = "Hint: Cs + Month 💜";
  }
}

/* 🎡 WHEEL */
const options = ["💋 Kiss","🤗 Hug","😏 Bite","💜 You decide","😢 Sad","🔁 Try again"];

function spinWheel() {
  const wheel = document.getElementById("wheel");

  rotation += Math.floor(Math.random() * 360) + 1800;
  wheel.style.transform = `rotate(${rotation}deg)`;

  setTimeout(() => {

    let result = options[Math.floor(Math.random() * options.length)];

    document.getElementById("wheelResult").innerHTML = result;
    showOverlay(result);

    if (result === "🔁 Try again") {
      allowRetry = true;
    } else {
      allowRetry = false;
    }

  }, 4000);
}

/* 💜 HEART GAME */
function spawnHeart() {
  const h = document.createElement("div");
  h.innerHTML = "💜";
  h.style.position = "absolute";
  h.style.left = Math.random() * 90 + "%";
  h.style.top = "0px";

  document.getElementById("heartArea").appendChild(h);

  setTimeout(() => h.remove(), 2000);

  h.onclick = () => {
    score++;
    document.getElementById("score").innerHTML = score;

    document.getElementById("loveFill").style.width = Math.min(score,100) + "%";

    checkRewards();
    h.remove();
  };
}

setInterval(spawnHeart, 800);

/* 🏆 LEVEL REWARDS */
function checkRewards() {
  if (score >= 50 && !reward50) {
    reward50 = true;
    alert("💜 Level 50: 1 wish unlocked 💬");
  }

  if (score >= 100 && !reward100) {
    reward100 = true;
    alert("💙 Level 100: BIG REQUEST UNLOCKED 💌");
    firework();
  }
}

/* 💬 TRUTH OR DARE */
const truths = [/* 20 truths */ 
"When did you like me? 💜","What do you love most? 💙","Favorite memory? 💜","Do you miss me? 💙","Who loves more? 😏",
"First impression? 💜","Future plan? 💙","What makes you smile? 💜","Jealous? 😳","Nickname? 💙",
"Thought when you see me? 💜","Cutest thing I did? 💙","When miss me? 💜","Song for me? 🎵","Change anything? 💙",
"My best trait? 💜","What makes us special? 💙","When love started? 💜","Never told me? 😳","Future vision? 💙"
];

const dares = [/* 20 dares */
"Send I miss you 💜","Call me 📞","Heart spam 💙","3 compliments 😏","Send selfie 📸",
"Say I love you 5x 💜","Type my name 💙","Voice note 🎧","Flirt 10 sec 😳","Cheesy line 😂",
"Say something sweet 💜","Pretend hug 🤗","Emoji combo 💙","Short love message 💜","Say what you miss 💙",
"Random cute message 💬","Favorite memory 💙","Say you're mine 😏","Describe me 💜","Promise future 💙"
];

function pickTruth() {
  document.getElementById("toldResult").innerHTML =
    truths[Math.floor(Math.random()*truths.length)];
  showOverlay("💬 Truth");
}

function pickDare() {
  document.getElementById("toldResult").innerHTML =
    dares[Math.floor(Math.random()*dares.length)];
  showOverlay("💘 Dare");
}

/* 💥 OVERLAY */
function showOverlay(text) {
  document.getElementById("overlay").classList.remove("hidden");
  document.getElementById("overlayText").innerHTML = text;

  setTimeout(() => {
    document.getElementById("overlay").classList.add("hidden");
  }, 2000);
}

/* 🎆 FIREWORK */
function firework() {
  for (let i = 0; i < 20; i++) {
    let s = document.createElement("div");
    s.innerHTML = "✨";
    s.style.position = "fixed";
    s.style.left = Math.random() * 100 + "%";
    s.style.top = Math.random() * 100 + "%";
    document.body.appendChild(s);

    setTimeout(() => s.remove(), 1500);
  }
}
