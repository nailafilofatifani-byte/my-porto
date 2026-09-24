/**
 * Portofolio Nayla Vilova Tivani — Web Developer
 * Siswi Rekayasa Perangkat Lunak (RPL) - SMK Telkom Lampung
 * Inspirasi Desain & Arsitektur: adityadwiputra.my.id (Enhanced with 3D Tilt & Cyber Glow)
 * File: script.js (Pure Vanilla JavaScript ES6+)
 */

document.addEventListener('DOMContentLoaded', () => {
    'use strict';

    // =========================================================================
    // 1. DATA DETAIL SISTEM PROYEK (100% Data Siswa RPL SMK Telkom Lampung)
    // =========================================================================
    const projectDatabase = {
        siaspirasi: {
            tag: 'SISTEM SEKOLAH · WEB APPLICATION',
            title: 'SiAspirasi Moklet — Platform Pengaduan & Aspirasi Siswa',
            org: 'SMK Telkom Lampung · Lingkungan Kesiswaan & Bimbingan Konseling (2025/2026)',
            description: 'SiAspirasi Moklet adalah platform pelaporan pengaduan dan aspirasi warga sekolah SMK Telkom Lampung yang dirancang secara transparan. Sistem ini menyelesaikan permasalahan pelaporan manual atau pesan terselip di grup obrolan dengan menyediakan formulir terstruktur, kode unik pelacakan tiket, serta pengelompokan penanganan berdasarkan bidang kesiswaan.',
            features: [
                'Formulir pengaduan dinamis dengan validasi input komprehensif (Akademik, Fasilitas Lab Komputer, Ekstrakurikuler, Kebersihan Lingkungan Sekolah).',
                'Sistem Pelacakan Tiket (Ticket Tracking): Siswa dapat memasukkan nomor tiket untuk memantau status tindak lanjut (Menunggu Konfirmasi, Sedang Ditinjau Tim Sekolah, Selesai).',
                'Penyimpanan Lokal Persisten: Mengimplementasikan Web LocalStorage API untuk menyimpan riwayat pelaporan secara aman pada peramban.',
                'Dashboard Monitoring Siswa: Tampilan rekapitulasi jumlah aspirasi yang masuk dan telah diselesaikan secara transparan.',
                'Antarmuka Responsif & Cepat: Dirancang dengan HTML5 semantik dan CSS3 modern tanpa membebani kuota data siswa saat diakses via ponsel.'
            ],
            role: '<strong>Peran Pengembang:</strong> Nayla Vilova Tivani sebagai Front-End Developer & UI Designer. Bertanggung jawab penuh atas perancangan mockup antarmuka di Figma, slicing ke kode HTML/CSS responsif, implementasi validasi formulir JavaScript, serta alur penyimpanan data tiket.',
            tech: ['HTML5 Semantik', 'CSS3 Grid & Flexbox', 'JavaScript ES6+', 'LocalStorage API', 'Form Validation', 'Responsive UI']
        },
        smartlib: {
            tag: 'DIGITAL CATALOG & SEARCH ENGINE',
            title: 'SmartLib Telkom — Katalog Modul Pembelajaran & E-Book RPL',
            org: 'SMK Telkom Lampung · Perpustakaan Digital Jurusan RPL (2025/2026)',
            description: 'SmartLib Telkom menyajikan katalog perpustakaan digital interaktif untuk mempermudah siswa jurusan Rekayasa Perangkat Lunak menemukan referensi materi praktikum, dokumentasi sintaks pemrograman, serta e-book teknologi. Menghadirkan fitur pencarian instan tanpa refresh halaman yang efisien.',
            features: [
                'Live Search Filter Cerdas: Menyaring puluhan daftar modul praktikum secara instan berdasarkan judul materi, bahasa pemrograman, atau topik kejuruan.',
                'Kategori Terstruktur: Dasar Pemrograman Algoritma, Pemrograman Web (HTML/CSS/JS/PHP), Basis Data MySQL, serta Desain Antarmuka Figma.',
                'Sistem Bookmark Modul Favorit: Menyimpan materi yang sering dibaca ke dalam daftar koleksi pribadi siswa menggunakan Web Storage.',
                'Tampilan Rak Kartu Digital: Desain kartu modul modern dengan indikator level kesulitan materi dan tombol pratinjau ringkasan.',
                'Aksesibilitas & Keterbacaan Optimal: Menggunakan kontras warna yang nyaman untuk membaca materi teknis dalam durasi lama.'
            ],
            role: '<strong>Peran Pengembang:</strong> Nayla Vilova Tivani sebagai UI/UX Designer & Front-End Developer. Mengonsep arsitektur pencarian berbasis manipulasi DOM, menyusun sistem token warna gelap, dan memastikan tata letak kartu modul rapi di semua ukuran layar.',
            tech: ['Semantic HTML5', 'Custom CSS Variables', 'DOM Regex Filter', 'Vanilla JavaScript ES6', 'Figma Prototyping']
        },
        presensiqr: {
            tag: 'SCHOOL SYSTEM · JURNAL MAGANG',
            title: 'PresensiQR RPL — Dashboard Absensi & Jurnal Harian PKL',
            org: 'SMK Telkom Lampung · Program Praktik Kerja Lapangan (2025/2026)',
            description: 'PresensiQR RPL adalah prototipe sistem web presensi digital dan logbook catatan aktivitas harian bagi siswa SMK Telkom Lampung yang sedang menjalani masa Praktik Kerja Lapangan (PKL) di dunia industri teknologi.',
            features: [
                'Pencatatan Presensi Digital: Fitur simulasi tap ID/QR siswa dengan pencatatan stempel waktu (jam datang dan jam pulang) yang akurat.',
                'Jurnal Aktivitas Harian (Logbook): Kolom pengisian ringkasan pekerjaan teknis, kendala yang dihadapi, serta solusi yang diterapkan di tempat magang.',
                'Metrik Kehadiran Visual: Menampilkan persentase kehadiran tepat waktu dan status persetujuan jurnal oleh guru pembimbing.',
                'Fitur Format Cetak (Print View): Mengatur tata letak halaman agar siap dicetak langsung menjadi berkas laporan resmi akhir kegiatan PKL.'
            ],
            role: '<strong>Peran Pengembang:</strong> Nayla Vilova Tivani sebagai Front-End Architect & System Logic Builder. Membangun komponen dashboard, logika verifikasi waktu presensi, serta penyimpanan logbook harian.',
            tech: ['JavaScript ES6+', 'Dashboard Layout', 'CSS Print Styling', 'Session Storage', 'Responsive Web']
        }
    };

    // =========================================================================
    // 2. DYNAMIC CURSOR SPOTLIGHT & SCROLL PROGRESS
    // =========================================================================
    const cursorSpotlight = document.getElementById('cursorSpotlight');
    const scrollProgressLine = document.getElementById('scrollProgressLine');

    // Pointer Move for Spotlight (Fine Pointers)
    if (cursorSpotlight && window.matchMedia('(pointer: fine)').matches) {
        window.addEventListener('pointermove', (e) => {
            cursorSpotlight.style.setProperty('--mouse-x', `${e.clientX}px`);
            cursorSpotlight.style.setProperty('--mouse-y', `${e.clientY}px`);
        }, { passive: true });
    }

    // Update Top Glowing Scroll Progress Bar
    const updateScroll = () => {
        const scrollTop = window.scrollY || document.documentElement.scrollTop;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const progress = docHeight > 0 ? (scrollTop / docHeight) : 0;

        if (scrollProgressLine) {
            scrollProgressLine.style.transform = `scaleX(${progress})`;
        }
    };

    window.addEventListener('scroll', updateScroll, { passive: true });
    updateScroll();

    // =========================================================================
    // 3. STICKY NAVBAR ELEVATION & ACTIVE LINK TRACKING
    // =========================================================================
    const mainNav = document.getElementById('mainNav');
    const navLinks = document.querySelectorAll('.desktop-nav .navlink, .navlinks .navlink');
    const sections = document.querySelectorAll('section[id]');
    const logoBtn = document.getElementById('logoBtn');

    const updateNavOnScroll = () => {
        const scrollY = window.scrollY || document.documentElement.scrollTop;

        if (mainNav) {
            if (scrollY > 20) {
                mainNav.classList.add('scrolled');
            } else {
                mainNav.classList.remove('scrolled');
            }
        }

        // Active section spy
        const currentPos = scrollY + 180;
        sections.forEach((sec) => {
            const top = sec.offsetTop;
            const height = sec.offsetHeight;
            const id = sec.getAttribute('id');

            if (currentPos >= top && currentPos < top + height) {
                navLinks.forEach((link) => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${id}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    };

    window.addEventListener('scroll', updateNavOnScroll, { passive: true });
    updateNavOnScroll();

    // Logo click scroll to top
    if (logoBtn) {
        logoBtn.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    // =========================================================================
    // 4. INTERACTIVE 3D TILT EFFECT ON CARDS
    // =========================================================================
    const tiltableCards = document.querySelectorAll('.project-card, .hero-photo-card, .pillar-card, .about-card');

    if (window.matchMedia('(pointer: fine)').matches) {
        tiltableCards.forEach((card) => {
            card.addEventListener('mousemove', (e) => {
                const rect = card.getBoundingClientRect();
                const cardWidth = rect.width;
                const cardHeight = rect.height;

                const centerX = rect.left + cardWidth / 2;
                const centerY = rect.top + cardHeight / 2;

                const mouseX = e.clientX - centerX;
                const mouseY = e.clientY - centerY;

                // Subtle rotation angles (-5 to +5 degrees)
                const rotateXUncapped = (-mouseY / (cardHeight / 2)) * 6;
                const rotateYUncapped = (mouseX / (cardWidth / 2)) * 6;

                const rotateX = Math.max(-8, Math.min(8, rotateXUncapped));
                const rotateY = Math.max(-8, Math.min(8, rotateYUncapped));

                card.style.transform = `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) translateY(-4px)`;
            });

            card.addEventListener('mouseleave', () => {
                card.style.transform = '';
            });
        });
    }

    // =========================================================================
    // 5. ANIMATED STAT COUNTERS ON SCROLL
    // =========================================================================
    const statCards = document.querySelectorAll('.stat-card');
    let statsAnimated = false;

    const animateStats = () => {
        if (statsAnimated) return;

        statCards.forEach((card) => {
            const valEl = card.querySelector('.stat-val');
            if (!valEl) return;

            const originalText = valEl.textContent.trim();

            if (originalText.includes('03')) {
                let count = 0;
                const timer = setInterval(() => {
                    count++;
                    valEl.textContent = count < 10 ? `0${count}+` : `${count}+`;
                    if (count >= 3) clearInterval(timer);
                }, 120);
            } else if (originalText.includes('100')) {
                let count = 0;
                const timer = setInterval(() => {
                    count += 5;
                    valEl.textContent = `${count}%`;
                    if (count >= 100) clearInterval(timer);
                }, 35);
            }
        });

        statsAnimated = true;
    };

    // =========================================================================
    // 6. MOBILE MENU DRAWER
    // =========================================================================
    const menuBtn = document.getElementById('menuBtn');
    const mobilePanel = document.getElementById('mobilePanel');
    const mobileNavlinks = document.querySelectorAll('.mobile-navlink, .mobile-btn-hire');

    const toggleMobileMenu = (forceOpen) => {
        if (!menuBtn || !mobilePanel) return;

        const isOpen = typeof forceOpen === 'boolean'
            ? forceOpen
            : !mobilePanel.classList.contains('open');

        menuBtn.classList.toggle('open', isOpen);
        menuBtn.setAttribute('aria-expanded', String(isOpen));
        mobilePanel.classList.toggle('open', isOpen);
        mobilePanel.setAttribute('aria-hidden', String(!isOpen));
    };

    if (menuBtn && mobilePanel) {
        menuBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            toggleMobileMenu();
        });

        mobileNavlinks.forEach((link) => {
            link.addEventListener('click', () => {
                toggleMobileMenu(false);
            });
        });

        document.addEventListener('click', (e) => {
            if (mobilePanel.classList.contains('open') &&
                !mobilePanel.contains(e.target) &&
                !menuBtn.contains(e.target)) {
                toggleMobileMenu(false);
            }
        });

        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && mobilePanel.classList.contains('open')) {
                toggleMobileMenu(false);
                menuBtn.focus();
            }
        });

        window.addEventListener('resize', () => {
            if (window.innerWidth > 960 && mobilePanel.classList.contains('open')) {
                toggleMobileMenu(false);
            }
        });
    }

    // =========================================================================
    // 7. PROJECT FILTER TABS
    // =========================================================================
    const filterButtons = document.querySelectorAll('.project-filter');
    const projectCards = document.querySelectorAll('.project-card');

    filterButtons.forEach((btn) => {
        btn.addEventListener('click', () => {
            filterButtons.forEach((b) => b.classList.remove('active'));
            btn.classList.add('active');

            const selectedFilter = btn.dataset.filter;

            projectCards.forEach((card) => {
                const category = card.dataset.category || '';

                if (selectedFilter === 'ALL' || category.includes(selectedFilter)) {
                    card.style.display = 'flex';
                    card.style.animation = 'modal-enter 0.35s ease forwards';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });

    // =========================================================================
    // 8. SYSTEM DETAIL MODAL DIALOG (<dialog id="systemModal">)
    // =========================================================================
    const systemModal = document.getElementById('systemModal');
    const modalCloseBtn = document.getElementById('modalCloseBtn');
    const modalCloseActionBtn = document.getElementById('modalCloseActionBtn');

    const modalTag = document.getElementById('modalTag');
    const modalHeading = document.getElementById('modalHeading');
    const modalOrg = document.getElementById('modalOrg');
    const modalDesc = document.getElementById('modalDesc');
    const modalFeatures = document.getElementById('modalFeatures');
    const modalRole = document.getElementById('modalRole');
    const modalTech = document.getElementById('modalTech');

    let triggerElement = null;

    const openProjectModal = (projectId, originEl) => {
        const data = projectDatabase[projectId];
        if (!data || !systemModal) return;

        triggerElement = originEl;

        modalTag.textContent = data.tag;
        modalHeading.textContent = data.title;
        modalOrg.textContent = data.org;
        modalDesc.textContent = data.description;
        modalRole.innerHTML = data.role;

        // Populate Features
        modalFeatures.innerHTML = '';
        data.features.forEach((feat) => {
            const li = document.createElement('li');
            li.textContent = feat;
            modalFeatures.appendChild(li);
        });

        // Populate Tech Chips
        modalTech.innerHTML = '';
        data.tech.forEach((item) => {
            const span = document.createElement('span');
            span.textContent = item;
            modalTech.appendChild(span);
        });

        if (typeof systemModal.showModal === 'function') {
            systemModal.showModal();
        } else {
            systemModal.setAttribute('open', '');
        }

        modalCloseBtn.focus();
        document.body.style.overflow = 'hidden';
    };

    const closeProjectModal = () => {
        if (!systemModal) return;

        if (typeof systemModal.close === 'function') {
            systemModal.close();
        } else {
            systemModal.removeAttribute('open');
        }

        document.body.style.overflow = '';
        if (triggerElement) {
            triggerElement.focus();
        }
    };

    // Bind click to elements with data-trigger
    const modalTriggers = document.querySelectorAll('[data-trigger]');
    modalTriggers.forEach((el) => {
        const pid = el.dataset.trigger;
        el.addEventListener('click', (e) => {
            e.preventDefault();
            openProjectModal(pid, el);
        });

        el.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                openProjectModal(pid, el);
            }
        });
    });

    if (modalCloseBtn) modalCloseBtn.addEventListener('click', closeProjectModal);
    if (modalCloseActionBtn) modalCloseActionBtn.addEventListener('click', closeProjectModal);

    if (systemModal) {
        systemModal.addEventListener('click', (e) => {
            if (e.target === systemModal) {
                closeProjectModal();
            }
        });

        systemModal.addEventListener('cancel', () => {
            document.body.style.overflow = '';
        });
    }

    // =========================================================================
    // 9. TOAST NOTIFICATION UTILITY
    // =========================================================================
    const toastBox = document.getElementById('toastBox');
    const toastTxt = document.getElementById('toastTxt');
    let toastTimer = null;

    const triggerToast = (msg, duration = 3000) => {
        if (!toastBox || !toastTxt) return;

        toastTxt.textContent = msg;
        toastBox.classList.add('show');

        if (toastTimer) clearTimeout(toastTimer);
        toastTimer = setTimeout(() => {
            toastBox.classList.remove('show');
        }, duration);
    };

    // =========================================================================
    // 10. COPY EMAIL BUTTON
    // =========================================================================
    const copyBtn = document.getElementById('copyBtn');
    const emailVal = document.getElementById('emailVal');
    const copyBtnText = document.getElementById('copyBtnText');

    if (copyBtn && emailVal) {
        copyBtn.addEventListener('click', async () => {
            const emailStr = emailVal.textContent.trim();

            try {
                if (navigator.clipboard && navigator.clipboard.writeText) {
                    await navigator.clipboard.writeText(emailStr);
                } else {
                    const ta = document.createElement('textarea');
                    ta.value = emailStr;
                    ta.style.position = 'fixed';
                    ta.style.opacity = '0';
                    document.body.appendChild(ta);
                    ta.select();
                    document.execCommand('copy');
                    document.body.removeChild(ta);
                }

                copyBtnText.textContent = 'Disalin!';
                triggerToast(`Alamat email ${emailStr} berhasil disalin!`);

                setTimeout(() => {
                    copyBtnText.textContent = 'Salin';
                }, 2000);
            } catch (err) {
                triggerToast(`Kirim email ke: ${emailStr}`);
            }
        });
    }

    // =========================================================================
    // 11. INTERACTIVE CONTACT FORM WITH VALIDATION
    // =========================================================================
    const contactForm = document.getElementById('contactForm');
    const nameInput = document.getElementById('nameInput');
    const emailInput = document.getElementById('emailInput');
    const subjectInput = document.getElementById('subjectInput');
    const messageInput = document.getElementById('messageInput');

    const nameError = document.getElementById('nameError');
    const emailError = document.getElementById('emailError');
    const subjectError = document.getElementById('subjectError');
    const messageError = document.getElementById('messageError');

    const submitBtn = document.getElementById('submitBtn');
    const formFeedback = document.getElementById('formFeedback');

    const validateEmailFormat = (email) => {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    };

    if (contactForm && submitBtn) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();

            let isValid = true;
            nameError.textContent = '';
            emailError.textContent = '';
            subjectError.textContent = '';
            messageError.textContent = '';
            formFeedback.textContent = '';
            formFeedback.className = 'form-feedback';

            // Validate Name
            const nameVal = nameInput.value.trim();
            if (!nameVal) {
                nameError.textContent = 'Nama lengkap wajib diisi.';
                isValid = false;
            } else if (nameVal.length < 2) {
                nameError.textContent = 'Nama minimal 2 karakter.';
                isValid = false;
            }

            // Validate Email
            const emailTextVal = emailInput.value.trim();
            if (!emailTextVal) {
                emailError.textContent = 'Alamat email wajib diisi.';
                isValid = false;
            } else if (!validateEmailFormat(emailTextVal)) {
                emailError.textContent = 'Format email tidak valid (contoh: nama@domain.com).';
                isValid = false;
            }

            // Validate Subject
            const subjectVal = subjectInput.value.trim();
            if (!subjectVal) {
                subjectError.textContent = 'Tujuan / topik pesan wajib diisi.';
                isValid = false;
            }

            // Validate Message
            const msgVal = messageInput.value.trim();
            if (!msgVal) {
                messageError.textContent = 'Pesan wajib diisi.';
                isValid = false;
            } else if (msgVal.length < 10) {
                messageError.textContent = 'Pesan terlalu singkat (minimal 10 karakter).';
                isValid = false;
            }

            if (!isValid) return;

            submitBtn.disabled = true;
            submitBtn.innerHTML = '<span>Mengirim Pesan...</span>';

            setTimeout(() => {
                submitBtn.disabled = false;
                submitBtn.innerHTML = '<span>Kirim Pesan</span><span aria-hidden="true">↗</span>';

                formFeedback.textContent = `Terima kasih, ${nameVal}! Pesan Anda telah terkirim ke Nayla Vilova Tivani (RPL SMK Telkom Lampung). Saya akan membalas segera.`;
                formFeedback.classList.add('success');

                triggerToast(`Pesan dari ${nameVal} berhasil terkirim!`);
                contactForm.reset();
            }, 900);
        });

        [nameInput, emailInput, subjectInput, messageInput].forEach((inp) => {
            if (inp) {
                inp.addEventListener('input', () => {
                    const errEl = document.getElementById(`${inp.id.replace('Input', 'Error')}`);
                    if (errEl) errEl.textContent = '';
                });
            }
        });
    }

    // =========================================================================
    // 12. SCROLL REVEAL & STAT TRIGGER (IntersectionObserver)
    // =========================================================================
    const revealElements = document.querySelectorAll('.reveal');
    const aboutSection = document.getElementById('about');

    if ('IntersectionObserver' in window) {
        const obs = new IntersectionObserver((entries, observer) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    if (entry.target.id === 'about' || entry.target.contains(aboutSection)) {
                        animateStats();
                    }
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1, rootMargin: '0px 0px -30px 0px' });

        revealElements.forEach((el) => obs.observe(el));
    } else {
        revealElements.forEach((el) => el.classList.add('is-visible'));
        animateStats();
    }

    // =========================================================================
    // 13. BACK TO TOP SMOOTH SCROLL
    // =========================================================================
    const backTopBtn = document.getElementById('backTopBtn');
    if (backTopBtn) {
        backTopBtn.addEventListener('click', (e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    // Ready Signature
    console.log('%c Nayla Vilova Tivani %c Siswi RPL SMK Telkom Lampung • Web Developer ',
        'background: #131920; color: #38bdf8; font-weight: bold; padding: 4px 8px; border-radius: 4px 0 0 4px; border: 1px solid #38bdf8; box-shadow: 0 0 10px rgba(56,189,248,0.4);',
        'background: #1e2632; color: #f8fafc; padding: 4px 8px; border-radius: 0 4px 4px 0; border: 1px solid rgba(241, 245, 249, 0.15);'
    );
});