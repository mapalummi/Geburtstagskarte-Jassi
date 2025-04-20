window.onload = function () {
  const canvas = document.getElementById("confettiCanvas");
  const ctx = canvas.getContext("2d");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const confetti = [];
  for (let i = 0; i < 100; i++) {
    confetti.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 5 + 2,
      d: Math.random() * 4 + 1,
    });
  }

  function drawConfetti() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "#ff4081";
    confetti.forEach(c => {
      ctx.beginPath();
      ctx.arc(c.x, c.y, c.r, 0, Math.PI * 2);
      ctx.fill();
    });
    updateConfetti();
  }

  function updateConfetti() {
    confetti.forEach(c => {
      c.y += c.d;
      if (c.y > canvas.height) {
        c.y = 0;
        c.x = Math.random() * canvas.width;
      }
    });
  }

  function animateConfetti() {
    drawConfetti();
    requestAnimationFrame(animateConfetti);
  }

  document.getElementById("playMusic").addEventListener("click", function () {
    document.getElementById("birthdaySong").play();
    canvas.style.display = "block"; // Zeige das Konfetti an

    document.getElementById("name").style.display = "block";

    animateConfetti();

    this.disabled = true; // Deaktiviere den Button nach dem ersten Klick
    this.style.backgroundColor = "gray"; // Ändere die Hintergrundfarbe auf Grau
    this.style.cursor = "not-allowed"; // Ändere den Mauszeiger zu "nicht erlaubt"
  });
};
