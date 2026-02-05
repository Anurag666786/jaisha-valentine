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

/* 🔐 MOBILE AUDIO UNLOCK */
const bgMusic = document.getElementById("bgMusic");
const tapLayer = document.getElementById("tapToStart");

function startMusic() {
    bgMusic.loop = true;
    bgMusic.play().then(() => {
        tapLayer.remove();
    }).catch(() => {});
}

tapLayer.addEventListener("click", startMusic);
tapLayer.addEventListener("touchstart", startMusic, { passive: true });

function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
}

/* FLOATING HEARTS */
const heartsContainer = document.getElementById("hearts");

setInterval(() => {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerText = "💖";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = Math.random() * 20 + 15 + "px";
    heartsContainer.appendChild(heart);

    setTimeout(() => heart.remove(), 6000);
}, 300);

function revealSecret() {
    document.getElementById("secretMsg").style.display = "block";
}

/* COUNTDOWN */
const valentineDate = new Date("February 14, 2026 00:00:00").getTime();

setInterval(() => {
    const now = new Date().getTime();
    const distance = valentineDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("timer").innerHTML =
        `${days}d ${hours}h ${minutes}m ${seconds}s`;
}, 1000);

/* NO BUTTON ESCAPE */
const noBtn = document.getElementById("noBtn");

function moveNoButton() {
    const x = Math.random() * (window.innerWidth - 120);
    const y = Math.random() * (window.innerHeight - 60);
    noBtn.style.left = x + "px";
    noBtn.style.top = y + "px";
}

noBtn.addEventListener("mouseover", moveNoButton);
noBtn.addEventListener("touchstart", moveNoButton);

/* ❤️ YES CLICKED — MUSIC NEVER STOPS */
function yesClicked() {

    // Heart burst
    for (let i = 0; i < 50; i++) {
        const heart = document.createElement("div");
        heart.innerText = "💖";
        heart.style.position = "fixed";
        heart.style.left = "50%";
        heart.style.top = "50%";
        heart.style.fontSize = "24px";
        heart.style.zIndex = "9999";
        document.body.appendChild(heart);

        const angle = Math.random() * 2 * Math.PI;
        const distance = Math.random() * 200;

        heart.animate([
            { transform: "translate(0,0)", opacity: 1 },
            {
                transform: `translate(${Math.cos(angle) * distance}px, ${Math.sin(angle) * distance}px)`,
                opacity: 0
            }
        ], { duration: 1500 });

        setTimeout(() => heart.remove(), 1500);
    }

    // Overlay screen (NO DOM WIPE)
    setTimeout(() => {
        const overlay = document.createElement("div");
        overlay.style.position = "fixed";
        overlay.style.inset = "0";
        overlay.style.zIndex = "9998";
        overlay.style.display = "flex";
        overlay.style.flexDirection = "column";
        overlay.style.justifyContent = "center";
        overlay.style.alignItems = "center";
        overlay.style.background = "linear-gradient(to bottom, #ffb3d9, #fff)";
        overlay.style.fontFamily = "'Pacifico', cursive";
        overlay.style.color = "#b30059";
        overlay.style.textAlign = "center";
        overlay.style.padding = "20px";

        overlay.innerHTML = `
            <h1>Puupu Said YES 💖</h1>
            <p style="font-size:1.4rem;margin-top:20px;">
                Happy Valentine’s Day, Jaisha 🌹<br>
                I choose you. Always.
            </p>
        `;

        document.body.appendChild(overlay);
    }, 1600);
}
