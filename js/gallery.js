// Single source of truth for all images in the images/ folder
const GALLERY_IMAGES = [
    // Conferences & Awards
    {
        src: "images/CAM26.jpg",
        category: "conferences",
        tag: "Conferences",
        title: "ASTM ICAM 2026 Presentation",
        desc: "F3L researchers presenting additive manufacturing fatigue findings at ASTM ICAM 2026."
    },
    {
        src: "images/group photo.jpg",
        category: "conferences",
        tag: "news",
        title: "UT gets 2 federal grants to study advanced materials’ durability",
        desc: "F3L researchers at ASTM ICAM 2026."
    },
    {
        src: "images/RammanMs&T26.jpg",
        category: "conferences",
        tag: "Conferences",
        title: "MS&T 2026 Technical Session",
        desc: "Presenting lightweight aluminum alloy very-high-cycle fatigue research at MS&T 2026."
    },
    {
        src: "images/TasniaMS&T26.jpg",
        category: "conferences",
        tag: "Conferences",
        title: "MS&T 2026 Presentation — Tasnia Pasha",
        desc: "Presenting heat treatment and elevated-temperature VHCF behavior of additively manufactured A205 alloy."
    },
    {
        src: "images/MohammadBleadershipAward.jpg",
        category: "conferences",
        tag: "Awards",
        title: "Student Leadership Recognition",
        desc: "MohammadBagher Mahtabi honored with the Leadership Award for academic and research excellence."
    },

    // Testing Facilities
    {
        src: "images/giga cycle fatigue 2.jpg",
        category: "equipment",
        tag: "Facilities",
        title: "Ultrasonic Fatigue System (USF-2000A)",
        desc: "20 kHz high-frequency gigacycle fatigue setup capable of reaching 10^10 cycles in six days."
    },
    {
        src: "images/MEG20TT.jpg",
        category: "equipment",
        tag: "Facilities",
        title: "MEG 20TT High-Temperature Ultrasonic Tester",
        desc: "Accelerated ultrasonic fatigue testing under extreme thermal environments up to 1200°C."
    },
    {
        src: "images/multiaxial.jpg",
        category: "equipment",
        tag: "Facilities",
        title: "Biaxial Axial & Torsion Load Frame",
        desc: "Instron closed-loop multiaxial system delivering 100 kN axial and 1 kNm torsional loading."
    },
    {
        src: "images/ARBM1.jpg",
        category: "equipment",
        tag: "Facilities",
        title: "ARBM 120 Rotary Bending System",
        desc: "High-throughput rotating beam fatigue testing paired with an 850°C high-temperature furnace."
    },
    {
        src: "images/hydraulic100Kn.jpg",
        category: "equipment",
        tag: "Facilities",
        title: "Hydraulic 100 kN Axial Load Frame",
        desc: "MTS closed-loop servo-hydraulic load frame with environmental chamber."
    },
    {
        src: "images/Ksl-1200xfurnace.jpg",
        category: "equipment",
        tag: "Facilities",
        title: "KSL-1200X High-Temperature Furnace",
        desc: "High-temperature furnace for thermal cycling and heat treatment up to 1200°C."
    },
    {
        src: "images/Shimadzutensile tester.jpg",
        category: "equipment",
        tag: "Facilities",
        title: "Shimadzu Universal Testing Machine",
        desc: "High-precision universal mechanical testing system up to 50 kN load capacity."
    },

    // Lab Members & Alumni
    {
        src: "images/Meysam-Haghshenas.jpg",
        category: "team",
        tag: "Principal Investigator",
        title: "Dr. Meysam Haghshenas",
        desc: "Associate Professor, MIME Department & Director of F3L."
    },
    {
        src: "images/MbMahtabi.jpg",
        category: "team",
        tag: "Lab Member",
        title: "MohammadBagher Mahtabi",
        desc: "Ph.D. Candidate — WAAM Nickel–Aluminum Bronze alloys & VHCF."
    },
    {
        src: "images/Amir-Shakibizadeh.jpg",
        category: "team",
        tag: "Lab Member",
        title: "Amir Shakibi",
        desc: "Ph.D. Student — Gigacycle fatigue of aerospace alloys (GRCop-42, ORC-21)."
    },
    {
        src: "images/MojtabaRoshan.jpg",
        category: "team",
        tag: "Lab Member",
        title: "Mojtaba Roshan",
        desc: "Ph.D. Candidate — LPBF CuNi30 corrosion fatigue & CPFEM simulations."
    },
    {
        src: "images/Amim-Mianjy-Poorabdol.jpg",
        category: "team",
        tag: "Lab Member",
        title: "Amin Mianjy Poorabdol",
        desc: "Ph.D. Student — VHCF of additively manufactured Ti-6Al-4V and Inconel 718."
    },
    {
        src: "images/Nasrollahpourshirvani-Mostafa.jpg",
        category: "team",
        tag: "Lab Member",
        title: "Mostafa Nasrollahpourshirvani",
        desc: "Ph.D. Student — Fatigue and fracture of additively manufactured aluminum composites."
    },
    {
        src: "images/Antu-Md-Naimur-Rahman.jpg",
        category: "team",
        tag: "Lab Member",
        title: "Md Naimur Rahman Antu",
        desc: "Ph.D. Student — Ultrasonic VHCF in lightweight 2xxx, 6xxx, and 7xxx aluminum alloys."
    },
    {
        src: "images/Siddiqui-Ayaz-Ahmed.png",
        category: "team",
        tag: "Lab Member",
        title: "Ayaz Ahmed Siddiqui",
        desc: "M.S. Student — Ultrasonic VHCF of additively manufactured GRX-810 superalloy."
    },
    {
        src: "images/Pasha-Tasnia.jpg",
        category: "team",
        tag: "Lab Member",
        title: "Tasnia Pasha",
        desc: "M.S. Student — Heat treatment & elevated-temperature VHCF of A205 aluminum alloy."
    },
    {
        src: "images/Maryam Avatefazeli.jpg",
        category: "team",
        tag: "Alumni (Ph.D. 2025)",
        title: "Dr. Maryam Avateffazeli",
        desc: "Research Engineer at Parker Hannifin."
    },
    {
        src: "images/Shawkal shakil.jpg",
        category: "team",
        tag: "Alumni (Ph.D. 2026)",
        title: "Dr. Shawkat Shakil",
        desc: "Materials Engineer at SpaceX."
    },
    {
        src: "images/Kamin Tahmasbi.jpg",
        category: "team",
        tag: "Alumni (Ph.D. 2026)",
        title: "Dr. Kamin Tahmasbi",
        desc: "Staff R&D Engineer at Stryker."
    },
    {
        src: "images/Garret Wesbter.jpg",
        category: "team",
        tag: "Alumni (M.S. 2023)",
        title: "Garrett Webster",
        desc: "Mechanical Engineer at Mirion Technologies."
    },
    {
        src: "images/Minhazul Islam.jpg",
        category: "team",
        tag: "Alumni (M.S. 2021)",
        title: "Minhazul Islam",
        desc: "Packaging R&D Engineer at Intel."
    },
    {
        src: "images/Dinesh SHIVAKOTI.jpg",
        category: "team",
        tag: "Alumni (M.S. 2026)",
        title: "Dinesh Shivakoti",
        desc: "Design Engineer at L&T Technology Services Limited (Japan)."
    }
];

