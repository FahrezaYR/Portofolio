// Fungsi Portofolio
const text = "Halo, semua! Perkenalkan, nama saya Fahreza Yurian Rastafara! Anak IT asal Lampung, Indonesia!";
let index = 0;

function typeEffect() {
  if (index < text.length) {
    document.getElementById('typing-text').textContent += text.charAt(index);
    index++;
    setTimeout(typeEffect, 50);
  }
}

window.addEventListener('DOMContentLoaded', () => {
  typeEffect();
  
  document.getElementById('year').textContent = new Date().getFullYear();
});