# John Doe - Software Engineer Portfolio

A modern, responsive portfolio website built with React and TypeScript, showcasing professional experience, skills, and projects.

## Features

- 🎨 Modern and clean design with smooth animations
- 📱 Fully responsive layout for all devices
- ⚡ Fast loading with optimized performance
- 🎯 Interactive sections: Hero, About, Experience, Skills, Projects, Contact
- 📧 Contact form with form validation
- 🌙 Smooth scrolling navigation
- 🎨 Beautiful gradient designs and hover effects

## Technologies Used

- **React 18** - Modern React with hooks
- **TypeScript** - Type-safe JavaScript
- **CSS3** - Custom styling with modern features
- **HTML5** - Semantic markup
- **Responsive Design** - Mobile-first approach

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd candidate-profile
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Available Scripts

- `npm start` - Runs the app in development mode
- `npm run build` - Builds the app for production
- `npm test` - Launches the test runner
- `npm run eject` - Ejects from Create React App (one-way operation)

## Project Structure

```
src/
├── components/          # React components
│   ├── Header.tsx      # Navigation header
│   ├── Hero.tsx        # Hero section
│   ├── About.tsx       # About section
│   ├── Experience.tsx  # Work experience timeline
│   ├── Skills.tsx      # Skills and expertise
│   ├── Projects.tsx    # Featured projects
│   ├── Contact.tsx     # Contact form
│   └── Footer.tsx      # Footer section
├── App.tsx             # Main App component
├── index.tsx           # Entry point
└── index.css           # Global styles
```

## Customization

### Personal Information

Update the following files to customize the portfolio with your information:

1. **Personal Details**: Update `src/components/Hero.tsx`, `src/components/About.tsx`, and `src/components/Contact.tsx`
2. **Experience**: Modify the `experiences` array in `src/components/Experience.tsx`
3. **Skills**: Update the `skillCategories` array in `src/components/Skills.tsx`
4. **Projects**: Modify the `projects` array in `src/components/Projects.tsx`

### Styling

- Global styles are in `src/index.css`
- Component-specific styles are in their respective `.css` files
- Color scheme can be customized by updating CSS variables and gradient values

## Deployment

### Build for Production

```bash
npm run build
```

This creates a `build` folder with optimized production files.

### Deploy to Various Platforms

- **Netlify**: Drag and drop the `build` folder
- **Vercel**: Connect your GitHub repository
- **GitHub Pages**: Use `gh-pages` package
- **AWS S3**: Upload the `build` folder contents

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is open source and available under the [MIT License](LICENSE).

## Contact

John Doe - john.doe@example.com

Project Link: [https://github.com/yourusername/candidate-profile](https://github.com/yourusername/candidate-profile)
