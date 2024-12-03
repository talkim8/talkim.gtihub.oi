const nextBtn = document.getElementById('nextBtn');
const page1 = document.getElementById('page1');
const page2 = document.getElementById('page2');
const romanticText = document.getElementById('romanticText');
const bgMusic = document.getElementById('bgMusic');

const romanticWords = [
  "Sayangku, Adelia Azra Putri...",
  "Ketika pertama kali aku bertemu denganmu, aku tahu hatiku telah menemukan rumahnya.",
  "Setiap detik bersamamu adalah anugerah yang tak ternilai, dan aku ingin terus menghitung waktu bersamamu selamanya.",
  "Maafkan aku jika aku sering membuatmu kesal atau marah, tapi percayalah, semua itu terjadi karena aku peduli padamu lebih dari apapun.",
  "Aku ingin kita selalu saling mendukung, menjaga, dan mencintai, karena cinta kita adalah hadiah terindah dari Allah..",
  "Jangan pernah ragu bahwa kamu adalah alasan senyumanku setiap hari, dan aku akan berjuang untuk membuatmu bahagia.",
  "Aku sangat mencintaimu, dan aku berjanji akan menjadi pasangan yang lebih baik, seseorang yang selalu ada untukmu tanpa ragu.",
  "Aku ingin hubungan ini terus tumbuh, semakin kuat, dan membawa kita ke masa depan yang penuh kebahagiaan.",
  "sayang aku harap kamu gak ngulangin ya kesalahan kmu yang dulu, dan terlalu bandel ya sayang......",
  "Kamu adalah bintang paling terang di langit hidupku, dan aku akan terus mencintaimu seperti langit mencintai bintang-bintang."
];

let index = 0;

nextBtn.addEventListener('click', () => {
  page1.classList.add('hidden');
  page2.classList.remove('hidden');
  bgMusic.play();
  typeText();
});

function typeText() {
  if (index < romanticWords.length) {
    let word = romanticWords[index];
    let typedText = '';
    let i = 0;

    const typing = setInterval(() => {
      typedText += word[i];
      romanticText.innerHTML = typedText;
      i++;

      if (i >= word.length) {
        clearInterval(typing);
        index++;
        setTimeout(typeText, 1000);
      }
    }, 100);
  } else {
    romanticText.innerHTML = romanticWords.join('<br><br>');
  }
}

// Background animasi bintang
const canvas = document.getElementById('starsCanvas');
const ctx = canvas.getContext('2d');

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}

window.addEventListener('resize', resizeCanvas);
resizeCanvas();

function createStars() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (let i = 0; i < 150; i++) {
    let x = Math.random() * canvas.width;
    let y = Math.random() * canvas.height;
    let size = Math.random() * 2;
    ctx.fillStyle = 'white';
    ctx.beginPath();
    ctx.arc(x, y, size, 0, Math.PI * 2);
    ctx.fill();
  }
}

function animateStars() {
  createStars();
  requestAnimationFrame(animateStars);
}

animateStars();
