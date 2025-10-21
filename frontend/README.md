# YouTube Clone

A modern React-based YouTube UI clone with dark/light theme support, responsive design, and Material-UI components.

## Table of Contents

- [Badges](#badges)
- [Features](#features)
- [Getting Started](#getting-started)
- [Usage](#usage)
- [Tests](#tests)
- [Build & Deployment](#build--deployment)
- [Project Structure](#project-structure)
- [Environment Configuration](#environment-configuration)
- [Contributing](#contributing)
- [License](#license)
- [Troubleshooting](#troubleshooting)
- [Changelog](#changelog)
- [Contact](#contact)
- [Missing Info](#missing-info)

## Features

- **Responsive YouTube-like UI** with sidebar navigation and main content area
- **Dark/Light theme toggle** with styled-components theming system
- **React Router navigation** with multiple pages (Home, Video, SignIn)
- **Video player integration** with YouTube embed support
- **Interactive components**:
  - Video cards with thumbnails and metadata
  - Search functionality in navbar
  - Comments system with user avatars
  - Like/dislike and share buttons
  - Channel subscription interface
- **Material-UI icons** for consistent iconography
- **Styled-components** for component-based styling
- **Modern React 19** with hooks and functional components

## Getting Started

### Prerequisites

- Node.js (version 18.0.0 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository:

```bash
git clone https://github.com/NewtonY-dev/youtube-clone.git
cd youtube-clone
```

2. Install dependencies:

```bash
npm install
```

### Environment Variables

No environment variables are currently required. The application runs with static data and YouTube embeds.

### How to Run Locally

1. Start the development server:

```bash
npm run dev
```

2. Open your browser and navigate to `http://localhost:5173`

3. Alternative start command (if using Create React App):

```bash
npm start
```

## Usage

### Available Routes

- `/` - Home page with video grid
- `/signin` - User authentication page
- `/video/:id` - Individual video player page

### Example Usage

1. **Browse videos**: Navigate to the home page to see the video grid
2. **Watch videos**: Click on any video card to open the video player
3. **Toggle theme**: Use the theme toggle in the sidebar menu
4. **Search**: Use the search bar in the top navigation
5. **Sign in**: Click the "SIGN IN" button to access the authentication page

## Tests

Currently, no test suite is configured. To add testing:

```bash
# Install testing dependencies (example)
npm install --save-dev @testing-library/react @testing-library/jest-dom jest

# Run tests (when configured)
npm test
```

## Build & Deployment

### Production Build

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

### Deployment Options

The built files in the `dist` directory can be deployed to any static hosting service:

- **Vercel**: `vercel --prod`
- **Netlify**: Drag and drop the `dist` folder
- **GitHub Pages**: Use GitHub Actions to deploy
- **AWS S3**: Upload `dist` contents to an S3 bucket

## Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Card.jsx         # Video card component
│   ├── Comment.jsx      # Individual comment component
│   ├── Comments.jsx     # Comments section container
│   ├── Menu.jsx         # Sidebar navigation menu
│   └── Navbar.jsx       # Top navigation bar
├── pages/               # Page components
│   ├── Home.jsx         # Home page with video grid
│   ├── SignIn.jsx       # Authentication page
│   └── Video.jsx        # Video player page
├── utils/               # Utility functions and configurations
│   └── Theme.jsx        # Dark/light theme definitions
├── assets/              # Static assets
├── img/                 # Image files
│   └── logo.png         # Application logo
├── App.jsx              # Main application component
├── main.jsx             # Application entry point
└── index.css            # Global styles
```

## Environment Configuration

No environment variables are currently required. The application uses:

- Static video data and placeholder content
- YouTube embed URLs for video playback
- Local theme configuration in `src/utils/Theme.jsx`

## Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add some amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

### PR Checklist

- [ ] Code follows the existing style guidelines
- [ ] ESLint passes without errors (`npm run lint`)
- [ ] Components are properly documented
- [ ] No console errors in browser
- [ ] Responsive design works on mobile and desktop

## License

MIT License

Copyright (c) 2025 [Newton Yetsedaw]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

## Troubleshooting

### Common Issues

1. **Port already in use**: Change the port in `vite.config.js` or kill the process using port 5173
2. **Module not found**: Run `npm install` to ensure all dependencies are installed
3. **ESLint errors**: Run `npm run lint` to check for code style issues
4. **Build fails**: Check for TypeScript errors or missing dependencies

### Development Tips

- Use React Developer Tools for debugging
- Check browser console for runtime errors
- Ensure all imports are correct and files exist

## Changelog

### Version 0.0.0 (Initial Release)

- Initial YouTube clone implementation
- Dark/light theme support
- Basic routing and navigation
- Video player integration
- Comments system

## Contact

**Project Maintainer**: [Newton Yetsedaw](mailto:yetsedawn@gmail.com)

**Repository**: [GitHub - youtube-clone](https://github.com/NewtonY-dev/youtube-clone)
