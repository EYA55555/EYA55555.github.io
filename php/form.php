<?php
$name = $_POST["user-name"];
$email = $_POST["user-email"];
$message = $_POST["user-message"];
 
$EmailTo = "Olga181a@ukr.net";
$Subject = "New User Message";
 
// prepare email body text
$Body .= "Name: ";
$Body .= $name;
$Body .= "\n";
 
$Body .= "Email: ";
$Body .= $email;
$Body .= "\n";
 
$Body .= "Message: ";
$Body .= $message;
$Body .= "\n";
 
// send email
$success = mail($EmailTo, $Subject, $Body, "From:".$email);
 
// redirect to success page
if ($success){
   echo "success";
}else{
    echo "invalid";
}
 
?>