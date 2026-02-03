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

/* MUSIC – USER INTERACTION UNLOCK */
const bgMusic = document.getElementById("bgMusic");
function startMusic() {
    bgMusic.play().catch(() => {});
    document.removeEventListener("click", startMusic);
    document.removeEventListener("touchstart", startMusic);
}
document.addEventListener("click", startMusic);
document.addEventListener("touchstart", startMusic);

/* SCROLL */
function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
}

/* FLOATING HEARTS */
const heartsContainer = document.getElementById("hearts");
setInterval(() => {
    const heart = document.createElement("div");
    heart.className = "heart";
    heart.innerText = "💖";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = Math.random() * 20 + 15 + "px";
    heartsContainer.appendChild(heart);
    setTimeout(() => heart.remove(), 6000);
}, 300);

/* SECRET */
function revealSecret() {
    document.getElementById("secretMsg").style.display = "block";
}

/* COUNTDOWN */
const valentineDate = new Date("February 14, 2026 00:00:00").getTime();
setInterval(() => {
    const now = new Date().getTime();
    const d = valentineDate - now;
    document.getElementById("timer").innerHTML =
        `${Math.floor(d/86400000)}d ${Math.floor(d%86400000/3600000)}h ${Math.floor(d%3600000/60000)}m ${Math.floor(d%60000/1000)}s`;
}, 1000);

/* NO BUTTON – MOBILE SAFE */
const noBtn = document.getElementById("noBtn");
noBtn.addEventListener("click", () => {
    const vw = document.documentElement.clientWidth;
    const vh = document.documentElement.clientHeight;

    const bw = noBtn.offsetWidth;
    const bh = noBtn.offsetHeight;

    const x = Math.random() * (vw - bw - 20);
    const y = Math.random() * (vh - bh - 20);

    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;
});

/* YES */
function yesClicked() {
    document.body.innerHTML = `
        <div style="height:100vh;display:flex;flex-direction:column;justify-content:center;align-items:center;
        background:linear-gradient(to bottom,#ffb3d9,#fff);font-family:'Pacifico',cursive;color:#b30059;text-align:center;">
            <h1>Puupu Said YES 💖</h1>
            <p style="font-size:1.6rem;margin-top:20px;">Happy Valentine’s Day, Jaisha 🌹<br>I choose you. Always.</p>
        </div>`;
}
