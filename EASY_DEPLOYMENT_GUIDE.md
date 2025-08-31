# Easy Deployment Guide for Zero Harm Initiative 🚀

This guide will help you get your website online for free using GitHub and Render. No technical experience needed!

## What You'll Need
- A computer with internet
- An email address
- Your website files (the `zhi` folder)

---

## Part 1: Create a GitHub Account (5 minutes)

GitHub is like Google Drive but for code. It's free and stores your website files online.

1. **Go to GitHub**
   - Open your browser and go to: https://github.com
   - Click the big "Sign up" button

2. **Create Your Account**
   - Enter your email
   - Create a password (save it somewhere!)
   - Choose a username (like "zeroharmteam" or your name)
   - Complete the puzzle to prove you're human
   - Click "Create account"

3. **Verify Your Email**
   - Check your email
   - Click the verification link GitHub sent you
   - You're done with GitHub signup!

---

## Part 2: Upload Your Website to GitHub (10 minutes)

### Option A: Using GitHub Website (Easier)

1. **Create a New Repository**
   - Once logged in, click the green "New" button (or go to https://github.com/new)
   - Name it: `zero-harm-initiative`
   - Keep it "Public" (so Render can see it)
   - Don't check any boxes
   - Click "Create repository"

2. **Upload Your Files**
   - On the next page, click "uploading an existing file"
   - Drag ALL your website files into the box:
     - All `.html` files
     - `logo.jpeg`
     - `README.md`
   - Write a message like "Adding website files"
   - Click "Commit changes"

### Option B: Using Git Commands (If Option A doesn't work)

1. Open Terminal (Mac) or Command Prompt (Windows)
2. Navigate to your website folder:
   ```
   cd path/to/your/zhi/folder
   ```
3. Run these commands one by one:
   ```
   git remote add origin https://github.com/YOUR_USERNAME/zero-harm-initiative.git
   git branch -M main
   git push -u origin main
   ```
   (Replace YOUR_USERNAME with your GitHub username)

---

## Part 3: Create a Render Account (3 minutes)

Render is the service that will host your website for free.

1. **Go to Render**
   - Open a new tab and go to: https://render.com
   - Click "Get Started" or "Sign up"

2. **Sign Up**
   - Click "Sign up with GitHub" (easiest way!)
   - It will ask to connect to your GitHub
   - Click "Authorize Render"

---

## Part 4: Deploy Your Website (5 minutes)

Almost there! Let's get your site online.

1. **Create New Web Service**
   - In Render dashboard, click "New +" button
   - Select "Static Site"

2. **Connect Your Repository**
   - You'll see your GitHub repositories
   - Click "Connect" next to `zero-harm-initiative`

3. **Configure Your Site**
   Fill in these settings:
   - **Name**: `zero-harm-initiative` (or whatever you want)
   - **Branch**: `main` (or `master` if that's what shows)
   - **Build Command**: (leave empty - just delete any text there)
   - **Publish directory**: `.` (just a period/dot)

4. **Deploy!**
   - Click "Create Static Site"
   - Wait 2-3 minutes while it deploys
   - You'll see "Your site is live!" when done

---

## Part 5: Visit Your Website! 🎉

Your website is now online at:
```
https://zero-harm-initiative.onrender.com
```
(Or whatever name you chose + .onrender.com)

Share this link with everyone!

---

## Troubleshooting

### "I can't see my repository in Render"
- Make sure your GitHub repository is set to "Public" not "Private"
- Try logging out and back into Render

### "My images aren't showing"
- Check that `logo.jpeg` was uploaded to GitHub
- File names are case-sensitive (Logo.jpeg ≠ logo.jpeg)

### "The site looks weird"
- Clear your browser cache (Ctrl+Shift+R on Windows, Cmd+Shift+R on Mac)
- Try a different browser

### "I messed up somewhere"
- Don't worry! You can always delete and start over
- Nothing you do will break anything permanently

---

## Making Updates Later

When you want to change something on your website:

1. **Edit your files** on your computer
2. **Go to your GitHub repository**
3. **Upload the changed files** (drag and drop like before)
4. **Render will automatically update** your site in a few minutes!

---

## Next Steps

1. **Custom Domain** (Optional)
   - Buy a domain like "zeroharminitiative.org" 
   - Add it in Render's settings

2. **Share Your Site**
   - Post on social media
   - Add the link to your Instagram bio
   - Email it to supporters

3. **Keep Improving**
   - Update content regularly
   - Add new pages
   - Get feedback from visitors

---

## Need Help?

- **Render Support**: https://render.com/docs
- **GitHub Help**: https://docs.github.com
- Ask a tech-savvy friend or teacher!

Remember: Everyone starts somewhere. You're doing great by getting this far! 🌟

Good luck with your Zero Harm Initiative! 🐾