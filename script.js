/* =========================
   TYPEWRITER EFFECT
========================= */
const text = "From the moment you came into my life, everything changed 💕";
let index = 0;
const typeTarget = document.getElementById("typeText");

function typeEffect() {
    if (index < text.length) {
        typeTarget.innerHTML += text.charAt(index);
        index++;
        setTimeout(typeEffect, 70);
    }
}
typeEffect();

/* =========================
   SMOOTH SCROLL
========================= */
function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
}

/* =========================
   SECRET MESSAGE
========================= */
function revealSecret() {
    document.getElementById("secretMsg").classList.remove("hidden");
}

/* =========================
   COUNTDOWN (SAFE)
========================= */
const timer = document.getElementById("timer");
const valentineDate = new Date("February 14, 2026 00:00:00").getTime();

setInterval(() => {
    const now = new Date().getTime();
    let distance = valentineDate - now;

    if (distance < 0) {
        timer.innerHTML = "Happy Valentine’s Day 💖";
        return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((distance / (1000 * 60)) % 60);
    const seconds = Math.floor((distance / 1000) % 60);

    timer.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
}, 1000);

/* =========================
   NO BUTTON RUN AWAY 😈
========================= */
const noBtn = document.getElementById("noBtn");

function moveNoButton() {
    const x = Math.random() * (window.innerWidth - 140);
    const y = Math.random() * (window.innerHeight - 80);
    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;
}

noBtn.addEventListener("mouseover", moveNoButton);
noBtn.addEventListener("touchstart", moveNoButton);

/* =========================
   YES CLICK – MAGIC 💖
========================= */
const yesBtn = document.getElementById("yesBtn");
const music = document.getElementById("bgMusic");
const heartsContainer = document.getElementById("hearts");

yesBtn.addEventListener("click", () => {
    fadeInMusic();
    startFloatingHearts();
    heartFirework();
});

/* =========================
   MUSIC FADE IN 🎵
========================= */
function fadeInMusic() {
    music.volume = 0;
    music.play().catch(() => {});
    let vol = 0;

    const fade = setInterval(() => {
        if (vol < 1) {
            vol += 0.05;
            music.volume = vol;
        } else {
            clearInterval(fade);
        }
    }, 200);
}

/* =========================
   FLOATING HEARTS ❤️
========================= */
function startFloatingHearts() {
    setInterval(() => {
        const heart = document.createElement("div");
        heart.className = "heart";
        heart.innerText = ["❤️","💖","💕","💘"][Math.floor(Math.random() * 4)];
        heart.style.left = Math.random() * 100 + "vw";
        heart.style.fontSize = Math.random() * 20 + 18 + "px";
        heartsContainer.appendChild(heart);

        setTimeout(() => heart.remove(), 6000);
    }, 250);
}

/* =========================
   HEART FIREWORK 💥❤️
========================= */
function heartFirework() {
    for (let i = 0; i < 60; i++) {
        const heart = document.createElement("div");
        heart.innerText = "💖";
        heart.style.position = "fixed";
        heart.style.left = "50%";
        heart.style.top = "50%";
        heart.style.fontSize = "26px";
        heart.style.zIndex = "5";
        document.body.appendChild(heart);

        const angle = Math.random() * Math.PI * 2;
        const distance = Math.random() * 260;

        heart.animate([
            { transform: "translate(-50%, -50%) scale(1)", opacity: 1 },
            {
                transform: `translate(${Math.cos(angle) * distance}px, ${Math.sin(angle) * distance}px) scale(1.6)`,
                opacity: 0
            }
        ], { duration: 1600, easing: "ease-out" });

        setTimeout(() => heart.remove(), 1600);
    }
}
