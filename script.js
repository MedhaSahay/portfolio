// ===============================
// Helper
// ===============================
function $(id) {
  return document.getElementById(id);
}

function isMobileView() {
  return window.innerWidth < 768;
}

function scrollToSection(id) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth" });
}
window.scrollToSection = scrollToSection; // used in HTML onclick

// ===============================
// Portfolio data
// (your portfolioItems array omitted here for brevity in this snippet)
// paste your existing portfolioItems array here
// ===============================

function getItemsPerView() {
  // Use 1 image on small screens, 3 on larger
  return window.innerWidth < 768 ? 1 : 3;
}

let itemsPerView = getItemsPerView();
let currentPortfolioPage = 0;
let portfolioTotalPages = Math.ceil(portfolioItems.length / itemsPerView);

// ===============================
// Default state (NO localStorage)
// ===============================
function createDefaultState() {
  const computed = getComputedStyle(document.documentElement);

  return {
    heroTitle:
      "Designing thoughtful interiors that connect people with their spaces.",
    heroSubtitle:
      "Turnkey interior design for homes, offices and commercial projects in Noida, Patna and Deoghar.",
    heroTagline: "Minimalist • Stylish • Affordable Interior Design",

    aboutIntro:
      "<p><strong>Medha Sahay</strong> is the principal designer at <strong>Aurevia Interiors</strong>, working across Noida, Patna and Deoghar. With over 5 years of experience in residential interiors, she focuses on creating functional, long-lasting spaces that reflect each client’s lifestyle, aspirations and personality.</p><p>The team delivers end-to-end turnkey projects—from concept and design to on-site execution—ensuring the entire process is seamless, transparent and hassle-free.</p>",

    education: [
      {
        title: "Diploma in Interior Design",
        sub: "INIFD, Ranchi · 2018 – 2020",
      },
      {
        title: "B.A. (Hons.)",
        sub: "St. Xavier’s College, Ranchi · 2014 – 2017",
      },
    ],

    experience: [
      {
        title: "Interior Designer · Vaya Design, Bengaluru",
        sub: "Aug 2024 – Dec 2024 · Home designing, office space designing, furniture layouts, concept moodboards, client meetings, site supervision, material/finish selection, detailed drawings and 3D visualisation.",
      },
      {
        title: "Interior Designer · Green Hab Arch, Patna",
        sub: "Dec 2021 – June 2024 · Furniture layouts, concept moodboards, client meetings, site supervision, material/finish selection, detailed drawings and 3D visualisation.",
      },
      {
        title: "3D Visualizer · IDEAZ, Bhubaneswar",
        sub: "Dec 2020 – April 2021 · Detailed 3D models, renders and presentations; supported client meetings and design visualisation.",
      },
      {
        title: "Interior Designer · Singh Enterprises, Ranchi",
        sub: "Sept 2019 – Dec 2019 · Interior layouts, drawings and visualisations for residential spaces.",
      },
    ],

    skillsText:
      "AutoCAD · 3ds Max · SketchUp · V-Ray · Adobe Photoshop · Research · Ideation · Sketching · Drafting · 3D Modelling · Rendering · Material Handling · Concept Development.",

    email: "sahaymedha@gmail.com",
    phone: "+91 6205369350",
    location: "Working across Noida, Patna and Deoghar",

    social: {
      linkedin: "https://www.linkedin.com/in/medha-sahay-40166b141/",
      instagram:
        "https://www.instagram.com/aureviainteriors?igsh=ODk2bjFiczM2YjNq",
      facebook: "https://www.facebook.com/share/1BZR4EMjSi/",
      pinterest: "https://be.net/medhasahay",
    },

    seo: {
      title: document.title,
      description:
        document
          .querySelector('meta[name="description"]')
          ?.getAttribute("content") ||
        "Portfolio of Medha Sahay, Interior Designer and 3D Visualizer.",
      keywords:
        document
          .querySelector('meta[name="keywords"]')
          ?.getAttribute("content") ||
        "Medha Sahay, interior designer, 3D visualizer, Aurevia Interiors",
    },

    theme: {
      primary: computed.getPropertyValue("--primary").trim() || "#c49a6c",
      accent: computed.getPropertyValue("--accent").trim() || "#f0e5d8",
      font: "Poppins",
      dark: false,
    },

    posts: [
      {
        title: "Why warm neutrals work so well at home",
        body: "Soft beige, taupe and wood instantly make a space feel calmer. Paired with diffused lighting, they photograph beautifully and age gracefully.",
        date: "Ongoing insight",
      },
      {
        title: "Using AI to test interior moods",
        body: "Quick AI-generated variations help clients visualise options early — from lighting moods to colour schemes — before committing on site.",
        date: "Design & research",
      },
    ],
  };
}

