import { 
  Medal, 
  Bolt, 
  ShieldCheck 
} from "lucide-react";
import useAnimateOnScroll from "@/hooks/useAnimateOnScroll";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}

function FeatureCard({ icon, title, description, delay }: FeatureCardProps) {
  const [ref, isVisible] = useAnimateOnScroll<HTMLDivElement>();

  return (
    <div 
      ref={ref} 
      className={`bg-neutral-900 rounded-xl p-8 border-t-4 border-[#40E0D0] shadow-xl transform transition-all duration-1000 ${
        isVisible
          ? "translate-y-0 opacity-100" 
          : "translate-y-10 opacity-0"
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="rounded-full bg-[#40E0D0] bg-opacity-20 w-16 h-16 flex items-center justify-center mb-6">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-4">{title}</h3>
      <p className="text-gray-300">{description}</p>
    </div>
  );
}

export default function About() {
  const [titleRef, titleVisible] = useAnimateOnScroll<HTMLDivElement>();
  const [contentRef, contentVisible] = useAnimateOnScroll<HTMLDivElement>();

  return (
    <section id="about" className="py-16 bg-black relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div 
          ref={titleRef} 
          className={`text-center mb-16 transform transition-all duration-1000 ${
            titleVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">من نحن</h2>
          <div className="w-24 h-1 bg-[#40E0D0] mx-auto mb-8"></div>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            شركة طوز للصيانة والمبيعات هي شركة متخصصة في مجال الهواتف المحمولة، نقدم خدمات بيع وصيانة الأجهزة بجودة عالية وضمان حقيقي
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <FeatureCard
            icon={<Medal className="text-[#40E0D0] h-6 w-6" />}
            title="خبرة طويلة"
            description="نتمتع بخبرة طويلة في مجال صيانة وبيع الأجهزة المحمولة مما يمكننا من تقديم أفضل الخدمات"
            delay={100}
          />
          <FeatureCard
            icon={<Bolt className="text-[#40E0D0] h-6 w-6" />}
            title="فنيين محترفين"
            description="فريق من الفنيين المحترفين المدربين على أحدث تقنيات الصيانة وباستخدام أدوات احترافية"
            delay={300}
          />
          <FeatureCard
            icon={<ShieldCheck className="text-[#40E0D0] h-6 w-6" />}
            title="ضمان الجودة"
            description="نقدم ضمان حقيقي على جميع منتجاتنا وخدماتنا مع التزامنا بأعلى معايير الجودة"
            delay={500}
          />
        </div>

        <div 
          ref={contentRef}
          className={`mt-16 bg-neutral-900 rounded-xl p-8 shadow-2xl transform transition-all duration-1000 ${
            contentVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2 md:pl-8 mb-6 md:mb-0">
              <h3 className="text-2xl font-bold mb-4">رؤيتنا</h3>
              <p className="text-gray-300 mb-4">
                أن نكون الخيار الأول والأفضل في مجال مبيعات وصيانة الأجهزة المحمولة، من خلال تقديم خدمات متميزة ذات جودة عالية.
              </p>
              <h3 className="text-2xl font-bold mb-4">مهمتنا</h3>
              <p className="text-gray-300">
                تقديم أفضل المنتجات وخدمات الصيانة بأسعار منافسة مع الالتزام بمعايير الجودة والمصداقية لتحقيق رضا العملاء.
              </p>
            </div>
            <div className="md:w-1/2 relative h-60 md:h-auto overflow-hidden rounded-lg">
              <img
                src="https://images.unsplash.com/photo-1581287053822-fd7bf4f4bfec?q=80&w=800&auto=format&fit=crop"
                alt="Mobile phone repair services"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
