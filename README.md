## 🛠️ Technologies Used

### Frontend

- **HTML5**: Semantic markup and modern structure
- **CSS3**:
  - CSS Custom Properties (variables) for theme management
  - Flexbox and Grid for responsive layouts
  - CSS animations and transitions
  - Media queries for responsive design
- **JavaScript (ES6+)**:
  - Classes and modules for organized code
  - LocalStorage for theme persistence
  - Intersection Observer API for scroll animations
  - Event handling and DOM manipulation

### Design & UX

- **Google Fonts**: Inter font family for modern typography
- **Font Awesome**: Comprehensive icon library
- **CSS Variables**: Dynamic theming system
- **Smooth Scrolling**: Native CSS scroll-behavior

### Deployment & Hosting

- **GitHub Pages**: Free static hosting
- **Jekyll**: Static site generator (optional, for blog functionality)

## 🚀 Features

- **Modern Design**: Clean, minimal design with generous white space
- **Responsive Layout**: Fully responsive design that works on all devices
- **Dark/Light Theme**: Toggle between themes with persistent preference
- **Smooth Animations**: Fade-ins, hover effects, and scroll-triggered animations
- **Project Gallery**: Interactive project showcase with hover overlays
- **Experience Timeline**: Professional timeline with company logos
- **Sticky Navigation**: Fixed navbar with smooth scrolling
- **SEO Optimized**: Meta tags, Open Graph, and Twitter Card support

## 📋 How to Use This Template

### 1. Fork or Clone the Repository

```bash
git clone https://github.com/shaurya10n/portfolio.git
cd portfolio
```

### 2. Customize Your Information

#### Update Personal Details

- **`index-static.html`**: Main content file
  - Update hero section with your name and title
  - Modify about section with your description
  - Replace profile image in `assets/images/`
  - Update social media links in footer

#### Replace Images

- **Profile Photo**: Replace `assets/images/Headshot.png`
- **Company Logos**: Replace images in `assets/images/` for your experience
- **Project Screenshots**: Add your project images to `assets/images/`

#### Update Projects Section

Replace the project cards in `index-static.html` with your own projects. Each project should include:

- Project image in `assets/images/`
- Project title and description
- Technologies used (as tech tags)
- Links to GitHub/live demo

#### Update Experience Section

Replace the timeline items with your work experience. Each experience should include:

- Company logo in `assets/images/`
- Position title and company name
- Date range
- Key achievements and responsibilities

### 3. Customize Styling

#### Theme Colors

Update CSS variables in `assets/css/main.css` to customize colors for both light and dark themes.

#### Fonts

Change the Google Fonts import in the HTML head to use your preferred font family.

### 4. Deploy to GitHub Pages

1. **Create a new repository** on GitHub
2. **Push your changes**:

```bash
git init
git add .
git commit -m "Initial portfolio setup"
git branch -M main
git remote add origin https://github.com/yourusername/your-repo-name.git
git push -u origin main
```

3. **Enable GitHub Pages**:

   - Go to repository Settings → Pages
   - Select "Deploy from a branch"
   - Choose "main" branch and "/ (root)" folder
   - Click "Save"

4. **Custom Domain** (Optional):
   - Add your domain in Pages settings
   - Update `CNAME` file with your domain

### 5. Local Development

For local development, you can use any static server:

```bash
# Using Python
python3 -m http.server 8000

# Using Node.js (if you have npx)
npx serve .

# Using PHP
php -S localhost:8000
```

Then visit `http://localhost:8000` in your browser.

### Responsive Design

The site uses mobile-first responsive design:

- **Desktop**: 1200px and above
- **Tablet**: 768px - 1199px
- **Mobile**: Below 768px

⭐ If you found this portfolio template helpful, please give it a star!
