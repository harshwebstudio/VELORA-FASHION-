// ================= MOBILE MENU =================

const menuBtn = document.querySelector(".menu-btn");
const navbar = document.querySelector(".navbar");

if (menuBtn && navbar) {
    menuBtn.addEventListener("click", () => {
        navbar.classList.toggle("active");

        const icon = menuBtn.querySelector("i");

        if (navbar.classList.contains("active")) {
            icon.classList.remove("fa-bars");
            icon.classList.add("fa-xmark");
        } else {
            icon.classList.remove("fa-xmark");
            icon.classList.add("fa-bars");
        }
    });
}


// ================= CLOSE MOBILE MENU =================

document.querySelectorAll(".navbar a").forEach(link => {
    link.addEventListener("click", () => {

        navbar.classList.remove("active");

        const icon = menuBtn.querySelector("i");

        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");
    });
});


// ================= SCROLL REVEAL =================

const revealElements = document.querySelectorAll(
    ".section-heading, .collection-card, .about-content, .contact-btn"
);

const revealObserver = new IntersectionObserver(
    (entries, observer) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("revealed");

                observer.unobserve(entry.target);
            }

        });

    },
    {
        threshold: 0.12
    }
);

revealElements.forEach(element => {
    element.classList.add("reveal");
    revealObserver.observe(element);
});


// ================= HEADER SCROLL EFFECT =================

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 40) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }

});


// ================= CURRENT YEAR =================

const currentYear = document.querySelector(".footer-bottom p");

if (currentYear) {

    currentYear.innerHTML =
        `© ${new Date().getFullYear()} VELORA FASHION. All rights reserved.`;
}


// ================= WHATSAPP PRODUCT MESSAGE =================

function openWhatsApp(productName = "your collection") {

    const phone = "919987475783";

    const message =
        `Hi VELORA FASHION, I am interested in ${productName}. Please share more details.`;

    const whatsappURL =
        `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

    window.open(whatsappURL, "_blank");
     }/* ================= JS ANIMATIONS ================= */

.reveal {
    opacity: 0;
    transform: translateY(30px);
    transition: opacity 0.7s ease, transform 0.7s ease;
}

.revealed {
    opacity: 1;
    transform: translateY(0);
}

.header.scrolled {
    background: rgba(5, 5, 5, 0.96);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.25);
             }
// ================= GALLERY LIGHTBOX =================

const galleryLightbox =
    document.getElementById("galleryLightbox");

const lightboxImage =
    document.getElementById("lightboxImage");


function openGallery(imagePath) {

    if (!galleryLightbox || !lightboxImage) {
        return;
    }

    lightboxImage.src = imagePath;

    galleryLightbox.classList.add("active");

    document.body.style.overflow = "hidden";
}


function closeGallery() {

    if (!galleryLightbox) {
        return;
    }

    galleryLightbox.classList.remove("active");

    document.body.style.overflow = "";
}


// Close when clicking outside the image

if (galleryLightbox) {

    galleryLightbox.addEventListener("click", (event) => {

        if (event.target === galleryLightbox) {
            closeGallery();
        }

    });

}


// Close with Escape key

document.addEventListener("keydown", (event) => {

    if (event.key === "Escape") {
        closeGallery();
    }

});
