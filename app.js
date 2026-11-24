/**
 * Adam Gadget Link - Interactive E-Commerce & Phone Catalog Application
 * 100% Offline & Local Image Assets with Zero Breakage
 */

const PRODUCTS = [
  {
    id: 1,
    name: "iPhone 16 Pro Max",
    brand: "Apple",
    category: "Apple",
    badge: "Hot",
    badgeType: "hot",
    rating: 4.9,
    reviews: 142,
    basePrice: 1199,
    image: "assets/phones/iphone16pro.jpg",
    description: "The ultimate iPhone featuring aerospace-grade Titanium, A18 Pro chip, Camera Control button, and the longest battery life ever in an iPhone.",
    storages: [
      { size: "256GB", extra: 0 },
      { size: "512GB", extra: 200 },
      { size: "1TB", extra: 400 }
    ],
    colors: [
      { name: "Desert Titanium", hex: "#c5ab98" },
      { name: "Natural Titanium", hex: "#9a9792" },
      { name: "White Titanium", hex: "#e5e5ea" },
      { name: "Black Titanium", hex: "#3b3b3e" }
    ],
    specs: {
      screen: "6.9-inch Super Retina XDR OLED, 120Hz ProMotion",
      processor: "Apple A18 Pro (3nm)",
      camera: "48MP Fusion + 48MP Ultra Wide + 12MP 5x Telephoto",
      battery: "4685 mAh (Up to 33 hours video playback)",
      ram: "8GB Unified Memory",
      os: "iOS 18 with Apple Intelligence",
      charging: "25W MagSafe / USB-C 3.2 fast charge"
    }
  },
  {
    id: 2,
    name: "Samsung Galaxy S24 Ultra",
    brand: "Samsung",
    category: "Samsung",
    badge: "20% OFF",
    badgeType: "discount",
    rating: 4.9,
    reviews: 189,
    basePrice: 1049,
    oldPrice: 1299,
    image: "assets/phones/s24ultra.jpg",
    description: "Galaxy AI powerhouse with built-in S Pen, Titanium frame, 200MP camera with 100x Space Zoom, and ultra-bright flat 2600 nits display.",
    storages: [
      { size: "256GB", extra: 0 },
      { size: "512GB", extra: 150 },
      { size: "1TB", extra: 350 }
    ],
    colors: [
      { name: "Titanium Gray", hex: "#6c6c70" },
      { name: "Titanium Black", hex: "#2b2b2c" },
      { name: "Titanium Violet", hex: "#4b4055" },
      { name: "Titanium Yellow", hex: "#d8c47b" }
    ],
    specs: {
      screen: "6.8-inch Dynamic AMOLED 2X, 120Hz, 2600 nits, Gorilla Armor",
      processor: "Qualcomm Snapdragon 8 Gen 3 for Galaxy",
      camera: "200MP Main + 50MP 5x Periscope + 10MP 3x + 12MP UW",
      battery: "5000 mAh with 45W Fast Charging",
      ram: "12GB LPDDR5X",
      os: "One UI 6.1 with 7 years of Android OS updates",
      charging: "45W Wired, 15W Wireless, Wireless PowerShare"
    }
  },
  {
    id: 3,
    name: "Google Pixel 9 Pro XL",
    brand: "Google",
    category: "Google",
    badge: "New",
    badgeType: "new",
    rating: 4.8,
    reviews: 78,
    basePrice: 1099,
    image: "assets/phones/pixel9pro.jpg",
    description: "Google's pinnacle AI smartphone with Google Tensor G4, Gemini Live deeply integrated, and class-leading computational photography.",
    storages: [
      { size: "128GB", extra: 0 },
      { size: "256GB", extra: 100 },
      { size: "512GB", extra: 250 }
    ],
    colors: [
      { name: "Obsidian", hex: "#1c1c1e" },
      { name: "Porcelain", hex: "#f0ede6" },
      { name: "Hazel", hex: "#7a8277" },
      { name: "Rose Quartz", hex: "#e5b8b8" }
    ],
    specs: {
      screen: "6.8-inch Super Actua LTPO OLED, 120Hz, 3000 nits",
      processor: "Google Tensor G4 with Titan M2 security",
      camera: "50MP Wide + 48MP Ultrawide with Macro Focus + 48MP 5x Telephoto",
      battery: "5060 mAh with 37W Fast Charging",
      ram: "16GB RAM for Gemini Nano multimodal AI",
      os: "Android 15 (7 years of OS & Feature Drops)",
      charging: "37W Wired Fast Charge, Qi Wireless"
    }
  },
  {
    id: 4,
    name: "iPhone 16",
    brand: "Apple",
    category: "Apple",
    badge: "Popular",
    badgeType: "new",
    rating: 4.7,
    reviews: 95,
    basePrice: 799,
    image: "assets/phones/iphone16.jpg",
    description: "Built for Apple Intelligence with the new A18 processor, Action button, 48MP Fusion dual camera, and vibrant infused back glass.",
    storages: [
      { size: "128GB", extra: 0 },
      { size: "256GB", extra: 100 },
      { size: "512GB", extra: 300 }
    ],
    colors: [
      { name: "Ultramarine", hex: "#435d8a" },
      { name: "Teal", hex: "#568285" },
      { name: "Pink", hex: "#d598a3" },
      { name: "Black", hex: "#26282a" }
    ],
    specs: {
      screen: "6.1-inch Super Retina XDR OLED, Ceramic Shield latest gen",
      processor: "Apple A18 (3nm)",
      camera: "48MP Fusion + 12MP Ultra Wide with Macro",
      battery: "3561 mAh (Up to 22 hours video)",
      ram: "8GB RAM",
      os: "iOS 18 with Apple Intelligence",
      charging: "Fast USB-C & MagSafe"
    }
  },
  {
    id: 5,
    name: "Samsung Galaxy Z Fold6",
    brand: "Samsung",
    category: "Samsung",
    badge: "Flagship",
    badgeType: "hot",
    rating: 4.8,
    reviews: 62,
    basePrice: 1799,
    oldPrice: 1899,
    image: "assets/phones/zfold6.jpg",
    description: "Ultra-slim foldable marvel. Opens into an expansive 7.6-inch tablet display with enhanced Armor Aluminum and Galaxy AI multitasking.",
    storages: [
      { size: "256GB", extra: 0 },
      { size: "512GB", extra: 150 },
      { size: "1TB", extra: 350 }
    ],
    colors: [
      { name: "Silver Shadow", hex: "#a4a8ab" },
      { name: "Navy", hex: "#22354c" },
      { name: "Pink", hex: "#f0d5db" }
    ],
    specs: {
      screen: "7.6-inch Main Foldable Dynamic AMOLED 2X + 6.3-inch Cover Screen",
      processor: "Qualcomm Snapdragon 8 Gen 3 for Galaxy",
      camera: "50MP Wide + 10MP 3x Telephoto + 12MP Ultra-Wide",
      battery: "4400 mAh Dual Battery",
      ram: "12GB RAM",
      os: "One UI 6.1.1 (Multi-window & S-Pen support)",
      charging: "25W Wired, 15W Wireless"
    }
  },
  {
    id: 6,
    name: "iPhone 15 Pro",
    brand: "Apple",
    category: "Apple",
    badge: "Special Deal",
    badgeType: "discount",
    rating: 4.8,
    reviews: 210,
    basePrice: 899,
    oldPrice: 999,
    image: "assets/phones/iphone15pro.jpg",
    description: "Lightweight titanium chassis, A17 Pro 3nm chip capable of console-quality gaming, customizable Action button, and 48MP Pro camera system.",
    storages: [
      { size: "128GB", extra: 0 },
      { size: "256GB", extra: 100 },
      { size: "512GB", extra: 250 }
    ],
    colors: [
      { name: "Natural Titanium", hex: "#9a9792" },
      { name: "Blue Titanium", hex: "#323c4a" },
      { name: "White Titanium", hex: "#e5e5ea" }
    ],
    specs: {
      screen: "6.1-inch Super Retina XDR OLED, 120Hz ProMotion",
      processor: "Apple A17 Pro (3nm)",
      camera: "48MP Main + 12MP Ultra Wide + 12MP 3x Telephoto",
      battery: "3274 mAh (Up to 23 hours video)",
      ram: "8GB RAM",
      os: "iOS 18 Support",
      charging: "USB-C 3.0 High-speed data & charging"
    }
  },
  {
    id: 7,
    name: "Google Pixel 8a",
    brand: "Google",
    category: "Google",
    badge: "Best Value",
    badgeType: "new",
    rating: 4.7,
    reviews: 114,
    basePrice: 499,
    image: "assets/phones/pixel8a.jpg",
    description: "The budget flagship with Google Tensor G3, phenomenal Best Take photo magic, 120Hz smooth display, and 7 years of full OS updates.",
    storages: [
      { size: "128GB", extra: 0 },
      { size: "256GB", extra: 60 }
    ],
    colors: [
      { name: "Bay Blue", hex: "#76a6cf" },
      { name: "Aloe Green", hex: "#a4cfb7" },
      { name: "Obsidian", hex: "#1e1f20" },
      { name: "Porcelain", hex: "#f1eee7" }
    ],
    specs: {
      screen: "6.1-inch Actua OLED, 120Hz, 2000 nits peak",
      processor: "Google Tensor G3",
      camera: "64MP Quad PD wide + 13MP ultrawide",
      battery: "4492 mAh (Over 24h battery life)",
      ram: "8GB LPDDR5x",
      os: "Android 15 (7 years of security & OS updates)",
      charging: "18W Fast Charging + Qi Wireless"
    }
  },
  {
    id: 8,
    name: "Xiaomi 14 Ultra (Leica)",
    brand: "Xiaomi",
    category: "Xiaomi",
    badge: "Pro Camera",
    badgeType: "hot",
    rating: 4.9,
    reviews: 53,
    basePrice: 1150,
    image: "assets/phones/xiaomi14.jpg",
    description: "Legendary Quad Leica 50MP camera with 1-inch Sony LYT-900 sensor, stepless variable aperture, Snapdragon 8 Gen 3, and 90W HyperCharge.",
    storages: [
      { size: "512GB", extra: 0 },
      { size: "1TB", extra: 200 }
    ],
    colors: [
      { name: "Vegan Leather Black", hex: "#1a1a1a" },
      { name: "White Ceramic", hex: "#f4f4f4" }
    ],
    specs: {
      screen: "6.73-inch LTPO AMOLED, 120Hz, Dolby Vision, 3000 nits",
      processor: "Qualcomm Snapdragon 8 Gen 3",
      camera: "50MP 1-inch LYT-900 + 50MP 3.2x Tele + 50MP 5x Periscope + 50MP UW",
      battery: "5000 mAh with 90W Wired + 80W Wireless",
      ram: "16GB LPDDR5X",
      os: "Xiaomi HyperOS",
      charging: "90W HyperCharge (0-100% in 33 mins)"
    }
  },
  {
    id: 9,
    name: "Samsung Galaxy S24",
    brand: "Samsung",
    category: "Samsung",
    badge: "Compact",
    badgeType: "new",
    rating: 4.7,
    reviews: 91,
    basePrice: 749,
    image: "assets/phones/s24.jpg",
    description: "Compact flagship perfection with 6.2-inch dynamic display, full Galaxy AI capabilities, and sleek aerospace-grade Armor Aluminum frame.",
    storages: [
      { size: "128GB", extra: 0 },
      { size: "256GB", extra: 80 }
    ],
    colors: [
      { name: "Cobalt Violet", hex: "#433a52" },
      { name: "Amber Yellow", hex: "#e2c984" },
      { name: "Onyx Black", hex: "#222223" }
    ],
    specs: {
      screen: "6.2-inch FHD+ Dynamic AMOLED 2X, 120Hz",
      processor: "Snapdragon 8 Gen 3 / Exynos 2400",
      camera: "50MP Main + 10MP 3x Telephoto + 12MP Ultra Wide",
      battery: "4000 mAh All-day Battery",
      ram: "8GB RAM",
      os: "One UI 6.1 (7 Years OS Updates)",
      charging: "25W Super Fast Charging"
    }
  },
  {
    id: 10,
    name: "OnePlus 12",
    brand: "OnePlus",
    category: "Xiaomi",
    badge: "Performance",
    badgeType: "discount",
    rating: 4.8,
    reviews: 69,
    basePrice: 799,
    oldPrice: 899,
    image: "assets/phones/oneplus12.jpg",
    description: "Smooth beyond belief. 4th Gen Hasselblad Camera, Dual Cryo-velocity VC cooling, and 5400 mAh battery with ultra-fast 100W SUPERVOOC charging.",
    storages: [
      { size: "256GB", extra: 0 },
      { size: "512GB", extra: 100 }
    ],
    colors: [
      { name: "Flowy Emerald", hex: "#295b4e" },
      { name: "Silky Black", hex: "#1b1c1e" }
    ],
    specs: {
      screen: "6.82-inch ProXDR 2K 120Hz LTPO Display, 4500 nits peak",
      processor: "Qualcomm Snapdragon 8 Gen 3",
      camera: "50MP Sony LYT-808 + 64MP 3x Periscope + 48MP Ultrawide",
      battery: "5400 mAh Long-Life Battery",
      ram: "16GB RAM",
      os: "OxygenOS 14",
      charging: "100W Wired (0-100% in 26 mins) + 50W Wireless"
    }
  },
  {
    id: 11,
    name: "Apple AirPods Pro 2 (USB-C)",
    brand: "Apple",
    category: "Accessories",
    badge: "Audio Best",
    badgeType: "hot",
    rating: 4.9,
    reviews: 310,
    basePrice: 229,
    oldPrice: 249,
    image: "assets/phones/airpods.jpg",
    description: "Pro-level Active Noise Cancellation, Adaptive Audio, Conversation Awareness, and Personalized Spatial Audio with dynamic head tracking.",
    storages: [
      { size: "MagSafe Case", extra: 0 }
    ],
    colors: [
      { name: "White", hex: "#ffffff" }
    ],
    specs: {
      screen: "N/A (H2 Apple Chip inside)",
      processor: "Apple H2 Headphone Chip + U1 in Case",
      camera: "Dual beamforming microphones",
      battery: "Up to 30 hours listening with MagSafe Case",
      ram: "N/A",
      os: "iOS & Android Compatible",
      charging: "USB-C, MagSafe, Apple Watch charger, Qi"
    }
  },
  {
    id: 12,
    name: "Samsung Galaxy Watch 7",
    brand: "Samsung",
    category: "Accessories",
    badge: "Smartwatch",
    badgeType: "new",
    rating: 4.8,
    reviews: 82,
    basePrice: 299,
    image: "assets/phones/galaxywatch.jpg",
    description: "3nm processor for smart health tracking, BioActive Sensor, dual-frequency GPS, sleep coaching, and AI wellness tips.",
    storages: [
      { size: "40mm Bluetooth", extra: 0 },
      { size: "44mm Bluetooth", extra: 30 }
    ],
    colors: [
      { name: "Green", hex: "#4b584a" },
      { name: "Silver", hex: "#d8dadc" },
      { name: "Cream", hex: "#e7e2d7" }
    ],
    specs: {
      screen: "Super AMOLED Sapphire Crystal",
      processor: "Exynos W1000 (3nm)",
      camera: "N/A",
      battery: "Up to 40 hours typical usage",
      ram: "2GB RAM + 32GB Storage",
      os: "Wear OS Powered by Samsung",
      charging: "Fast Wireless Magnetic Charging"
    }
  },
  {
    id: 13,
    name: "65W GaN Dual Fast Charger",
    brand: "Accessories",
    category: "Accessories",
    badge: "Essential",
    badgeType: "discount",
    rating: 4.9,
    reviews: 145,
    basePrice: 39,
    oldPrice: 49,
    image: "assets/phones/gan_charger.jpg",
    description: "Compact Gallium Nitride (GaN) fast wall charger with 2x USB-C Power Delivery and 1x USB-A. Quickly charges iPhone, Galaxy, and laptops safely.",
    storages: [
      { size: "65W Multi-Port", extra: 0 }
    ],
    colors: [
      { name: "Midnight Black", hex: "#111111" },
      { name: "Matte White", hex: "#f5f5f5" }
    ],
    specs: {
      screen: "LED power indicator",
      processor: "Smart GaN III safety control chip",
      camera: "N/A",
      battery: "Overheat, overvoltage, short-circuit protection",
      ram: "N/A",
      os: "Universal Compatibility (Apple PD / Samsung Super Fast)",
      charging: "65W Max Power Delivery 3.0"
    }
  },
  {
    id: 14,
    name: "Anker MagSafe 10,000mAh Battery",
    brand: "Accessories",
    category: "Accessories",
    badge: "Top Rated",
    badgeType: "new",
    rating: 4.9,
    reviews: 177,
    basePrice: 59,
    image: "assets/phones/powerbank.jpg",
    description: "Qi2 certified 15W high-speed magnetic wireless power bank with smart digital screen showing exact percentage and remaining recharge time.",
    storages: [
      { size: "10,000 mAh", extra: 0 }
    ],
    colors: [
      { name: "Black", hex: "#1a1a1a" },
      { name: "Shell White", hex: "#ececec" },
      { name: "Sky Blue", hex: "#94b8d7" }
    ],
    specs: {
      screen: "Smart Digital Percentage Display",
      processor: "ActiveShield 2.0 temperature sensor",
      camera: "N/A",
      battery: "10,000 mAh High-density Lithium Polymer",
      ram: "N/A",
      os: "Qi2 Wireless + 27W Bi-directional USB-C",
      charging: "Charges iPhone 16 up to 1.8 times"
    }
  }
];

