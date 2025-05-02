const canvas = document.getElementById("snowCanvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const snowflakes = [];
const pages = document.querySelectorAll(".page");

class Snowflake {
    constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.radius = Math.random() * 4 + 1;
        this.speed = Math.random() * 2 + 1;
        this.opacity = Math.random();
    }

    update() {
        this.y += this.speed;
        if (this.y > canvas.height) {
            this.y = 0;
            this.x = Math.random() * canvas.width;
        }
    }

    draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${this.opacity})`;
        ctx.fill();
    }
}

function createSnowflakes() {
    for (let i = 0; i < 100; i++) {
        snowflakes.push(new Snowflake());
    }
}

function animateSnowflakes() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    snowflakes.forEach((snowflake) => {
        snowflake.update();
        snowflake.draw();
    });
    requestAnimationFrame(animateSnowflakes);
}

function showPage(pageNumber) {
    pages.forEach((page, index) => {
        page.classList.toggle("hidden", index !== pageNumber - 1);
    });
}

window.addEventListener("resize", () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});

createSnowflakes();
animateSnowflakes();
showPage(1);
