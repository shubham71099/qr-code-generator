let input = document.getElementById("data");
let img = document.getElementById("img");
const downloadBtn = document.querySelector("#download");

function genQR() {
  let value = input.value;

  if (value) {
    img.style.border = "2px solid silver";
    img.style.padding = "5px";
    const qrcode = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${value}`;
    img.src = qrcode;
    downloadBtn.style.display = "inline";
  }
  if (!value) {
    alert("Please enter text to generate QR");
  }
}

downloadBtn.addEventListener("click", async () => {
  const response = await fetch(img.src);
  const blob = await response.blob();
  const downloadLink = document.createElement("a");
  downloadLink.href = URL.createObjectURL(blob);
  downloadLink.download = "qrcode.jpg";
  downloadLink.click();
});