class StoreApp {
  constructor() {
    this.products = PRODUCTS;
    this.currentCategory = "All";
    this.searchQuery = "";
    this.sortBy = "featured";
    this.cart = JSON.parse(localStorage.getItem("adam_cart") || "[]");
    this.wishlist = JSON.parse(localStorage.getItem("adam_wishlist") || "[]");
    this.appliedDiscount = 0;
    this.appliedPromoCode = "";

    this.init();
  }

  init() {
    // Current year in footer
    const yr = document.getElementById("currentYear");
    if (yr) yr.textContent = new Date().getFullYear();

    // Render components
    this.setupListeners();
    this.renderProducts();
    this.updateCartCount();
    this.updateWishlistCount();
    this.setupComparisonSection();
    this.startDealCountdown();

    if (window.lucide) {
      window.lucide.createIcons();
    }
  }

  setupListeners() {
    // Search listener (Desktop & Mobile)
    const desktopSearch = document.getElementById("desktopSearchInput");
    const mobileSearch = document.getElementById("mobileSearchInput");
    const clearBtn = document.getElementById("clearSearchBtn");

    const handleSearch = (val) => {
      this.searchQuery = val.trim().toLowerCase();
      if (clearBtn) {
        clearBtn.classList.toggle("hidden", this.searchQuery === "");
      }
      this.renderProducts();
    };

    if (desktopSearch) {
      desktopSearch.addEventListener("input", (e) => {
        handleSearch(e.target.value);
        if (mobileSearch) mobileSearch.value = e.target.value;
      });
    }

    if (mobileSearch) {
      mobileSearch.addEventListener("input", (e) => {
        handleSearch(e.target.value);
        if (desktopSearch) desktopSearch.value = e.target.value;
      });
    }

    if (clearBtn) {
      clearBtn.addEventListener("click", () => {
        if (desktopSearch) desktopSearch.value = "";
        if (mobileSearch) mobileSearch.value = "";
        handleSearch("");
      });
    }

    // Sort select
    const sortSelect = document.getElementById("sortSelect");
    if (sortSelect) {
      sortSelect.addEventListener("change", (e) => {
        this.sortBy = e.target.value;
        this.renderProducts();
      });
    }

    // Category Tabs
    const tabs = document.querySelectorAll(".filter-tab");
    tabs.forEach((tab) => {
      tab.addEventListener("click", () => {
        tabs.forEach((t) => t.classList.remove("active-tab"));
        tab.classList.add("active-tab");
        this.currentCategory = tab.getAttribute("data-cat");
        this.renderProducts();
      });
    });

    // Reset filters
    const resetBtn = document.getElementById("resetFiltersBtn");
    if (resetBtn) {
      resetBtn.addEventListener("click", () => this.resetFilters());
    }

    // Mobile Hamburger
    const mobileBtn = document.getElementById("mobileMenuBtn");
    const mobileMenu = document.getElementById("mobileMenu");
    if (mobileBtn && mobileMenu) {
      mobileBtn.addEventListener("click", () => {
        mobileMenu.classList.toggle("hidden");
      });
      document.querySelectorAll(".mobile-nav-link").forEach((link) => {
        link.addEventListener("click", () => mobileMenu.classList.add("hidden"));
      });
    }

    // Cart Drawer Toggle
    const cartBtn = document.getElementById("cartDrawerBtn");
    const cartBackdrop = document.getElementById("cartDrawerBackdrop");
    if (cartBtn) cartBtn.addEventListener("click", () => this.toggleCartDrawer());
    if (cartBackdrop) cartBackdrop.addEventListener("click", () => this.toggleCartDrawer());

    // Wishlist Toggle
    const wishlistBtn = document.getElementById("wishlistToggleBtn");
    const wishlistBackdrop = document.getElementById("wishlistModalBackdrop");
    if (wishlistBtn) wishlistBtn.addEventListener("click", () => this.toggleWishlistModal());
    if (wishlistBackdrop) wishlistBackdrop.addEventListener("click", () => this.toggleWishlistModal());

    // Quick View Backdrop
    const quickBackdrop = document.getElementById("quickViewBackdrop");
    if (quickBackdrop) quickBackdrop.addEventListener("click", () => this.closeQuickView());

    // Checkout Form
    const checkoutForm = document.getElementById("checkoutForm");
    if (checkoutForm) {
      checkoutForm.addEventListener("submit", (e) => {
        e.preventDefault();
        this.submitCheckout();
      });
    }

    // Contact Form
    const contactForm = document.getElementById("contactForm");
    if (contactForm) {
      contactForm.addEventListener("submit", (e) => {
        e.preventDefault();
        this.showToast("Thank you! Our sales team will WhatsApp/Call you shortly.");
        contactForm.reset();
      });
    }

    // Newsletter Form
    const newsletterForm = document.getElementById("newsletterForm");
    if (newsletterForm) {
      newsletterForm.addEventListener("submit", (e) => {
        e.preventDefault();
        this.showToast("Subscribed! You will get instant alerts on phone price drops.");
        newsletterForm.reset();
      });
    }

    // FAQ Accordion
    const faqButtons = document.querySelectorAll(".faq-btn");
    faqButtons.forEach((btn) => {
      btn.addEventListener("click", () => {
        const content = btn.nextElementSibling;
        const icon = btn.querySelector("i");
        const isOpen = !content.classList.contains("hidden");

        document.querySelectorAll(".faq-content").forEach((c) => c.classList.add("hidden"));
        document.querySelectorAll(".faq-btn i").forEach((i) => (i.style.transform = "rotate(0deg)"));

        if (!isOpen) {
          content.classList.remove("hidden");
          if (icon) icon.style.transform = "rotate(180deg)";
        }
      });
    });
  }

