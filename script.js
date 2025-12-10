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
/* const portfolioItems = [
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

  // --- Newly Added Portfolio Images (all use `description`) ---
  {
    src: "images/11.jpeg",
    category: "Bedroom",
    title: "Bedroom Execution",
    description:
      "A modern bedroom under execution featuring a custom bed base, full-height wardrobe, and ambient ceiling lighting opening into a balcony space.",
  },
  {
    src: "images/12.jpeg",
    category: "Bedroom",
    title: "Contemporary Bedroom Setup",
    description:
      "A contemporary bedroom in progress showcasing a channel-tufted headboard, layered ceiling lighting, and modern wall-mounted storage.",
  },
  {
    src: "images/13.jpeg",
    category: "Bedroom – 3D Render",
    title: "Bedroom Visualization",
    description:
      "A photorealistic 3D render of a cozy bedroom with a study corner, layered wall paneling, and a warm neutral palette.",
  },
  {
    src: "images/14.jpeg",
    category: "Bedroom – 3D Render",
    title: "Modern Bedroom Render",
    description:
      "3D visualization of a modern bedroom with pendant lighting, sliding door wardrobe, and a soothing layered ceiling design.",
  },
  {
    src: "images/15.jpeg",
    category: "Bedroom – 3D Render",
    title: "Minimalist Bedroom Render",
    description:
      "A rendered view of a smartly planned bedroom with minimalist wall art, dresser unit, and soft neutral styling.",
  },
  {
    src: "images/16.jpeg",
    category: "Kids Bedroom",
    title: "Kids Room Execution",
    description:
      "A vibrant kids’ bedroom design with bright yellow accents, floating study unit, and soft cove-lit ceiling details.",
  },
  {
    src: "images/17.jpeg",
    category: "Kids Bedroom – 3D Render",
    title: "Kids Room Visualization",
    description:
      "A cheerful kids’ bedroom 3D render featuring playful wall art, full-height wardrobe, and a dual-tone curtain setup.",
  },
  {
    src: "images/18.jpeg",
    category: "Ceiling Design – 3D Render",
    title: "Ceiling Concept",
    description:
      "A unique ceiling design render with circular recessed lighting and a central fan enclosure for a soft ambient glow.",
  },
  {
    src: "images/19.jpg",
    title: "Kids Bedroom – Final Render",
    description:
      "A playful yet elegant kids bedroom designed with cheerful yellow accents, vertical slat panelling, an upholstered bed, and an integrated study desk with soft ambient lighting.",
    category: "Bedroom",
  },
  {
    src: "images/20.jpg",
    title: "Kids Bedroom – Study & Bed Setup",
    description:
      "On-site execution of the designed study and bed wall featuring grey slatted paneling, overhead storage in yellow and white, and a premium tufted headboard.",
    category: "Bedroom",
  },
  {
    src: "images/21.jpg",
    title: "Kids Bedroom – Wardrobe & Layout",
    description:
      "Progress-stage installation showing the sliding wardrobe, lighting layout, and the contrasting yellow-grey interior theme coming to life on site.",
    category: "Bedroom",
  },
  {
    src: "images/22.jpg",
    title: "Kids Bedroom – Ceiling Design",
    description:
      "A signature circular recessed ceiling with warm cove lighting and an elegant curve profile, creating a cosy and visually exciting lighting effect for the kids room.",
    category: "Ceiling Design",
  },
]; */

