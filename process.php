<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars($_POST["name"]);
    $email = htmlspecialchars($_POST["email"]);
    $message = htmlspecialchars($_POST["message"]);
    $recaptcha_response = $_POST["g-recaptcha-response"];

    // Verify reCAPTCHA with Google
    $secretKey = "6LcR-twqAAAAAOsTtfZEsSSw-g5NCmCCysdZcq8t"; // Replace with your actual secret key
    $url = "https://www.google.com/recaptcha/api/siteverify";
    
    $data = [
        'secret' => $secretKey,
        'response' => $recaptcha_response
    ];

    $options = [
        'http' => [
            'header'  => "Content-type: application/x-www-form-urlencoded",
            'method'  => 'POST',
            'content' => http_build_query($data)
        ]
    ];

    $context  = stream_context_create($options);
    $verify = file_get_contents($url, false, $context);
    $captcha_success = json_decode($verify);

    if ($captcha_success->success) {
        // reCAPTCHA is valid, proceed with sending the email
        $to = "contact@louvart-offices.com"; // Replace with your email
        $subject = "New Contact Form Submission";
        $headers = "From: $email\r\nReply-To: $email\r\n";
        $body = "Name: $name\nEmail: $email\n\nMessage:\n$message";

        if (mail($to, $subject, $body, $headers)) {
            echo "Message sent successfully!";
        } else {
            echo "Failed to send message. Please try again.";
        }
    } else {
        echo "reCAPTCHA verification failed. Please try again.";
    }
} else {
    echo "Invalid request.";
}
?>
