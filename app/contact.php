<?php
  header("Access-Control-Allow-Origin: *");
  if ( (isset($_POST['name'])) && (isset($_POST['email']) && $_POST['message']!="") ) {
    $to = 'im.amruth@gmail.com';
    $subject = 'Someone has sent you a message on amruthpillai.com!';
    $message = '
      <html>
        <body>
          <p><b>Name:</b> '.$_POST['name'].'</p>
          <p><b>Email:</b> '.$_POST['email'].'</p>
          <p><b>Message:</b> '.$_POST['message'].'</p>
        </body>
      </html>
    ';
    $headers  = "Content-type: text/html; charset=utf-8 \r\n";
    $headers .= "From: Site <contact@amruthpillai.com>\r\n";
    mail($to, $subject, $message, $headers);
    echo json_encode(array('status' => 'success'));
  } else {
    echo json_encode(array('status' => 'error'));
  }
?>
