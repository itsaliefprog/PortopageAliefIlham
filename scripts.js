document.addEventListener("DOMContentLoaded", () => {
    const observerOptions = {
        root: null,
        threshold: 0.1, // Elemen akan terlihat jika 10% muncul di layar
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            } else {
                entry.target.classList.remove("visible");
            }
        });
    }, observerOptions);

    // Pilih semua section yang ingin diberikan efek
    const sections = document.querySelectorAll("section");
    sections.forEach(section => {
        section.classList.add("hidden");
        observer.observe(section);
    });
});

// Efek Fade-In saat Scroll
window.addEventListener("scroll", () => {
    const elements = document.querySelectorAll(".fade-in");
    const viewportHeight = window.innerHeight;

    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        if (elementTop < viewportHeight - 100) {
            element.classList.add("visible");
        }
    });
});

// Tambahkan kelas 'fade-in' ke elemen yang ingin mendapatkan efek ini
document.querySelectorAll(".project-item, .contact-form, .contact, .about").forEach(el => {
    el.classList.add("fade-in");
});



// Smooth Scroll ke Anchor Link
document.querySelectorAll("a[href^='#']").forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        if (target) {
            target.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
        }
    });
});
