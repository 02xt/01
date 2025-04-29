<?php
// تعيين معلومات البريد الإلكتروني
$to = "mobilattuz@gmail.com"; // أدخل بريدك الإلكتروني هنا
$subject = "رسالة جديدة من موقع TUZ";

// التحقق من تقديم النموذج
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // جمع بيانات النموذج
    $name = htmlspecialchars($_POST["name"]);
    $phone = htmlspecialchars($_POST["phone"]);
    $messageSubject = htmlspecialchars($_POST["subject"]);
    $message = htmlspecialchars($_POST["message"]);
    
    // التحقق من البيانات غير الفارغة
    if (!empty($name) && !empty($phone) && !empty($messageSubject) && !empty($message)) {
        // تنسيق محتوى البريد الإلكتروني
        $emailContent = "الاسم: " . $name . "\n";
        $emailContent .= "رقم الهاتف: " . $phone . "\n";
        $emailContent .= "الموضوع: " . $messageSubject . "\n\n";
        $emailContent .= "الرسالة: \n" . $message . "\n";
        
        // إعداد ترويسات البريد الإلكتروني
        $headers = "From: " . $name . " <website@tuzmobile.com>\r\n";
        $headers .= "Reply-To: " . $phone . "\r\n";
        $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";
        
        // إرسال البريد الإلكتروني
        if (mail($to, $subject, $emailContent, $headers)) {
            echo json_encode(["status" => "success", "message" => "تم إرسال رسالتك بنجاح"]);
        } else {
            echo json_encode(["status" => "error", "message" => "فشل في إرسال الرسالة، يرجى المحاولة مرة أخرى"]);
        }
    } else {
        echo json_encode(["status" => "error", "message" => "يرجى ملء جميع الحقول المطلوبة"]);
    }
} else {
    // إذا تم الوصول إلى الملف مباشرة، إعادة التوجيه إلى الصفحة الرئيسية
    header("Location: index.html");
    exit;
}
?>