# Shauryaveer Narwal - Portfolio Website

A sleek, modern portfolio website built with Jekyll and GitHub Pages. Features a responsive design, dark/light theme toggle, smooth animations, and a professional layout showcasing projects, experience, and skills.

## 🚀 Features

- **Modern Design**: Clean, minimal design with generous white space and refined typography
- **Responsive Layout**: Fully responsive design that works on all devices
- **Dark/Light Theme**: Toggle between light and dark themes with persistent preference
- **Smooth Animations**: Subtle fade-ins, hover effects, and scroll-triggered animations
- **Project Gallery**: Filterable project showcase with hover overlays
- **Experience Timeline**: Professional timeline with company logos and achievements
- **Skills Visualization**: Animated skill bars with progress indicators
- **Contact Form**: Functional contact form with validation
- **Sticky Navigation**: Fixed navbar with smooth scrolling
- **SEO Optimized**: Meta tags, Open Graph, and Twitter Card support

## 🛠️ Technologies Used

- **Jekyll**: Static site generator
- **HTML5 & CSS3**: Modern markup and styling
- **JavaScript (ES6+)**: Interactive functionality
- **Font Awesome**: Icons
- **Google Fonts**: Typography (Inter font family)
- **GitHub Pages**: Hosting and deployment

## 🚀 Getting Started

### Prerequisites

- Ruby (version 2.5.0 or higher)
- RubyGems
- GCC and Make

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/yourusername/portfolio.git
   cd portfolio
   ```

2. **Install Jekyll and dependencies**

   ```bash
   bundle install
   ```

3. **Run the development server**

   ```bash
   bundle exec jekyll serve
   ```

4. **Open your browser**
   Navigate to `http://localhost:4000` to view your portfolio

### Local Development

The site will automatically reload when you make changes to files. Jekyll watches for changes and rebuilds the site accordingly.

## 📝 Customization

### Personal Information

Update the following files with your information:

1. **`_config.yml`**: Update site title, description, email, and social media links
2. **`index.html`**: Modify hero section, about content, and experience details
3. **`_projects/`**: Add your own project files with front matter

### Styling

- **Colors**: Modify CSS variables in `assets/css/main.css` for theme colors
- **Fonts**: Change the Google Fonts import in `_layouts/default.html`
- **Layout**: Adjust grid layouts and spacing in the CSS file

### Adding Projects

Create new project files in the `_projects/` directory with the following front matter:

```yaml
---
title: "Project Title"
description: "Project description"
category: "web|mobile|ai"
technologies: ["Tech1", "Tech2", "Tech3"]
image: "/assets/images/projects/project-image.jpg"
live_url: "https://project-url.com"
github_url: "https://github.com/username/project"
---
```

### Adding Experience

Update the experience section in `index.html` with your work history:

```html
<div class="timeline-item">
  <div class="timeline-marker"></div>
  <div class="timeline-content">
    <div class="timeline-header">
      <div class="company-logo">
        <i class="fas fa-building"></i>
      </div>
      <div class="timeline-info">
        <h3>Your Position</h3>
        <h4>Company Name</h4>
        <span class="timeline-date">2022 - Present</span>
      </div>
    </div>
    <ul class="timeline-bullets">
      <li>Achievement 1</li>
      <li>Achievement 2</li>
      <li>Achievement 3</li>
    </ul>
  </div>
</div>
```

## 🎨 Theme Customization

### Color Scheme

The website uses CSS custom properties for easy theming. Update these variables in `assets/css/main.css`:

```css
:root {
  --primary-color: #2563eb; /* Main brand color */
  --accent-color: #f59e0b; /* Accent color */
  --text-primary: #1e293b; /* Primary text color */
  --bg-primary: #ffffff; /* Primary background */
  /* ... more variables */
}
```

### Dark Theme

Dark theme colors are defined under `[data-theme="dark"]` selector. Modify these to customize the dark theme appearance.

## 📱 Responsive Design

The website is fully responsive with breakpoints at:

- **Desktop**: 1200px and above
- **Tablet**: 768px - 1199px
- **Mobile**: Below 768px

## 🚀 Deployment

### GitHub Pages

1. **Push to GitHub**

   ```bash
   git add .
   git commit -m "Initial portfolio setup"
   git push origin main
   ```

2. **Enable GitHub Pages**

   - Go to your repository settings
   - Navigate to "Pages" section
   - Select "Deploy from a branch"
   - Choose "main" branch and "/ (root)" folder
   - Click "Save"

3. **Custom Domain (Optional)**
   - Add your custom domain in the Pages settings
   - Update `_config.yml` with your domain URL

### Other Hosting Options

The site can be deployed to any static hosting service:

- Netlify
- Vercel
- AWS S3
- Firebase Hosting

## 🔧 Configuration

### Jekyll Settings

Key settings in `_config.yml`:

```yaml
title: "Your Name"
email: "your.email@example.com"
description: "Your portfolio description"
baseurl: "" # Leave empty for root domain
url: "https://yourdomain.com" # Your domain URL
```

### Plugins

The site uses these Jekyll plugins:

- `jekyll-feed`: RSS feed generation
- `jekyll-seo-tag`: SEO optimization

## 📊 Performance

The website is optimized for performance:

- Minified CSS and JavaScript
- Optimized images (recommended)
- Lazy loading for images
- Efficient animations using CSS transforms
- Minimal external dependencies

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Jekyll](https://jekyllrb.com/) for the static site generator
- [Font Awesome](https://fontawesome.com/) for icons
- [Google Fonts](https://fonts.google.com/) for typography
- [GitHub Pages](https://pages.github.com/) for hosting

## 📞 Contact

Shauryaveer Narwal - [shauryaveer.narwal@example.com](mailto:shauryaveer.narwal@example.com)

Project Link: [https://github.com/yourusername/portfolio](https://github.com/yourusername/portfolio)

---

⭐ If you found this portfolio template helpful, please give it a star!
