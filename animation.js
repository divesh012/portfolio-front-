/* LOADER */
window.addEventListener("load", () => {
  setTimeout(() => {
    document.getElementById("loader").style.display = "none";
  }, 2500);
});

/* THEME */
const themeBtn = document.getElementById("themeButton");
const body = document.body;

themeBtn.onclick = () => {
  body.classList.toggle("light");
};

/* TEXT ANIMATION */
const text = "Hello I am Divesh Kuthe";
const container = document.getElementById("text-container");

text.split(" ").forEach((word, i) => {
  const span = document.createElement("span");
  span.textContent = word;
  span.className = "word";
  span.style.animationDelay = `${i * 0.4}s`;
  container.appendChild(span);
});

/* CANVAS NODE */
const canvas = document.getElementById("nodeCanvas");
const ctx = canvas.getContext("2d");

canvas.width = innerWidth;
canvas.height = innerHeight;

let nodes = Array.from({ length: 100 }, () => ({
  x: Math.random() * canvas.width,
  y: Math.random() * canvas.height,
  dx: (Math.random() - 0.5),
  dy: (Math.random() - 0.5)
}));

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.strokeStyle = "green";

  nodes.forEach((n, i) => {
    n.x += n.dx;
    n.y += n.dy;

    if (n.x < 0 || n.x > canvas.width) n.dx *= -1;
    if (n.y < 0 || n.y > canvas.height) n.dy *= -1;

    for (let j = i + 1; j < nodes.length; j++) {
      let dx = n.x - nodes[j].x;
      let dy = n.y - nodes[j].y;
      let dist = Math.sqrt(dx * dx + dy * dy);

      if (dist < 100) {
        ctx.beginPath();
        ctx.moveTo(n.x, n.y);
        ctx.lineTo(nodes[j].x, nodes[j].y);
        ctx.stroke();
      }
    }
  });

  requestAnimationFrame(animate);
}

animate();
