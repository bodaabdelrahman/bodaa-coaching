// =========================
// Mobile Menu
// =========================

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");

    if (navLinks.classList.contains("active")) {
        menuBtn.innerHTML = '<i class="fa-solid fa-xmark"></i>';
    } else {
        menuBtn.innerHTML = '<i class="fa-solid fa-bars"></i>';
    }
});

// =========================
// Sticky Navbar
// =========================

window.addEventListener("scroll", () => {

    const header = document.querySelector("header");

    if (window.scrollY > 80) {
        header.classList.add("active");
    } else {
        header.classList.remove("active");
    }

});

// =========================
// FAQ Accordion
// =========================

const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach(item => {

    const question = item.querySelector(".faq-question");

    question.addEventListener("click", () => {

        faqItems.forEach(f => {
            if (f !== item) {
                f.classList.remove("active");
            }
        });

        item.classList.toggle("active");

    });

});

// =========================
// Scroll Animation
// =========================

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

}, {
    threshold: .2
});

document.querySelectorAll("section,.card,.feature,.testimonial,.stat")
.forEach(el => {

    el.classList.add("hidden");

    observer.observe(el);

});

// =========================
// Counter Animation
// =========================

const counters = document.querySelectorAll(".stat h2");

const speed = 200;

counters.forEach(counter => {

    const update = () => {

        const target = +counter.dataset.target;

        const count = +counter.innerText;

        const inc = target / speed;

        if (count < target) {

            counter.innerText = Math.ceil(count + inc);

            setTimeout(update, 10);

        } else {

            counter.innerText = target + "+";

        }

    }

    update();

});

// =========================
// Back To Top Button
// =========================

const topBtn = document.createElement("div");

topBtn.innerHTML = '<i class="fa-solid fa-arrow-up"></i>';

topBtn.className = "top-btn";

document.body.appendChild(topBtn);

window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {

        topBtn.classList.add("show");

    } else {

        topBtn.classList.remove("show");

    }

});

topBtn.onclick = () => {

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

};

// =========================
// Active Navbar Links
// =========================

const sections = document.querySelectorAll("section");
const links = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const top = section.offsetTop - 150;

        if (pageYOffset >= top) {

            current = section.getAttribute("id");

        }

    });

    links.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});