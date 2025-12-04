# 🚀 Setup Email in 3 Minutes

## Step 1: Install Resend

```bash
npm install resend
```

## Step 2: Get Your API Key

1. Go to [resend.com/signup](https://resend.com/signup)
2. Sign up (it's free - 100 emails/day)
3. Go to **API Keys** tab
4. Click **Create API Key**
5. Give it a name like "Nutripharma Contact Form"
6. Copy the API key (starts with `re_`)

## Step 3: Create .env.local File

Create a file named `.env.local` in your project root:

```env
RESEND_API_KEY=re_paste_your_key_here
```

**Replace `re_paste_your_key_here` with your actual API key!**

## Step 4: Restart Your Dev Server

```bash
# Stop the current server (Ctrl+C)
# Then start it again:
npm run dev
```

## Step 5: Test It!

1. Go to http://localhost:3000
2. Scroll down to the contact form
3. Fill it out with your details
4. Click "Submit Contact Form"
5. Check `info@nomt-nutripharma.com` for the email!

## That's It! ✅

Your contact form now sends beautiful emails to `info@nomt-nutripharma.com`

## What the Email Looks Like

The recipient will get a professional email with:
- ✅ Nutripharma branding (emerald green header)
- ✅ Name of the person
- ✅ Email (clickable to reply)
- ✅ Phone number (clickable to call)
- ✅ Their message
- ✅ Reply-to automatically set to sender's email

## For Production Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import to Vercel
3. In Vercel project settings:
   - Go to **Settings** → **Environment Variables**
   - Add `RESEND_API_KEY` with your key
   - Click **Save**
4. Redeploy

### Other Platforms

Add `RESEND_API_KEY` environment variable in your platform's dashboard.

## Troubleshooting

### "Cannot find module 'resend'"
**Fix:** Run `npm install resend` and restart dev server

### "RESEND_API_KEY is not defined"
**Fix:** 
1. Make sure `.env.local` exists in project root
2. Check the API key is correct
3. Restart dev server

### Email not received
**Check:**
1. Spam folder
2. Resend dashboard for delivery status
3. Make sure you're under the free tier limit (100/day)

## Need Help?

Check `EMAIL_SETUP_GUIDE.md` for detailed instructions and alternatives.

## Security Note

✅ `.env.local` is already in `.gitignore` - your API key is safe!
❌ Never commit your API key to Git
