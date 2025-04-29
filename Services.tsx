import { Check, Phone, Instagram, MonitorSmartphone, WrenchIcon } from "lucide-react";
import { CONTACT_INFO } from "@/lib/constants";
import useAnimateOnScroll from "@/hooks/useAnimateOnScroll";

interface ServiceCardProps {
  type: "sales" | "maintenance";
  features: string[];
  delay: number;
}

function ServiceCard({ type, features, delay }: ServiceCardProps) {
  const [ref, isVisible] = useAnimateOnScroll<HTMLDivElement>();
  const data = CONTACT_INFO[type];
  const icon = type === "sales" ? <MonitorSmartphone className="text-[#40E0D0] h-6 w-6" /> : <WrenchIcon className="text-[#40E0D0] h-6 w-6" />;
  const title = type === "sales" ? "خدمات المبيعات" : "خدمات الصيانة";
  
  return (
    <div 
      ref={ref}
      className={`relative overflow-hidden rounded-xl bg-neutral-900 shadow-xl h-full transform transition-all duration-1000 ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="absolute top-0 left-0 w-full h-full opacity-20 bg-gradient-to-b from-[#40E0D0] to-transparent"></div>
      <div className="p-8 relative z-10">
        <div className="flex items-center mb-6">
          <div className="rounded-full bg-[#40E0D0] bg-opacity-20 w-12 h-12 flex items-center justify-center">
            {icon}
          </div>
          <h3 className="text-2xl font-bold mr-4">{title}</h3>
        </div>
        
        <ul className="space-y-3 mb-6">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <Check className="text-[#40E0D0] mt-1 ml-2 flex-shrink-0" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
        
        <div className="mt-8">
          <div className="mb-4">
            <p className="font-bold text-[#40E0D0] mb-2">
              {type === "sales" ? "للتواصل مع قسم المبيعات:" : "للتواصل مع قسم الصيانة:"}
            </p>
            <a 
              href={`tel:${data.phone}`} 
              className="flex items-center text-white hover:text-[#40E0D0] transition-colors"
            >
              <Phone className="ml-2 h-5 w-5" />
              <span dir="ltr">{data.phone}</span>
            </a>
          </div>
          
          <a 
            href={data.instagram} 
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white py-3 px-6 rounded-lg shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1"
          >
            <Instagram className="ml-2 h-5 w-5" />
            <span>
              {type === "sales" 
                ? "تابعنا على انستغرام - قسم المبيعات" 
                : "تابعنا على انستغرام - قسم الصيانة"}
            </span>
          </a>
        </div>
      </div>
      <div className="absolute bottom-0 right-0 opacity-10">
        {type === "sales" 
          ? <MonitorSmartphone className="h-32 w-32 text-white" /> 
          : <WrenchIcon className="h-32 w-32 text-white" />}
      </div>
    </div>
  );
}

function GalleryItem({ image, title, delay }: { image: string; title: string; delay: number }) {
  const [ref, isVisible] = useAnimateOnScroll<HTMLDivElement>();
  
  return (
    <div 
      ref={ref}
      className={`relative overflow-hidden rounded-lg shadow-lg group transform transition-all duration-1000 ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <img 
        src={image} 
        alt={title}
        className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
      />
      <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <p className="text-white text-sm font-bold">{title}</p>
      </div>
    </div>
  );
}

export default function Services() {
  const [titleRef, titleVisible] = useAnimateOnScroll<HTMLDivElement>();
  const [galleryRef, galleryVisible] = useAnimateOnScroll<HTMLDivElement>();
  
  const salesFeatures = [
    "أحدث أجهزة الموبايل من مختلف الشركات العالمية",
    "اكسسوارات متنوعة بأعلى جودة وأفضل الأسعار",
    "ضمان حقيقي على جميع المنتجات",
    "عروض وخصومات دورية على مختلف المنتجات"
  ];
  
  const maintenanceFeatures = [
    "إصلاح جميع أنواع أعطال الهواتف المحمولة",
    "استبدال قطع الغيار الأصلية",
    "إصلاح مشاكل البرمجة والتحديثات",
    "خدمة فحص الأجهزة قبل الشراء"
  ];
  
  const galleryItems = [
    {
      image: "https://images.unsplash.com/photo-1574944985070-8f3ebc6b79d2?q=80&w=400&auto=format&fit=crop",
      title: "تشكيلة متنوعة من الهواتف"
    },
    {
      image: "https://images.unsplash.com/photo-1621330396173-e41b1cafd17f?q=80&w=400&auto=format&fit=crop",
      title: "خدمات صيانة احترافية"
    },
    {
      image: "https://images.unsplash.com/photo-1600080972464-8e5f35f63d08?q=80&w=400&auto=format&fit=crop",
      title: "اكسسوارات متنوعة"
    },
    {
      image: "https://images.unsplash.com/photo-1563203369-26f2e4a5ccf7?q=80&w=400&auto=format&fit=crop",
      title: "معرضنا الحديث"
    }
  ];

  return (
    <section id="services" className="py-16 bg-gradient-to-b from-black to-neutral-900">
      <div className="container mx-auto px-4">
        <div 
          ref={titleRef}
          className={`text-center mb-16 transform transition-all duration-1000 ${
            titleVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">خدماتنا</h2>
          <div className="w-24 h-1 bg-[#40E0D0] mx-auto mb-8"></div>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            نقدم مجموعة متكاملة من خدمات البيع والصيانة لجميع أنواع الأجهزة المحمولة
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <ServiceCard type="sales" features={salesFeatures} delay={100} />
          <ServiceCard type="maintenance" features={maintenanceFeatures} delay={300} />
        </div>
        
        <div 
          ref={galleryRef}
          className={`transform transition-all duration-1000 ${
            galleryVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <h3 className="text-2xl font-bold text-center mb-8">معرض أعمالنا</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {galleryItems.map((item, index) => (
              <GalleryItem 
                key={index} 
                image={item.image} 
                title={item.title} 
                delay={100 * index}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
