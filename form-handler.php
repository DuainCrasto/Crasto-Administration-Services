<?php
// Check if the form is submitted via POST and validate input
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Sanitize input data to prevent injection attacks
    $name = htmlspecialchars($_POST['name']);
    $visitor_email = filter_var($_POST['email'], FILTER_SANITIZE_EMAIL);
    $subject = htmlspecialchars($_POST['subject']);
    $message = htmlspecialchars($_POST['message']);

    // Email details
    $email_from = 'info@www.crastoadministratie.nl'; 
    $email_subject = 'New Form Submission'; 

    // Create email body
    $email_body = "User Name: $name.\n".
                  "User Email: $visitor_email.\n".
                  "Subject: $subject.\n".  // Corrected to use $subject instead of $visitor_email
                  "User Message: $message.\n";  // Fixed improper concatenation of $message

    // Set the recipient email
    $to = 'roma.crasto@hotmail.com'; 

    // Set the headers
    $headers = "From: $email_from\r\n"; 
    $headers .= "Reply-To: $visitor_email\r\n"; 

    // Send the email
    if (mail($to, $email_subject, $email_body, $headers)) {
        // Redirect to the contact page upon success
        header("Location: contact.html");
        exit; // Ensure the script stops after redirection
    } else {
        echo "Email sending failed.";
    }
} else {
    echo "Form submission failed.";
}
?>