const portfolioItems = [
	// ===== Living Room – Execution (NEW SUBCATEGORY) =====
  {
    src: "images/111.JPG",          // make sure this path matches your file
    title: "Compact Living Room – Feature Wall",
    description:
      "Execution of a warm, compact living room featuring a 3D textured wall panel, wooden flooring, accent rug and coordinated seating.",
    category: "Living Room – Execution",
  },
  {
    src: "images/112.JPG",          // second photo in same subcategory
    title: "Compact Living Room – TV & Entrance Wall",
    description:
      "TV and entrance wall with integrated storage, artwork and linear lighting, continuing the same cosy, contemporary language.",
    category: "Living Room – Execution",
  },
  
  // ===== Premium Residential & Concept Set =====
{
  src: "images/Koderma mbr1.jpg",
  title: "Premium Master Bedroom – Koderma",
  description:
    "Earthy, layered master bedroom with botanical feature wall, recessed ceiling lighting and a calm neutral palette.",
  category: "Premium Residences",
},
{
  src: "images/T07V2.jpg",
  title: "Modern Living Room – Blue Accent Art",
  description:
    "Contemporary living room with statement art, wall panelling, and soft cove lighting.",
  category: "Premium Residences",
},
{
  src: "images/T07V1.jpg",
  title: "TV Wall & Panelled Backdrop",
  description:
    "Feature TV wall with marble texture, fluted panels and display niches with warm lighting.",
  category: "Premium Residences",
},
{
  src: "images/T15 V3.jpg",
  title: "Blue Harmony Lounge",
  description:
    "Elegant lounge seating with blue sofas, abstract artwork and symmetric wall lighting.",
  category: "Premium Residences",
},
{
  src: "images/MNMLAI_SKETCHTOIMAGE_00001_.png",
  title: "Walk-in Wardrobe with Study Corner",
  description:
    "Luxurious wardrobe and work nook with integrated lighting and sleek modern finishes.",
  category: "Premium Residences",
},
{
  src: "images/myarchitectai_4q2tc49br_sd.jpg",
  title: "City View Bedroom",
  description:
    "Warm wood-toned bedroom with large glazing, night cityscape view and layered lighting.",
  category: "Premium Residences",
},
{
  src: "images/myarchitectai_zwh9hk2yt_sd.jpg",
  title: "Botanical Calm Bedroom",
  description:
    "Soft, nature-inspired bedroom styling with botanical art and subtle cove lighting.",
  category: "Premium Residences",
},
{
  src: "images/myarchitectai_60vou6ijgf_sd.jpeg",
  title: "Kids Room with Soft Wall Art",
  description:
    "Playful yet soothing kids bedroom with leaf mural, rounded forms and warm lighting.",
  category: "Premium Residences",
},
{
  src: "images/ChatGPT Image Nov 23, 2025, 10_47_27 PM.png",
  title: "Conservator of Forest – Executive Office",
  description:
    "Formal office reception with stone backdrop, wooden panelling and brass accents.",
  category: "Premium Residences",
},
{
  src: "images/myarchitectai_pol5g8pgh_sd.jpg",
  title: "Symmetry Suite – Bedroom",
  description:
    "Refined bedroom concept with strong symmetry, wall panelling and mood lighting.",
  category: "Premium Residences",
},
{
  src: "images/CFO OFFICE 1.jpg",
  title: "Executive Office – Luxury Panelled Workspace",
  description:
    "Premium executive office featuring marble panel accents, warm wooden textures, and soft ambient lighting.",
  category: "Premium Residences",
},
{
  src: "images/AQUACITY TV UNIT VIEW.jpg",
  title: "Modern TV Unit – Aquacity",
  description:
    "Sleek TV unit design with marble cladding, gold inlay detailing, and floating cabinetry.",
  category: "Premium Residences",
},
{
  src: "images/KGHDRAWINGHALL 1.jpg",
  title: "Drawing Hall – Soft Pastel Theme",
  description:
    "Elegant drawing hall with pastel seating, artistic partitions and layered ceiling lighting.",
  category: "Premium Residences",
},
{
  src: "images/KGHDININGHALL 1.jpg",
  title: "Dining Hall – Modern Minimalist Style",
  description:
    "Warm and contemporary dining hall featuring a marble-top dining table and ceiling cove lights.",
  category: "Premium Residences",
},
{
  src: "images/KGHDININGHALL.jpg",
  title: "Dining Hall – Symmetric Wall Panel Design",
  description:
    "Balanced dining space with circular feature wall, premium lighting and sophisticated material palette.",
  category: "Premium Residences",
},
{
  src: "images/KGHTVUNIT.jpg",
  title: "TV Unit – Marble & Metallic Trim",
  description:
    "Luxurious TV wall design with geometric marble patterns and subtle gold detailing.",
  category: "Premium Residences",
},
{
  src: "images/KGHDRAWINGHALL.jpg",
  title: "Drawing Hall – Arched Niches & Accent Walls",
  description:
    "Living room with custom arched wall niches, patterned panels and warm ambient light layering.",
  category: "Premium Residences",
},
{
  src: "images/1p.jpg",
  title: "Living Room – Designer Partition Feature",
  description:
    "A plush sectional living room with mirror-grid partition, sculpted ceiling and earthy tones.",
  category: "Premium Residences",
},

{
  src: "images/211.jpeg",
  title: "Compact Modular Kitchen – Brick Tile Backsplash",
  description:
    "A smart and space-efficient modular kitchen featuring brick-textured backsplash, overhead glossy cabinetry, and seamless under-cabinet lighting.",
  category: "Modular Kitchens",
},
{
  src: "images/212.jpeg",
  title: "Contemporary Modular Kitchen – Grey & White Palette",
  description:
    "A clean and modern kitchen design with dual-tone overhead cabinets, patterned backsplash tiles, and sleek handle-less drawers.",
  category: "Modular Kitchens",
},
{
  src: "images/213.jpeg",
  title: "Vibrant Modular Kitchen – Aqua & White Theme",
  description:
    "A bright and refreshing kitchen with aqua lower cabinets, white upper storage, and a textured mosaic backsplash.",
  category: "Modular Kitchens",
},
{
  src: "images/214.jpeg",
  title: "Modern Modular Kitchen – Navy Blue Finish",
  description:
    "A stylish U-shaped kitchen featuring navy blue cabinets, soft-close storage, and neutral-toned backsplash tiles.",
  category: "Modular Kitchens",
},
{
  src: "images/215.jpeg",
  title: "Premium Modular Kitchen – Black & White Contrast",
  description:
    "A luxurious modern kitchen with high-gloss cabinetry, floral-cut backsplash tile design, and integrated task lighting.",
  category: "Modular Kitchens",
},

{
  src: "images/311.jpeg",
  title: "Premium TV Unit With Jaali & Backlit Panel",
  description:
    "A modern TV wall featuring CNC jaali, fluted panels, warm LED highlights and a low storage unit—perfect for contemporary homes.",
  category: "Premium TV Units & Ceilings",
},
{
  src: "images/312.jpeg",
  title: "Luxury Pooja Unit With Backlit Mandala",
  description:
    "A stunning mandir unit with wooden panelling, glass shutters, floating shelves and an illuminated mandala backdrop.",
  category: "Premium TV Units & Ceilings",
},
{
  src: "images/313.jpeg",
  title: "Designer False Ceiling With Wooden Inlays",
  description:
    "A stylish false ceiling combining gypsum layers, warm cove lighting and wooden inlay highlights for visual depth.",
  category: "Premium TV Units & Ceilings",
},

{
  src: "images/411.jpeg",
  title: "Gold Chevron Master Bedroom",
  description:
    "Luxurious master bedroom with bold chevron-patterned gold panels, upholstered headboard and warm cove lighting.",
  category: "Premium Residences – Master Suite",
},
{
  src: "images/412.jpeg",
  title: "TV Wall & Entrance – Master Suite",
  description:
    "Minimal TV unit with ribbed wooden panelling, concealed lighting and coordinated door treatment leading into the master suite.",
  category: "Premium Residences – Master Suite",
},
{
  src: "images/413.jpeg",
  title: "Upholstered Headboard Bedroom",
  description:
    "Elegant bedroom with a fan-shaped upholstered headboard, twin wall sconces and soft indirect ceiling lighting.",
  category: "Premium Residences – Master Suite",
},


{
  src: "images/519.jpeg",
  title: "Backlit Designer Mandir – Contemporary Apartment",
  description:
    "A beautifully crafted white mandir unit with CNC-cut patterns, soft backlighting and an elevated pedestal that enhances the serenity of the space.",
  category: "Contemporary Home Interiors",
},
{
  src: "images/520.jpeg",
  title: "Modern Bedroom – Yellow & Grey Palette",
  description:
    "Vibrant contemporary bedroom featuring a tufted headboard, study unit, and mood lighting integrated in the circular false ceiling.",
  category: "Contemporary Home Interiors",
},
{
  src: "images/521.jpeg",
  title: "Wardrobe & Ceiling Lighting – Yellow Grey Theme",
  description:
    "A stylish sliding-door wardrobe with soft LED coves, balanced with a modern ceiling profile for a warm and premium look.",
  category: "Contemporary Home Interiors",
},
{
  src: "images/511.jpeg",
  title: "Designer False Ceiling – Ambient Cove Lighting",
  description:
    "Circular & curved false ceiling design with layered lighting that elevates the ambience of the modern bedroom.",
  category: "Contemporary Home Interiors",
},
{
  src: "images/512-01.jpeg",
  title: "Contemporary Master Bedroom – Dark Grey Interior",
  description:
    "A sleek master bedroom with floating shelves, soft cove lighting, and a full-height wardrobe finished in glossy grey laminates.",
  category: "Contemporary Home Interiors",
},
{
  src: "images/513.jpeg",
  title: "Upholstered Bed & Ceiling Mood Lighting",
  description:
    "Luxurious upholstered bed with premium velvet finish complemented by geometric ceiling lighting for a cozy ambience.",
  category: "Contemporary Home Interiors",
},
{
  src: "images/514.jpeg",
  title: "Youth Bedroom – Warm Lighting & Study Desk",
  description:
    "A lively youthful bedroom design combining warm lighting, a compact study desk, and custom storage modules.",
  category: "Contemporary Home Interiors",
},
{
  src: "images/515.jpeg",
  title: "Stylish Two-Tone Wardrobe – Yellow & Grey",
  description:
    "A striking wardrobe design with glossy laminates and seamless storage layout customized for compact spaces.",
  category: "Contemporary Home Interiors",
},
{
  src: "images/516.jpeg",
  title: "Modern Living Room – TV Unit with Clean Lines",
  description:
    "A modern entertainment unit featuring sleek shutters, floating shelves, and a balcony-view layout for natural lighting.",
  category: "Contemporary Home Interiors",
},
{
  src: "images/517.jpeg",
  title: "CNC Cut False Ceiling Panel – Premium Finish",
  description:
    "A decorative CNC patterned ceiling design with wooden framing that adds richness to the living and dining areas.",
  category: "Contemporary Home Interiors",
},
{
  src: "images/518.jpeg",
  title: "Kids Bedroom – Pink & Cream Theme",
  description:
    "A cheerful kids' bedroom designed in soft pink and cream tones, featuring a playful sun-themed false ceiling, spacious wardrobe with circular accents, and a dedicated study niche.",
  category: "Contemporary Home Interiors,
},

];

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

    card.innerHTML = `
      <div class="no-download">
        <img loading="lazy" src="${item.src}" alt="${item.title}" draggable="false">
      </div>
      <div class="portfolio-body">
        <div class="portfolio-category">${item.category}</div>
        <div class="portfolio-title">${item.title}</div>
        <div class="portfolio-desc">${description}</div>
      </div>`;

    // open modal for this category on click
    card.addEventListener("click", () => {
      openCategoryModal(item);
    });

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

  // Start auto-sliding
  startAutoSlide();
});

// Disable right-click on the entire page
document.addEventListener("contextmenu", (e) => e.preventDefault());

// Disable long press saving on mobile
document.addEventListener(
  "touchstart",
  function (e) {
    if (e.target.tagName === "IMG") {
      e.preventDefault();
    }
  },
  { passive: false }
);
