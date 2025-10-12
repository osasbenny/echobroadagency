<?php
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

try {
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

    // Recipient email
    $to = 'info@echobroad.com';

    // Email subject
    $email_subject = "Contact Form: " . $subject;

    // Email body (HTML format)
    $email_body = "<!DOCTYPE html>
<html>
<head>
    <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background-color: #1e3a8a; color: white; padding: 20px; text-align: center; }
        .content { background-color: #f9fafb; padding: 20px; margin-top: 20px; }
        .field { margin-bottom: 15px; }
        .label { font-weight: bold; color: #1e3a8a; }
        .footer { margin-top: 20px; padding-top: 20px; border-top: 1px solid #ddd; font-size: 12px; color: #666; }
    </style>
</head>
<body>
    <div class='container'>
        <div class='header'>
            <h2>New Contact Form Submission</h2>
        </div>
        <div class='content'>
            <div class='field'>
                <span class='label'>Name:</span><br>
                {$name}
            </div>
            <div class='field'>
                <span class='label'>Email:</span><br>
                {$email}
            </div>
            <div class='field'>
                <span class='label'>Subject:</span><br>
                {$subject}
            </div>
            <div class='field'>
                <span class='label'>Message:</span><br>
                {$message}
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
    $email_body_plain = "New Contact Form Submission\n\n";
    $email_body_plain .= "Name: {$name}\n";
    $email_body_plain .= "Email: {$email}\n";
    $email_body_plain .= "Subject: {$subject}\n\n";
    $email_body_plain .= "Message:\n{$message}\n\n";
    $email_body_plain .= "---\n";
    $email_body_plain .= "This message was sent from the EchoBroad Agency website contact form.\n";
    $email_body_plain .= "Received: " . date('Y-m-d H:i:s');

    // Email headers
    $headers = array();
    $headers[] = "MIME-Version: 1.0";
    $headers[] = "Content-Type: text/html; charset=UTF-8";
    $headers[] = "From: EchoBroad Contact Form <noreply@echobroad.com>";
    $headers[] = "Reply-To: {$name} <{$email}>";
    $headers[] = "X-Mailer: PHP/" . phpversion();
    $headers[] = "X-Priority: 1";
    
    // Convert headers array to string
    $headers_string = implode("\r\n", $headers);

    // Attempt to send email
    $mail_sent = @mail($to, $email_subject, $email_body, $headers_string);

    if ($mail_sent) {
        // Log successful submission
        error_log("Contact form submission successful from: {$email}");
        
        http_response_code(200);
        echo json_encode([
            'success' => true,
            'message' => 'Thank you for your message! We will get back to you soon.'
        ]);
    } else {
        // Log failure
        error_log("Contact form submission failed - mail() returned false");
        
        // Check if mail function exists
        if (!function_exists('mail')) {
            error_log("PHP mail() function is not available");
            http_response_code(500);
            echo json_encode([
                'success' => false,
                'message' => 'Email service is not configured on this server. Please contact the administrator.'
            ]);
        } else {
            http_response_code(500);
            echo json_encode([
                'success' => false,
                'message' => 'Sorry, there was an error sending your message. Please try again later or contact us directly at info@echobroad.com.'
            ]);
        }
    }
} catch (Exception $e) {
    // Log the exception
    error_log("Contact form error: " . $e->getMessage());
    
    http_response_code(500);
    echo json_encode([
        'success' => false,
        'message' => 'An unexpected error occurred. Please try again later.'
    ]);
}
?>

