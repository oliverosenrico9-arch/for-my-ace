function openLetter() {
    document.getElementById("letter").scrollIntoView({
        behavior: "smooth"
    });
}

function showSurprise() {
    const box = document.getElementById("surprise");
    box.classList.add("show");

    for (let i = 0; i < 35; i++) {
        createHeart();
    }

    setTimeout(() => {
        box.scrollIntoView({ behavior: "smooth", block: "center" });
    }, 100);
}

function createHeart() {
    const heart = document.createElement("div");
    heart.className = "bg-heart";
    heart.textContent = Math.random() > .5 ? "💙" : "♡";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = (14 + Math.random() * 24) + "px";
    heart.style.animationDuration = (4 + Math.random() * 4) + "s";

    document.body.appendChild(heart);

    setTimeout(() => heart.remove(), 8500);
}

setInterval(createHeart, 1600);

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("visible");
        }
    });
}, { threshold: 0.12 });

document.querySelectorAll(".reveal").forEach(section => {
    observer.observe(section);
});
