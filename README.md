# Prasanna's Portfolio

A modern, responsive portfolio website built with React, SCSS, and Vite. Features multiple pages including Home, About, Projects, Resume, and Contact sections.

## 🚀 Features

- **Multi-page Portfolio** - Home, About, Projects, Resume, Contact
- **Responsive Design** - Works perfectly on all devices
- **Modern UI/UX** - Clean, professional design with smooth animations
- **Resume Download** - Direct PDF download functionality
- **Contact Form** - Interactive contact form
- **Project Showcase** - Featured projects with live demos and GitHub links
- **SPA Routing** - Smooth navigation between pages

## 🛠️ Technologies Used

- **React 18** - Modern React with hooks
- **React Router** - Client-side routing
- **SCSS** - Advanced CSS with variables and mixins
- **Vite** - Fast build tool and development server
- **GitHub Pages** - Free hosting
- **Netlify** - Alternative hosting option

## 📦 Installation

```bash
# Clone the repository
git clone https://github.com/prasannawarad/portfolio.git

# Navigate to the project directory
cd portfolio

# Install dependencies
npm install

# Start development server
npm run dev
```

## 🚀 Deployment

### GitHub Pages

The project is configured for GitHub Pages deployment:

```bash
# Deploy to GitHub Pages
npm run deploy
```

**Features:**
- Automatic SPA routing handling
- Custom domain support (prasannawarad.com)
- Base path configuration for repository name

### Netlify

For Netlify deployment, the project includes:

- `netlify.toml` - Build configuration
- `public/_redirects` - SPA routing rules

**Deploy to Netlify:**
1. Connect your GitHub repository to Netlify
2. Build command: `npm run build`
3. Publish directory: `dist`
4. Deploy automatically on push to master

## 📁 Project Structure

```
portfolio/
├── public/
│   ├── _redirects          # Netlify SPA routing
│   └── 404.html           # GitHub Pages SPA routing
├── src/
│   ├── components/
│   │   ├── Navbar.jsx     # Navigation component
│   │   └── Scss/
│   │       └── Navbar.scss
│   ├── pages/
│   │   ├── Home.jsx       # Home page
│   │   ├── About.jsx      # About page
│   │   ├── Contact.jsx    # Contact page
│   │   ├── Resume.jsx     # Resume page
│   │   ├── Projects.jsx   # Projects page
│   │   └── Scss/
│   │       ├── Home.scss
│   │       ├── About.scss
│   │       ├── Contact.scss
│   │       ├── Resume.scss
│   │       └── Projects.scss
│   ├── routes/
│   │   └── AppRoutes.jsx  # Route configuration
│   ├── App.jsx            # Main app component
│   └── main.jsx           # Entry point
├── Resume/
│   └── resume.pdf         # Resume PDF file
├── CNAME                  # Custom domain
├── netlify.toml          # Netlify configuration
└── package.json
```

## 🌐 Live Demo

- **GitHub Pages**: https://prasannawarad.github.io/portfolio/
- **Custom Domain**: https://prasannawarad.com

## 📝 Customization

### Update Personal Information
- Edit content in each page component
- Update contact information in `Contact.jsx`
- Modify project details in `Projects.jsx`
- Replace resume PDF in `Resume/` folder

### Styling
- Modify SCSS variables in each `.scss` file
- Update color scheme, fonts, and spacing
- Customize animations and transitions

### Deployment
- Update `package.json` homepage URL for different repository names
- Modify `vite.config.js` base path if needed
- Update CNAME file for custom domain

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

Built with ❤️ by Prasanna Warad