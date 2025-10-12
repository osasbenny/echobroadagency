<?php
/**
 * SMTP Configuration File
 * 
 * IMPORTANT: Update these values with your actual SMTP credentials
 * Keep this file secure and do not share it publicly
 */

return [
    // SMTP Host (e.g., smtp.gmail.com, mail.echobroad.com, smtp.office365.com)
    'smtp_host' => 'mail.echobroad.com',
    
    // SMTP Port (587 for TLS, 465 for SSL)
    'smtp_port' => 587,
    
    // SMTP Username (usually your email address)
    'smtp_username' => 'info@echobroad.com',
    
    // SMTP Password
    'smtp_password' => 'YOUR_PASSWORD_HERE',
    
    // Encryption type (tls or ssl)
    'smtp_encryption' => 'tls',
    
    // From email address
    'from_email' => 'info@echobroad.com',
    
    // From name
    'from_name' => 'EchoBroad Agency',
    
    // Reply-to email (where replies will be sent)
    'recipient_email' => 'info@echobroad.com',
    
    // Enable SMTP debug output (0 = off, 1 = client, 2 = client and server)
    'smtp_debug' => 0
];
?>

