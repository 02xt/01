import { useState } from "react";
import { Phone, Instagram, Clock, Calendar, Facebook, Check, MapPin, Mail } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { CONTACT_INFO } from "@/lib/constants";
import useAnimateOnScroll from "@/hooks/useAnimateOnScroll";
import useForm from "@/hooks/useForm";


export default function Contact() {
  const [titleRef, titleVisible] = useAnimateOnScroll<HTMLDivElement>();
  const [infoRef, infoVisible] = useAnimateOnScroll<HTMLDivElement>();
  const [imageRef, imageVisible] = useAnimateOnScroll<HTMLDivElement>();
  const [formRef, formVisible] = useAnimateOnScroll<HTMLDivElement>();
  const { toast } = useToast();

  const initialValues = {
    name: "",
    phone: "",
    subject: "sales",
    message: ""
  };

  const validate = (values: typeof initialValues) => {
    const errors: Partial<Record<keyof typeof initialValues, string>> = {};
    
    if (!values.name.trim()) {
      errors.name = "الاسم مطلوب";
    }
    
    if (!values.phone.trim()) {
      errors.phone = "رقم الهاتف مطلوب";
    } else if (!/^07[0-9]{8,9}$/.test(values.phone)) {
      errors.phone = "يرجى إدخال رقم هاتف صحيح";
    }
    
    if (!values.message.trim()) {
      errors.message = "الرسالة مطلوبة";
    }
    
    return errors;
  };

  const handleSubmit = async (values: typeof initialValues) => {
    try {
      // Submit the form to the backend
      await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values)
      });
      
      // Show success message
      toast({
        title: "تم إرسال رسالتك بنجاح",
        description: "سيتم إرسال الرسالة إلى بريد الشركة وسنتواصل معك قريباً"
      });
      
      // Reset form after successful submission
      reset();
    } catch (error) {
      console.error('Error submitting form:', error);
      toast({
        title: "حدث خطأ أثناء إرسال الرسالة",
        description: "يرجى المحاولة مرة أخرى لاحقاً أو التواصل معنا على الهاتف",
        variant: "destructive"
      });
    }
  };

  const { values, errors, handleChange, handleSubmitForm, isSubmitting, reset } = useForm({
    initialValues,
    validate,
    onSubmit: handleSubmit
  });

  return (
    <section id="contact" className="py-16 bg-black">
      <div className="container mx-auto px-4">
        <div 
          ref={titleRef}
          className={`text-center mb-16 transform transition-all duration-1000 ${
            titleVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">تواصل معنا</h2>
          <div className="w-24 h-1 bg-[#40E0D0] mx-auto mb-8"></div>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            يمكنكم التواصل معنا من خلال وسائل الاتصال التالية أو زيارة معرضنا
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div 
            ref={infoRef}
            className={`bg-neutral-900 rounded-xl p-8 shadow-xl transform transition-all duration-1000 ${
              infoVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          >
            <h3 className="text-2xl font-bold mb-6">معلومات الاتصال</h3>
            
            <div className="space-y-6">
              <div>
                <p className="text-[#40E0D0] font-bold mb-2">قسم المبيعات:</p>
                <a 
                  href={`tel:${CONTACT_INFO.sales.phone}`} 
                  className="flex items-center text-white hover:text-[#40E0D0] transition-colors"
                >
                  <Phone className="ml-2 w-6 h-6" />
                  <span dir="ltr">{CONTACT_INFO.sales.phone}</span>
                </a>
                <a 
                  href={CONTACT_INFO.sales.instagram} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center text-white hover:text-[#40E0D0] transition-colors mt-2"
                >
                  <Instagram className="ml-2 w-6 h-6" />
                  <span>{CONTACT_INFO.sales.instagramHandle}</span>
                </a>
              </div>
              
              <div>
                <p className="text-[#40E0D0] font-bold mb-2">قسم الصيانة:</p>
                <a 
                  href={`tel:${CONTACT_INFO.maintenance.phone}`} 
                  className="flex items-center text-white hover:text-[#40E0D0] transition-colors"
                >
                  <Phone className="ml-2 w-6 h-6" />
                  <span dir="ltr">{CONTACT_INFO.maintenance.phone}</span>
                </a>
                <a 
                  href={CONTACT_INFO.maintenance.instagram} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center text-white hover:text-[#40E0D0] transition-colors mt-2"
                >
                  <Instagram className="ml-2 w-6 h-6" />
                  <span>{CONTACT_INFO.maintenance.instagramHandle}</span>
                </a>
              </div>
              
              <div>
                <p className="text-[#40E0D0] font-bold mb-2">ساعات العمل:</p>
                <p className="flex items-center text-white">
                  <Clock className="ml-2 w-6 h-6" />
                  <span>{CONTACT_INFO.workingHours.weekdays}</span>
                </p>
                <p className="flex items-center text-white mt-2">
                  <Calendar className="ml-2 w-6 h-6" />
                  <span>{CONTACT_INFO.workingHours.friday}</span>
                </p>
              </div>
              
              <div>
                <p className="text-[#40E0D0] font-bold mb-2">العنوان:</p>
                <a 
                  href={CONTACT_INFO.location.mapUrl}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center text-white hover:text-[#40E0D0] transition-colors"
                >
                  <MapPin className="ml-2 w-6 h-6" />
                  <span>{CONTACT_INFO.location.address}</span>
                </a>
              </div>
              
              <div>
                <p className="text-[#40E0D0] font-bold mb-2">البريد الإلكتروني:</p>
                <a 
                  href={`mailto:${CONTACT_INFO.email}`}
                  className="flex items-center text-white hover:text-[#40E0D0] transition-colors"
                >
                  <Mail className="ml-2 w-6 h-6" />
                  <span dir="ltr">{CONTACT_INFO.email}</span>
                </a>
              </div>
            </div>
            
            <div className="mt-8">
              <p className="text-[#40E0D0] font-bold mb-4">تابعنا على وسائل التواصل الاجتماعي:</p>
              <div className="flex space-x-4 space-x-reverse">
                <a 
                  href={CONTACT_INFO.sales.instagram} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 hover:shadow-lg transition-shadow"
                  aria-label="Instagram"
                >
                  <Instagram className="h-5 w-5 text-white" />
                </a>
                <a 
                  href={CONTACT_INFO.socialMedia.facebook} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-600 hover:shadow-lg transition-shadow"
                  aria-label="Facebook"
                >
                  <Facebook className="h-5 w-5 text-white" />
                </a>
              </div>
            </div>
          </div>
          
          <div 
            ref={imageRef}
            className={`relative overflow-hidden rounded-xl h-80 md:h-auto transform transition-all duration-1000 ${
              imageVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          >
            <img 
              src="https://images.unsplash.com/photo-1557180295-76eee20ae8aa?q=80&w=800&auto=format&fit=crop" 
              alt="Premium Mobile Phone Store" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
              <div className="text-center p-8">
                <h3 className="text-2xl font-bold mb-4">قم بزيارتنا</h3>
                <p className="text-gray-200 mb-6">
                  نرحب بزيارتكم لمعرضنا للاطلاع على أحدث المنتجات والاستفادة من عروضنا المميزة
                </p>
                <a 
                  href={CONTACT_INFO.location.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    className="bg-[#40E0D0] text-black hover:bg-opacity-80 transition-all transform hover:-translate-y-1"
                  >
                    <MapPin className="ml-2 h-5 w-5" />
                    الحصول على الاتجاهات
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div 
          ref={formRef}
          className={`bg-neutral-900 rounded-xl p-8 shadow-xl transform transition-all duration-1000 ${
            formVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <h3 className="text-2xl font-bold mb-6 text-center">أرسل لنا رسالة</h3>
          
          <form onSubmit={handleSubmitForm} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="name">الاسم الكامل</Label>
                <Input
                  id="name"
                  name="name"
                  value={values.name}
                  onChange={handleChange}
                  className={`bg-neutral-800 border-neutral-700 text-white focus:ring-[#40E0D0] ${
                    errors.name ? "border-red-500" : ""
                  }`}
                />
                {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="phone">رقم الهاتف</Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={values.phone}
                  onChange={handleChange}
                  className={`bg-neutral-800 border-neutral-700 text-white focus:ring-[#40E0D0] ${
                    errors.phone ? "border-red-500" : ""
                  }`}
                />
                {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
              </div>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="subject">الموضوع</Label>
              <Select 
                name="subject" 
                value={values.subject} 
                onValueChange={(value) => handleChange({ target: { name: 'subject', value } })}
              >
                <SelectTrigger className="bg-neutral-800 border-neutral-700 text-white focus:ring-[#40E0D0]">
                  <SelectValue placeholder="اختر الموضوع" />
                </SelectTrigger>
                <SelectContent className="bg-neutral-800 border-neutral-700 text-white">
                  <SelectItem value="sales">استفسار عن المبيعات</SelectItem>
                  <SelectItem value="maintenance">استفسار عن الصيانة</SelectItem>
                  <SelectItem value="prices">استفسار عن الأسعار</SelectItem>
                  <SelectItem value="other">موضوع آخر</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="message">الرسالة</Label>
              <Textarea
                id="message"
                name="message"
                rows={4}
                value={values.message}
                onChange={handleChange}
                className={`bg-neutral-800 border-neutral-700 text-white focus:ring-[#40E0D0] ${
                  errors.message ? "border-red-500" : ""
                }`}
              />
              {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
            </div>
            
            <div className="text-center">
              <Button 
                type="submit"
                disabled={isSubmitting}
                className="bg-[#40E0D0] text-black hover:bg-opacity-80 transition-all transform hover:-translate-y-1 shadow-lg"
              >
                {isSubmitting ? (
                  <span className="flex items-center">
                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    جاري الإرسال...
                  </span>
                ) : (
                  "إرسال الرسالة"
                )}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
