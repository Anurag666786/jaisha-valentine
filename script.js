/* 🎵 BACKGROUND MUSIC (Mobile + Desktop Safe) */
const bgMusic = document.getElementById("bgMusic");
let musicStarted = false;

function startMusic() {
    if (!musicStarted) {
        bgMusic.play().catch(() => {});
        musicStarted = true;
    }
}

/* TYPEWRITER */
const text = "From the moment you came into my life, everything changed 💕";
let index = 0;

function typeEffect() {
    if (index < text.length) {
        document.getElementById("typeText").innerHTML += text.charAt(index);
        index++;
        setTimeout(typeEffect, 70);
    }
}
typeEffect();

/* SMOOTH SCROLL */
function scrollToSection(id) {
    startMusic();
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
}

/* FLOATING HEARTS (Mobile optimized) */
const heartsContainer = document.getElementById("hearts");

setInterval(() => {
    if (window.innerWidth < 768 && Math.random() > 0.6) return;

    const heart = document.createElement("div");
    heart.className = "heart";
    heart.innerText = "💖";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = Math.random() * 14 + 14 + "px";
    heartsContainer.appendChild(heart);

    setTimeout(() => heart.remove(), 6000);
}, 400);

/* SECRET MESSAGE */
function revealSecret() {
    document.getElementById("secretMsg").style.display = "block";
}

/* COUNTDOWN */
const valentineDate = new Date("February 14, 2026 00:00:00").getTime();

setInterval(() => {
    const now = Date.now();
    const diff = valentineDate - now;

    const d = Math.floor(diff / (1000 * 60 * 60 * 24));
    const h = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const m = Math.floor((diff / (1000 * 60)) % 60);
    const s = Math.floor((diff / 1000) % 60);

    document.getElementById("timer").innerText =
        `${d}d ${h}h ${m}m ${s}s`;
}, 1000);

/* NO BUTTON RUN (Touch + Mouse Safe) */
const noBtn = document.getElementById("noBtn");

function moveNoButton() {
    const maxX = window.innerWidth - noBtn.offsetWidth - 20;
    const maxY = window.innerHeight - noBtn.offsetHeight - 20;

    noBtn.style.left = Math.random() * maxX + "px";
    noBtn.style.top = Math.random() * maxY + "px";
}

noBtn.addEventListener("mouseover", moveNoButton);
noBtn.addEventListener("touchstart", moveNoButton);

/* YES CLICK EFFECT */
function yesClicked() {
    startMusic();

    for (let i = 0; i < 40; i++) {
        const heart = document.createElement("div");
        heart.innerText = "💖";
        heart.style.position = "fixed";
        heart.style.left = "50%";
        heart.style.top = "50%";
        heart.style.fontSize = "22px";
        document.body.appendChild(heart);

        const angle = Math.random() * Math.PI * 2;
        const dist = Math.random() * 180;

        heart.animate([
            { transform: "translate(0,0)", opacity: 1 },
            { transform: `translate(${Math.cos(angle)*dist}px, ${Math.sin(angle)*dist}px)`, opacity: 0 }
        ], { duration: 1200 });

        setTimeout(() => heart.remove(), 1200);
    }

    setTimeout(() => {
        document.body.innerHTML = `
        <div class="final">
            <h1>Puupu Said YES 💖</h1>
            <p>Happy Valentine’s Day Jaisha 🌹<br>I choose you. Always.</p>
        </div>`;
    }, 1300);
}
