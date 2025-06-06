# دليل تثبيت موقع TUZ Mobile

## 1. متطلبات الاستضافة
- مساحة استضافة ويب تدعم HTML/CSS/JavaScript
- لاستخدام ميزة نموذج الاتصال: خادم يدعم PHP (اختياري)

## 2. كيفية تحميل الموقع على الاستضافة

### الطريقة 1: رفع الملفات عبر FTP
1. قم بتنزيل جميع ملفات الموقع
2. استخدم برنامج FTP مثل FileZilla للاتصال بخادم الاستضافة
3. انتقل إلى مجلد الموقع الرئيسي (عادة public_html أو www)
4. قم برفع جميع ملفات ومجلدات الموقع

### الطريقة 2: استخدام لوحة تحكم الاستضافة
1. سجل الدخول إلى لوحة تحكم الاستضافة (cPanel أو Plesk)
2. ابحث عن أداة مدير الملفات أو File Manager
3. انتقل إلى مجلد الموقع الرئيسي
4. استخدم خيار "رفع" لتحميل جميع الملفات والمجلدات

## 3. إعداد نطاق الموقع
1. قم بشراء اسم نطاق (domain name) مثل tuzmobile.com
2. اضبط إعدادات DNS لتوجيه النطاق إلى خادم الاستضافة
3. قد تحتاج إلى الانتظار 24-48 ساعة حتى تنتشر تغييرات DNS

## 4. إعداد نموذج الاتصال (اختياري)
إذا كنت ترغب في تفعيل نموذج الاتصال، قم بما يلي:
1. تأكد من أن استضافتك تدعم PHP
2. افتح ملف index.html وقم بتغيير العنصر form:
   ```html
   <form id="contactForm" action="contact-form.php" method="post">
   ```
3. افتح ملف script.js وقم بتعليق الكود الخاص بالمحاكاة وإلغاء تعليق كود إرسال النموذج

## 5. تخصيص الصور
1. قم باستبدال الصور الموجودة في مجلد images/ بصور حقيقية للشركة
2. تأكد من أن أحجام الصور مناسبة للويب (مضغوطة) لتحسين سرعة التحميل

## 6. اختبار الموقع
بعد رفع الموقع، قم باختباره على أجهزة ومتصفحات مختلفة للتأكد من أنه يعمل بشكل صحيح.

## ملاحظات إضافية
- يمكن ضبط معلومات SEO عن طريق تعديل العلامات meta في ملف index.html
- لتغيير ألوان الموقع، قم بتعديل متغيرات CSS في بداية ملف styles.css