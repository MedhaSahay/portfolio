// ===============================
// Helper
// ===============================
function $(id) {
  return document.getElementById(id);
}

function scrollToSection(id) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth" });
}
window.scrollToSection = scrollToSection; // used in HTML onclick

// ===============================
// Portfolio data
// ===============================
const portfolioItems = [
  {
    src: "images/CFO OFFICE 1.jpg",
    title: "Conservator of Forest – Executive Office",
    description:
      "Modern executive office interior with marble-textured back panels, warm lighting, and custom wooden furniture.",
    category: "Office",
  },
  {
    src: "images/AQUACITY TV UNIT VIEW.jpg",
    title: "Aquacity – Feature TV Wall",
    description:
      "Stylish TV unit design with marble accents, LED backlighting, and decorative shelving.",
    category: "Living Room",
  },
  {
    src: "images/myarchitectai_zwh9hk2yt_sd.jpg",
    title: "Botanical Calm – Bedroom",
    description:
      "Calm and warm contemporary bedroom interior with botanical wall art and layered lighting.",
    category: "Bedroom",
  },
  {
    src: "images/myarchitectai_60vou6ijgf_sd.jpeg",
    title: "Circular Lounge – Living Room",
    description:
      "Luxury living room design with circular seating layout and designer furniture.",
    category: "Living Room",
  },
  {
    src: "images/myarchitectai_4q2tc49br_sd.jpg",
    title: "City Lights – Master Bedroom",
    description:
      "Night-view modern bedroom featuring panoramic cityscape glazing and warm indirect lighting.",
    category: "Bedroom",
  },
  {
    src: "images/MNMLAI_SKETCHTOIMAGE_00001_.png",
    title: "Walk-in Wardrobe & Study Nook",
    description:
      "Modern walk-in wardrobe and work corner with golden trims and cove lighting.",
    category: "Wardrobe",
  },
  {
    src: "images/myarchitectai_pol5g8pgh_sd.jpg",
    title: "Symmetry Suite – Bedroom",
    description:
      "Elegant bedroom interior with symmetrical design and diffused cove lighting.",
    category: "Bedroom",
  },
  {
    src: "images/ChatGPT Image Nov 23, 2025, 10_47_27 PM.png",
    title: "Forest Circle – Office Cabin",
    description:
      "Contemporary office interior featuring marble, wood, and layered lighting.",
    category: "Office",
  },
  {
    src: "images/Koderma mbr1.jpg",
    title: "Koderma – Master Bedroom",
    description:
      "Stylish bedroom interior with an artistic botanical panel headboard.",
    category: "Bedroom",
  },
  {
    src: "images/T15 V3.jpg",
    title: "Blue Harmony Living Room",
    description:
      "Elegant living room with blue upholstered seating, abstract artwork and warm accent lighting.",
    category: "Living Room",
  },
];

// ===============================
// Default state
// ===============================
const STORAGE_KEY = "medha-sahay-portfolio-state-v1";

