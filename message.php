<?php

if(isset($_POST['submit'])){
$to = "richnesslife98@gmail.com"; // Здесь нужно написать e-mail, куда будут приходить письма
$email = $_POST['email']; // this is the sender's Email address
$name = $_POST['name'];
$subject = $_POST['subject'];
$message = $_POST['message'];
$subject2 = "Copy of your form submission";
$Message = $name . " оставил сообщение:" . "\n\n" . $_POST['subject'] . "\t\t" . $_POST['message'];
$message2 = "Here is a copy of your message " . $name . "\n\n" . $_POST['subject'] . "\t\t" . $_POST['message'];

$headers = "From:" . $email;
$headers2 = "From:" . $to;

mail($to, $name , $subject, $message, $headers);
// mail($from,$subject2,$message2,$headers2); // sends a copy of the message to the sender - Отключено!
echo "Сообщение отправлено. Спасибо Вам " . $name . ", мы скоро свяжемся с Вами.";
echo "<br /><br /><a href='https://github.com/Anvar-MITC2020/Wheels/blob/master/contact.html'>Вернуться на сайт.</a>";

}

?>
<script language="JavaScript" type="text/javascript">
function changeurl(){eval(self.location="https://github.com/Anvar-MITC2020/Wheels/blob/master/contact.html");}
window.setTimeout("changeurl();",3000);
</script>