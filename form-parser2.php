<?php
$email = $_POST['email2'];

$message = "Email: ".$email;
$subject = "Новое сообщение с сайта Kickcity";
$headers = "From: Kickcity <kickcity@site1326.ru\r\n";

mail("tokensale@kickcityapp.com", $subject, $message, $headers);