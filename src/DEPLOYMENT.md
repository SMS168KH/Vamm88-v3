# GitHub Pages Deployment Guide for VAM88 Casino Website

## Prerequisites
- A GitHub account
- Git installed on your local machine
- Node.js and npm installed

## Step-by-Step Deployment Instructions

### 1. Create a GitHub Repository

1. Go to [GitHub](https://github.com) and log in
2. Click the "+" icon in the top right and select "New repository"
3. Name your repository (e.g., `vam88-casino` or `your-username.github.io` for a personal site)
4. Choose "Public" visibility
5. **Do NOT** initialize with README, .gitignore, or license (we already have files)
6. Click "Create repository"

### 2. Prepare Your Local Project

Open your terminal in your project directory and run:

```bash
# Initialize git repository (if not already done)
git init

# Add all files
git add .

# Create your first commit
git commit -m "Initial commit: VAM88 Casino website"

# Add your GitHub repository as remote (replace with your actual repository URL)
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO-NAME.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### 3. Configure GitHub Pages

#### Option A: Using GitHub Actions (Recommended)

1. Go to your repository on GitHub
2. Click "Settings" tab
3. Click "Pages" in the left sidebar
4. Under "Build and deployment":
   - Source: Select "GitHub Actions"
5. The workflow file `.github/workflows/deploy.yml` will automatically deploy your site

#### Option B: Manual Branch Deployment

1. Go to your repository on GitHub
2. Click "Settings" tab
3. Click "Pages" in the left sidebar
4. Under "Build and deployment":
   - Source: Select "Deploy from a branch"
   - Branch: Select "gh-pages" and "/ (root)"
   - Click "Save"

### 4. Wait for Deployment

- GitHub Actions will automatically build and deploy your site
- This usually takes 1-3 minutes
- You can monitor the progress in the "Actions" tab of your repository
- Once complete, your site will be available at: `https://YOUR-USERNAME.github.io/YOUR-REPO-NAME/`

### 5. Custom Domain (Optional)

If you want to use a custom domain like `www.vam88.net`:

1. Buy a domain from a domain registrar (e.g., Namecheap, GoDaddy, Google Domains)
2. In your domain's DNS settings, add these records:
   ```
   Type: A
   Host: @
   Value: 185.199.108.153
   
   Type: A
   Host: @
   Value: 185.199.109.153
   
   Type: A
   Host: @
   Value: 185.199.110.153
   
   Type: A
   Host: @
   Value: 185.199.111.153
   
   Type: CNAME
   Host: www
   Value: YOUR-USERNAME.github.io
   ```
3. In your GitHub repository settings under "Pages", enter your custom domain
4. Wait for DNS propagation (can take up to 48 hours, but usually faster)
5. Enable "Enforce HTTPS" once the domain is verified

## Updating Your Website

After making changes to your website:

```bash
# Stage your changes
git add .

# Commit with a descriptive message
git commit -m "Description of your changes"

# Push to GitHub
git push origin main
```

GitHub Actions will automatically rebuild and redeploy your site.

## Troubleshooting

### Build Fails
- Check the "Actions" tab for error messages
- Ensure all dependencies are properly listed
- Review the deployment logs for specific errors

### Site Not Loading
- Wait 5-10 minutes after first deployment
- Clear your browser cache
- Check that GitHub Pages is enabled in repository settings
- Verify the correct branch is selected

### Images Not Showing
- Ensure image URLs are absolute or properly referenced
- Check browser console for 404 errors
- Verify Unsplash images are loading correctly

### Routing Issues
- The site uses hash-based routing which works well with GitHub Pages
- If you see routing issues, ensure the base path is correctly configured

## Important Notes

⚠️ **Legal & Compliance**: This is a demo/promotional website. Ensure you have:
- Proper gambling licenses for your jurisdiction
- Age verification systems
- Responsible gambling tools
- Privacy policy and terms of service
- Compliance with local gambling laws

⚠️ **Security**: 
- Never commit API keys or sensitive credentials
- Use environment variables for sensitive data
- This is a frontend-only site - no actual transactions occur

## Support

For issues with:
- **GitHub Pages**: Check [GitHub Pages documentation](https://docs.github.com/en/pages)
- **Deployment**: Review the Actions logs in your repository
- **Code Issues**: Check the browser console for errors

## Repository Structure

```
vam88-casino/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions deployment workflow
├── components/                  # React components
├── contexts/                    # React contexts
├── styles/                      # CSS styles
├── translations/                # Multi-language support
├── App.tsx                      # Main application
├── DEPLOYMENT.md               # This file
└── vite.config.ts              # Build configuration
```

---

**Your VAM88 Casino website will be live at:**
`https://YOUR-USERNAME.github.io/YOUR-REPO-NAME/`

Replace `YOUR-USERNAME` with your GitHub username and `YOUR-REPO-NAME` with your repository name.
