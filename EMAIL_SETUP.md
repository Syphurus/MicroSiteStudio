# Email Setup Instructions for Contact Form

## 📧 Gmail App Password Setup

To enable the contact form to send emails, you need to set up a Gmail App Password. Follow these steps:

### Step 1: Enable 2-Factor Authentication

1. Go to your Google Account settings: https://myaccount.google.com/
2. Click on "Security" in the left sidebar
3. Under "Signing in to Google", enable "2-Step Verification" if not already enabled
4. Complete the 2-factor authentication setup

### Step 2: Generate App Password

1. In the same Security section, look for "App passwords"
2. Click on "App passwords"
3. You might need to sign in again
4. Select "Mail" as the app and "Other (custom name)" as the device
5. Enter "Microsite Studio Contact Form" as the custom name
6. Click "Generate"
7. Google will show you a 16-character password (like: abcd efgh ijkl mnop)

### Step 3: Update Environment Variables

1. Open the `.env.local` file in your project root
2. Replace the placeholder values:
   ```env
   GMAIL_USER=studiomicrosite@gmail.com
   GMAIL_APP_PASSWORD=your-16-character-app-password
   ```
3. Save the file

### Step 4: Restart Development Server

After updating the environment variables, restart your development server:

```bash
npm run dev
```

## 🧪 Testing the Contact Form

1. Navigate to the contact section on your website
2. Fill out all required fields
3. Submit the form
4. You should receive:
   - An email at `studiomicrosite@gmail.com` with the form submission details
   - A thank you email will be sent to the person who submitted the form

## ⚠️ Important Security Notes

- Never commit your `.env.local` file to version control
- The `.env.local` file is already in `.gitignore`
- Keep your App Password secure - treat it like a regular password
- If you suspect the password is compromised, revoke it and generate a new one

## 🔧 Troubleshooting

If emails aren't sending:

1. **Check Environment Variables**: Make sure they're correctly set in `.env.local`
2. **Check Gmail Settings**: Ensure 2-factor authentication is enabled
3. **Check App Password**: Ensure it's correct (16 characters with no spaces)
4. **Check Console**: Look for error messages in the browser console or terminal
5. **Check Spam Folder**: Sometimes emails go to spam initially

## 📋 What Happens When Form is Submitted

1. **Validation**: The form validates all required fields
2. **API Call**: Sends data to `/api/contact` endpoint
3. **Admin Email**: Sends a detailed email to `studiomicrosite@gmail.com`
4. **Thank You Email**: Sends a thank you email to the customer
5. **Success Message**: Shows success message on the website
6. **Form Reset**: Clears the form for next submission

## 🎨 Customization

You can customize the email templates by editing the functions in:
`/src/app/api/contact/route.ts`

- `getAdminEmailTemplate()` - Email you receive with form details
- `getClientEmailTemplate()` - Thank you email sent to customers
