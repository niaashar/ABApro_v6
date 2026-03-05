const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav');
const header = document.querySelector('.header');

if (burger) {
    burger.addEventListener('click', () => {
        nav.classList.toggle('active');
        burger.classList.toggle('active');
    });
    document.querySelectorAll('.nav__link').forEach(link => {
        link.addEventListener('click', () => {
            nav.classList.remove('active');
            burger.classList.remove('active');
        });
    });
}

window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#' && href.length > 1) {
            const target = document.querySelector(href);
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        }
    });
});

document.querySelectorAll('.myth-card').forEach(card => {
    card.addEventListener('click', function() {
        this.classList.toggle('is-flipped');
    });
});

function toggleMyth(header) {
    const item = header.parentElement;
    const body = item.querySelector('.myth-item__body');
    const toggle = header.querySelector('.myth-item__toggle');
    if (!body) return;
    item.classList.toggle('active');
    if (item.classList.contains('active')) {
        body.style.maxHeight = body.scrollHeight + 'px';
        if (toggle) toggle.textContent = 'Скрыть правду ↑';
    } else {
        body.style.maxHeight = '0';
        if (toggle) toggle.textContent = 'Показать правду ↓';
    }
}
window.toggleMyth = toggleMyth;

const forms = {
    bookingForm: document.getElementById('bookingForm'),
    contactForm: document.getElementById('contactForm')
};

if (forms.bookingForm) {
    forms.bookingForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const successDiv = document.getElementById('formSuccess');
        if (successDiv) {
            this.style.display = 'none';
            successDiv.style.display = 'block';
        }
    });
}

if (forms.contactForm) {
    forms.contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Спасибо за ваше сообщение! 🧩');
        this.reset();
    });
}

document.querySelectorAll('.dashboard-nav__link').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelectorAll('.dashboard-nav__link').forEach(l => l.classList.remove('active'));
        this.classList.add('active');
        const target = this.getAttribute('href');
        const section = document.querySelector(target);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

document.addEventListener('DOMContentLoaded', () => {
    console.log('ABA_pro initialized 🧩');
    const urlParams = new URLSearchParams(window.location.search);
    const serviceParam = urlParams.get('service');
    if (serviceParam) {
        const radio = document.querySelector(`input[name="service"][value="${serviceParam}"]`);
        if (radio) radio.checked = true;
    }
    document.body.classList.add('loaded');
});

window.ABAPro = { toggleMyth };