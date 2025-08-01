// Theme Management
class ThemeManager {
  constructor() {
    this.themeToggle = document.getElementById("theme-toggle");
    this.body = document.body;
    this.currentTheme = localStorage.getItem("theme") || "light";

    this.init();
  }

  init() {
    this.setTheme(this.currentTheme);
    this.themeToggle.addEventListener("click", () => this.toggleTheme());
  }

  setTheme(theme) {
    this.body.setAttribute("data-theme", theme);
    this.currentTheme = theme;
    localStorage.setItem("theme", theme);

    // Update toggle button icon
    const icon = this.themeToggle.querySelector("i");
    if (theme === "dark") {
      icon.className = "fas fa-sun";
    } else {
      icon.className = "fas fa-moon";
    }
  }

  toggleTheme() {
    const newTheme = this.currentTheme === "light" ? "dark" : "light";
    this.setTheme(newTheme);
  }
}

// Navigation Management
class NavigationManager {
  constructor() {
    this.navbar = document.getElementById("navbar");
    this.navToggle = document.getElementById("nav-toggle");
    this.navMenu = document.getElementById("nav-menu");
    this.navLinks = document.querySelectorAll(".nav-link");

    this.init();
  }

  init() {
    this.navToggle.addEventListener("click", () => this.toggleMobileMenu());
    this.navLinks.forEach((link) => {
      link.addEventListener("click", () => this.closeMobileMenu());
    });

    // Smooth scrolling for navigation links
    this.navLinks.forEach((link) => {
      link.addEventListener("click", (e) => {
        e.preventDefault();
        const targetId = link.getAttribute("href");
        const targetSection = document.querySelector(targetId);

        if (targetSection) {
          const offsetTop = targetSection.offsetTop - 70; // Account for fixed navbar
          window.scrollTo({
            top: offsetTop,
            behavior: "smooth",
          });
        }
      });
    });

    // Navbar scroll effect
    window.addEventListener("scroll", () => this.handleScroll());
  }

  toggleMobileMenu() {
    this.navMenu.classList.toggle("active");
    this.navToggle.classList.toggle("active");
  }

  closeMobileMenu() {
    this.navMenu.classList.remove("active");
    this.navToggle.classList.remove("active");
  }

  handleScroll() {
    if (window.scrollY > 100) {
      this.navbar.style.boxShadow = "0 2px 20px rgba(0, 0, 0, 0.1)";
    } else {
      this.navbar.style.boxShadow = "none";
    }
  }
}

// Project animations and interactions
class ProjectInteractions {
  constructor() {
    this.projectCards = document.querySelectorAll(".project-card");
    this.init();
  }

  init() {
    // Add hover effects and animations for project cards
    this.projectCards.forEach((card) => {
      card.addEventListener("mouseenter", () => {
        card.style.transform = "translateY(-10px)";
      });

      card.addEventListener("mouseleave", () => {
        card.style.transform = "translateY(0)";
      });
    });
  }
}

// Intersection Observer for Animations
class AnimationObserver {
  constructor() {
    this.observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    };

    this.init();
  }

  init() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("fade-in");
        }
      });
    }, this.observerOptions);

    // Observe elements for animation
    const animatedElements = document.querySelectorAll(
      ".project-card, .timeline-item, .skill-item"
    );
    animatedElements.forEach((el) => observer.observe(el));
  }
}

// Contact Form Handler
class ContactForm {
  constructor() {
    this.form = document.getElementById("contact-form");

    this.init();
  }

  init() {
    this.form.addEventListener("submit", (e) => this.handleSubmit(e));
  }

  handleSubmit(e) {
    e.preventDefault();

    const formData = new FormData(this.form);
    const data = Object.fromEntries(formData);

    // Simple validation
    if (!this.validateForm(data)) {
      return;
    }

    // Show success message (in a real app, you'd send this to a server)
    this.showSuccessMessage();
    this.form.reset();
  }

  validateForm(data) {
    const requiredFields = ["name", "email", "subject", "message"];

    for (const field of requiredFields) {
      if (!data[field] || data[field].trim() === "") {
        this.showError(`Please fill in the ${field} field.`);
        return false;
      }
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
      this.showError("Please enter a valid email address.");
      return false;
    }

    return true;
  }

  showSuccessMessage() {
    const message = document.createElement("div");
    message.className = "success-message";
    message.textContent = "Thank you! Your message has been sent successfully.";
    message.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: #10b981;
            color: white;
            padding: 1rem 1.5rem;
            border-radius: 0.5rem;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            z-index: 1000;
            animation: slideIn 0.3s ease;
        `;

    document.body.appendChild(message);

    setTimeout(() => {
      message.remove();
    }, 5000);
  }

  showError(errorMessage) {
    const message = document.createElement("div");
    message.className = "error-message";
    message.textContent = errorMessage;
    message.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: #ef4444;
            color: white;
            padding: 1rem 1.5rem;
            border-radius: 0.5rem;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            z-index: 1000;
            animation: slideIn 0.3s ease;
        `;

    document.body.appendChild(message);

    setTimeout(() => {
      message.remove();
    }, 5000);
  }
}

// Skill Bars Animation
class SkillBars {
  constructor() {
    this.skillBars = document.querySelectorAll(".skill-progress");
    this.init();
  }

  init() {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            this.animateSkillBar(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );

    this.skillBars.forEach((bar) => observer.observe(bar));
  }

  animateSkillBar(bar) {
    const width = bar.style.width;
    bar.style.width = "0%";

    setTimeout(() => {
      bar.style.width = width;
    }, 100);
  }
}

// Smooth Scrolling for all internal links
class SmoothScroller {
  constructor() {
    this.init();
  }

  init() {
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", (e) => {
        e.preventDefault();
        const targetId = anchor.getAttribute("href");
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
          const offsetTop = targetElement.offsetTop - 70;
          window.scrollTo({
            top: offsetTop,
            behavior: "smooth",
          });
        }
      });
    });
  }
}

// Typing Effect for Hero Title
class TypingEffect {
  constructor() {
    this.heroTitle = document.querySelector(".hero-title");
    this.init();
  }

  init() {
    if (!this.heroTitle) return;

    const text = this.heroTitle.textContent;
    this.heroTitle.textContent = "";

    let i = 0;
    const typeWriter = () => {
      if (i < text.length) {
        this.heroTitle.textContent += text.charAt(i);
        i++;
        setTimeout(typeWriter, 100);
      }
    };

    // Start typing effect after a delay
    setTimeout(typeWriter, 1000);
  }
}

// Initialize all components when DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  new ThemeManager();
  new NavigationManager();
  new ProjectInteractions();
  new AnimationObserver();
  new ContactForm();
  new SkillBars();
  new SmoothScroller();
  new TypingEffect();

  // Add CSS for slide-in animation
  const style = document.createElement("style");
  style.textContent = `
        @keyframes slideIn {
            from {
                transform: translateX(100%);
                opacity: 0;
            }
            to {
                transform: translateX(0);
                opacity: 1;
            }
        }
    `;
  document.head.appendChild(style);
});

// Preload critical images
window.addEventListener("load", () => {
  // Add any image preloading logic here if needed
  console.log("Portfolio website loaded successfully!");
});
