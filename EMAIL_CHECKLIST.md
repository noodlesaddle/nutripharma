# ✅ Email Setup Checklist

## Quick Checklist

Follow these steps in order:

### 1. Install Resend ✅
```bash
npm install resend
```
**Status**: Already installed (resend@6.5.2)

### 2. Get API Key
- [ ] Go to [resend.com/signup](https://resend.com/signup)
- [ ] Sign up (free account)
- [ ] Go to API Keys tab
- [ ] Click "Create API Key"
- [ ] Copy the key (starts with `re_`)

### 3. Create .env.local
- [ ] Create file `.env.local` in project root
- [ ] Add this line: `RESEND_API_KEY=re_your_key_here`
- [ ] Replace `re_your_key_here` with your actual key
- [ ] Save the file

### 4. Restart Server
- [ ] Stop dev server (Ctrl+C)
- [ ] Start again: `npm run dev`

### 5. Test
- [ ] Go to http://localhost:3000
- [ ] Scroll to contact form
- [ ] Fill out all fields
- [ ] Click "Submit Contact Form"
- [ ] Should see success message
- [ ] Check email at info@nomt-nutripharma.com

## Verification

### Check Terminal Output

**If API key is missing, you'll see:**
```
❌ RESEND_API_KEY is not configured in environment variables
💡 Hint: Add RESEND_API_KEY to .env.local file
```

**If everything is OK:**
No error messages about RESEND_API_KEY

### Check Browser

**Success:**
- Green success message appears
- Form clears
- No errors in console

**Error:**
- Red error message
- Check browser console (F12)
- Check terminal for errors

## Common Issues

### Issue: "Failed to send email"

**Fix:**
1. Check `.env.local` exists
2. Check API key is correct
3. Restart server
4. Try again

### Issue: "Email service not configured"

**Fix:**
1. API key is missing from `.env.local`
2. Add it and restart server

### Issue: Form submits but no email

**Fix:**
1. Check spam folder
2. Check Resend dashboard for delivery status
3. Verify email address is correct

## File Locations

```
nutripharma/
├── .env.local                    ← Create this file here
├── app/
│   └── api/
│       └── contact/
│           └── route.ts          ← API endpoint (already created)
├── components/
│   └── landing/
│       └── ContactSection.tsx    ← Form component (already created)
└── package.json
```

## Example .env.local

```env
RESEND_API_KEY=re_abc123xyz789
```

**Important:**
- No spaces around `=`
- No quotes
- Must be actual API key, not placeholder

## Need Help?

- **Quick fix**: `TROUBLESHOOT_EMAIL.md`
- **Detailed guide**: `EMAIL_SETUP_GUIDE.md`
- **3-minute setup**: `SETUP_EMAIL_NOW.md`

## Status Check

Run this command to verify:

```bash
# Check if .env.local exists
ls -la .env.local

# Check if Resend is installed
npm list resend

# Check if server is running
# Should see: "Ready in X ms"
```

## Success!

When everything works:
- ✅ Form submits successfully
- ✅ Success message appears
- ✅ Email arrives at info@nomt-nutripharma.com
- ✅ No console errors
- ✅ No terminal errors

You're done! 🎉