  setCategory(cat) {
    this.currentCategory = cat;
    const tabs = document.querySelectorAll(".filter-tab");
    tabs.forEach((tab) => {
      if (tab.getAttribute("data-cat") === cat) {
        tab.classList.add("active-tab");
      } else {
        tab.classList.remove("active-tab");
      }
    });
    this.renderProducts();
    const phonesSection = document.getElementById("phones");
    if (phonesSection) phonesSection.scrollIntoView({ behavior: "smooth" });
  }

  resetFilters() {
    this.searchQuery = "";
    this.currentCategory = "All";
    const desktopSearch = document.getElementById("desktopSearchInput");
    const mobileSearch = document.getElementById("mobileSearchInput");
    if (desktopSearch) desktopSearch.value = "";
    if (mobileSearch) mobileSearch.value = "";
    const tabs = document.querySelectorAll(".filter-tab");
    tabs.forEach((t) => t.classList.remove("active-tab"));
    if (tabs[0]) tabs[0].classList.add("active-tab");
    this.renderProducts();
  }

  getFilteredProducts() {
    let list = this.products.filter((p) => {
      const matchCat = this.currentCategory === "All" || p.category === this.currentCategory;
      const matchQuery =
        !this.searchQuery ||
        p.name.toLowerCase().includes(this.searchQuery) ||
        p.brand.toLowerCase().includes(this.searchQuery) ||
        p.description.toLowerCase().includes(this.searchQuery) ||
        (p.specs && p.specs.processor && p.specs.processor.toLowerCase().includes(this.searchQuery));
      return matchCat && matchQuery;
    });

    if (this.sortBy === "price-asc") {
      list.sort((a, b) => a.basePrice - b.basePrice);
    } else if (this.sortBy === "price-desc") {
      list.sort((a, b) => b.basePrice - a.basePrice);
    } else if (this.sortBy === "rating") {
      list.sort((a, b) => b.rating - a.rating);
    }

    return list;
  }