document.addEventListener("DOMContentLoaded", () => {
    // --- 1. Automatic Slideshow Logic ---
    const slideshowContainer = document.getElementById("gallerySlideshow");
    const slideshowStage = slideshowContainer.querySelector(".slideshow-stage");
    const autoImg = document.getElementById("autoSlideImg");
    const autoTag = document.getElementById("autoSlideTag");
    const autoTitle = document.getElementById("autoSlideTitle");
    const autoDesc = document.getElementById("autoSlideDesc");
    const autoCounter = document.getElementById("autoSlideCounter");
    const autoPrev = document.getElementById("autoSlidePrev");
    const autoNext = document.getElementById("autoSlideNext");
    const autoToggle = document.getElementById("autoSlideToggle");

    let slideIndex = 0;
    let isPlaying = true;
    const SLIDE_INTERVAL_MS = 4000;
    let slideTimer = null;

    function renderAutoSlide(idx) {
        if (!GALLERY_IMAGES.length) return;
        slideIndex = (idx + GALLERY_IMAGES.length) % GALLERY_IMAGES.length;
        const item = GALLERY_IMAGES[slideIndex];

        autoImg.style.opacity = "0.25";
        setTimeout(() => {
            autoImg.src = item.src;
            autoImg.alt = item.title;
            // Set blurred ambient backdrop so portrait/square images never have harsh black bars
            slideshowStage.style.setProperty("--slide-bg", `url("${item.src}")`);
            autoTag.textContent = item.tag;
            autoTitle.textContent = item.title;
            autoDesc.textContent = item.desc;
            autoCounter.textContent = `${slideIndex + 1} / ${GALLERY_IMAGES.length}`;
            autoImg.style.opacity = "1";
        }, 150);
    }

    function startAutoPlay() {
        stopAutoPlay();
        if (isPlaying) {
            slideTimer = setInterval(() => renderAutoSlide(slideIndex + 1), SLIDE_INTERVAL_MS);
        }
    }

    function stopAutoPlay() {
        if (slideTimer) {
            clearInterval(slideTimer);
            slideTimer = null;
        }
    }

    autoPrev.addEventListener("click", () => {
        renderAutoSlide(slideIndex - 1);
        startAutoPlay();
    });

    autoNext.addEventListener("click", () => {
        renderAutoSlide(slideIndex + 1);
        startAutoPlay();
    });

    autoToggle.addEventListener("click", () => {
        isPlaying = !isPlaying;
        autoToggle.textContent = isPlaying ? "Pause" : "Play";
        autoToggle.setAttribute("aria-label", isPlaying ? "Pause slideshow" : "Play slideshow");
        isPlaying ? startAutoPlay() : stopAutoPlay();
    });

    slideshowContainer.addEventListener("mouseenter", stopAutoPlay);
    slideshowContainer.addEventListener("mouseleave", () => {
        if (isPlaying) startAutoPlay();
    });

    renderAutoSlide(0);
    startAutoPlay();

    // --- 2. Build Grid & Filtering ---
    const grid = document.getElementById("galleryGrid");
    const filterButtons = document.querySelectorAll(".filter-btn");

    GALLERY_IMAGES.forEach((item) => {
        const figure = document.createElement("figure");
        figure.className = "gallery-item";
        figure.dataset.category = item.category;
        figure.innerHTML = `
            <img src="${item.src}" alt="${item.title}" loading="lazy">
            <figcaption>
                <span class="gallery-tag">${item.tag}</span>
                <h3>${item.title}</h3>
                <p>${item.desc}</p>
            </figcaption>
        `;
        grid.appendChild(figure);
    });

    const galleryItems = Array.from(document.querySelectorAll(".gallery-item"));

    filterButtons.forEach((btn) => {
        btn.addEventListener("click", () => {
            filterButtons.forEach((b) => b.classList.remove("active"));
            btn.classList.add("active");

            const filter = btn.dataset.filter;
            galleryItems.forEach((item) => {
                const matches = filter === "all" || item.dataset.category === filter;
                item.classList.toggle("is-hidden", !matches);
            });
        });
    });

    // --- 3. Lightbox Modal ---
    const modal = document.getElementById("lightboxModal");
    const modalImg = document.getElementById("lightboxImg");
    const modalTitle = document.getElementById("lightboxTitle");
    const modalDesc = document.getElementById("lightboxDesc");
    const closeBtn = document.getElementById("lightboxClose");
    const prevBtn = document.getElementById("lightboxPrev");
    const nextBtn = document.getElementById("lightboxNext");
    let lightboxIndex = 0;

    const getVisibleItems = () =>
        galleryItems.filter((item) => !item.classList.contains("is-hidden"));

    function openLightbox(index) {
        const visible = getVisibleItems();
        if (!visible.length) return;

        lightboxIndex = (index + visible.length) % visible.length;
        const target = visible[lightboxIndex];
        const img = target.querySelector("img");

        modalImg.src = img.src;
        modalImg.alt = img.alt;
        modalTitle.textContent = target.querySelector("h3")?.textContent || "";
        modalDesc.textContent = target.querySelector("p")?.textContent || "";

        modal.classList.add("open");
        modal.setAttribute("aria-hidden", "false");
        document.body.style.overflow = "hidden";
    }

    function closeLightbox() {
        modal.classList.remove("open");
        modal.setAttribute("aria-hidden", "true");
        document.body.style.overflow = "";
    }

    galleryItems.forEach((item) => {
        item.addEventListener("click", () => {
            const visible = getVisibleItems();
            const idx = visible.indexOf(item);
            if (idx !== -1) openLightbox(idx);
        });
    });

    closeBtn.addEventListener("click", closeLightbox);
    prevBtn.addEventListener("click", () => openLightbox(lightboxIndex - 1));
    nextBtn.addEventListener("click", () => openLightbox(lightboxIndex + 1));

    modal.addEventListener("click", (e) => {
        if (e.target === modal) closeLightbox();
    });

    document.addEventListener("keydown", (e) => {
        if (!modal.classList.contains("open")) return;
        if (e.key === "Escape") closeLightbox();
        if (e.key === "ArrowLeft") openLightbox(lightboxIndex - 1);
        if (e.key === "ArrowRight") openLightbox(lightboxIndex + 1);
    });
});