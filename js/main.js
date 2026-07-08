lucide.createIcons();

const menuBtn = document.getElementById('menuBtn');
const mobileMenu = document.getElementById('mobileMenu');
const bar1 = document.getElementById('bar1');
const bar2 = document.getElementById('bar2');
const bar3 = document.getElementById('bar3');
let menuOpen = false;

menuBtn.addEventListener('click', () => {
  menuOpen = !menuOpen;
  mobileMenu.classList.toggle('open', menuOpen);
  document.body.style.overflow = menuOpen ? 'hidden' : '';

  if (menuOpen) {
    bar1.style.transform = 'rotate(45deg) translate(4px, 4px)';
    bar2.style.opacity = '0';
    bar3.style.transform = 'rotate(-45deg) translate(4px, -4px)';
    bar3.style.width = '1.5rem';
  } else {
    bar1.style.transform = '';
    bar2.style.opacity = '1';
    bar3.style.transform = '';
    bar3.style.width = '1rem';
  }
});

document.querySelectorAll('.mobile-link').forEach(link => {
  link.addEventListener('click', () => {
    menuOpen = false;
    mobileMenu.classList.remove('open');
    document.body.style.overflow = '';
    bar1.style.transform = '';
    bar2.style.opacity = '1';
    bar3.style.transform = '';
    bar3.style.width = '1rem';
  });
});

const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  if (window.scrollY > 80) {
    navbar.style.background = 'rgba(0,0,0,0.85)';
    navbar.style.backdropFilter = 'blur(12px)';
    navbar.style.borderBottom = '1px solid #262626';
  } else {
    navbar.style.background = 'transparent';
    navbar.style.backdropFilter = 'none';
    navbar.style.borderBottom = 'none';
  }
});

const revealElements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale');
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('active');
    }
  });
}, { threshold: 0.15, rootMargin: '0px 0px -50px 0px' });

revealElements.forEach(el => revealObserver.observe(el));

const skillBars = document.querySelectorAll('.skill-bar');
const skillObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const width = entry.target.getAttribute('data-width');
      entry.target.style.width = width;
    }
  });
}, { threshold: 0.5 });

skillBars.forEach(bar => skillObserver.observe(bar));

const contactForm = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage');

contactForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const btn = contactForm.querySelector('button[type="submit"]');
  btn.innerHTML = '<span class="inline-block w-4 h-4 border-2 border-black/30 border-t-black rounded-full animate-spin"></span> Mengirim...';
  btn.disabled = true;

  setTimeout(() => {
    btn.innerHTML = 'Kirim Pesan <i data-lucide="send" class="w-4 h-4"></i>';
    btn.disabled = false;
    lucide.createIcons();
    formMessage.classList.remove('hidden');
    formMessage.className = 'text-center text-sm font-medium py-3 rounded-[16px] bg-neon/10 text-neon border border-neon/20';
    formMessage.textContent = '✓ Pesan berhasil dikirim! Saya akan segera merespons.';
    contactForm.reset();

    setTimeout(() => {
      formMessage.classList.add('hidden');
    }, 5000);
  }, 2000);
});

const hero = document.getElementById('hero');
window.addEventListener('scroll', () => {
  const scrolled = window.scrollY;
  if (scrolled < window.innerHeight) {
    hero.style.transform = `translateY(${scrolled * 0.3}px)`;
    hero.style.opacity = 1 - (scrolled / window.innerHeight) * 0.8;
  }
});

const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('nav a[href^="#"]');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 200;
    if (scrollY >= sectionTop) {
      current = section.getAttribute('id');
    }
  });
  navLinks.forEach(link => {
    link.classList.remove('!text-neon');
    if (link.getAttribute('href') === `#${current}`) {
      link.classList.add('!text-neon');
    }
  });
});
tailwind.config = {
  theme: {
    extend: {
      fontFamily: {
        heading: ['Oswald', 'sans-serif'],
        body: ['Montserrat', 'sans-serif'],
      },
      colors: {
        neon: '#A6E93A',
      },
      borderRadius: {
        'custom': '24px',
        'btn': '30px',
      }
    }
  }
}

window.addEventListener('scroll', () => {
  const navContactBtn = document.getElementById('navContactBtn');
  const contactSection = document.getElementById('contact');
  
  if (navContactBtn && contactSection) {
    const rect = contactSection.getBoundingClientRect();
    
    if (rect.top <= 200) {
      navContactBtn.style.opacity = '0'; 
      navContactBtn.style.pointerEvents = 'none';
    } else {
      navContactBtn.style.opacity = '1';
      navContactBtn.style.pointerEvents = 'auto';
    }
  }
});