  renderProducts() {
    const grid = document.getElementById("productGrid");
    const emptyState = document.getElementById("emptyCatalogState");
    const countLabel = document.getElementById("productCountLabel");
    const resetBtn = document.getElementById("resetFiltersBtn");

    if (!grid) return;

    const filtered = this.getFilteredProducts();

    if (resetBtn) {
      resetBtn.classList.toggle("hidden", this.currentCategory === "All" && !this.searchQuery);
    }

    if (countLabel) {
      countLabel.innerHTML = `Showing <strong class="text-slate-800">${filtered.length}</strong> device${filtered.length === 1 ? "" : "s"}`;
    }

    if (filtered.length === 0) {
      grid.innerHTML = "";
      if (emptyState) emptyState.classList.remove("hidden");
      return;
    }

    if (emptyState) emptyState.classList.add("hidden");

    grid.innerHTML = filtered
      .map((item) => {
        const isWishlisted = this.wishlist.some((w) => w.id === item.id);
        const badgeClass =
          item.badgeType === "discount"
            ? "badge-discount"
            : item.badgeType === "hot"
            ? "bg-brand-navy text-brand-yellow font-black"
            : "badge-new";

        return `
          <div class="product-card bg-white rounded-3xl border border-slate-200 overflow-hidden flex flex-col justify-between group p-3.5 sm:p-5 w-full min-w-0">
            <div>
              <!-- Top Card Header: Brand, Badge, Wishlist -->
              <div class="flex items-center justify-between mb-2 sm:mb-3">
                <span class="text-[11px] sm:text-xs font-bold text-slate-400 tracking-wider uppercase">${item.brand}</span>
                <div class="flex items-center gap-1 sm:gap-1.5">
                  ${
                    item.badge
                      ? `<span class="text-[9px] sm:text-[10px] font-extrabold uppercase px-2 py-0.5 rounded-full shadow-sm ${badgeClass}">${item.badge}</span>`
                      : ""
                  }
                  <button 
                    onclick="app.toggleWishlist(${item.id})" 
                    class="p-1 sm:p-1.5 rounded-full hover:bg-slate-100 transition-colors"
                    title="${isWishlisted ? 'Remove from Wishlist' : 'Add to Wishlist'}"
                  >
                    <i data-lucide="heart" class="w-4 h-4 ${isWishlisted ? 'text-red-500 fill-current' : 'text-slate-400'}"></i>
                  </button>
                </div>
              </div>

              <!-- Product Image Showcase with local image and fallback -->
              <div 
                onclick="app.quickView(${item.id})" 
                class="product-image-container relative aspect-[4/3] rounded-2xl bg-slate-50 overflow-hidden cursor-pointer flex items-center justify-center mb-3 sm:mb-4 border border-slate-100"
              >
                <img 
                  src="${item.image}" 
                  alt="${item.name}" 
                  loading="lazy" 
                  class="w-full h-full object-cover"
                  onerror="this.onerror=null; this.src='assets/phones/iphone16pro.jpg';"
                />
                <div class="absolute inset-0 bg-brand-navy/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span class="bg-white/95 text-brand-navy font-bold text-xs px-3.5 py-1.5 rounded-full shadow-lg flex items-center gap-1">
                    <i data-lucide="eye" class="w-3.5 h-3.5"></i>
                    Specs View
                  </span>
                </div>
              </div>

              <!-- Title & Rating -->
              <div class="mb-2">
                <h3 
                  onclick="app.quickView(${item.id})" 
                  class="font-outfit font-extrabold text-sm sm:text-base lg:text-lg text-slate-900 group-hover:text-amber-600 transition-colors cursor-pointer truncate"
                  title="${item.name}"
                >
                  ${item.name}
                </h3>
                <div class="flex items-center gap-1.5 mt-1">
                  <div class="flex items-center text-amber-400 text-xs">
                    <i data-lucide="star" class="w-3.5 h-3.5 fill-current"></i>
                    <span class="font-bold text-slate-800 ml-1 text-xs">${item.rating}</span>
                  </div>
                  <span class="text-[10px] sm:text-[11px] text-slate-400">(${item.reviews} reviews)</span>
                </div>
              </div>

              <!-- Storage & Color options preview -->
              <div class="space-y-1.5 my-2">
                <div class="flex items-center gap-1 sm:gap-1.5 flex-wrap">
                  ${item.storages
                    .map(
                      (s, idx) => `
                    <span class="storage-pill ${idx === 0 ? 'active' : ''}">${s.size}</span>
                  `
                    )
                    .join("")}
                </div>

                <div class="flex items-center gap-1 pt-1">
                  ${item.colors
                    .map(
                      (c) => `
                    <span class="color-dot" style="background-color: ${c.hex};" title="${c.name}"></span>
                  `
                    )
                    .join("")}
                </div>
              </div>
            </div>

            <!-- Price & Add Actions -->
            <div class="pt-2.5 border-t border-slate-100 mt-2">
              <div class="flex items-baseline justify-between mb-2">
                <div>
                  <span class="text-[9px] sm:text-[10px] text-slate-400 block font-medium">Starting at</span>
                  <div class="flex items-baseline gap-1.5">
                    <span class="font-outfit font-black text-lg sm:text-xl text-brand-navy">$${item.basePrice.toLocaleString()}</span>
                    ${
                      item.oldPrice
                        ? `<span class="text-xs text-slate-400 line-through">$${item.oldPrice.toLocaleString()}</span>`
                        : ""
                    }
                  </div>
                </div>
                <button 
                  onclick="app.addToCart(${item.id})" 
                  class="bg-brand-yellow hover:bg-brand-yellow-hover text-brand-navy font-black text-xs px-3 py-2 rounded-xl shadow-sm transition-transform active:scale-95 flex items-center gap-1"
                >
                  <i data-lucide="shopping-bag" class="w-3.5 h-3.5"></i>
                  <span>Add</span>
                </button>
              </div>

              <!-- Instant WhatsApp buy button -->
              <button 
                onclick="app.directWhatsAppInquiry(${item.id})" 
                class="w-full bg-slate-100 hover:bg-emerald-50 hover:text-emerald-700 text-slate-600 font-bold text-[10px] sm:text-[11px] py-1.5 rounded-lg transition-colors flex items-center justify-center gap-1"
              >
                <i data-lucide="message-circle" class="w-3 h-3 text-emerald-600"></i>
                <span>Direct WhatsApp Order</span>
              </button>
            </div>
          </div>
        `;
      })
      .join("");

    if (window.lucide) {
      window.lucide.createIcons();
    }
  }

