# Bharath Sanga | Software Engineer Portfolio

A modern, responsive portfolio website showcasing my projects, skills, and professional journey as a software engineer.

## Overview

This portfolio is built with vanilla HTML, CSS, and JavaScript to demonstrate clean coding practices and performance optimization. It features a modern design with smooth animations, interactive project filtering, and a fully responsive layout.

## Features

- **Responsive Design**: Optimized for all screen sizes and devices
- **Interactive Navigation**: Smooth scrolling between sections with active state indicators
- **Project Showcase**: Filterable portfolio with categories (Fullstack, Frontend)
- **Modern UI/UX**: Gradient accents, floating animations, and micro-interactions
- **Performance Optimized**: Lightweight vanilla JavaScript with no external dependencies
- **Accessibility**: Semantic HTML5 structure with proper ARIA labels

## Project Structure

```
Portfolio-2026/
|-- index.html          # Main HTML structure
|-- style.css           # Complete styling with CSS Grid/Flexbox
|-- script.js           # Interactive functionality and project data
|-- assets/             # Static assets
|   |-- Bharath_sanga_resume.pdf
|   |-- icons/
|   |-- images/
|-- README.md           # This file
```

## Technologies Used

- **HTML5**: Semantic markup with modern elements
- **CSS3**: 
  - CSS Grid and Flexbox for layouts
  - Custom properties for theming
  - Smooth transitions and animations
  - Mobile-first responsive design
- **JavaScript (ES6+)**:
  - DOM manipulation
  - Event handling
  - Project filtering system
  - Smooth scrolling navigation

## Sections

1. **Hero Section**: Introduction with call-to-action buttons and animated cards
2. **Portfolio**: Filterable project showcase with GitHub links
3. **About**: Skills, technical stack, and specializations
4. **Education**: Academic journey timeline
5. **Contact**: Social links and contact information

## Getting Started

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- Local web server (optional, for development)

### Installation
1. Clone or download this repository
2. Navigate to the project directory
3. Open `index.html` in your browser

For development:
```bash
# Using Python's built-in server
python -m http.server 8000

# Or using Node.js (if installed)
npx serve .
```

Then visit `http://localhost:8000`

## Customization

### Adding Projects
Edit the `projectData` array in `script.js`:

```javascript
{
    title: "Your Project Name",
    type: "fullstack", // or "frontend"
    info: "Brief description of your project",
    github: "https://github.com/username/repo"
}
```

### Modifying Styles
All styles are in `style.css` with clear section comments:
- Navigation bar styles
- Hero section animations
- Project grid layouts
- Responsive breakpoints

### Updating Content
Edit `index.html` to modify:
- Personal information
- Section content
- Contact details
- Social media links

## Performance

- **Lighthouse Score**: 95+ (Performance, Accessibility, Best Practices, SEO)
- **Load Time**: < 2 seconds on 3G networks
- **Bundle Size**: < 100KB (optimized images and minified code)

## Browser Support

- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

## Deployment

This portfolio can be deployed to any static hosting service:
- GitHub Pages
- Netlify
- Vercel
- Firebase Hosting
- Any web server with static file serving

## Contact

- **Email**: bharathsanga511@gmail.com
- **LinkedIn**: [bharath-sanga-292695305](https://www.linkedin.com/in/bharath-sanga-292695305)
- **GitHub**: [Bharath-123-code](https://github.com/Bharath-123-code)

## License

This project is open source and available under the [MIT License](LICENSE).

---

Built with passion by Bharath Sanga | Software Engineer | Anantapur, India
