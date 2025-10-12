# Contact Form Setup Instructions

## Overview
The contact form on the EchoBroad Agency website uses a PHP script to send emails to info@echobroad.com.

## Files
- **Frontend**: `src/pages/Contact.jsx` - React component with the contact form
- **Backend**: `public/contact-handler.php` - PHP script that processes form submissions and sends emails

## Deployment Instructions

### 1. Server Requirements
- PHP 7.0 or higher
- PHP `mail()` function enabled
- Web server (Apache, Nginx, etc.)

### 2. Upload Files
Upload the entire `dist` folder (after running `npm run build`) to your web server, including:
- All HTML, CSS, and JavaScript files
- The `contact-handler.php` file in the root directory

### 3. Configure Email Settings
The PHP script is configured to send emails to: **info@echobroad.com**

If you need to change the recipient email, edit line 48 in `public/contact-handler.php`:
```php
$to = 'info@echobroad.com';
```

### 4. Server Configuration

#### For Apache:
Ensure `.htaccess` file allows PHP execution and has proper routing for React Router.

#### For Nginx:
Add the following to your server configuration:
```nginx
location ~ \.php$ {
    fastcgi_pass unix:/var/run/php/php7.4-fpm.sock;
    fastcgi_index index.php;
    include fastcgi_params;
    fastcgi_param SCRIPT_FILENAME $document_root$fastcgi_script_name;
}
```

### 5. Testing
1. Deploy the website to your server
2. Navigate to the Contact page
3. Fill out and submit the form
4. Check the inbox at info@echobroad.com for the message

### 6. Troubleshooting

**Email not received:**
- Check your server's PHP mail configuration
- Verify that the PHP `mail()` function is enabled
- Check spam/junk folder
- Consider using SMTP instead of PHP mail() for better deliverability

**CORS errors:**
- Ensure the PHP script has proper CORS headers (already included)
- Verify the script is accessible from your domain

**Alternative: Using SMTP**
For better email deliverability, consider using an SMTP service like:
- SendGrid
- Mailgun
- Amazon SES
- PHPMailer library with SMTP configuration

## Security Notes
- The PHP script sanitizes all input to prevent XSS attacks
- Email validation is performed server-side
- CORS is configured to allow requests (adjust for production if needed)

## Support
For issues or questions, contact the development team.