// Always use fresh defaults from code
let state = createDefaultState();

// No-op to avoid breaking existing calls
function saveState() {
  // persistence disabled on purpose
}

// ===============================
// Apply theme & content
// ===============================
function applyTheme() {
  document.documentElement.style.setProperty(
    "--primary",
    state.theme.primary
  );
  document.documentElement.style.setProperty("--accent", state.theme.accent);
  const font =
    state.theme.font === "system-ui"
      ? "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
      : `"${state.theme.font}", system-ui, -apple-system, 'Segoe UI', sans-serif`;
  document.documentElement.style.setProperty("--font-main", font);

  if (state.theme.dark) {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }
}

function applyTextContent() {
  if ($("hero-title")) $("hero-title").textContent = state.heroTitle;
  if ($("hero-subtitle")) $("hero-subtitle").textContent = state.heroSubtitle;
  if ($("hero-tagline-text"))
    $("hero-tagline-text").textContent = state.heroTagline;

  if ($("about-intro")) $("about-intro").innerHTML = state.aboutIntro;

  // Education
  const eduWrap = $("education-timeline");
  if (eduWrap && Array.isArray(state.education)) {
    eduWrap.innerHTML = "";
    state.education.forEach((item) => {
      const div = document.createElement("div");
      div.className = "timeline-item";
      div.innerHTML = `<div class="timeline-title">${item.title}</div><div class="timeline-sub">${item.sub}</div>`;
      eduWrap.appendChild(div);
    });
  }

  // Experience
  const expWrap = $("experience-timeline");
  if (expWrap && Array.isArray(state.experience)) {
    expWrap.innerHTML = "";
    state.experience.forEach((item) => {
      const div = document.createElement("div");
      div.className = "timeline-item";
      div.innerHTML = `<div class="timeline-title">${item.title}</div><div class="timeline-sub">${item.sub}</div>`;
      expWrap.appendChild(div);
    });
  }

  if ($("skills-text") && state.skillsText)
    $("skills-text").textContent = state.skillsText;

  if ($("contact-email")) $("contact-email").textContent = state.email;
  if ($("contact-phone")) $("contact-phone").textContent = state.phone;
  if ($("contact-location")) $("contact-location").textContent = state.location;
}

function applySEO() {
  document.title = state.seo.title;
  let descMeta = document.querySelector('meta[name="description"]');
  if (!descMeta) {
    descMeta = document.createElement("meta");
    descMeta.setAttribute("name", "description");
    document.head.appendChild(descMeta);
  }
  descMeta.setAttribute("content", state.seo.description);

  let kwMeta = document.querySelector('meta[name="keywords"]');
  if (!kwMeta) {
    kwMeta = document.createElement("meta");
    kwMeta.setAttribute("name", "keywords");
    document.head.appendChild(kwMeta);
  }
  kwMeta.setAttribute("content", state.seo.keywords);
}

// ===============================
// Render portfolio & posts
// ===============================
function renderPortfolioPage() {
  const grid = $("portfolioGrid");
  if (!grid) return;

  grid.innerHTML = "";

  const start = currentPortfolioPage * itemsPerView;
  const end = Math.min(start + itemsPerView, portfolioItems.length);
  const visibleItems = portfolioItems.slice(start, end);

  visibleItems.forEach((item) => {
    const card = document.createElement("article");
    card.className = "portfolio-card";
    const description = item.description || item.desc || "";

    // FIXED: close quote for class attribute and added class on img
    card.innerHTML = `
      <div class="no-download">
        <img loading="lazy" src="${item.src}" alt="${item.title}" draggable="false" class="portfolio-img">
      </div>
      <div class="portfolio-body">
        <div class="portfolio-category">${item.category}</div>
        <div class="portfolio-title">${item.title}</div>
        <div class="portfolio-desc">${description}</div>
      </div>`;

    // Whole card opens modal on click (desktop + mobile)
    card.addEventListener("click", () => {
      openCategoryModal(item);
    });

    // Mobile-only: image should open modal too (guarded)
    const imgEl = card.querySelector(".portfolio-img");
    if (imgEl) {
      imgEl.addEventListener("click", (e) => {
        if (isMobileView()) {
          e.stopPropagation(); // avoid double trigger
          openCategoryModal(item);
        }
      });
    }

    grid.appendChild(card);
  });

  const prevBtn = $("portfolioPrev");
  const nextBtn = $("portfolioNext");
  if (prevBtn) prevBtn.disabled = currentPortfolioPage === 0;
  if (nextBtn)
    nextBtn.disabled = currentPortfolioPage >= portfolioTotalPages - 1;
}

