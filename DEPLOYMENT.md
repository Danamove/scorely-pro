# Deployment Guide - Scorely Beta

This guide provides step-by-step instructions for deploying Scorely Beta to various platforms.

## 📁 Required Files

Ensure your repository contains all these files:
```
scorely-beta/
├── index.html          # Main application
├── css/style.css       # Styles
├── js/script.js        # JavaScript functionality
├── README.md           # Documentation
├── package.json        # NPM configuration
├── .gitignore         # Git ignore rules
├── netlify.toml       # Netlify configuration
└── DEPLOYMENT.md      # This file
```

## 🚀 Netlify Deployment (Recommended)

### Method 1: Connect GitHub Repository
1. **Push to GitHub**:
   ```bash
   git init
   git add .
   git commit -m "Initial commit - Scorely Beta"
   git branch -M main
   git remote add origin https://github.com/your-username/scorely-beta.git
   git push -u origin main
   ```

2. **Connect to Netlify**:
   - Go to [netlify.com](https://netlify.com)
   - Click "New site from Git"
   - Choose GitHub and select your repository
   - Build settings:
     - Build command: (leave empty)
     - Publish directory: `/`
   - Click "Deploy site"

3. **Custom Domain** (Optional):
   - Go to Site settings > Domain management
   - Add custom domain: `your-domain.com`
   - Configure DNS as instructed

### Method 2: Manual Deploy
1. **Build locally** (if needed):
   ```bash
   # No build step required for static site
   ```

2. **Deploy via Netlify CLI**:
   ```bash
   npm install -g netlify-cli
   netlify deploy --prod --dir .
   ```

3. **Or drag & drop**:
   - Zip all files
   - Go to Netlify dashboard
   - Drag zip file to deploy area

## 🐙 GitHub Pages Deployment

1. **Push to GitHub** (same as above)

2. **Enable GitHub Pages**:
   - Go to repository Settings
   - Scroll to "Pages" section
   - Source: "Deploy from a branch"
   - Branch: `main` / `(root)`
   - Save

3. **Access site**:
   - URL: `https://your-username.github.io/scorely-beta/`
   - May take a few minutes to become available

## 🔧 Vercel Deployment

1. **Install Vercel CLI**:
   ```bash
   npm install -g vercel
   ```

2. **Deploy**:
   ```bash
   vercel --prod
   ```

3. **Or connect GitHub**:
   - Go to [vercel.com](https://vercel.com)
   - Import your GitHub repository
   - Configure build settings (use defaults)
   - Deploy

## 🖥️ Traditional Web Hosting

### Via FTP/SFTP
1. **Prepare files**:
   - No build step required
   - All files are ready for upload

2. **Upload via FTP**:
   ```
   Host: your-server.com
   Username: your-username
   Password: your-password
   Directory: /public_html/ (or your web root)
   ```

3. **Upload all files**:
   - Maintain folder structure
   - Ensure index.html is in root
   - Upload css/ and js/ folders

### Via cPanel File Manager
1. Login to cPanel
2. Open File Manager
3. Navigate to public_html
4. Upload all files maintaining structure
5. Extract if uploaded as zip

## 🔧 Local Development Server

### Option 1: Python Server
```bash
python -m http.server 8000
# Open http://localhost:8000
```

### Option 2: Node.js Server
```bash
npm install -g serve
serve .
# or
npx serve .
```

### Option 3: Live Server (VS Code)
1. Install "Live Server" extension
2. Right-click index.html
3. Select "Open with Live Server"

## ⚙️ Environment Configuration

### Production Settings
No environment variables required - all configuration is done through the UI.

### API Keys
- Users enter their own OpenAI API keys
- Keys are stored in localStorage
- No server-side configuration needed

### CORS Considerations
- Application uses OpenAI API directly from browser
- Ensure API keys have appropriate permissions
- No proxy server required

## 🔍 Testing Deployment

### Pre-deployment Checklist
- [ ] All files present and accessible
- [ ] CSS and JS files loading correctly
- [ ] Navigation between tabs working
- [ ] File upload interfaces functional
- [ ] Form interactions responsive
- [ ] Mobile-responsive design verified

### Post-deployment Testing
1. **Functionality Test**:
   - Upload a sample CSV file
   - Navigate through all tabs
   - Test form inputs and toggles
   - Verify export functionality

2. **Performance Test**:
   - Check page load speed
   - Test on different devices
   - Verify responsive design
   - Check browser compatibility

3. **API Integration Test**:
   - Enter API key in settings
   - Test ranking simulation
   - Verify error handling

## 🐛 Troubleshooting

### Common Deployment Issues

**Files not loading**
- Check file paths are relative
- Ensure folder structure is maintained
- Verify case sensitivity (css/ not CSS/)

**Netlify build fails**
- Ensure netlify.toml is present
- Check build command is empty
- Verify publish directory is "."

**GitHub Pages not updating**
- Check Actions tab for build status
- Ensure main branch is selected
- Wait a few minutes for propagation

**HTTPS mixed content errors**
- Ensure all resources use HTTPS
- OpenAI API uses HTTPS by default
- Check for any HTTP links

### Performance Optimization

**For Large Deployments**:
1. Enable compression in netlify.toml
2. Optimize images (if any added later)
3. Minify CSS/JS for production
4. Use CDN for external libraries

**Caching Strategy**:
- HTML: No cache (dynamic updates)
- CSS/JS: Long cache (version in filename)
- Configure in netlify.toml

## 📊 Analytics Setup (Optional)

### Google Analytics
Add to `<head>` in index.html:
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

### Netlify Analytics
- Enable in Netlify dashboard
- Provides server-side analytics
- No code changes required

## 🔐 Security Headers

Already configured in netlify.toml:
- X-Frame-Options: DENY
- X-XSS-Protection: 1; mode=block
- X-Content-Type-Options: nosniff
- Referrer-Policy: strict-origin-when-cross-origin

## 📞 Support

If you encounter issues during deployment:
1. Check the troubleshooting section above
2. Verify all files are present and correctly named
3. Test locally before deploying
4. Check browser console for errors
5. Contact support with specific error messages

---

**Happy Deploying!** 🚀
