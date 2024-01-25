let input = document.getElementById("data");
let img = document.getElementById("img");
let shareBtn = document.getElementById("shareBtn");

function genQR() {
  let value = input.value;

  if (value) {
    img.style.border = "2px solid silver";
    img.style.padding = "5px";
    img.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${value}`;
  }
  if (!value) {
    alert("Please enter text");
  }
}
