import { Button } from "@/components/ui/button";
import useAnimateOnScroll from "@/hooks/useAnimateOnScroll";

export default function Hero() {
  const [contentRef, contentVisible] = useAnimateOnScroll<HTMLDivElement>();
  const [imageRef, imageVisible] = useAnimateOnScroll<HTMLDivElement>();

  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      const yOffset = -80;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative pt-24 md:pt-32 pb-12 md:pb-24 bg-neutral-900 overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full opacity-20 bg-gradient-to-b from-black to-transparent"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div 
            ref={contentRef}
            className={`md:w-1/2 mb-8 md:mb-0 text-center md:text-right transform transition-all duration-1000 ${
              contentVisible 
                ? "translate-y-0 opacity-100" 
                : "translate-y-10 opacity-0"
            }`}
          >
            <h1 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">
              <span className="text-[#40E0D0]">أحدث</span> التقنيات وأفضل الخدمات
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed">
              نقدم لكم أفضل خدمات الصيانة والمبيعات للأجهزة المحمولة بأعلى جودة وأسعار منافسة
            </p>
            <div className="flex flex-col md:flex-row justify-center md:justify-start space-y-4 md:space-y-0 md:space-x-4 md:space-x-reverse">
              <Button 
                onClick={() => handleNavClick("#services")}
                className="bg-[#40E0D0] text-black hover:bg-opacity-80 transition-all transform hover:-translate-y-1 shadow-lg"
              >
                خدماتنا
              </Button>
              <Button 
                onClick={() => handleNavClick("#contact")}
                variant="outline" 
                className="text-white border-white hover:bg-white hover:text-black transition-all transform hover:-translate-y-1 shadow-lg"
              >
                تواصل معنا
              </Button>
            </div>
          </div>
          
          <div 
            ref={imageRef}
            className={`md:w-1/2 transform transition-all duration-1000 ${
              imageVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1556656793-08538906a9f8?q=80&w=800&auto=format&fit=crop" 
                alt="Premium Mobile Phones" 
                className="w-full h-auto rounded-2xl transform transition-transform duration-500 hover:scale-105"
              />
              <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black to-transparent p-6">
                <span className="text-[#40E0D0] font-bold text-sm">TUZ MOBILES</span>
                <h3 className="text-white text-xl font-bold">أحدث الأجهزة بأفضل الأسعار</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-black to-transparent"></div>
    </section>
  );
}
