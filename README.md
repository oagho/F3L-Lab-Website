# F3L-Lab-Website
# Failure, Fracture, and Fatigue Laboratory (F3L) Website Framework
### University of Toledo — Department of Mechanical, Industrial and Manufacturing Engineering

This repository contains the complete, lightweight, multi-page web framework for the **F3L Lab** directed by Dr. Meysam Haghshenas. Designed with a modular architecture, this project is built for seamless version control via GitHub Pages and optimized for eventual server-cloning and hosting by the **University of Toledo IT infrastructure**.

---

## 📂 Architecture & Directory Structure

The project relies strictly on **relative path routing** to ensure that links do not break when nested inside university system subdirectories (e.g., `utoledo.edu/engineering/labs/f3l/`).

```text
├── css/
│   └── styles.css          # Centralized global stylesheet & layout rules
├── images/
│   ├── lab-banner.jpg      # Main home banner background
│   ├── avatar-placeholder.jpg
│   └── meysam-haghshenas.jpg
├── js/
│   └── script.js           # Client-side behavioral scripts
├── index.html              # Homepage & Lab Overview
├── about.html              # Methodologies & Core Competencies
├── research.html           # Active Federal Grants (AFOSR & NASA)
├── people.html             # Faculty & Graduate Student Directory Grid
├── publications.html       # Peer-Reviewed Journal Literature Log
├── contact.html            # Physical Campus Coordinates & Directions
└── README.md               # Technical Deployment Guide
```

---

## 🎨 Design Systems & Brand Unity

To maintain rigid aesthetic alignment with the University of Toledo’s official branding profile, all files tap into global variables declared in `css/styles.css`.

### Core Color Palette Tokens
* **Primary Navy (`--ut-navy`):** `#002649`
* **Secondary Gold (`--ut-gold`):** `#FFCC00`
* **Canvas Canvas BG (`--light-bg`):** `#f4f6f9`

*Developer Note:* To alter the global layout spacing or hex profiles campus-wide, modify the `:root` values inside `css/styles.css` once. Changes cascade dynamically across all 6 linked HTML components.

---

## 🚀 Deployment & University Handoff Instructions

### Phase 1: Local & GitHub Staging (Current Workflow)
1. **Pushes:** Work files locally within VS Code, commit, and push to origin (`https://github.com`).
2. **Staging Preview:** Turn on **GitHub Pages** under `Settings > Pages` mapping to the `/root` directory of the `main` branch for real-time validation.

### Phase 2: University IT Server Migration
When handing this repository off to the UToledo College of Engineering web admins:
1. Ensure the directory folder containing these source components is placed cleanly within the desired server workspace destination.
2. **Absolute Link Disclaimer:** Avoid injecting absolute home slashes (`href="/index.html"`). If the school nests this site inside an institutional subdirectory folder, relative linking (`href="index.html"`) guarantees perfect path resolution out-of-the-box.

---

## 🔧 Content Maintenance Protocols

* **Adding Lab Members:** Open `people.html` and append a target configuration block under the designated `div.profile-grid` segment using the pre-styled `profile-card` framework.
* **Adding Research Articles:** Open `publications.html` and place structural line listings within the `.pub-list` module leveraging `.pub-item`, `.pub-title`, and `.pub-authors` typography layouts.
