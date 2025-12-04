# 📧 Email Setup Guide for Contact Form

Your contact form is now configured to send emails to `info@nomt-nutripharma.com`!

## Quick Setup (5 minutes)

### Step 1: Install Resend

```bash
npm install resend
```

### Step 2: Get Your Resend API Key

1. Go to [resend.com](https://resend.com)
2. Sign up for a free account (100 emails/day free)
3. Go to **API Keys** in the dashboard
4. Click **Create API Key**
5. Copy your API key

### Step 3: Add API Key to Environment Variables

Create or update `.env.local` in your project root:

```env
RESEND_API_KEY=re_your_api_key_here
```

**Important**: Add `.env.local` to your `.gitignore` to keep your API key secret!

### Step 4: Test It!

```bash
npm run dev
```

1. Go to http://localhost:3000
2. Scroll to the contact form
3. Fill it out and submit
4. Check `info@nomt-nutripharma.com` for the email!

## What Happens Now

When someone submits the contact form:

1. ✅ Form data is validated
2. ✅ Email is sent to `info@nomt-nutripharma.com`
3. ✅ Beautiful HTML email with all details
4. ✅ Reply-to is set to the sender's email
5. ✅ User sees success/error message

## Email Template

The email includes:
- **Name** of the person
- **Email** (clickable to reply)
- **Phone** (clickable to call)
- **Message** with their request
- Professional Nutripharma branding

## Using Your Own Domain (Optional)

For production, you should use your own domain instead of `onboarding@resend.dev`:

### Step 1: Add Your Domain to Resend

1. Go to Resend dashboard
2. Click **Domains**
3. Click **Add Domain**
4. Enter your domain (e.g., `nomt-nutripharma.com`)
5. Add the DNS records they provide to your domain

### Step 2: Update the API Route

In `app/api/contact/route.ts`, change:

```tsx
from: 'Nutripharma Contact Form <onboarding@resend.dev>',
```

To:

```tsx
from: 'Nutripharma Contact Form <noreply@nomt-nutripharma.com>',
```

## Alternative: Using SendGrid

If you prefer SendGrid instead:

### Install SendGrid

```bash
npm install @sendgrid/mail
```

### Update API Route

Replace the content of `app/api/contact/route.ts`:

```typescript
import { NextRequest, NextResponse } from 'next/server';
import sgMail from '@sendgrid/mail';

sgMail.setApiKey(process.env.SENDGRID_API_KEY!);

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, request: message } = body;

    if (!name || !email || !phone || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    const msg = {
      to: 'info@nomt-nutripharma.com',
      from: 'noreply@nomt-nutripharma.com', // Must be verified in SendGrid
      replyTo: email,
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    };

    await sgMail.send(msg);

    return NextResponse.json(
      { message: 'Email sent successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    );
  }
}
```

### Add SendGrid API Key

In `.env.local`:

```env
SENDGRID_API_KEY=SG.your_api_key_here
```

## Alternative: Using Nodemailer (SMTP)

If you have your own email server:

### Install Nodemailer

```bash
npm install nodemailer
```

### Update API Route

```typescript
import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransporter({
  host: process.env.SMTP_HOST,
  port: parseInt(process.env.SMTP_PORT || '587'),
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, request: message } = body;

    if (!name || !email || !phone || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    await transporter.sendMail({
      from: '"Nutripharma Contact Form" <noreply@nomt-nutripharma.com>',
      to: 'info@nomt-nutripharma.com',
      replyTo: email,
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    return NextResponse.json(
      { message: 'Email sent successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    );
  }
}
```

### Add SMTP Credentials

In `.env.local`:

```env
SMTP_HOST=smtp.your-email-provider.com
SMTP_PORT=587
SMTP_USER=your-email@nomt-nutripharma.com
SMTP_PASS=your-password
```

## Deployment

### For Vercel

1. Go to your project settings
2. Navigate to **Environment Variables**
3. Add `RESEND_API_KEY` (or your chosen service key)
4. Redeploy your project

### For Other Platforms

Add the environment variable in your platform's dashboard:
- Netlify: Site settings → Environment variables
- Railway: Project → Variables
- AWS/Azure: Application settings

## Testing

### Test Locally

```bash
# Start dev server
npm run dev

# Fill out the form at http://localhost:3000
# Check your email!
```

### Test in Production

After deployment:
1. Visit your live site
2. Fill out the contact form
3. Submit
4. Check `info@nomt-nutripharma.com`

## Troubleshooting

### "Failed to send email"

**Check:**
- API key is correct in `.env.local`
- Resend account is active
- You haven't exceeded free tier limits (100/day)
- Server is restarted after adding env vars

### Email not received

**Check:**
- Spam folder
- Email address is correct: `info@nomt-nutripharma.com`
- Resend dashboard for delivery status
- API logs in Resend dashboard

### "Module not found: resend"

**Fix:**
```bash
npm install resend
# Restart dev server
npm run dev
```

### Environment variable not found

**Fix:**
1. Make sure `.env.local` exists in project root
2. Restart dev server after adding env vars
3. Check spelling: `RESEND_API_KEY`

## Security Best Practices

✅ **Do:**
- Keep API keys in `.env.local`
- Add `.env.local` to `.gitignore`
- Use environment variables in production
- Validate all form inputs
- Rate limit the API endpoint (optional)

❌ **Don't:**
- Commit API keys to Git
- Expose API keys in client-side code
- Skip input validation
- Allow unlimited submissions

## Rate Limiting (Optional)

To prevent spam, add rate limiting:

```bash
npm install @upstash/ratelimit @upstash/redis
```

Update `app/api/contact/route.ts`:

```typescript
import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";

const ratelimit = new Ratelimit({
  redis: Redis.fromEnv(),
  limiter: Ratelimit.slidingWindow(5, "1 h"), // 5 requests per hour
});

export async function POST(request: NextRequest) {
  const ip = request.ip ?? "127.0.0.1";
  const { success } = await ratelimit.limit(ip);

  if (!success) {
    return NextResponse.json(
      { error: "Too many requests. Please try again later." },
      { status: 429 }
    );
  }

  // ... rest of your code
}
```

## Cost

### Resend (Recommended)
- **Free**: 100 emails/day, 3,000/month
- **Pro**: $20/month for 50,000 emails
- Perfect for most businesses

### SendGrid
- **Free**: 100 emails/day
- **Essentials**: $19.95/month for 50,000 emails

### Nodemailer
- **Free** if you have your own email server
- Requires SMTP server setup

## Support

- **Resend Docs**: https://resend.com/docs
- **SendGrid Docs**: https://docs.sendgrid.com
- **Nodemailer Docs**: https://nodemailer.com

## Summary

1. ✅ Install Resend: `npm install resend`
2. ✅ Get API key from resend.com
3. ✅ Add to `.env.local`: `RESEND_API_KEY=your_key`
4. ✅ Test the form
5. ✅ Deploy with environment variable

Your contact form is now production-ready! 🎉