function createDefaultState() {
  const computed = getComputedStyle(document.documentElement);

  return {
    heroTitle:
      "Designing thoughtful interiors that connect people with their spaces.",
    heroSubtitle:
      "I am Medha Sahay, an Interior Designer and 3D Visualizer with experience at Green Hab Arch, IDEAZ & Singh Enterprises.",
    heroTagline: "Minimalist • Stylish • Affordable Interior Design",

    aboutIntro:
      "<p>I am <strong>Medha Sahay</strong>, an interior designer and 3D visualizer passionate about building a strong connection between a space and the people who use it. I am committed to continuously learning new creative and technical skills so that every project is carefully detailed — from the furniture layout to the final render — and exceeds my clients’ expectations.</p><p>My professional journey includes working as an <strong>Interior Designer at Green Hab Arch, Patna</strong>, a <strong>3D Visualizer at IDEAZ, Bhubaneswar</strong>, and an <strong>Interior Designer at Singh Enterprises, Ranchi</strong>. Across these roles I have handled concept development, client meetings, site supervision and material selection, as well as detailed drawings and 3D visualisation.</p>",

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
    location: "India (working across Ranchi, Patna & remote)",

    social: {
      linkedin: "https://www.linkedin.com/in/medha-sahay-40166b141/",
      instagram: "#",
      facebook: "#",
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

function loadState() {
  const defaults = createDefaultState();
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return defaults;
    const parsed = JSON.parse(raw);
    // shallow merge, but deep for nested keys we care about
    return {
      ...defaults,
      ...parsed,
      social: { ...defaults.social, ...(parsed.social || {}) },
      seo: { ...defaults.seo, ...(parsed.seo || {}) },
      theme: { ...defaults.theme, ...(parsed.theme || {}) },
      posts: Array.isArray(parsed.posts) ? parsed.posts : defaults.posts,
      education: defaults.education, // keep structured
      experience: defaults.experience,
    };
  } catch (e) {
    console.warn("Could not load saved state, using defaults", e);
    return defaults;
  }
}

let state = loadState();

function saveState() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch (e) {
    console.warn("Could not save state", e);
  }
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
  if (eduWrap) {
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
  if (expWrap) {
    expWrap.innerHTML = "";
    state.experience.forEach((item) => {
      const div = document.createElement("div");
      div.className = "timeline-item";
      div.innerHTML = `<div class="timeline-title">${item.title}</div><div class="timeline-sub">${item.sub}</div>`;
      expWrap.appendChild(div);
    });
  }

  if ($("skills-text")) $("skills-text").textContent = state.skillsText;

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
function renderPortfolio() {
  const grid = $("portfolioGrid");
  if (!grid) return;
  grid.innerHTML = "";
  portfolioItems.forEach((item) => {
    const card = document.createElement("article");
    card.className = "portfolio-card";
    card.innerHTML = `
      <img loading="lazy" src="${item.src}" alt="${item.title}">
      <div class="portfolio-body">
        <div class="portfolio-category">${item.category}</div>
        <div class="portfolio-title">${item.title}</div>
        <div class="portfolio-desc">${item.description}</div>
      </div>`;
    grid.appendChild(card);
  });
}

function renderPosts() {
  const grid = document.getElementById("blogGrid");
  if (!grid) return; // if no blog section in this layout, silently ignore
  grid.innerHTML = "";
  if (!state.posts || state.posts.length === 0) {
    grid.innerHTML =
      '<p style="font-size:0.85rem;color:var(--muted);">No posts yet. Add your first insight from the dashboard.</p>';
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

// ===============================
// Dashboard: build UI
// ===============================
function buildDashboard() {
  const body = document.querySelector(".dashboard-body");
  if (!body) return;

  body.innerHTML = `
    <div>
      <div class="dashboard-section-title">Hero & Intro</div>
      <div class="dash-field">
        <label for="dash-hero-title">Hero Title</label>
        <input id="dash-hero-title" type="text" />
      </div>
      <div class="dash-field">
        <label for="dash-hero-subtitle">Hero Subtitle</label>
        <textarea id="dash-hero-subtitle"></textarea>
      </div>
      <div class="dash-field">
        <label for="dash-hero-tagline">Tagline</label>
        <input id="dash-hero-tagline" type="text" />
      </div>
    </div>

    <div>
      <div class="dashboard-section-title">Theme & Appearance</div>
      <div class="dash-row">
        <div class="dash-field">
          <label for="dash-primary-color">Primary Color</label>
          <input type="color" id="dash-primary-color" />
        </div>
        <div class="dash-field">
          <label for="dash-accent-color">Accent Color</label>
          <input type="color" id="dash-accent-color" />
        </div>
      </div>
      <div class="dash-field">
        <label for="dash-font-main">Main Font</label>
        <select id="dash-font-main">
          <option value="Poppins">Poppins</option>
          <option value="Playfair Display">Playfair Display</option>
          <option value="system-ui">System UI</option>
        </select>
      </div>
      <p class="dash-note">
        Changes are applied live using CSS variables and stored in your browser (localStorage).
      </p>
    </div>

    <div>
      <div class="dashboard-section-title">About Content</div>
      <div class="dash-field">
        <label for="dash-about-intro">About Me – Paragraph</label>
        <textarea id="dash-about-intro"></textarea>
      </div>
      <div class="dash-field">
        <label for="dash-skills-text">Skills</label>
        <textarea id="dash-skills-text"></textarea>
      </div>
    </div>

    <div>
      <div class="dashboard-section-title">Contact Info</div>
      <div class="dash-field">
        <label for="dash-email">Email</label>
        <input id="dash-email" type="email" />
      </div>
      <div class="dash-field">
        <label for="dash-phone">Phone</label>
        <input id="dash-phone" type="text" />
      </div>
      <div class="dash-field">
        <label for="dash-location">Location</label>
        <input id="dash-location" type="text" />
      </div>
    </div>

    <div>
      <div class="dashboard-section-title">Social Links</div>
      <div class="dash-field">
        <label for="dash-linkedin">LinkedIn</label>
        <input id="dash-linkedin" type="url" placeholder="https://www.linkedin.com/..." />
      </div>
      <div class="dash-field">
        <label for="dash-instagram">Instagram</label>
        <input id="dash-instagram" type="url" />
      </div>
      <div class="dash-field">
        <label for="dash-facebook">Facebook</label>
        <input id="dash-facebook" type="url" />
      </div>
      <div class="dash-field">
        <label for="dash-pinterest">Pinterest / Behance</label>
        <input id="dash-pinterest" type="url" />
      </div>
    </div>

    <div>
      <div class="dashboard-section-title">Posts / Insights</div>
      <div class="dash-field">
        <label for="dash-post-title">Post Title</label>
        <input id="dash-post-title" type="text" />
      </div>
      <div class="dash-field">
        <label for="dash-post-body">Short Description</label>
        <textarea id="dash-post-body"></textarea>
      </div>
      <button class="dash-btn primary" id="dash-add-post">➕ Add Post</button>
      <p class="dash-note mt-1">
        Posts will appear in the “Notes from my design desk” section (if included in this layout).
      </p>
    </div>

    <div>
      <div class="dashboard-section-title">SEO Panel</div>
      <div class="dash-field">
        <label for="dash-meta-title">Meta Title</label>
        <input id="dash-meta-title" type="text" />
      </div>
      <div class="dash-field">
        <label for="dash-meta-description">Meta Description</label>
        <textarea id="dash-meta-description"></textarea>
      </div>
      <div class="dash-field">
        <label for="dash-meta-keywords">Keywords (comma separated)</label>
        <textarea id="dash-meta-keywords"></textarea>
      </div>
      <button class="dash-btn" id="dash-apply-seo">⚡ Apply SEO</button>
      <p class="dash-note mt-1">
        Updates the page &lt;title&gt;, meta description and keywords.
      </p>
    </div>

    <div>
      <button class="dash-btn" id="dash-reset">Reset to defaults</button>
    </div>
  `;
}

function syncDashboardInputs() {
  $("dash-hero-title").value = state.heroTitle;
  $("dash-hero-subtitle").value = state.heroSubtitle;
  $("dash-hero-tagline").value = state.heroTagline;

  $("dash-about-intro").value = state.aboutIntro
    .replace(/<p>/g, "")
    .replace(/<\/p>/g, "\n\n");
  $("dash-skills-text").value = state.skillsText;

  $("dash-email").value = state.email;
  $("dash-phone").value = state.phone;
  $("dash-location").value = state.location;

  $("dash-linkedin").value = state.social.linkedin;
  $("dash-instagram").value = state.social.instagram;
  $("dash-facebook").value = state.social.facebook;
  $("dash-pinterest").value = state.social.pinterest;

  $("dash-meta-title").value = state.seo.title;
  $("dash-meta-description").value = state.seo.description;
  $("dash-meta-keywords").value = state.seo.keywords;

  $("dash-primary-color").value = state.theme.primary;
  $("dash-accent-color").value = state.theme.accent;
  $("dash-font-main").value = state.theme.font;
}

// ===============================
// Event listeners
// ===============================
function attachDashboardEvents() {
  // Theme toggle button
  const themeToggle = $("themeToggle");
  if (themeToggle) {
    themeToggle.addEventListener("click", () => {
      state.theme.dark = !state.theme.dark;
      applyTheme();
      saveState();
    });
  }

  // Open/close dashboard
  const panel = $("dashboardPanel");
  const openBtn = $("dashboardOpen");
  const closeBtn = $("dashboardClose");
  if (openBtn && panel) {
    openBtn.addEventListener("click", () => {
      panel.classList.add("open");
    });
  }
  if (closeBtn && panel) {
    closeBtn.addEventListener("click", () => {
      panel.classList.remove("open");
    });
  }

  // Hero
  $("dash-hero-title").addEventListener("input", (e) => {
    state.heroTitle = e.target.value;
    if ($("hero-title")) $("hero-title").textContent = state.heroTitle;
    saveState();
  });
  $("dash-hero-subtitle").addEventListener("input", (e) => {
    state.heroSubtitle = e.target.value;
    if ($("hero-subtitle")) $("hero-subtitle").textContent = state.heroSubtitle;
    saveState();
  });
  $("dash-hero-tagline").addEventListener("input", (e) => {
    state.heroTagline = e.target.value;
    if ($("hero-tagline-text"))
      $("hero-tagline-text").textContent = state.heroTagline;
    saveState();
  });

  // Theme controls
  $("dash-primary-color").addEventListener("input", (e) => {
    state.theme.primary = e.target.value;
    applyTheme();
    saveState();
  });
  $("dash-accent-color").addEventListener("input", (e) => {
    state.theme.accent = e.target.value;
    applyTheme();
    saveState();
  });
  $("dash-font-main").addEventListener("change", (e) => {
    state.theme.font = e.target.value;
    applyTheme();
    saveState();
  });

  // About & skills
  $("dash-about-intro").addEventListener("input", (e) => {
    const text = e.target.value.trim();
    // simple paragraph split on blank lines
    const paragraphs = text.split(/\n\s*\n/).map((p) => p.trim());
    state.aboutIntro = paragraphs.map((p) => `<p>${p}</p>`).join("");
    if ($("about-intro")) $("about-intro").innerHTML = state.aboutIntro;
    saveState();
  });
  $("dash-skills-text").addEventListener("input", (e) => {
    state.skillsText = e.target.value;
    if ($("skills-text")) $("skills-text").textContent = state.skillsText;
    saveState();
  });

  // Contact
  $("dash-email").addEventListener("input", (e) => {
    state.email = e.target.value;
    if ($("contact-email")) $("contact-email").textContent = state.email;
    saveState();
  });
  $("dash-phone").addEventListener("input", (e) => {
    state.phone = e.target.value;
    if ($("contact-phone")) $("contact-phone").textContent = state.phone;
    saveState();
  });
  $("dash-location").addEventListener("input", (e) => {
    state.location = e.target.value;
    if ($("contact-location"))
      $("contact-location").textContent = state.location;
    saveState();
  });

  // Social
  ["linkedin", "instagram", "facebook", "pinterest"].forEach((network) => {
    $("dash-" + network).addEventListener("input", (e) => {
      state.social[network] = e.target.value;
      const el = $("social-" + network);
      if (el) el.href = state.social[network] || "#";
      saveState();
    });
  });

  // Posts
  const addPostBtn = $("dash-add-post");
  if (addPostBtn) {
    addPostBtn.addEventListener("click", () => {
      const titleInput = $("dash-post-title");
      const bodyInput = $("dash-post-body");
      const title = titleInput.value.trim();
      const body = bodyInput.value.trim();
      if (!title || !body) return;
      state.posts.unshift({
        title,
        body,
        date: new Date().toLocaleDateString("en-IN", {
          year: "numeric",
          month: "short",
          day: "numeric",
        }),
      });
      titleInput.value = "";
      bodyInput.value = "";
      renderPosts();
      saveState();
    });
  }

  // SEO
  $("dash-apply-seo").addEventListener("click", () => {
    state.seo.title = $("dash-meta-title").value || state.seo.title;
    state.seo.description =
      $("dash-meta-description").value || state.seo.description;
    state.seo.keywords =
      $("dash-meta-keywords").value || state.seo.keywords;
    applySEO();
    saveState();
    alert("SEO meta details updated.");
  });

  // Reset
  $("dash-reset").addEventListener("click", () => {
    if (!confirm("Reset all customisations to defaults?")) return;
    state = loadState(); // reload defaults, ignoring saved
    // But we also clear localStorage
    localStorage.removeItem(STORAGE_KEY);
    state = createDefaultState();
    applyTheme();
    applyTextContent();
    applySEO();
    renderPosts();
    syncDashboardInputs();
    saveState();
  });
}

// ===============================
// Initialisation
// ===============================
document.addEventListener("DOMContentLoaded", () => {
  // Footer year
  if ($("footer-year")) {
    $("footer-year").textContent = new Date().getFullYear();
  }

  buildDashboard();
  applyTheme();
  applyTextContent();
  applySEO();
  renderPortfolio();
  renderPosts();
  syncDashboardInputs();
  attachDashboardEvents();
});
