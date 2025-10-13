function showMessage(){
    document.getElementById("msg").classList.add("show");
}

function next(){
    window.location.href = "sos2.html";
}

function prev(){
    window.location.href = "sos1.html";
}

function blowCandles() {
  const flames = document.querySelectorAll('.flame');
  
  flames.forEach((flame, index) => {
    setTimeout(() => {
      flame.style.animation = 'blowOut 1s forwards';
    }, index * 300);
  });
}
