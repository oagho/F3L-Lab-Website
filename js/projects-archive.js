// js/projects-archive.js

document.addEventListener('DOMContentLoaded', () => {
    const archiveStatsEl = document.getElementById('archive-stats');
    const sponsorButtonsEl = document.getElementById('sponsor-buttons');
    const sponsorDetailEl = document.getElementById('sponsor-detail');

    if (!archiveStatsEl || !sponsorButtonsEl || !sponsorDetailEl) return;

    const isClosedPage = window.location.pathname.toLowerCase().includes('closed');
    const targetStatus = isClosedPage ? 'closed' : 'active';

    // MASTER DATABASE: Add 'logo' image paths for each sponsor
    const masterSponsorData = [
        {
            sponsor: 'NASA',
            logo: 'images/nasa-logo.png',
            description: 'Aeronautics, space power propulsion systems, and advanced additive structural verification programs.',
            projects: [
                {
                    title: 'Long and ultra-long fatigue of AM Cu and Ni alloys',
                    status: 'active',
                    period: '2024 – Present',
                    pi: 'Dr. Meysam Haghshenas (F3L)',
                    summary: 'Investigating high-temperature gigacycle fatigue limits and damage accumulation under extreme thermal regimes.'
                },
                
                
            ]
        },
        {
            sponsor: 'Office of Naval Research',
            logo: 'images/onr-logo.png',
            description: 'Aeronautics, space power propulsion systems, and advanced additive structural verification programs.',
            projects: [
                {
                    title: 'In-situ and ex-situ corrosion fatigue of WAAM NAB',
                    status: 'active',
                    period: '2024 – Present',
                    material: 'GRCop-42 / ORC-21 Copper Alloys',
                    pi: 'Dr. Meysam Haghshenas (F3L)',
                    summary: 'Investigating high-temperature gigacycle fatigue limits and damage accumulation under extreme thermal regimes.'
                },
                {
                    title: 'High-Cycle Fatigue of Additive GRCop-42',
                    status: 'closed',
                    period: '2021 – 2023',
                    material: 'GRCop-84 Alloy',
                    pi: 'F3L Research Group',
                    summary: 'Characterized fatigue limits and microstructural crack nucleation sites of selective laser melted copper alloys at cryogenic operating limits.'
                }
            ]
        },
        {
            sponsor: 'NIST',
            logo: 'images/nist-logo.png',
            description: 'Measurement standards and characterization frameworks for advanced metallic additive structures.',
            projects: [
                {
                    title: 'Gigacycle Fatigue of Additive GRCop-42 & ORC-21',
                    status: 'active',
                    period: '2024 – Present',
                    pi: 'Dr. Meysam Haghshenas (F3L)',
                    summary: 'Investigating high-temperature gigacycle fatigue limits and damage accumulation under extreme thermal regimes.'
                }
            ]
        },
        {
            sponsor: 'Lincoln Electric',
            logo: 'images/lincoln-electric-logo.png',
            description: 'Wire arc additive manufacturing (WAAM) deposition characterization and cyclic fatigue life quantification.',
            projects: [
                {
                    title: 'Gigacycle Fatigue of Additive GRCop-42 & ORC-21',
                    status: 'active',
                    period: '2024 – Present',
                    material: 'GRCop-42 / ORC-21 Copper Alloys',
                    pi: 'Dr. Meysam Haghshenas (F3L)',
                    summary: 'Investigating high-temperature gigacycle fatigue limits and damage accumulation under extreme thermal regimes.'
                }
            ]
        },
        {
            sponsor: 'Hyphen Innovations',
            logo: 'images/hyphen-logo.png',
            description: 'Damping characterization and vibrational fatigue mitigation in high-temperature components.',
            projects: [
                {
                    title: 'Gigacycle Fatigue of Additive GRCop-42 & ORC-21',
                    status: 'active',
                    period: '2024 – Present',
                    material: 'GRCop-42 / ORC-21 Copper Alloys',
                    pi: 'Dr. Meysam Haghshenas (F3L)',
                    summary: 'Investigating high-temperature gigacycle fatigue limits and damage accumulation under extreme thermal regimes.'
                }
            ]
        },
        {
            sponsor: 'EOS',
            logo: 'images/eos-logo.png',
            description: 'Laser powder bed fusion technology, process repeatability, and fatigue life verification.',
            projects: [
                {
                    title: 'Gigacycle Fatigue of Additive GRCop-42 & ORC-21',
                    status: 'active',
                    period: '2024 – Present',
                    material: 'GRCop-42 / ORC-21 Copper Alloys',
                    pi: 'Dr. Meysam Haghshenas (F3L)',
                    summary: 'Investigating high-temperature gigacycle fatigue limits and damage accumulation under extreme thermal regimes.'
                }
            ]
        },
        {
            sponsor: 'NSF',
            logo: 'images/nsf-logo.png',
            description: 'Fundamental research into dynamic strain deformation mechanisms and fatigue initiation.',
            projects: [
                {
                    title: 'High temperature fatigue of cast and AM aluminum alloys',
                    status: 'active',
                    period: '2024 – Present',
                    material: 'GRCop-42 / ORC-21 Copper Alloys',
                    pi: 'Dr. Meysam Haghshenas (F3L)',
                    summary: 'Investigating high-temperature gigacycle fatigue limits and damage accumulation under extreme thermal regimes.'
                }
            ]
        },
        {
            sponsor: 'Army Research Laboratory',
            logo: 'images/arl-logo.png',
            description: 'Aeronautics, space power propulsion systems, and advanced additive structural verification programs.',
            projects: [
                {
                    title: 'Fati',
                    status: 'active',
                    period: '2024 – Present',
                    material: 'GRCop-42 / ORC-21 Copper Alloys',
                    pi: 'Dr. Meysam Haghshenas (F3L)',
                    summary: 'Investigating high-temperature gigacycle fatigue limits and damage accumulation under extreme thermal regimes.'
                }
            ]
        },
        {
            sponsor: 'Department of Defense',
            logo: 'images/dod-logo.png',
            description: 'Armored ground systems, heavy projectile structural integrity, and defensive material durability.',
            projects: [
                {
                    title: 'VHCF and Defect Sensitivity of WAAM Nickel–Aluminum Bronze',
                    status: 'active',
                    period: '2024 – Present',
                    material: 'Wire Arc Additive NAB Alloys',
                    pi: 'Dr. Meysam Haghshenas (F3L)',
                    summary: 'Evaluating coupled effects of marine corrosion and ultrasonic cyclic loading on defect-induced crack initiation.'
                },
                {
                    title: 'High-Strain Dynamic Fracture Mechanics of Heavy Armor Plate',
                    status: 'closed',
                    period: '2020 – 2022',
                    material: 'Rolled Homogeneous Armor (RHA) Steel',
                    pi: 'F3L Research Group',
                    summary: 'Quantified critical crack propagation velocities and fracture toughness values under high-rate dynamic shock loading configurations.'
                }
            ]
        },
        {
            sponsor: 'Air Force Office of Scientific Research',
            logo: 'images/afosr-logo.png',
            description: 'Aviation airframe structural life extension, turbine engine alloys, and ultrasonic testing regimens.',
            projects: [
                {
                    title: 'Ultrasonic Fatigue Mechanics in Advanced Additive Al Alloys',
                    status: 'active',
                    period: '2025 – Present',
                    material: 'Al-Ce / 2xxx & 7xxx Alloys',
                    pi: 'Dr. Meysam Haghshenas (F3L)',
                    summary: 'Establishing processing–structure–property–fatigue maps under ambient and elevated temperatures for lightweight airframe components.'
                },
               
            ]
        }
    ];

    const currentDataset = masterSponsorData
        .map(sponsorGroup => ({
            ...sponsorGroup,
            projects: sponsorGroup.projects.filter(p => p.status === targetStatus)
        }))
        .filter(sponsorGroup => sponsorGroup.projects.length > 0);

    // 2. Render Sidebar Buttons with Logos and Fallback Text
    sponsorButtonsEl.innerHTML = currentDataset.map((item, index) => `
        <button class="archive-sponsor-btn" data-sponsor="${index}" aria-pressed="false" title="${item.sponsor}">
            <div class="sponsor-btn-brand">
                <img src="${item.logo}" alt="${item.sponsor} logo" class="sponsor-btn-logo" onerror="this.style.display='none'; this.nextElementSibling.style.display='inline';">
                <span class="sponsor-fallback-name" style="display: none;">${item.sponsor}</span>
            </div>
            <small>${item.projects.length}</small>
        </button>
    `).join('');

    // 3. Render Detail View with Large Sponsor Logo Header
    function displaySponsorProjects(index) {
        const data = currentDataset[index];
        if (!data) return;

        sponsorButtonsEl.querySelectorAll('[data-sponsor]').forEach(btn => {
            btn.setAttribute('aria-pressed', Number(btn.dataset.sponsor) === index);
        });

        sponsorDetailEl.innerHTML = `
            <div class="archive-header">
                <div class="sponsor-header-content">
                    <img src="${data.logo}" alt="${data.sponsor} Logo" class="sponsor-detail-logo" onerror="this.style.display='none';">
                    <div>
                        <h3 style="color: var(--ut-navy); font-size: 1.4rem; margin-bottom: 0.25rem;">${data.sponsor}</h3>
                        <p style="margin: 0; font-size: 0.95rem; color: #555;">${data.description}</p>
                    </div>
                </div>
            </div>
            <div class="archive-list">
                ${data.projects.map(proj => `
                    <div class="archive-card">
                        <div class="archive-card-top">
                            <h4 class="archive-card-title">${proj.title}</h4>
                            <span class="archive-year-badge">${proj.period}</span>
                        </div>
                        <div class="archive-meta">
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