<?php
  header('Access-Control-Allow-Origin: *');
if (isset($_POST['contactme'] == '') {
  if ( (isset($_POST['name'])) && (isset($_POST['email']) && $_POST['message']!='') ) {
    $to = 'im.amruth@gmail.com';
    $subject = 'Message from Amruth Pillai\'s Resume on the Web';
    $message = '
      <html>
        <head>
          <title>Message from Amruth Pillai\'s Resume on the Web</title>
        </head>
        <body>
          <p><b>Name:</b> '.$_POST['name'].'</p>
          <p><b>Email:</b> '.$_POST['email'].'</p>
          <p><b>Message:</b> '.$_POST['message'].'</p>
        </body>
      </html>
    ';

    $headers[] = 'MIME-Version: 1.0';
    $headers[] = 'Content-type: text/html; charset=iso-8859-1';
    $headers[] = 'X-Mailer: PHP/' . phpversion();
    $headers[] = 'From: Amruth Pillai\'s Resume on the Web <resume@amruthpillai.com>';
    $headers[] = 'Reply-To: '.$_POST['name'].' <'.$_POST['email'].'>';

    mail($to, $subject, $message, implode("\r\n", $headers));

    echo json_encode(array('status' => 'success'));
  } else {
    echo json_encode(array('status' => 'error'));
  }
}
    else
    echo json_encode(array('status' => 'error'));
?>
