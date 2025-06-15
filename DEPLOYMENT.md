# Deployment Guide

## Quick Fix for Common Deployment Errors

### 1. Clear Dependencies and Reinstall
\`\`\`bash
# Remove node_modules and package-lock.json
rm -rf node_modules package-lock.json

# Clear npm cache
npm cache clean --force

# Reinstall dependencies
npm install
\`\`\`

### 2. Build Locally First
\`\`\`bash
# Test build locally
npm run build

# Test preview
npm run preview
\`\`\`

### 3. Check Node.js Version
Make sure you're using Node.js 18+ locally and on Vercel:

\`\`\`json
// Add to package.json
{
  "engines": {
    "node": ">=18.0.0",
    "npm": ">=8.0.0"
  }
}
\`\`\`

### 4. Vercel Deployment Steps

1. **Push to GitHub:**
\`\`\`bash
git add .
git commit -m "Fix deployment issues"
git push origin main
\`\`\`

2. **Redeploy on Vercel:**
- Go to your Vercel dashboard
- Click "Redeploy" on your project
- Or trigger a new deployment by pushing to GitHub

### 5. Environment Variables (if needed)
Add these to Vercel dashboard under Settings > Environment Variables:
- `NODE_VERSION`: `18.x`
- `NPM_VERSION`: `8.x`

## Troubleshooting

### Build Errors
- Check that all imports are correct
- Ensure TypeScript types are properly defined
- Verify all dependencies are in package.json

### Runtime Errors
- Check browser console for JavaScript errors
- Verify all images and assets are accessible
- Test responsive design on different screen sizes

### Performance Issues
- Images are optimized with placeholder.svg
- Code splitting is configured in vite.config.js
- CSS is optimized with Tailwind purging
