// js/projects-archive.js

document.addEventListener('DOMContentLoaded', () => {
    const archiveStatsEl = document.getElementById('archive-stats');
    const sponsorButtonsEl = document.getElementById('sponsor-buttons');
    const sponsorDetailEl = document.getElementById('sponsor-detail');

    if (!archiveStatsEl || !sponsorButtonsEl || !sponsorDetailEl) return;

    // Detect which page is loaded from the URL
    const isClosedPage = window.location.pathname.toLowerCase().includes('closed');
    const targetStatus = isClosedPage ? 'closed' : 'active';

    // MASTER DATABASE: Add all projects here and flag them as 'active' or 'closed'
    const masterSponsorData = [
        {
            sponsor: 'NASA',
            description: 'Aeronautics, space power propulsion systems, and advanced additive structural verification programs.',
            projects: [
                {
                    title: 'Gigacycle Fatigue of Additive GRCop-42 & ORC-21',
                    status: 'active', // Appears on active-projects.html
                    period: '2024 – Present',
                    material: 'GRCop-42 / ORC-21 Copper Alloys',
                    pi: 'Dr. Meysam Haghshenas (F3L)',
                    summary: 'Investigating high-temperature gigacycle fatigue limits and damage accumulation under extreme thermal regimes.'
                },
                {
                    title: 'High-Cycle Fatigue of Additive GRCop-42',
                    status: 'closed', // Appears on closed-projects.html
                    period: '2021 – 2023',
                    material: 'GRCop-84 Alloy',
                    pi: 'F3L Research Group',
                    summary: 'Characterized fatigue limits and microstructural crack nucleation sites of selective laser melted copper alloys at cryogenic operating limits.'
                },
                {
                    title: 'Superalloy Thermal Barrier & Oxidation Fatigue',
                    status: 'closed', // Appears on closed-projects.html
                    period: '2019 – 2022',
                    material: 'Inconel 625 / 718',
                    pi: 'F3L Research Group',
                    summary: 'Evaluated accelerated ultrasonic VHCF thresholds under severe oxidation environments simulating reusable rocket engine components.'
                }
            ]
        },
        {
            sponsor: 'Department of Defense',
            description: 'Armored ground systems, heavy projectile structural integrity, and defensive material durability.',
            projects: [
                {
                    title: 'VHCF and Defect Sensitivity of WAAM Nickel–Aluminum Bronze',
                    status: 'active', // Appears on active-projects.html
                    period: '2024 – Present',
                    material: 'Wire Arc Additive NAB Alloys',
                    pi: 'Dr. Meysam Haghshenas (F3L)',
                    summary: 'Evaluating coupled effects of marine corrosion and ultrasonic cyclic loading on defect-induced crack initiation.'
                },
                {
                    title: 'High-Strain Dynamic Fracture Mechanics of Heavy Armor Plate',
                    status: 'closed', // Appears on closed-projects.html
                    period: '2020 – 2022',
                    material: 'Rolled Homogeneous Armor (RHA) Steel',
                    pi: 'F3L Research Group',
                    summary: 'Quantified critical crack propagation velocities and fracture toughness values under high-rate dynamic shock loading configurations.'
                },
                {
                    title: 'Ballistic Impact Damage Tolerancing on Light Fastener Arrays',
                    status: 'closed', // Appears on closed-projects.html
                    period: '2018 – 2021',
                    material: 'High-Strength Fastener Steels',
                    pi: 'F3L Research Group',
                    summary: 'Analyzed post-impact residual fatigue capacity in critical joint assemblies subject to shear stress and shockwaves.'
                }
            ]
        },
        {
            sponsor: 'Air Force',
            description: 'Aviation airframe structural life extension, turbine engine alloys, and ultrasonic testing regimens.',
            projects: [
                {
                    title: 'Ultrasonic Fatigue Mechanics in Advanced Additive Al Alloys',
                    status: 'active', // Appears on active-projects.html
                    period: '2025 – Present',
                    material: 'Al-Ce / 2xxx & 7xxx Alloys',
                    pi: 'Dr. Meysam Haghshenas (F3L)',
                    summary: 'Establishing processing–structure–property–fatigue maps under ambient and elevated temperatures for lightweight airframe components.'
                },
                {
                    title: 'Ultrasonic VHCF Life Prediction in Ti-6Al-4V Compressor Blades',
                    status: 'closed', // Appears on closed-projects.html
                    period: '2022 – 2024',
                    material: 'Ti-6Al-4V (Forged & Additive)',
                    pi: 'F3L Research Group',
                    summary: 'Identified subsurface gigacycle fatigue crack initiation mechanisms occurring beyond 10^7 cycles in engine rotating assemblies.'
                },
                {
                    title: 'Fretting Fatigue Mitigation in Aircraft Lap Joints',
                    status: 'closed', // Appears on closed-projects.html
                    period: '2019 – 2021',
                    material: 'Al 7075-T6 / Al 2024-T3',
                    pi: 'F3L Research Group',
                    summary: 'Studied mechanical interface degradation, micro-slip contact damage, and surface coating barriers in aging military transport aircraft.'
                }
            ]
        }
    ];

    // Filter projects matching the current page's target status
    const currentDataset = masterSponsorData
        .map(sponsorGroup => ({
            ...sponsorGroup,
            projects: sponsorGroup.projects.filter(p => p.status === targetStatus)
        }))
        .filter(sponsorGroup => sponsorGroup.projects.length > 0); // Only keep sponsors that have matching projects

    const totalCount = currentDataset.reduce((acc, curr) => acc + curr.projects.length, 0);
    const countLabel = isClosedPage ? 'Closed Projects' : 'Active Projects';
    const statusLabel = isClosedPage ? '100% Delivered' : 'Active / Tracking';

    // 1. Render Summary Cards
    archiveStatsEl.innerHTML = [
        ['Sponsors', currentDataset.length, 'agencies'],
        [countLabel, totalCount, 'projects'],
        ['Testing Regimes', 'VHCF / HCF', 'methods'],
        ['Status', statusLabel, 'status']
    ].map(([label, val, unit]) => `
        <div class="archive-summary-card">
            <div class="archive-summary-label">${label}</div>
            <div class="archive-summary-val">
                <strong>${val}</strong>
                <span>${unit}</span>
            </div>
        </div>
    `).join('');

    // 2. Render Sponsor Sidebar Buttons
    sponsorButtonsEl.innerHTML = currentDataset.map((item, index) => `
        <button class="archive-sponsor-btn" data-sponsor="${index}" aria-pressed="false">
            <span>${item.sponsor}</span>
            <small>${item.projects.length}</small>
        </button>
    `).join('');

    // 3. Render Detail Display
    function displaySponsorProjects(index) {
        const data = currentDataset[index];
        if (!data) return;

        sponsorButtonsEl.querySelectorAll('[data-sponsor]').forEach(btn => {
            btn.setAttribute('aria-pressed', Number(btn.dataset.sponsor) === index);
        });

        sponsorDetailEl.innerHTML = `
            <div class="archive-header" style="margin-bottom: 1.25rem;">
                <h3 style="color: var(--ut-navy); font-size: 1.4rem;">${data.sponsor}</h3>
                <p style="margin: 0.3rem 0 0 0; font-size: 0.95rem; color: #555;">${data.description}</p>
            </div>
            <div class="archive-list">
                ${data.projects.map(proj => `
                    <div class="archive-card">
                        <div class="archive-card-top">
                            <h4 class="archive-card-title">${proj.title}</h4>
                            <span class="archive-year-badge">${proj.period}</span>
                        </div>
                        <div class="archive-meta">
                            <span><strong>Material:</strong> ${proj.material}</span>
                            <span><strong>Lead:</strong> ${proj.pi}</span>
                        </div>
                        <p class="archive-desc">${proj.summary}</p>
                    </div>
                `).join('')}
            </div>
        `;
    }

    sponsorButtonsEl.addEventListener('click', e => {
        const btn = e.target.closest('[data-sponsor]');
        if (btn) displaySponsorProjects(Number(btn.dataset.sponsor));
    });

    displaySponsorProjects(0);
});