  // Quick View Spec Modal
  quickView(id) {
    const item = this.products.find((p) => p.id === id);
    if (!item) return;

    let selectedStorageIndex = 0;
    let selectedColorName = item.colors[0].name;

    const modal = document.getElementById("quickViewModal");
    const backdrop = document.getElementById("quickViewBackdrop");
    const content = document.getElementById("quickViewContent");

    const renderModalContent = () => {
      const currentPrice = item.basePrice + item.storages[selectedStorageIndex].extra;

      content.innerHTML = `
        <button onclick="app.closeQuickView()" class="absolute top-4 right-4 p-2 rounded-full hover:bg-slate-100 text-slate-400 hover:text-slate-700 transition-colors z-20">
          <i data-lucide="x" class="w-5 h-5 sm:w-6 sm:h-6"></i>
        </button>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-8 items-start">
          
          <!-- Image Showcase -->
          <div>
            <div class="aspect-[4/3] rounded-2xl bg-slate-100 overflow-hidden border border-slate-200 p-2">
              <img src="${item.image}" alt="${item.name}" class="w-full h-full object-cover rounded-xl" onerror="this.onerror=null; this.src='assets/phones/iphone16pro.jpg';" />
            </div>
            <div class="mt-3 p-3 rounded-xl bg-amber-50 border border-amber-200/60 text-xs text-amber-900 flex items-center gap-2.5">
              <i data-lucide="shield-check" class="w-5 h-5 text-amber-600 flex-shrink-0"></i>
              <div>
                <p class="font-bold">Original & Sealed Unit</p>
                <p class="text-[10px] text-amber-800">Includes 1-Year manufacturer warranty card & accessories.</p>
              </div>
            </div>
          </div>

          <!-- Product Details & Configuration -->
          <div class="space-y-4">
            <div>
              <span class="text-[11px] font-bold text-amber-600 tracking-wider uppercase">${item.brand} Official</span>
              <h2 class="font-outfit font-black text-xl sm:text-2xl lg:text-3xl text-brand-navy mt-0.5">${item.name}</h2>
              <div class="flex items-center gap-2.5 mt-1.5 flex-wrap">
                <div class="flex items-center text-amber-400 text-xs">
                  <i data-lucide="star" class="w-3.5 h-3.5 fill-current"></i>
                  <span class="font-bold text-slate-800 ml-1">${item.rating}</span>
                </div>
                <span class="text-[11px] text-slate-400">(${item.reviews} reviews)</span>
                <span class="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full">In Stock</span>
              </div>
            </div>

            <!-- Price Display -->
            <div class="flex items-baseline gap-2.5">
              <span class="font-outfit font-black text-2xl sm:text-3xl text-brand-navy">$${currentPrice.toLocaleString()}</span>
              ${
                item.oldPrice
                  ? `<span class="text-xs sm:text-sm text-slate-400 line-through">$${(item.oldPrice + item.storages[selectedStorageIndex].extra).toLocaleString()}</span>`
                  : ""
              }
            </div>

            <p class="text-xs text-slate-600 leading-relaxed">${item.description}</p>

            <!-- Storage Selector -->
            <div>
              <label class="block text-xs font-bold text-slate-700 mb-1.5">Storage Capacity:</label>
              <div class="flex flex-wrap gap-2">
                ${item.storages
                  .map(
                    (s, idx) => `
                  <button 
                    type="button" 
                    class="px-3 py-1.5 rounded-xl text-xs font-bold border transition-all ${
                      idx === selectedStorageIndex
                        ? 'bg-brand-navy text-brand-yellow border-brand-navy shadow-sm'
                        : 'bg-white text-slate-700 border-slate-300 hover:border-slate-400'
                    }"
                    onclick="app.updateQuickStorage(${item.id}, ${idx}, '${selectedColorName}')"
                  >
                    ${s.size} ${s.extra > 0 ? `(+$${s.extra})` : ''}
                  </button>
                `
                  )
                  .join("")}
              </div>
            </div>

            <!-- Color Selector -->
            <div>
              <label class="block text-xs font-bold text-slate-700 mb-1.5">
                Color: <span class="font-extrabold text-brand-navy">${selectedColorName}</span>
              </label>
              <div class="flex items-center gap-2.5">
                ${item.colors
                  .map(
                    (c) => `
                  <button 
                    type="button" 
                    onclick="app.updateQuickColor(${item.id}, ${selectedStorageIndex}, '${c.name}')" 
                    class="w-6 h-6 rounded-full transition-transform ${
                      c.name === selectedColorName ? 'ring-2 ring-brand-yellow ring-offset-2 scale-110' : ''
                    }"
                    style="background-color: ${c.hex};"
                    title="${c.name}"
                  ></button>
                `
                  )
                  .join("")}
              </div>
            </div>

            <!-- Specifications Table -->
            <div class="pt-2 border-t border-slate-200">
              <h4 class="font-outfit font-bold text-[11px] uppercase tracking-wider text-slate-400 mb-2">Key Hardware Specs</h4>
              <div class="grid grid-cols-2 gap-2 text-xs">
                <div class="bg-slate-50 p-2 rounded-xl">
                  <span class="block text-[9px] text-slate-400">Display</span>
                  <span class="font-bold text-slate-800 text-[11px]">${item.specs.screen}</span>
                </div>
                <div class="bg-slate-50 p-2 rounded-xl">
                  <span class="block text-[9px] text-slate-400">Processor</span>
                  <span class="font-bold text-slate-800 text-[11px]">${item.specs.processor}</span>
                </div>
                <div class="bg-slate-50 p-2 rounded-xl">
                  <span class="block text-[9px] text-slate-400">Camera</span>
                  <span class="font-bold text-slate-800 text-[11px]">${item.specs.camera}</span>
                </div>
                <div class="bg-slate-50 p-2 rounded-xl">
                  <span class="block text-[9px] text-slate-400">Battery</span>
                  <span class="font-bold text-slate-800 text-[11px]">${item.specs.battery}</span>
                </div>
              </div>
            </div>

            <!-- Action Buttons -->
            <div class="flex flex-col sm:flex-row gap-2.5 pt-2">
              <button 
                onclick="app.addCustomToCart(${item.id}, '${item.storages[selectedStorageIndex].size}', '${selectedColorName}', ${currentPrice})" 
                class="flex-1 bg-brand-yellow hover:bg-brand-yellow-hover text-brand-navy font-outfit font-black text-xs sm:text-sm py-3 rounded-xl shadow transition-transform active:scale-95 flex items-center justify-center gap-1.5"
              >
                <i data-lucide="shopping-bag" class="w-4 h-4"></i>
                <span>Add to Cart ($${currentPrice})</span>
              </button>
              <button 
                onclick="app.orderCustomViaWhatsApp('${item.name}', '${item.storages[selectedStorageIndex].size}', '${selectedColorName}', ${currentPrice})" 
                class="bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-xs sm:text-sm px-5 py-3 rounded-xl flex items-center justify-center gap-1.5 transition-transform active:scale-95"
              >
                <i data-lucide="message-circle" class="w-4 h-4"></i>
                <span>WhatsApp</span>
              </button>
            </div>

          </div>

        </div>
      `;

