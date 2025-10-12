<?php
/**
 * Contact Form Handler with PHPMailer and SMTP
 * Sends emails using SMTP instead of PHP mail() function
 */

// Enable error reporting for debugging (disable in production)
error_reporting(E_ALL);
ini_set('display_errors', 0);
ini_set('log_errors', 1);

// Set headers to allow CORS and JSON responses
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');
header('Content-Type: application/json');

// Handle preflight OPTIONS request
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

// Only allow POST requests
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'Method not allowed']);
    exit();
}

// Load PHPMailer
require_once 'PHPMailer/PHPMailer.php';
require_once 'PHPMailer/SMTP.php';
require_once 'PHPMailer/Exception.php';

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

try {
    // Load SMTP configuration
    $config = require 'smtp-config.php';
    
    // Get the JSON input
    $input = file_get_contents('php://input');
    $data = json_decode($input, true);

    // Validate input data
    if (!$data || !isset($data['name']) || !isset($data['email']) || !isset($data['subject']) || !isset($data['message'])) {
        http_response_code(400);
        echo json_encode(['success' => false, 'message' => 'Missing required fields']);
        exit();
    }

    // Sanitize input
    $name = htmlspecialchars(strip_tags(trim($data['name'])));
    $email = filter_var(trim($data['email']), FILTER_SANITIZE_EMAIL);
    $subject = htmlspecialchars(strip_tags(trim($data['subject'])));
    $message = htmlspecialchars(strip_tags(trim($data['message'])));

    // Validate email
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        http_response_code(400);
        echo json_encode(['success' => false, 'message' => 'Invalid email address']);
        exit();
    }

    // Validate required fields are not empty
    if (empty($name) || empty($email) || empty($subject) || empty($message)) {
        http_response_code(400);
        echo json_encode(['success' => false, 'message' => 'All fields are required']);
        exit();
    }

    // Create a new PHPMailer instance
    $mail = new PHPMailer(true);

    // Server settings
    $mail->isSMTP();
    $mail->Host       = $config['smtp_host'];
    $mail->SMTPAuth   = true;
    $mail->Username   = $config['smtp_username'];
    $mail->Password   = $config['smtp_password'];
    $mail->SMTPSecure = $config['smtp_encryption'];
    $mail->Port       = $config['smtp_port'];
    $mail->CharSet    = 'UTF-8';
    
    // Enable verbose debug output (set to 0 in production)
    $mail->SMTPDebug  = $config['smtp_debug'];
    
    // Recipients
    $mail->setFrom($config['from_email'], $config['from_name']);
    $mail->addAddress($config['recipient_email']);
    $mail->addReplyTo($email, $name);

    // Content
    $mail->isHTML(true);
    $mail->Subject = "Contact Form: " . $subject;
    
    // HTML email body
    $mail->Body = "<!DOCTYPE html>
<html>
<head>
    <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background-color: #1e3a8a; color: white; padding: 20px; text-align: center; border-radius: 5px 5px 0 0; }
        .content { background-color: #f9fafb; padding: 20px; border: 1px solid #e5e7eb; }
        .field { margin-bottom: 15px; padding: 10px; background-color: white; border-radius: 5px; }
        .label { font-weight: bold; color: #1e3a8a; display: block; margin-bottom: 5px; }
        .value { color: #374151; }
        .footer { margin-top: 20px; padding-top: 20px; border-top: 1px solid #ddd; font-size: 12px; color: #666; text-align: center; }
    </style>
</head>
<body>
    <div class='container'>
        <div class='header'>
            <h2 style='margin: 0;'>New Contact Form Submission</h2>
        </div>
        <div class='content'>
            <div class='field'>
                <span class='label'>Name:</span>
                <span class='value'>{$name}</span>
            </div>
            <div class='field'>
                <span class='label'>Email:</span>
                <span class='value'>{$email}</span>
            </div>
            <div class='field'>
                <span class='label'>Subject:</span>
                <span class='value'>{$subject}</span>
            </div>
            <div class='field'>
                <span class='label'>Message:</span>
                <div class='value' style='white-space: pre-wrap;'>{$message}</div>
            </div>
        </div>
        <div class='footer'>
            <p>This message was sent from the EchoBroad Agency website contact form.</p>
            <p>Received: " . date('Y-m-d H:i:s') . "</p>
        </div>
    </div>
</body>
</html>";

    // Plain text version for email clients that don't support HTML
    $mail->AltBody = "New Contact Form Submission\n\n";
    $mail->AltBody .= "Name: {$name}\n";
    $mail->AltBody .= "Email: {$email}\n";
    $mail->AltBody .= "Subject: {$subject}\n\n";
    $mail->AltBody .= "Message:\n{$message}\n\n";
    $mail->AltBody .= "---\n";
    $mail->AltBody .= "This message was sent from the EchoBroad Agency website contact form.\n";
    $mail->AltBody .= "Received: " . date('Y-m-d H:i:s');

    // Send email
    $mail->send();
    
    // Log successful submission
    error_log("Contact form submission successful from: {$email}");
    
    http_response_code(200);
    echo json_encode([
        'success' => true,
        'message' => 'Thank you for your message! We will get back to you soon.'
    ]);

} catch (Exception $e) {
    // Log the error
    error_log("Contact form error: " . $e->getMessage());
    
    http_response_code(500);
    echo json_encode([
        'success' => false,
        'message' => 'Sorry, there was an error sending your message. Please try again later or contact us directly at info@echobroad.com.',
        'error' => $config['smtp_debug'] > 0 ? $e->getMessage() : null
    ]);
}
?>

