# Zero Harm Initiative - Deployment Guide

This guide will help you deploy the Zero Harm Initiative website to Render.com.

## Pre-Deployment Checklist

✅ All HTML files are present and working
✅ Logo image (logo.jpeg) is included
✅ All internal links are functioning
✅ Site has been tested locally
✅ Git repository is initialized

## Option 1: Deploy via Git (Recommended)

### Step 1: Push to GitHub

1. Create a new repository on GitHub
2. Add the remote origin:
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/zero-harm-initiative.git
   ```
3. Add all files:
   ```bash
   git add .
   git commit -m "Initial commit - Zero Harm Initiative website"
   git push -u origin master
   ```

### Step 2: Deploy on Render

1. Go to [Render.com](https://render.com) and sign in
2. Click "New +" → "Static Site"
3. Connect your GitHub account
4. Select the zero-harm-initiative repository
5. Configure:
   - **Name**: zero-harm-initiative
   - **Branch**: master (or main)
   - **Root Directory**: (leave blank)
   - **Build Command**: (leave blank - no build needed)
   - **Publish Directory**: . (current directory)
6. Click "Create Static Site"

Your site will be live at: `https://zero-harm-initiative.onrender.com`

## Option 2: Deploy via Manual Upload

If you prefer not to use Git:

1. Download all files to your local computer
2. Create a ZIP file containing:
   - All HTML files
   - logo.jpeg
   - README.md
3. Use Render's manual deployment option or consider using Netlify Drop

## Post-Deployment Steps

### 1. Custom Domain (Optional)
- In Render dashboard, go to Settings → Custom Domains
- Add your domain (e.g., zeroharminitiative.org)
- Update DNS records as instructed

### 2. SSL Certificate
- Render provides free SSL certificates automatically
- No configuration needed

### 3. Update Contact Information
- Replace placeholder email addresses in contact-page.html
- Update social media links in all footers
- Add real phone numbers if desired

### 4. Payment Integration
- The donate section currently shows alerts
- Integrate with Stripe, PayPal, or similar service
- Update the donate button handlers in index.html

### 5. Analytics (Optional)
- Add Google Analytics or similar tracking
- Insert tracking code in all HTML files before </head>

## Environment Variables

No environment variables are required for the basic static site.

## Monitoring

- Render provides basic analytics and uptime monitoring
- Consider adding:
  - Google Analytics for visitor tracking
  - Uptime monitoring service
  - Error tracking (e.g., Sentry)

## Updates

To update the site:

1. Make changes locally
2. Test thoroughly
3. Commit and push to GitHub:
   ```bash
   git add .
   git commit -m "Update: description of changes"
   git push
   ```
4. Render will automatically redeploy

## Troubleshooting

### Site not loading
- Check Render dashboard for deployment status
- Verify all files are in the repository
- Ensure index.html is in the root directory

### Images not showing
- Verify logo.jpeg is committed to repository
- Check file paths are correct (case-sensitive)

### Links not working
- Test all navigation links
- Ensure all HTML files are present
- Check for typos in filenames

## Support

For deployment issues:
- Render Documentation: https://render.com/docs
- Render Community: https://community.render.com

For site issues:
- Check browser console for errors
- Verify all files are properly linked
- Test in different browsers

## Next Steps

1. Set up a custom domain
2. Integrate real payment processing
3. Add a CMS for easy content updates
4. Implement a contact form backend
5. Add more interactive features

Good luck with your deployment! 🚀