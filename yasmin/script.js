// ================= BANNER ROTATIVO AUTOMÁTICO =================

let slides = document.querySelectorAll(".slide");
let index = 0;

function nextSlide() {
    slides[index].classList.remove("active");
    index = (index + 1) % slides.length;
    slides[index].classList.add("active");
}

// Troca automática a cada 3 segundos
setInterval(nextSlide, 3000);