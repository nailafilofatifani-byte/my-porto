/**
 * Portofolio Web Script - Nayla Vilova Tivani
 * Siswa Rekayasa Perangkat Lunak (RPL) - SMK Telkom Lampung
 */

document.addEventListener('DOMContentLoaded', () => {
    // 1. Data Modal Proyek
    const projectData = {
        siakad: {
            title: "SIAKAD & Presensi Siswa SMK Telkom Lampung",
            badge: "Web Application • PHP & MySQL",
            description: "Sistem Informasi Akademik dan Presensi Siswa yang dirancang khusus untuk mempermudah tata kelola kehadiran siswa di SMK Telkom Lampung. Proyek ini memangkas pencatatan manual dan meminimalisir kesalahan rekap absensi.",
            features: [
                "Pencatatan presensi harian siswa berbasis web",
                "Dashboard rekapitulasi data kehadiran untuk guru dan wali kelas",
                "Pencatatan dan kalkulasi nilai tugas & ujian kejuruan RPL",
                "Cetak laporan otomatis ke format PDF / Excel",
                "Autentikasi role multi-user (Admin, Guru, Siswa)"
            ],
            techStack: ["HTML5", "CSS3 / Bootstrap", "JavaScript ES6", "PHP OOP", "MySQL"]
        },
        library: {
            title: "Telkom Smart Library (Perpustakaan Digital)",
            badge: "Web Application • Modern JavaScript",
            description: "Platform katalog dan peminjaman buku digital bagi siswa SMK Telkom Lampung. Menyediakan kemudahan mencari referensi buku pelajaran kejuruan, modul kurikulum merdeka, serta pelacakan sirkulasi buku perpustakaan.",
            features: [
                "Pencarian buku dengan filter kategori (Kejuruan RPL, Umum, Fiksi)",
                "Fitur peminjaman buku online dan pengembalian berbasis tenggat waktu",
                "Perhitungan denda keterlambatan secara otomatis",
                "Penyimpanan riwayat baca & daftar keinginan (Wishlist) siswa",
                "Antarmuka responsif dan modern bertema Sea Blue"
            ],
            techStack: ["HTML5", "CSS Grid & Flexbox", "JavaScript (ES6+)", "REST API / LocalStorage"]
        },
        rplsite: {
            title: "Portal Profil Jurusan RPL SMK Telkom Lampung",
            badge: "Landing Page • UI/UX Showcase",
            description: "Halaman web representatif jurusan Rekayasa Perangkat Lunak SMK Telkom Lampung yang dirancang untuk memperkenalkan potensi jurusan, karya inovasi siswa, dan kurikulum vokasi berbasis industri.",
            features: [
                "Showcase kompetensi keahlian dan kurikulum software engineering",
                "Galeri portofolio karya aplikasi unggulan siswa RPL",
                "Informasi profil tenaga pengajar kejuruan dan mitra industri",
                "Formulir registrasi minat bakat & mini workshop internal",
                "Desain antarmuka responsif ramah mobile dengan efek animasi halus"
            ],
            techStack: ["HTML5 Semantik", "Sea Blue Modern CSS", "Vanilla JavaScript", "CSS Animations"]
        },
        canteen: {
            title: "Smart Canteen (E-Kantin Siswa SMK)",
            badge: "Web Application • E-Commerce Mini",
            description: "Aplikasi web pemesanan makanan kantin sekolah secara digital yang bertujuan mengurai antrean panjang saat jam istirahat di lingkungan sekolah SMK Telkom Lampung.",
            features: [
                "Daftar menu makanan dan minuman kantin dengan gambar & harga real-time",
                "Keranjang belanja interaktif (tambah, kurang, hapus item)",
                "Kalkulasi total harga dan konfirmasi pesanan instan",
                "Nomor antrean digital yang muncul setelah pesanan diselesaikan",
                "Tampilan ramah smartphone yang ringan dan cepat dimuat"
            ],
            techStack: ["HTML5", "CSS3 Glassmorphism", "JavaScript DOM & State", "LocalStorage"]
        }
    };

    // 2. Typewriter Effect pada Hero Section
    const typingTextElement = document.getElementById('typingText');
    const roles = [
        "Web Developer",
        "Siswa RPL SMK Telkom Lampung",
        "Frontend Enthusiast",
        "Junior Programmer",
        "Problem Solver"
    ];
    let roleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    const typingSpeed = 90;
    const deletingSpeed = 45;
    const pauseEnd = 1600;

    function typeEffect() {
        if (!typingTextElement) return;

        const currentRole = roles[roleIndex];
        if (isDeleting) {
            typingTextElement.textContent = currentRole.substring(0, charIndex - 1);
            charIndex--;
        } else {
            typingTextElement.textContent = currentRole.substring(0, charIndex + 1);
            charIndex++;
        }

        if (!isDeleting && charIndex === currentRole.length) {
            isDeleting = true;
            setTimeout(typeEffect, pauseEnd);
            return;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            roleIndex = (roleIndex + 1) % roles.length;
            setTimeout(typeEffect, 350);
            return;
        }

        const speed = isDeleting ? deletingSpeed : typingSpeed;
        setTimeout(typeEffect, speed);
    }

    typeEffect();

    // 3. Navbar Sticky Effect on Scroll
    const header = document.getElementById('header');
    const scrollTopBtn = document.getElementById('scrollTopBtn');

    window.addEventListener('scroll', () => {
        const scrollPos = window.scrollY;

        if (scrollPos > 40) {
            header?.classList.add('scrolled');
        } else {
            header?.classList.remove('scrolled');
        }

        // Scroll-to-top button visibility
        if (scrollPos > 350) {
            scrollTopBtn?.classList.add('visible');
        } else {
            scrollTopBtn?.classList.remove('visible');
        }

        // Active Nav Link Spy
        highlightNavOnScroll();
    });

    // 4. Mobile Menu Navigation Toggle
    const menuToggle = document.getElementById('menuToggle');
    const navMenu = document.getElementById('navMenu');
    const navLinks = document.querySelectorAll('.nav-link');

    menuToggle?.addEventListener('click', (e) => {
        e.stopPropagation();
        navMenu?.classList.toggle('open');
        const icon = menuToggle.querySelector('i');
        if (icon) {
            if (navMenu?.classList.contains('open')) {
                icon.className = 'fa-solid fa-xmark';
            } else {
                icon.className = 'fa-solid fa-bars';
            }
        }
    });

    // Close menu when clicking outside or clicking any nav link
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu?.classList.remove('open');
            const icon = menuToggle?.querySelector('i');
            if (icon) icon.className = 'fa-solid fa-bars';
        });
    });

    document.addEventListener('click', (e) => {
        if (navMenu?.classList.contains('open') && !navMenu.contains(e.target) && !menuToggle?.contains(e.target)) {
            navMenu.classList.remove('open');
            const icon = menuToggle?.querySelector('i');
            if (icon) icon.className = 'fa-solid fa-bars';
        }
    });

    // 5. Scroll-to-Top Action
    scrollTopBtn?.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // 6. Active Nav Link on Scroll (Scroll Spy)
    const sections = document.querySelectorAll('section[id]');
    function highlightNavOnScroll() {
        const scrollY = window.pageYOffset;

        sections.forEach(current => {
            const sectionHeight = current.offsetHeight;
            const sectionTop = current.offsetTop - 120;
            const sectionId = current.getAttribute('id');
            const correspondingLink = document.querySelector(`.nav-link[href*="${sectionId}"]`);

            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                navLinks.forEach(link => link.classList.remove('active'));
                correspondingLink?.classList.add('active');
            }
        });
    }

    // 7. Project Category Filter
    const filterBtns = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const filterValue = btn.getAttribute('data-filter');

            projectCards.forEach(card => {
                const categories = card.getAttribute('data-category') || '';
                if (filterValue === 'all' || categories.includes(filterValue)) {
                    card.style.display = 'flex';
                    setTimeout(() => {
                        card.style.opacity = '1';
                        card.style.transform = 'translateY(0)';
                    }, 10);
                } else {
                    card.style.opacity = '0';
                    card.style.transform = 'translateY(15px)';
                    setTimeout(() => {
                        card.style.display = 'none';
                    }, 200);
                }
            });
        });
    });

    // 8. Project Detail Modal Handling
    const modal = document.getElementById('projectModal');
    const modalClose = document.getElementById('modalClose');
    const modalBody = document.getElementById('modalBody');

    window.openProjectModal = function (projectId) {
        const data = projectData[projectId];
        if (!data || !modal || !modalBody) return;

        modalBody.innerHTML = `
      <div class="modal-content-inner">
        <span class="modal-badge">${data.badge}</span>
        <h3>${data.title}</h3>
        <p>${data.description}</p>

        <div class="modal-features">
          <h4>Fitur Utama:</h4>
          <ul>
            ${data.features.map(f => `<li>${f}</li>`).join('')}
          </ul>
        </div>

        <div class="project-tech-tags" style="margin-top: 15px;">
          ${data.techStack.map(t => `<span>${t}</span>`).join('')}
        </div>

        <div style="margin-top: 24px; display: flex; gap: 12px; flex-wrap: wrap;">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-sm">
            <i class="fa-brands fa-github"></i> Kunjungi Repository
          </a>
          <button class="btn btn-outline btn-sm" onclick="closeProjectModal()">
            Tutup Pratinjau
          </button>
        </div>
      </div>
    `;

        modal.classList.add('active');
        modal.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden';
    };

    window.closeProjectModal = function () {
        if (!modal) return;
        modal.classList.remove('active');
        modal.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';
    };

    modalClose?.addEventListener('click', window.closeProjectModal);

    modal?.addEventListener('click', (e) => {
        if (e.target === modal) {
            window.closeProjectModal();
        }
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal?.classList.contains('active')) {
            window.closeProjectModal();
        }
    });

    // 9. Contact Form Validation & Toast Notification
    const contactForm = document.getElementById('contactForm');
    const toast = document.getElementById('toast');
    const toastMessage = document.getElementById('toastMessage');

    function showToast(message) {
        if (!toast) return;
        if (toastMessage) toastMessage.textContent = message;
        toast.classList.add('show');

        setTimeout(() => {
            toast.classList.remove('show');
        }, 4000);
    }

    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    }

    contactForm?.addEventListener('submit', (e) => {
        e.preventDefault();

        const nameInput = document.getElementById('name');
        const emailInput = document.getElementById('email');
        const subjectInput = document.getElementById('subject');
        const messageInput = document.getElementById('message');

        let isValid = true;

        // Reset error styles
        document.querySelectorAll('.form-group').forEach(group => group.classList.remove('has-error'));

        // Validate Name
        if (!nameInput.value.trim()) {
            nameInput.closest('.form-group')?.classList.add('has-error');
            isValid = false;
        }

        // Validate Email
        if (!validateEmail(emailInput.value.trim())) {
            emailInput.closest('.form-group')?.classList.add('has-error');
            isValid = false;
        }

        // Validate Subject
        if (!subjectInput.value.trim()) {
            subjectInput.closest('.form-group')?.classList.add('has-error');
            isValid = false;
        }

        // Validate Message (min 10 chars)
        if (messageInput.value.trim().length < 10) {
            messageInput.closest('.form-group')?.classList.add('has-error');
            isValid = false;
        }

        if (isValid) {
            const senderName = nameInput.value.trim();
            showToast(`Terima kasih ${senderName}! Pesan Anda berhasil dikirim.`);
            contactForm.reset();
        }
    });

    // =============================================
    // Animated Stat Counters on Profile Card
    // =============================================
    function animateCounter(el) {
        const target = parseInt(el.getAttribute('data-target'), 10);
        const duration = 1400;
        const startTime = performance.now();
        function step(now) {
            const progress = Math.min((now - startTime) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
            el.textContent = Math.round(eased * target);
            if (progress < 1) requestAnimationFrame(step);
            else el.textContent = target;
        }
        requestAnimationFrame(step);
    }

    const statNums = document.querySelectorAll('.pstat-num[data-target]');
    if (statNums.length) {
        const counterObs = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateCounter(entry.target);
                    counterObs.unobserve(entry.target);
                }
            });
        }, { threshold: 0.6 });
        statNums.forEach(el => counterObs.observe(el));
    }

    // =============================================
    // Profile Card 3D Tilt on Mouse Move
    // =============================================
    const cardV2 = document.querySelector('.profile-card-v2');
    if (cardV2) {
        cardV2.addEventListener('mousemove', (e) => {
            const r = cardV2.getBoundingClientRect();
            const x = e.clientX - r.left;
            const y = e.clientY - r.top;
            const rotX = ((y - r.height / 2) / r.height) * -10;
            const rotY = ((x - r.width / 2) / r.width) * 10;
            cardV2.style.transform =
                `perspective(900px) rotateX(${rotX}deg) rotateY(${rotY}deg) translateY(-6px)`;
        });
        cardV2.addEventListener('mouseleave', () => {
            cardV2.style.transform = '';
        });
    }
});