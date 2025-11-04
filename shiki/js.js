let noClickCount = 0;

function showMessage() {
  document.getElementById("msg").classList.add("show");
}

function prev() {
  window.location.href = "sos1.html";
}

function blowCandles() {
  const flames = document.querySelectorAll(".flame");

  flames.forEach((flame, index) => {
    setTimeout(() => {
      flame.style.animation = "blowOut 1s forwards";
    }, index * 300);
  });
}

function sayLove() {
  const response = document.getElementById("response");
  const backBtn = document.getElementById("backBtn");
  const noButton = document.getElementById("no");

  response.innerText = "thank you mama :3";
  response.classList.add("heartbeat");
  backBtn.style.display = "inline-block";
  noButton.style.display = "none";
}

function shrinkNoButton() {
  const noButton = document.getElementById("no");
  const yesButton = document.getElementById("yes");

  // Ambil ukuran font dan padding sekarang
  let noFont = parseFloat(window.getComputedStyle(noButton).fontSize);
  let yesFont = parseFloat(window.getComputedStyle(yesButton).fontSize);
  let noPadding = parseFloat(window.getComputedStyle(noButton).padding);
  let yesPadding = parseFloat(window.getComputedStyle(yesButton).padding);

  // Kecilkan tombol "Tidak"
  if (noFont > 6) {
    noButton.style.fontSize = (noFont - 2) + "px";
    noButton.style.padding = (noPadding - 1) + "px " + (noPadding - 1) * 2 + "px";
  }

  // Besarkan tombol "Iya"
  yesButton.style.fontSize = (yesFont + 2) + "px";
  yesButton.style.padding = (yesPadding + 1) + "px " + (yesPadding + 1) * 2 + "px";

  noClickCount++;
  if (noClickCount >= 10) {
    noButton.style.display = "none";
  }
}