// ========= MODAL CATEGORY VIEW =========
let modalIndex = 0;
let modalCategoryItems = [];
let modalAutoInterval = null;
let modalHovered = false;

function openCategoryModal(item) {
  // all items in same category
  modalCategoryItems = portfolioItems.filter(
    (i) => i.category === item.category
  );

  // start from clicked item
  modalIndex = modalCategoryItems.findIndex((i) => i.src === item.src);
  if (modalIndex < 0) modalIndex = 0;

  updateModalImage(true);
  const modal = $("portfolioModal");
  if (modal) modal.style.display = "flex";

  startModalAutoSlide();
}

function updateModalImage(initial = false) {
  const imgEl = $("modalImage");
  const captionEl = $("modalCaption");
  if (!imgEl || !captionEl || modalCategoryItems.length === 0) return;

  const current = modalCategoryItems[modalIndex];

  if (initial) {
    // first time: no animation jump
    imgEl.src = current.src;
    imgEl.alt = current.title;
    captionEl.textContent = current.title;
    return;
  }

  // smooth slide: out → change src → in
  imgEl.classList.remove("slide-in");
  imgEl.classList.add("slide-out");

  setTimeout(() => {
    imgEl.src = current.src;
    imgEl.alt = current.title;
    captionEl.textContent = current.title;

    imgEl.classList.remove("slide-out");
    imgEl.classList.add("slide-in");

    // remove slide-in after transition so next cycle works again
    setTimeout(() => {
      imgEl.classList.remove("slide-in");
    }, 600);
  }, 200);
}

function closeModal() {
  const modal = $("portfolioModal");
  if (modal) modal.style.display = "none";
  stopModalAutoSlide();
}

function nextModal() {
  if (modalCategoryItems.length === 0) return;
  modalIndex = (modalIndex + 1) % modalCategoryItems.length;
  updateModalImage();
}

function prevModal() {
  if (modalCategoryItems.length === 0) return;
  modalIndex =
    (modalIndex - 1 + modalCategoryItems.length) % modalCategoryItems.length;
  updateModalImage();
}

/* ---------- Auto-slide with pause on hover ---------- */

function startModalAutoSlide() {
  stopModalAutoSlide(); // avoid duplicates

  modalAutoInterval = setInterval(() => {
    if (modalHovered) return; // ⏸ pause when hovered
    nextModal();
  }, 3500); // 3.5 seconds per image
}

function stopModalAutoSlide() {
  if (modalAutoInterval) {
    clearInterval(modalAutoInterval);
    modalAutoInterval = null;
  }
}

function renderPortfolio() {
  itemsPerView = getItemsPerView();
  portfolioTotalPages = Math.ceil(portfolioItems.length / itemsPerView);

  if (currentPortfolioPage >= portfolioTotalPages) {
    currentPortfolioPage = portfolioTotalPages - 1;
  }
  if (currentPortfolioPage < 0) currentPortfolioPage = 0;

  renderPortfolioPage();
}

function handleResizePortfolio() {
  const newItemsPerView = getItemsPerView();
  if (newItemsPerView === itemsPerView) return;

  const firstVisibleIndex = currentPortfolioPage * itemsPerView;
  itemsPerView = newItemsPerView;
  portfolioTotalPages = Math.ceil(portfolioItems.length / itemsPerView);
  currentPortfolioPage = Math.floor(firstVisibleIndex / itemsPerView);

  if (currentPortfolioPage >= portfolioTotalPages) {
    currentPortfolioPage = portfolioTotalPages - 1;
  }
  if (currentPortfolioPage < 0) currentPortfolioPage = 0;

  renderPortfolioPage();

  // Update auto-slide behaviour on breakpoint change
  stopAutoSlide();
  startAutoSlide();
}

function renderPosts() {
  const grid = document.getElementById("blogGrid");
  if (!grid) return;
  grid.innerHTML = "";
  if (!state.posts || state.posts.length === 0) {
    grid.innerHTML =
      '<p style="font-size:0.85rem;color:var(--muted);">No posts yet.</p>';
    return;
  }
  state.posts.forEach((post) => {
    const card = document.createElement("article");
    card.className = "blog-card";
    card.innerHTML = `
      <h4>${post.title}</h4>
      <span>${post.date || "Insight"}</span>
      <p class="mt-2">${post.body}</p>`;
    grid.appendChild(card);
  });
}

