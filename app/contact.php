<?php
    $to = "im.amruth@gmail.com";
    $from = $_POST['email'];
    $name = $_POST['name'];
    $headers = "From: $from";
    $subject = "You have a message from amruthpillai.com!";
    $fields = array();
    $fields{"name"} = "name";
    $fields{"email"} = "email";
    $fields{"message"} = "message";
    $body = "Here is what was sent:\n\n"; foreach($fields as $a => $b){   $body .= sprintf("%20s: %s\n",$b,$_POST[$a]); }
    $send = mail($to, $subject, $body, $headers);
?>
