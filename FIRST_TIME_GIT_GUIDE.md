# First-Time Git Setup Guide 🚀

This guide will help you upload your Zero Harm Initiative website from the ZIP backup to GitHub for the first time.

## Before You Start
Make sure you have:
- ✅ The ZIP file extracted to a folder
- ✅ A GitHub account (created at github.com)
- ✅ Git installed on your computer

---

## Step 1: Extract Your ZIP File
1. Find `zero-harm-initiative-complete.zip`
2. Right-click → "Extract All" (Windows) or double-click (Mac)
3. Note where you extracted it (like Desktop or Documents)

---

## Step 2: Open Terminal/Command Prompt
- **Windows**: Press `Windows + R`, type `cmd`, press Enter
- **Mac**: Press `Cmd + Space`, type `terminal`, press Enter

---

## Step 3: Navigate to Your Project Folder
Type this command (replace the path with your actual folder location):

```bash
cd C:\Users\YourName\Desktop\zero-harm-initiative
```

Or if on Mac:
```bash
cd ~/Desktop/zero-harm-initiative
```

**Tip**: After typing `cd `, you can drag the folder into the terminal to auto-fill the path!

---

## Step 4: Initialize Git (First Time Only)
Run these commands one by one:

```bash
git init
```
This creates a new Git repository.

```bash
git add .
```
This adds all your files to Git (the dot means "everything").

```bash
git commit -m "Initial commit - Zero Harm Initiative website"
```
This saves your files in Git with a message.

---

## Step 5: Create Repository on GitHub
1. Go to https://github.com
2. Click the green "New" button (or go to https://github.com/new)
3. Fill in:
   - **Repository name**: `zero-harm-initiative`
   - **Description**: "Website for Zero Harm Initiative - Animal rights organization"
   - Choose: **Public**
   - ⚠️ **IMPORTANT**: Do NOT check any boxes (no README, no .gitignore, no license)
4. Click "Create repository"

---

## Step 6: Connect and Push to GitHub
After creating the repository, GitHub will show you commands. Use these:

```bash
git remote add origin https://github.com/YOUR_USERNAME/zero-harm-initiative.git
```
(Replace YOUR_USERNAME with your actual GitHub username)

```bash
git branch -M main
```
This renames your branch to 'main'.

```bash
git push -u origin main
```
This uploads everything to GitHub!

---

## Step 7: Authenticate
When you run the push command:
1. A browser window will pop up
2. Log into GitHub if needed
3. Click "Authorize"
4. Return to terminal - it should be uploading!

---

## If You Get Errors:

### "remote origin already exists"
```bash
git remote remove origin
git remote add origin https://github.com/YOUR_USERNAME/zero-harm-initiative.git
```

### "failed to push some refs"
```bash
git push -u origin main --force
```

### "git is not recognized"
You need to install Git first:
- Windows: Download from https://git-scm.com
- Mac: It usually comes installed, or install via Homebrew

---

## Success! 🎉
When it works, you'll see something like:
```
Enumerating objects: 17, done.
Counting objects: 100% (17/17), done.
Writing objects: 100% (17/17), 79.54 KiB | 2.21 MiB/s, done.
To https://github.com/YOUR_USERNAME/zero-harm-initiative.git
 * [new branch]      main -> main
```

Your files are now on GitHub! Go to your repository URL to see them:
```
https://github.com/YOUR_USERNAME/zero-harm-initiative
```

---

## Next Step: Deploy to Render
Now that your files are on GitHub, follow the EASY_DEPLOYMENT_GUIDE.md to get your website live!

---

## Quick Command Summary
Here are all the commands in order for easy copy-paste:

```bash
cd path/to/your/folder
git init
git add .
git commit -m "Initial commit - Zero Harm Initiative website"
git remote add origin https://github.com/YOUR_USERNAME/zero-harm-initiative.git
git branch -M main
git push -u origin main
```

Good luck! You've got this! 🌟