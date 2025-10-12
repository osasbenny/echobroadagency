# Contact Form Setup Instructions (SMTP Version)

## Overview
The contact form on the EchoBroad Agency website uses PHPMailer with SMTP to send emails to info@echobroad.com. This method works on shared hosting where PHP `mail()` is disabled.

## Files
- **Frontend**: `src/pages/Contact.jsx` - React component with the contact form
- **Backend**: `public/contact-handler.php` - PHP script that processes form submissions using PHPMailer
- **Configuration**: `public/smtp-config.php` - SMTP credentials and settings
- **Library**: `public/PHPMailer/` - PHPMailer library files

## Deployment Instructions

### 1. Server Requirements
- PHP 7.0 or higher
- Web server (Apache, Nginx, etc.)
- SMTP server access (your domain's SMTP or third-party like Gmail, Office365)

### 2. Upload Files
Upload the entire `dist` folder to your web server, including:
- All HTML, CSS, and JavaScript files
- The `contact-handler.php` file
- The `smtp-config.php` file
- The `PHPMailer/` directory with all its files

**Important**: Ensure the following structure on your server:
```
/public_html/ (or your web root)
├── index.html
├── assets/
├── images/
├── contact-handler.php
├── smtp-config.php
└── PHPMailer/
    ├── PHPMailer.php
    ├── SMTP.php
    └── Exception.php
```

### 3. Configure SMTP Settings

Edit the `smtp-config.php` file with your actual SMTP credentials:

```php
return [
    'smtp_host' => 'mail.echobroad.com',        // Your SMTP server
    'smtp_port' => 587,                          // 587 for TLS, 465 for SSL
    'smtp_username' => 'info@echobroad.com',     // Your email address
    'smtp_password' => 'YOUR_ACTUAL_PASSWORD',   // Your email password
    'smtp_encryption' => 'tls',                  // tls or ssl
    'from_email' => 'info@echobroad.com',
    'from_name' => 'EchoBroad Agency',
    'recipient_email' => 'info@echobroad.com',
    'smtp_debug' => 0                            // Set to 2 for debugging
];
```

### 4. SMTP Configuration Examples

#### For cPanel/Shared Hosting:
```php
'smtp_host' => 'mail.echobroad.com',
'smtp_port' => 587,
'smtp_username' => 'info@echobroad.com',
'smtp_password' => 'your_password',
'smtp_encryption' => 'tls',
```

#### For Gmail:
```php
'smtp_host' => 'smtp.gmail.com',
'smtp_port' => 587,
'smtp_username' => 'your-email@gmail.com',
'smtp_password' => 'your_app_password',  // Use App Password, not regular password
'smtp_encryption' => 'tls',
```

#### For Office365/Outlook:
```php
'smtp_host' => 'smtp.office365.com',
'smtp_port' => 587,
'smtp_username' => 'your-email@outlook.com',
'smtp_password' => 'your_password',
'smtp_encryption' => 'tls',
```

### 5. Security Recommendations

**Protect your SMTP configuration file:**

Add this to your `.htaccess` file to prevent direct access:
```apache
<Files "smtp-config.php">
    Order Allow,Deny
    Deny from all
</Files>
```

Or move `smtp-config.php` outside your web root and update the path in `contact-handler.php`.

### 6. Testing

1. Deploy all files to your server
2. Update `smtp-config.php` with your actual SMTP credentials
3. Navigate to the Contact page on your website
4. Fill out and submit the form
5. Check the inbox at info@echobroad.com for the message

### 7. Troubleshooting

**"Could not authenticate" error:**
- Verify your SMTP username and password are correct
- For Gmail, use an App Password instead of your regular password
- Check if your hosting provider blocks outgoing SMTP connections

**"Could not connect to SMTP host" error:**
- Verify the SMTP host and port are correct
- Try alternative ports (587, 465, 25)
- Check if your hosting provider requires a specific SMTP server

**Timeout errors:**
- Your hosting provider may be blocking SMTP connections
- Contact your hosting support to enable SMTP
- Try using your hosting provider's SMTP server instead

**Enable debug mode:**
Set `'smtp_debug' => 2` in `smtp-config.php` to see detailed error messages in the browser console.

### 8. Getting SMTP Credentials

**From your hosting provider (cPanel):**
1. Log into cPanel
2. Go to "Email Accounts"
3. Use your existing email or create a new one
4. SMTP host is usually: `mail.yourdomain.com`
5. Port: 587 (TLS) or 465 (SSL)

**From Gmail:**
1. Enable 2-Step Verification in your Google Account
2. Go to Security → App Passwords
3. Generate an App Password for "Mail"
4. Use this password in smtp-config.php

**From Office365:**
1. Use your Office365 email and password
2. SMTP host: smtp.office365.com
3. Port: 587

### 9. Alternative Services

If you continue to have issues, consider using a dedicated email service:
- **SendGrid** (free tier: 100 emails/day)
- **Mailgun** (free tier: 5,000 emails/month)
- **Amazon SES** (pay-as-you-go)

## Security Notes
- Never commit `smtp-config.php` with real credentials to version control
- Use environment variables or a config file outside the web root in production
- Keep PHPMailer library updated for security patches
- Enable HTTPS on your website to protect form data in transit

## Support
For issues or questions, contact your hosting provider or the development team.