/* ------------------------------------------
   AUTO SLIDE FOR PORTFOLIO (Auto paging)
------------------------------------------- */
let autoSlideInterval;

function startAutoSlide() {
  stopAutoSlide(); // prevent duplicates

  // ✅ Only auto-slide on mobile
  if (!isMobileView()) return;

  autoSlideInterval = setInterval(() => {
    currentPortfolioPage++;

    if (currentPortfolioPage >= portfolioTotalPages) {
      currentPortfolioPage = 0; // loop back
    }

    renderPortfolioPage();
  }, 3500);
}

function stopAutoSlide() {
  if (autoSlideInterval) clearInterval(autoSlideInterval);
}

// ===============================
// Initialisation
// ===============================
document.addEventListener("DOMContentLoaded", () => {
  // one-time cleanup of old storage (harmless if key doesn't exist)
  try {
    localStorage.removeItem("medha-sahay-portfolio-state-v1");
  } catch (e) {
    // ignore if blocked
  }

  // Modal buttons + click-outside to close
  const modalClose = $("modalClose");
  const modalNext = $("modalNext");
  const modalPrev = $("modalPrev");
  const modal = $("portfolioModal");
  const modalImg = $("modalImage");

  if (modalClose) modalClose.addEventListener("click", closeModal);
  if (modalNext)
    modalNext.addEventListener("click", () => {
      nextModal();
      stopModalAutoSlide();
      setTimeout(startModalAutoSlide, 500);
    });
  if (modalPrev)
    modalPrev.addEventListener("click", () => {
      prevModal();
      stopModalAutoSlide();
      setTimeout(startModalAutoSlide, 500);
    });

  if (modal) {
    modal.addEventListener("click", (e) => {
      if (e.target === modal) closeModal();
    });
  }

  // 🔸 Pause autoplay when hovering the modal image
  if (modalImg) {
    modalImg.addEventListener("mouseenter", () => {
      modalHovered = true;
    });
    modalImg.addEventListener("mouseleave", () => {
      modalHovered = false;
    });
  }

  // Footer year
  if ($("footer-year")) {
    $("footer-year").textContent = new Date().getFullYear();
  }

  applyTheme();
  applyTextContent();
  applySEO();
  renderPortfolio();
  renderPosts();
  window.addEventListener("resize", handleResizePortfolio);

  // Smooth slide-in animation for profile image
  const profileImg = document.querySelector(".hero-frame img");
  if (profileImg) {
    setTimeout(() => {
      profileImg.classList.add("show");
    }, 150);
  }

  // Mobile nav toggle
  const navToggle = $("navToggle");
  const headerEl = document.querySelector("header");
  if (navToggle && headerEl) {
    navToggle.addEventListener("click", () => {
      headerEl.classList.toggle("nav-open");
    });
  }

  const navLinks = document.querySelectorAll(".nav-links a");
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      if (headerEl && headerEl.classList.contains("nav-open")) {
        headerEl.classList.remove("nav-open");
      }
    });
  });

  // Portfolio slider controls
  const prevBtn = $("portfolioPrev");
  const nextBtn = $("portfolioNext");

  if (prevBtn) {
    prevBtn.addEventListener("click", () => {
      stopAutoSlide();
      if (currentPortfolioPage > 0) {
        currentPortfolioPage--;
      } else {
        currentPortfolioPage = portfolioTotalPages - 1;
      }
      renderPortfolioPage();
      setTimeout(startAutoSlide, 500);
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener("click", () => {
      stopAutoSlide();
      if (currentPortfolioPage < portfolioTotalPages - 1) {
        currentPortfolioPage++;
      } else {
        currentPortfolioPage = 0;
      }
      renderPortfolioPage();
      setTimeout(startAutoSlide, 500);
    });
  }

  // Theme toggle button
  const themeToggle = $("themeToggle");
  if (themeToggle) {
    themeToggle.addEventListener("click", () => {
      state.theme.dark = !state.theme.dark;
      applyTheme();
      saveState(); // no-op but safe
    });
  }

  // Start auto-sliding (only runs on mobile)
  startAutoSlide();
});

// Disable right-click on the entire page
document.addEventListener("contextmenu", (e) => e.preventDefault());

// NOTE: Removed the global touchstart handler that prevented all image taps,
// because it blocked mobile clicks. If you want to selectively block
// long-press saving, we can add a smarter implementation.
