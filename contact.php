

<?php
// Check if the form was submitted
if(isset($_POST['esubmit'])){
    $to = "shaukatmaantechseo@gmail.com";
    $subject = $_POST['subject'];
    $message = $_POST['message'];
    $from = $_POST['email'];
    $headers = "From: $from";

    mail($to, $subject, $message, $headers);

    echo "Thanks! We will get in touch as soon as possible";

}
?>


