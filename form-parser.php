<?php
$email = $_POST['email'];
$name = $_POST['name'];
$from = $_POST['from'];
$investment = $_POST['investment'];

$message = "Your E-mail: ".$email."\nYour full name: ".$name."\nWhere are you from?: ".$from."\nEstimated investment: ".$investment;
$subject = "Новое сообщение с сайта Kickcity";
$headers = "From: Kickcity <kickcity@site1326.ru\r\n";

mail("tokensale@kickcityapp.com", $subject, $message, $headers);
//mail("alexvrbv@gmail.com", $subject, $message, $headers);

syncMailchimp($name,$email);

function syncMailchimp($name,$email) {
    $apiKey = '48db4f6bcdbd2f9ac81499763b8a05be-us16';
    $listId = '1d6e8e487c';

    $memberId = md5(strtolower($email));
    $dataCenter = substr($apiKey,strpos($apiKey,'-')+1);
    $url = 'https://' . $dataCenter . '.api.mailchimp.com/3.0/lists/' . $listId . '/members/' . $memberId;

    $json = json_encode([
        'email_address' => $email,
        //'status'        => $data['status'], // "subscribed","unsubscribed","cleaned","pending"
		'status'        => 'subscribed',
        'merge_fields'  => [
            'FNAME'     => $name,
            //'LNAME'     => $data['lastname']
			'LNAME'     => ''
        ]
    ]);

    $ch = curl_init($url);

    curl_setopt($ch, CURLOPT_USERPWD, 'user:' . $apiKey);
    curl_setopt($ch, CURLOPT_HTTPHEADER, ['Content-Type: application/json']);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_TIMEOUT, 10);
    curl_setopt($ch, CURLOPT_CUSTOMREQUEST, 'PUT');
    curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
    curl_setopt($ch, CURLOPT_POSTFIELDS, $json);                                                                                                                 

    $result = curl_exec($ch);
    $httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
    curl_close($ch);

    return $httpCode;
}