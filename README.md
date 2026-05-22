# Easy Apply

<img width="873" height="491" alt="1779446738857" src="https://github.com/user-attachments/assets/e3ddf74a-87f0-4abd-a1fa-2b7e47907832" />


A lightweight open-source job application helper built with Next.js and Nodemailer.

Easy Apply was created to reduce repetitive manual work when applying for jobs. Instead of repeatedly attaching CVs, editing email bodies, and sending the same format manually, this app lets you quickly send personalized application emails with minimal input.

## Features

* Simple and lightweight UI
* Send job application emails directly from your Gmail account
* Automatically attach:

  * CV
  * Cover Letter
* Dynamic email template binding using placeholders
* HTML and plain text email template support
* Fully open source
* Free to host on Vercel
* Mobile-friendly workflow

---

# Tech Stack

* Next.js
* Vercel

---

# How It Works

1. Enter recruiter/company email
2. Enter the position you are applying for
3. Click Send

The app will:

* Load your CV from the `/public` folder
* Load your cover letter from the `/public` folder
* Replace template placeholders
* Send the email automatically

---

# Project Structure

```bash
/public
  ├── cv.pdf
  └── cover-letter.pdf

/app/templates
  └── email-template.html
```

---

# Clone the Repository

```bash
git clone https://github.com/DanushkaMadush/EasyApply.git
```

```bash
cd easy-apply
```

Install dependencies:

```bash
npm install
```

---

# Configure Your Files

## 1. Add Your CV

Replace:

```bash
/public/cv.pdf
```

with your own CV file.

---

## 2. Add Your Cover Letter

Replace:

```bash
/public/cover-letter.pdf
```

with your own cover letter.

---

## 3. Customize the Email Template

Edit:

```bash
/app/templates/email-template.html
```

Example placeholder:

```html
Applying for {{position}}
```

The application automatically replaces:

```bash
{{position}}
```

with the position entered in the UI.

You can fully customize the template to match your own writing style.

---

# Gmail Setup (Required)

This project uses Gmail SMTP with Nodemailer.

Google requires:

* 2-Step Verification enabled
* App Password generation

<img width="1888" height="923" alt="image" src="https://github.com/user-attachments/assets/fd4cfcdb-9a89-4031-beca-cc4338bdf001" />


---

## Step 1 — Enable 2-Step Verification

Enable here:

https://myaccount.google.com/security

---

## Step 2 — Generate Gmail App Password

Generate App Password here:

https://myaccount.google.com/apppasswords

Create a new app password and copy it.

---

# Environment Variables

Create a file:

```bash
.env.local
```

Add:

```env
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-google-app-password
```

Never commit `.env.local` to GitHub.

---

# Run Locally

```bash
npm run dev
```

Open:

```bash
http://localhost:3000
```

---

# Production Build

```bash
npm run build
```

---

# Deploy to Vercel

This project can be hosted completely free using Vercel.

## Step 1 — Push to GitHub

Create a public repository and push your code.

---

## Step 2 — Import into Vercel

Go to:

https://vercel.com/

Import your GitHub repository.

<img width="1891" height="895" alt="image" src="https://github.com/user-attachments/assets/a616658b-f1e0-41af-96f1-ccd24a884812" />

---

## Step 3 — Add Environment Variables

Inside Vercel Project Settings:

```env
EMAIL_USER=
EMAIL_PASS=
```

---

## Step 4 — Deploy

Click Deploy.

That’s it.

---

# Mobile Usage

After deployment, you can bookmark the app on your phone and use it almost like a lightweight mobile app.

## iPhone / Safari

1. Open the deployed URL in Safari
2. Tap Share
3. Tap “Add to Home Screen”

Now Easy Apply works similarly to a web app from your home screen.

---

# Security Notes

* Never commit `.env.local`
* Never expose your Gmail App Password
* Use GitHub Secrets or Vercel Environment Variables in production
* Recommended to use a dedicated Gmail account for sending applications

---

# Roadmap

Planned improvements:

* Multiple CV support
* Multiple templates
* Better personalization
* Non-developer setup flow
* Better mobile experience
* Email history/tracking

---

# Contributing

Contributions, improvements, and suggestions are welcome.

Feel free to:

* Fork the project
* Open issues
* Submit pull requests

---

# License

MIT License

---

# Why I Built This

Applying for jobs became repetitive:

* attach CV
* attach cover letter
* copy-paste email
* replace position
* send

So I built a simple tool to remove that repetitive friction while keeping the process customizable and developer-friendly.
