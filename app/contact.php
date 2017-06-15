<?php
    $to = "im.amruth@gmail.com";
    $from = $_REQUEST['email'];
    $name = $_REQUEST['name'];
    $headers = "From: $from";
    $subject = "You have a message from amruthpillai.com!";
    $fields = array();
    $fields{"name"} = "Name";
    $fields{"email"} = "Email Address";
    $fields{"message"} = "Message";
    $body = "Here is what was sent:\n\n"; foreach($fields as $a => $b){   $body .= sprintf("%20s: %s\n",$b,$_REQUEST[$a]); }
    $send = mail($to, $subject, $body, $headers);
?>
