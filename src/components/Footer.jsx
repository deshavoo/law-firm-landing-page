import { ArrowUp, ArrowUpLeft, MessageCircle } from "lucide-react";
import { lawyerData } from "../data/lawyerData";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-[#080808]">
      {/* Large Background Text */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 overflow-hidden select-none">
        <p className="translate-y-8 whitespace-nowrap text-center font-['Noto_Kufi_Arabic'] text-[18vw] font-bold leading-none text-white/2">
          قانون
        </p>
      </div>

      <div className="relative mx-auto max-w-7xl px-5 sm:px-7 lg:px-8">
        {/* Main Footer */}
        <div className="grid gap-12 py-16 sm:py-20 lg:grid-cols-[1.4fr_0.8fr_0.8fr] lg:gap-20 lg:py-24">
          {/* Brand */}
          <div>
            <a href="#home" className="inline-flex items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center border border-[#c5a46d]/40 bg-[#c5a46d]/5">
                <span className="font-serif text-2xl text-[#c5a46d]">ي</span>
              </div>

              <div>
                <p className="font-['Noto_Kufi_Arabic'] text-base font-semibold text-[#f5f0e8]">
                  {lawyerData.name}
                </p>

                <p className="mt-1 text-[10px] tracking-wider text-[#77736d]">
                  {lawyerData.firm}
                </p>
              </div>
            </a>

            <p className="mt-7 max-w-md text-sm leading-8 text-[#77736d]">
              خدمات قانونية واستشارات مهنية ترتكز على الفهم الدقيق للقضية،
              والوضوح في الإجراءات، والاهتمام الحقيقي باحتياجات العميل.
            </p>

            <a
              href="#contact"
              className="group mt-7 inline-flex items-center gap-3 text-sm font-medium text-[#c5a46d]"
            >
              احجز استشارتك
              <ArrowUpLeft
                size={17}
                strokeWidth={1.5}
                className="transition-transform duration-300 group-hover:-translate-x-1 group-hover:-translate-y-1"
              />
            </a>
          </div>

          {/* Navigation */}
          <div>
            <p className="mb-6 text-xs font-semibold tracking-[0.18em] text-[#c5a46d]">
              روابط سريعة
            </p>

            <nav className="flex flex-col items-start gap-4">
              {lawyerData.navigation.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-sm text-[#77736d] transition-colors duration-300 hover:text-[#f5f0e8]"
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <p className="mb-6 text-xs font-semibold tracking-[0.18em] text-[#c5a46d]">
              تواصل معنا
            </p>

            <div className="flex flex-col gap-4">
              <a
                href={`tel:${lawyerData.contact.phone}`}
                dir="ltr"
                className="w-fit text-sm text-[#77736d] transition-colors hover:text-[#c5a46d]"
              >
                {lawyerData.contact.phone}
              </a>

              <a
                href={`mailto:${lawyerData.contact.email}`}
                className="w-fit break-all text-sm text-[#77736d] transition-colors hover:text-[#c5a46d]"
              >
                {lawyerData.contact.email}
              </a>

              <p className="text-sm text-[#77736d]">
                القاهرة، جمهورية مصر العربية
              </p>
            </div>

            <a
              href={`https://wa.me/${lawyerData.contact.whatsapp}`}
              target="_blank"
              rel="noreferrer"
              aria-label="التواصل عبر واتساب"
              className="mt-7 flex h-11 w-11 items-center justify-center border border-white/10 text-[#c5a46d] transition-all duration-300 hover:border-[#c5a46d] hover:bg-[#c5a46d] hover:text-[#0b0b0b]"
            >
              <MessageCircle size={19} strokeWidth={1.5} />
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col gap-5 border-t border-white/10 py-6 text-xs text-[#55514c] sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {currentYear} {lawyerData.name}. جميع الحقوق محفوظة.
          </p>

          <div className="flex items-center gap-6">
            <a href="#home" className="transition-colors hover:text-[#c5a46d]">
              سياسة الخصوصية
            </a>

            <a href="#home" className="transition-colors hover:text-[#c5a46d]">
              الشروط والأحكام
            </a>
          </div>

          <a
            href="#home"
            aria-label="العودة إلى الأعلى"
            className="group flex h-10 w-10 items-center justify-center border border-white/10 text-[#77736d] transition-all duration-300 hover:border-[#c5a46d] hover:text-[#c5a46d]"
          >
            <ArrowUp
              size={17}
              strokeWidth={1.5}
              className="transition-transform duration-300 group-hover:-translate-y-1"
            />
          </a>
        </div>
      </div>

      {/* Floating WhatsApp */}
      <a
        href={`https://wa.me/${lawyerData.contact.whatsapp}`}
        target="_blank"
        rel="noreferrer"
        aria-label="تواصل معنا عبر واتساب"
        className="fixed bottom-5 left-5 z-40 flex h-14 w-14 items-center justify-center rounded-full border border-[#c5a46d]/40 bg-[#11100f] text-[#c5a46d] shadow-2xl shadow-black/40 transition-all duration-300 hover:scale-105 hover:border-[#c5a46d] hover:bg-[#c5a46d] hover:text-[#0b0b0b] sm:bottom-7 sm:left-7"
      >
        <MessageCircle size={22} strokeWidth={1.5} />
      </a>
    </footer>
  );
}

export default Footer;
