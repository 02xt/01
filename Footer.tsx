import { Link } from "wouter";
import { Instagram, Facebook, Phone, MapPin } from "lucide-react";
import TuzLogo from "@/assets/TuzLogo";
import { CONTACT_INFO } from "@/lib/constants";

export default function Footer() {
  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      const yOffset = -80;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-neutral-900 pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between mb-12">
          <div className="mb-8 md:mb-0">
            <TuzLogo className="h-16 w-auto mb-4" />
            <h2 className="text-xl font-bold text-white mb-2">شركة طوز للصيانة والمبيعات</h2>
            <p className="text-gray-400">متخصصون في بيع وصيانة الأجهزة المحمولة</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-bold text-white mb-4">روابط سريعة</h3>
              <ul className="space-y-2">
                <li>
                  <button
                    onClick={() => handleNavClick("#home")}
                    className="text-gray-400 hover:text-[#40E0D0] transition-colors"
                  >
                    الرئيسية
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleNavClick("#about")}
                    className="text-gray-400 hover:text-[#40E0D0] transition-colors"
                  >
                    من نحن
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleNavClick("#services")}
                    className="text-gray-400 hover:text-[#40E0D0] transition-colors"
                  >
                    خدماتنا
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleNavClick("#contact")}
                    className="text-gray-400 hover:text-[#40E0D0] transition-colors"
                  >
                    تواصل معنا
                  </button>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold text-white mb-4">خدماتنا</h3>
              <ul className="space-y-2">
                <li>
                  <button
                    onClick={() => handleNavClick("#services")}
                    className="text-gray-400 hover:text-[#40E0D0] transition-colors"
                  >
                    مبيعات الأجهزة
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleNavClick("#services")}
                    className="text-gray-400 hover:text-[#40E0D0] transition-colors"
                  >
                    صيانة الأجهزة
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleNavClick("#services")}
                    className="text-gray-400 hover:text-[#40E0D0] transition-colors"
                  >
                    اكسسوارات
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleNavClick("#services")}
                    className="text-gray-400 hover:text-[#40E0D0] transition-colors"
                  >
                    قطع غيار
                  </button>
                </li>
              </ul>
            </div>

            <div className="col-span-2 md:col-span-1">
              <h3 className="text-lg font-bold text-white mb-4">تواصل معنا</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href={`tel:${CONTACT_INFO.sales.phone}`}
                    className="text-gray-400 hover:text-[#40E0D0] transition-colors flex items-center"
                  >
                    <Phone className="ml-2 w-5 h-5" />
                    <span dir="ltr">{CONTACT_INFO.sales.phone}</span> (المبيعات)
                  </a>
                </li>
                <li>
                  <a
                    href={`tel:${CONTACT_INFO.maintenance.phone}`}
                    className="text-gray-400 hover:text-[#40E0D0] transition-colors flex items-center"
                  >
                    <Phone className="ml-2 w-5 h-5" />
                    <span dir="ltr">{CONTACT_INFO.maintenance.phone}</span> (الصيانة)
                  </a>
                </li>
                <li>
                  <a
                    href={CONTACT_INFO.sales.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-[#40E0D0] transition-colors flex items-center"
                  >
                    <Instagram className="ml-2 w-5 h-5" />
                    <span>{CONTACT_INFO.sales.instagramHandle}</span>
                  </a>
                </li>
                <li>
                  <a
                    href={CONTACT_INFO.maintenance.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-[#40E0D0] transition-colors flex items-center"
                  >
                    <Instagram className="ml-2 w-5 h-5" />
                    <span>{CONTACT_INFO.maintenance.instagramHandle}</span>
                  </a>
                </li>
                <li>
                  <a
                    href={CONTACT_INFO.location.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-[#40E0D0] transition-colors flex items-center"
                  >
                    <MapPin className="ml-2 w-5 h-5" />
                    <span>{CONTACT_INFO.location.address}</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} شركة طوز للصيانة والمبيعات. جميع الحقوق محفوظة.
          </p>

          <div className="flex space-x-4 space-x-reverse">
            <a
              href={CONTACT_INFO.sales.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-[#40E0D0] transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="h-5 w-5" />
            </a>
            <a
              href="#"
              className="text-gray-500 hover:text-[#40E0D0] transition-colors"
              aria-label="Facebook"
            >
              <Facebook className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