      if (window.lucide) {
        window.lucide.createIcons();
      }
    };

    renderModalContent();

    backdrop.classList.remove("hidden");
    modal.classList.remove("hidden");
  }

  updateQuickStorage(id, storageIndex, colorName) {
    this.quickView(id);
  }

  updateQuickColor(id, storageIndex, colorName) {
    this.quickView(id);
  }

  closeQuickView() {
    const modal = document.getElementById("quickViewModal");
    const backdrop = document.getElementById("quickViewBackdrop");
    if (modal) modal.classList.add("hidden");
    if (backdrop) backdrop.classList.add("hidden");
  }

  // Cart Management
  addToCart(id) {
    const item = this.products.find((p) => p.id === id);
    if (!item) return;
    const defaultStorage = item.storages[0].size;
    const defaultColor = item.colors[0].name;
    const price = item.basePrice;
    this.addCustomToCart(id, defaultStorage, defaultColor, price);
  }

  addCustomToCart(id, storage, color, price) {
    const item = this.products.find((p) => p.id === id);
    if (!item) return;

    const existingIndex = this.cart.findIndex(
      (c) => c.id === id && c.storage === storage && c.color === color
    );

    if (existingIndex > -1) {
      this.cart[existingIndex].quantity += 1;
    } else {
      this.cart.push({
        id: item.id,
        name: item.name,
        brand: item.brand,
        image: item.image,
        storage: storage,
        color: color,
        price: price,
        quantity: 1
      });
    }

    this.saveCart();
    this.closeQuickView();
    this.showToast(`Added ${item.name} (${storage}) to your cart!`);
    this.renderCartItems();
    this.toggleCartDrawer(true);
  }

  removeFromCart(index) {
    this.cart.splice(index, 1);
    this.saveCart();
    this.renderCartItems();
  }

  updateCartQty(index, delta) {
    if (!this.cart[index]) return;
    this.cart[index].quantity += delta;
    if (this.cart[index].quantity <= 0) {
      this.cart.splice(index, 1);
    }
    this.saveCart();
    this.renderCartItems();
  }

  saveCart() {
    localStorage.setItem("adam_cart", JSON.stringify(this.cart));
    this.updateCartCount();
  }

  updateCartCount() {
    const totalCount = this.cart.reduce((sum, item) => sum + item.quantity, 0);
    const cartBadge = document.getElementById("cartCountBadge");
    const mobileCartBadge = document.getElementById("mobileCartBadge");

    if (cartBadge) cartBadge.textContent = totalCount;
    if (mobileCartBadge) {
      mobileCartBadge.textContent = totalCount;
      mobileCartBadge.classList.toggle("hidden", totalCount === 0);
    }
  }

  toggleCartDrawer(forceOpen = false) {
    const drawer = document.getElementById("cartDrawer");
    const backdrop = document.getElementById("cartDrawerBackdrop");
    if (!drawer || !backdrop) return;

    const isHidden = drawer.classList.contains("translate-x-full");

    if (isHidden || forceOpen) {
      this.renderCartItems();
      backdrop.classList.remove("hidden");
      drawer.classList.remove("translate-x-full");
    } else {
      drawer.classList.add("translate-x-full");
      backdrop.classList.add("hidden");
    }
  }

  renderCartItems() {
    const list = document.getElementById("cartItemsList");
    const subtotalEl = document.getElementById("cartSubtotal");
    const discountEl = document.getElementById("cartDiscount");
    const totalEl = document.getElementById("cartTotal");
    const checkoutTotal = document.getElementById("checkoutTotalValue");

    if (!list) return;

    if (this.cart.length === 0) {
      list.innerHTML = `
        <div class="text-center py-16 text-slate-400">
          <i data-lucide="shopping-bag" class="w-10 h-10 mx-auto mb-2.5 text-slate-300"></i>
          <p class="font-bold text-slate-700 text-sm">Your cart is empty</p>
          <p class="text-xs text-slate-500 mt-1">Explore our flagship phones and add one!</p>
          <button onclick="app.toggleCartDrawer(); app.setCategory('All')" class="mt-4 bg-brand-yellow text-brand-navy font-bold text-xs px-4 py-2 rounded-xl">
            Browse Phones
          </button>
        </div>
      `;
      if (subtotalEl) subtotalEl.textContent = "$0.00";
      if (discountEl) discountEl.textContent = "-$0.00";
      if (totalEl) totalEl.textContent = "$0.00";
      if (checkoutTotal) checkoutTotal.textContent = "$0.00";
      if (window.lucide) window.lucide.createIcons();
      return;
    }

    const subtotal = this.cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    const discountAmount = (subtotal * this.appliedDiscount) / 100;
    const finalTotal = subtotal - discountAmount;

    list.innerHTML = this.cart
      .map(
        (item, index) => `
        <div class="flex items-center gap-3 bg-white p-2.5 sm:p-3 rounded-2xl border border-slate-200 shadow-sm min-w-0">
          <img src="${item.image}" alt="${item.name}" class="w-14 h-14 object-cover rounded-xl bg-slate-50 flex-shrink-0" onerror="this.onerror=null; this.src='assets/phones/iphone16pro.jpg';" />
          <div class="flex-1 min-w-0">
            <h4 class="font-outfit font-bold text-xs text-slate-900 truncate">${item.name}</h4>
            <p class="text-[10px] text-slate-500">${item.storage} • ${item.color}</p>
            <p class="font-extrabold text-xs text-amber-600 mt-0.5">$${item.price.toLocaleString()}</p>
          </div>
          <div class="flex items-center gap-1 bg-slate-100 rounded-lg p-0.5">
            <button onclick="app.updateCartQty(${index}, -1)" class="w-5 h-5 rounded flex items-center justify-center bg-white text-slate-700 hover:bg-slate-200 text-xs font-bold">-</button>
            <span class="text-xs font-bold px-1 text-slate-800">${item.quantity}</span>
            <button onclick="app.updateCartQty(${index}, 1)" class="w-5 h-5 rounded flex items-center justify-center bg-white text-slate-700 hover:bg-slate-200 text-xs font-bold">+</button>
          </div>
          <button onclick="app.removeFromCart(${index})" class="text-slate-400 hover:text-red-500 p-1">
            <i data-lucide="trash-2" class="w-4 h-4"></i>
          </button>
        </div>
      `
      )
      .join("");

    if (subtotalEl) subtotalEl.textContent = `$${subtotal.toLocaleString()}`;
    if (discountEl) discountEl.textContent = `-$${discountAmount.toLocaleString()}`;
    if (totalEl) totalEl.textContent = `$${finalTotal.toLocaleString()}`;
    if (checkoutTotal) checkoutTotal.textContent = `$${finalTotal.toLocaleString()}`;

    if (window.lucide) {
      window.lucide.createIcons();
    }
  }

  applyPromoCode() {
    const input = document.getElementById("promoCodeInput");
    if (!input) return;
    const code = input.value.trim().toUpperCase();

    if (code === "ADAM10") {
      this.appliedDiscount = 10;
      this.appliedPromoCode = "ADAM10";
      this.showToast("Success! 10% Discount applied with ADAM10");
      this.renderCartItems();
    } else if (code === "") {
      this.showToast("Please enter a valid coupon code.");
    } else {
      this.showToast("Invalid code. Use ADAM10 for 10% OFF!");
    }
  }

  // Wishlist Logic
  toggleWishlist(id) {
    const item = this.products.find((p) => p.id === id);
    if (!item) return;

    const index = this.wishlist.findIndex((w) => w.id === id);
    if (index > -1) {
      this.wishlist.splice(index, 1);
      this.showToast(`Removed ${item.name} from Wishlist`);
    } else {
      this.wishlist.push(item);
      this.showToast(`Saved ${item.name} to Wishlist!`);
    }

    localStorage.setItem("adam_wishlist", JSON.stringify(this.wishlist));
    this.updateWishlistCount();
    this.renderProducts();
  }

  updateWishlistCount() {
    const count = this.wishlist.length;
    const badge = document.getElementById("wishlistBadge");
    const mobileBadge = document.getElementById("mobileWishlistBadge");

    if (badge) {
      badge.textContent = count;
      badge.classList.toggle("hidden", count === 0);
    }
    if (mobileBadge) {
      mobileBadge.textContent = count;
      mobileBadge.classList.toggle("hidden", count === 0);
    }
  }

  toggleWishlistModal() {
    const modal = document.getElementById("wishlistModal");
    const backdrop = document.getElementById("wishlistModalBackdrop");
    const container = document.getElementById("wishlistItemsContainer");

    if (!modal || !backdrop) return;

    const isHidden = modal.classList.contains("hidden");

    if (isHidden) {
      if (this.wishlist.length === 0) {
        container.innerHTML = `
          <div class="text-center py-10 text-slate-400">
            <i data-lucide="heart" class="w-8 h-8 mx-auto mb-2 text-slate-300"></i>
            <p class="font-bold text-slate-700 text-sm">Your wishlist is empty</p>
            <p class="text-xs text-slate-500 mt-0.5">Tap the heart on any phone to save it here.</p>
          </div>
        `;
      } else {
        container.innerHTML = this.wishlist
          .map(
            (item) => `
          <div class="flex items-center justify-between p-2.5 rounded-2xl border border-slate-200 bg-slate-50 min-w-0">
            <div class="flex items-center gap-2.5 min-w-0">
              <img src="${item.image}" alt="${item.name}" class="w-12 h-12 object-cover rounded-xl flex-shrink-0" onerror="this.onerror=null; this.src='assets/phones/iphone16pro.jpg';" />
              <div class="min-w-0">
                <h4 class="font-outfit font-bold text-xs text-slate-900 truncate">${item.name}</h4>
                <p class="font-black text-xs text-amber-600">$${item.basePrice.toLocaleString()}</p>
              </div>
            </div>
            <div class="flex items-center gap-2 flex-shrink-0">
              <button onclick="app.addToCart(${item.id}); app.toggleWishlistModal();" class="bg-brand-yellow text-brand-navy font-bold text-xs px-2.5 py-1.5 rounded-lg">
                Add to Cart
              </button>
              <button onclick="app.toggleWishlist(${item.id}); app.toggleWishlistModal();" class="text-slate-400 hover:text-red-500 p-1">
                <i data-lucide="trash-2" class="w-4 h-4"></i>
              </button>
            </div>
          </div>
        `
          )
          .join("");
      }

      if (window.lucide) window.lucide.createIcons();
      backdrop.classList.remove("hidden");
      modal.classList.remove("hidden");
    } else {
      modal.classList.add("hidden");
      backdrop.classList.add("hidden");
    }
  }

  // Checkout Modal
  openCheckoutModal() {
    if (this.cart.length === 0) {
      this.showToast("Your cart is empty. Add phones first!");
      return;
    }
    this.toggleCartDrawer(false);
    const modal = document.getElementById("checkoutModal");
    const backdrop = document.getElementById("checkoutModalBackdrop");
    if (modal && backdrop) {
      modal.classList.remove("hidden");
      backdrop.classList.remove("hidden");
    }
  }

  closeCheckoutModal() {
    const modal = document.getElementById("checkoutModal");
    const backdrop = document.getElementById("checkoutModalBackdrop");
    if (modal && backdrop) {
      modal.classList.add("hidden");
      backdrop.classList.add("hidden");
    }
  }

  submitCheckout() {
    const name = document.getElementById("custName").value;
    const phone = document.getElementById("custPhone").value;
    const city = document.getElementById("custCity").value;
    const address = document.getElementById("custAddress").value;
    const payment = document.querySelector('input[name="paymentMethod"]:checked').value;

    const subtotal = this.cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    const discount = (subtotal * this.appliedDiscount) / 100;
    const total = subtotal - discount;

    const orderId = "AGL-" + Math.floor(100000 + Math.random() * 900000);

    const itemsList = this.cart
      .map((c) => `• ${c.name} (${c.storage}, ${c.color}) x${c.quantity} - $${c.price * c.quantity}`)
      .join("\n");

    const waText = encodeURIComponent(
      `🛒 *NEW ORDER: ${orderId} - Adam Gadget Link*\n\n` +
        `*Customer Name:* ${name}\n` +
        `*Phone:* ${phone}\n` +
        `*Delivery Address:* ${address}, ${city}\n` +
        `*Payment Method:* ${payment}\n\n` +
        `*Order Items:*\n${itemsList}\n\n` +
        `*Total Amount:* $${total.toLocaleString()}\n` +
        `Please confirm dispatch. Thank you!`
    );

    this.cart = [];
    this.saveCart();
    this.closeCheckoutModal();

    alert(
      `🎉 Thank you ${name}!\nYour order (${orderId}) has been received.\n\nOpening WhatsApp to confirm delivery details with Adam Gadget Link.`
    );

    window.open(`https://wa.me/254700123456?text=${waText}`, "_blank");
  }

  directWhatsAppInquiry(id) {
    const item = this.products.find((p) => p.id === id);
    if (!item) return;
    const text = encodeURIComponent(
      `Hi Adam Gadget Link! I am interested in purchasing:\n\n📱 *${item.name}*\nStarting at: $${item.basePrice}\n\nIs this in stock for same-day delivery?`
    );
    window.open(`https://wa.me/254700123456?text=${text}`, "_blank");
  }

  orderCustomViaWhatsApp(name, storage, color, price) {
    const text = encodeURIComponent(
      `Hi Adam Gadget Link!\nI would like to order:\n\n📱 *${name}*\n• Storage: ${storage}\n• Color: ${color}\n• Price: $${price}\n\nPlease confirm availability and delivery.`
    );
    window.open(`https://wa.me/254700123456?text=${text}`, "_blank");
  }

  orderViaWhatsApp() {
    if (this.cart.length === 0) {
      this.showToast("Your cart is empty. Add a phone first!");
      return;
    }

    const subtotal = this.cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    const discount = (subtotal * this.appliedDiscount) / 100;
    const total = subtotal - discount;

    const itemsList = this.cart
      .map((c) => `• ${c.name} (${c.storage}, ${c.color}) x${c.quantity} - $${c.price * c.quantity}`)
      .join("\n");

    const waText = encodeURIComponent(
      `Hello Adam Gadget Link! I would like to order:\n\n` +
        `${itemsList}\n\n` +
        `*Total:* $${total.toLocaleString()}\n\n` +
        `Please advise on delivery schedule.`
    );

    window.open(`https://wa.me/254700123456?text=${waText}`, "_blank");
  }

  setupComparisonSection() {
    const sel1 = document.getElementById("compareSelect1");
    const sel2 = document.getElementById("compareSelect2");
    if (!sel1 || !sel2) return;

    const phoneOptions = this.products.filter((p) => p.category !== "Accessories");

    sel1.innerHTML = phoneOptions
      .map((p, idx) => `<option value="${p.id}" ${idx === 0 ? "selected" : ""}>${p.name} ($${p.basePrice})</option>`)
      .join("");

    sel2.innerHTML = phoneOptions
      .map((p, idx) => `<option value="${p.id}" ${idx === 1 ? "selected" : ""}>${p.name} ($${p.basePrice})</option>`)
      .join("");

    const updateTable = () => {
      const p1 = this.products.find((p) => p.id === parseInt(sel1.value));
      const p2 = this.products.find((p) => p.id === parseInt(sel2.value));
      this.renderComparisonTable(p1, p2);
    };

    sel1.addEventListener("change", updateTable);
    sel2.addEventListener("change", updateTable);

    updateTable();
  }

  renderComparisonTable(p1, p2) {
    const container = document.getElementById("comparisonTableContainer");
    if (!container || !p1 || !p2) return;

    container.innerHTML = `
      <table class="min-w-[500px] w-full text-left border-collapse text-xs sm:text-sm">
        <thead>
          <tr class="border-b border-slate-200">
            <th class="py-3 px-3 font-outfit font-black text-slate-500 w-1/4">Specs Feature</th>
            <th class="py-3 px-3 w-3/8 text-center bg-white rounded-t-2xl border-x border-t border-slate-200">
              <img src="${p1.image}" alt="${p1.name}" class="w-16 h-16 object-cover rounded-xl mx-auto mb-1.5" onerror="this.onerror=null; this.src='assets/phones/iphone16pro.jpg';" />
              <h4 class="font-outfit font-black text-xs sm:text-sm text-brand-navy">${p1.name}</h4>
              <p class="font-extrabold text-amber-600 text-xs sm:text-sm">$${p1.basePrice}</p>
            </th>
            <th class="py-3 px-3 w-3/8 text-center bg-slate-100 rounded-t-2xl">
              <img src="${p2.image}" alt="${p2.name}" class="w-16 h-16 object-cover rounded-xl mx-auto mb-1.5" onerror="this.onerror=null; this.src='assets/phones/iphone16pro.jpg';" />
              <h4 class="font-outfit font-black text-xs sm:text-sm text-brand-navy">${p2.name}</h4>
              <p class="font-extrabold text-amber-600 text-xs sm:text-sm">$${p2.basePrice}</p>
            </th>
          </tr>
        </thead>
        <tbody class="divide-y divide-slate-200">
          <tr>
            <td class="py-2.5 px-3 font-bold text-slate-600">Display</td>
            <td class="py-2.5 px-3 text-center bg-white border-x border-slate-200 text-slate-800 text-xs">${p1.specs.screen}</td>
            <td class="py-2.5 px-3 text-center bg-slate-50 text-slate-800 text-xs">${p2.specs.screen}</td>
          </tr>
          <tr>
            <td class="py-2.5 px-3 font-bold text-slate-600">Processor</td>
            <td class="py-2.5 px-3 text-center bg-white border-x border-slate-200 font-bold text-slate-900 text-xs">${p1.specs.processor}</td>
            <td class="py-2.5 px-3 text-center bg-slate-50 font-bold text-slate-900 text-xs">${p2.specs.processor}</td>
          </tr>
          <tr>
            <td class="py-2.5 px-3 font-bold text-slate-600">Main Camera</td>
            <td class="py-2.5 px-3 text-center bg-white border-x border-slate-200 text-slate-800 text-xs">${p1.specs.camera}</td>
            <td class="py-2.5 px-3 text-center bg-slate-50 text-slate-800 text-xs">${p2.specs.camera}</td>
          </tr>
          <tr>
            <td class="py-2.5 px-3 font-bold text-slate-600">Battery</td>
            <td class="py-2.5 px-3 text-center bg-white border-x border-slate-200 text-slate-800 text-xs">${p1.specs.battery}</td>
            <td class="py-2.5 px-3 text-center bg-slate-50 text-slate-800 text-xs">${p2.specs.battery}</td>
          </tr>
          <tr>
            <td class="py-2.5 px-3 font-bold text-slate-600">RAM & AI</td>
            <td class="py-2.5 px-3 text-center bg-white border-x border-slate-200 text-slate-800 text-xs">${p1.specs.ram}</td>
            <td class="py-2.5 px-3 text-center bg-slate-50 text-slate-800 text-xs">${p2.specs.ram}</td>
          </tr>
          <tr>
            <td class="py-2.5 px-3 font-bold text-slate-600">Action</td>
            <td class="py-2.5 px-3 text-center bg-white border-x border-b border-slate-200 rounded-b-2xl">
              <button onclick="app.quickView(${p1.id})" class="bg-brand-yellow hover:bg-brand-yellow-hover text-brand-navy font-bold text-xs px-3 py-1.5 rounded-lg transition-all">
                Select
              </button>
            </td>
            <td class="py-2.5 px-3 text-center bg-slate-50 rounded-b-2xl">
              <button onclick="app.quickView(${p2.id})" class="bg-brand-navy hover:bg-brand-navy-light text-brand-yellow font-bold text-xs px-3 py-1.5 rounded-lg transition-all">
                Select
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    `;
  }

  showToast(message) {
    const toast = document.getElementById("toastNotification");
    const msg = document.getElementById("toastMessage");
    if (!toast || !msg) return;

    msg.textContent = message;
    toast.classList.remove("hidden");
    toast.classList.add("toast-animate");

    if (this.toastTimeout) clearTimeout(this.toastTimeout);
    this.toastTimeout = setTimeout(() => {
      toast.classList.add("hidden");
      toast.classList.remove("toast-animate");
    }, 3200);
  }

  startDealCountdown() {
    let secondsLeft = 2 * 86400 + 14 * 3600 + 35 * 60 + 48;

    const tick = () => {
      if (secondsLeft <= 0) return;
      secondsLeft--;

      const days = Math.floor(secondsLeft / 86400);
      const hours = Math.floor((secondsLeft % 86400) / 3600);
      const minutes = Math.floor((secondsLeft % 3600) / 60);
      const seconds = secondsLeft % 60;

      const dEl = document.getElementById("dealDays");
      const hEl = document.getElementById("dealHours");
      const mEl = document.getElementById("dealMinutes");
      const sEl = document.getElementById("dealSeconds");

      if (dEl) dEl.textContent = String(days).padStart(2, "0");
      if (hEl) hEl.textContent = String(hours).padStart(2, "0");
      if (mEl) mEl.textContent = String(minutes).padStart(2, "0");
      if (sEl) sEl.textContent = String(seconds).padStart(2, "0");
    };

    setInterval(tick, 1000);
  }
}

// Instantiate global app
window.app = new StoreApp();
