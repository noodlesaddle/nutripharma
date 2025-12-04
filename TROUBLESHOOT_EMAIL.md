# 🔧 Troubleshooting Email Issues

## Error: "Failed to send email. Please try again later."

This error means the email service isn't configured properly. Here's how to fix it:

## Step-by-Step Fix

### Step 1: Check if .env.local exists

In your project root, check if `.env.local` file exists:

```bash
ls -la .env.local
```

**If it doesn't exist**, create it:

```bash
touch .env.local
```

### Step 2: Add your Resend API key

Open `.env.local` and add:

```env
RESEND_API_KEY=re_your_actual_api_key_here
```

**Don't have an API key yet?** Get one:

1. Go to [resend.com/signup](https://resend.com/signup)
2. Sign up (free - 100 emails/day)
3. Go to **API Keys** tab
4. Click **Create API Key**
5. Copy the key (starts with `re_`)
6. Paste it in `.env.local`

### Step 3: Restart your dev server

**Important**: Environment variables are only loaded when the server starts!

```bash
# Stop the server (Ctrl+C)
# Then start it again:
npm run dev
```

### Step 4: Test again

1. Go to http://localhost:3000
2. Fill out the contact form
3. Submit

It should work now! ✅

## Still Not Working?

### Check 1: API Key Format

Your `.env.local` should look exactly like this:

```env
RESEND_API_KEY=re_abc123xyz789
```

**Common mistakes:**
- ❌ `RESEND_API_KEY = re_abc123` (spaces around =)
- ❌ `RESEND_API_KEY="re_abc123"` (quotes)
- ❌ `RESEND_API_KEY=your_key_here` (placeholder text)
- ✅ `RESEND_API_KEY=re_abc123xyz789` (correct)

### Check 2: File Location

`.env.local` must be in the **project root**, not in a subfolder:

```
nutripharma/
├── .env.local          ✅ Here
├── app/
├── components/
├── package.json
└── ...
```

**Not here:**
- ❌ `app/.env.local`
- ❌ `components/.env.local`

### Check 3: Server Console

Look at your terminal where `npm run dev` is running. You should see:

**If API key is missing:**
```
❌ RESEND_API_KEY is not configured in environment variables
💡 Hint: Add RESEND_API_KEY to .env.local file
```

**If API key is present:**
No error messages about RESEND_API_KEY

### Check 4: Browser Console

Open browser DevTools (F12) → Console tab

**Look for:**
- Network errors
- API response details
- Any error messages

### Check 5: Network Tab

In DevTools → Network tab:

1. Submit the form
2. Look for `/api/contact` request
3. Click on it
4. Check **Response** tab

**Common responses:**

**Missing API key:**
```json
{
  "error": "Email service not configured. Please contact administrator."
}
```
**Fix**: Add API key to `.env.local` and restart server

**Invalid API key:**
```json
{
  "error": "Failed to send email. Please try again later."
}
```
**Fix**: Check your API key is correct in Resend dashboard

**Success:**
```json
{
  "message": "Email sent successfully",
  "id": "abc123..."
}
```

## Detailed Checklist

- [ ] Resend package installed (`npm list resend`)
- [ ] `.env.local` file exists in project root
- [ ] `RESEND_API_KEY=re_...` is in `.env.local`
- [ ] No spaces or quotes around the API key
- [ ] Dev server restarted after adding API key
- [ ] API key is valid (check Resend dashboard)
- [ ] Not exceeding free tier (100 emails/day)

## Test Your Setup

### Test 1: Check Environment Variable

Add this to `app/api/contact/route.ts` temporarily:

```typescript
export async function POST(request: NextRequest) {
  console.log('🔍 API Key present:', !!process.env.RESEND_API_KEY);
  console.log('🔍 API Key starts with:', process.env.RESEND_API_KEY?.substring(0, 5));
  // ... rest of code
}
```

**Expected output in terminal:**
```
🔍 API Key present: true
🔍 API Key starts with: re_ab
```

**If you see:**
```
🔍 API Key present: false
🔍 API Key starts with: undefined
```

Then the API key isn't being loaded. Check `.env.local` location and restart server.

### Test 2: Manual API Test

Create a test file `test-email.js`:

```javascript
const { Resend } = require('resend');

const resend = new Resend(process.env.RESEND_API_KEY);

async function test() {
  try {
    const { data, error } = await resend.emails.send({
      from: 'Test <onboarding@resend.dev>',
      to: ['info@nomt-nutripharma.com'],
      subject: 'Test Email',
      html: '<p>This is a test</p>',
    });

    if (error) {
      console.error('❌ Error:', error);
    } else {
      console.log('✅ Success:', data);
    }
  } catch (err) {
    console.error('❌ Exception:', err);
  }
}

test();
```

Run it:
```bash
node test-email.js
```

## Common Errors & Solutions

### Error: "Cannot find module 'resend'"

**Solution:**
```bash
npm install resend
npm run dev
```

### Error: "Invalid API key"

**Solution:**
1. Go to [resend.com/api-keys](https://resend.com/api-keys)
2. Check your API key is active
3. Copy it again
4. Update `.env.local`
5. Restart server

### Error: "Rate limit exceeded"

**Solution:**
You've sent more than 100 emails today (free tier limit).
- Wait until tomorrow
- Or upgrade to paid plan

### Error: "Domain not verified"

**Solution:**
You're using a custom domain that isn't verified.
- Use `onboarding@resend.dev` for testing
- Or verify your domain in Resend dashboard

## Quick Reference

### Correct .env.local format:
```env
RESEND_API_KEY=re_abc123xyz789
```

### Get API key:
https://resend.com/api-keys

### Check if working:
Look at terminal for error messages when submitting form

### Restart server:
```bash
# Ctrl+C to stop
npm run dev
```

## Still Stuck?

### Check these files:

1. **`.env.local`** - API key location
2. **`app/api/contact/route.ts`** - API endpoint
3. **Terminal output** - Error messages
4. **Browser console** - Client errors

### Verify:

```bash
# Check Resend is installed
npm list resend

# Should show:
# resend@6.5.2

# Check .env.local exists
cat .env.local

# Should show:
# RESEND_API_KEY=re_...
```

## Need More Help?

1. Check Resend documentation: https://resend.com/docs
2. Check Resend status: https://status.resend.com
3. Review `EMAIL_SETUP_GUIDE.md` for detailed setup
4. Check `SETUP_EMAIL_NOW.md` for quick setup

## Success Indicators

✅ **Working correctly when:**
- Form submits without errors
- Success message appears
- Email arrives at info@nomt-nutripharma.com
- No errors in terminal
- No errors in browser console

## Summary

**Most common issue**: `.env.local` file doesn't exist or API key not set

**Quick fix**:
1. Create `.env.local` in project root
2. Add `RESEND_API_KEY=re_your_key`
3. Restart dev server
4. Test form

That should fix it! 🎉
