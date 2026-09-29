import { useState } from "react";
import { Menu, X, ArrowUpLeft } from "lucide-react";
import { lawyerData } from "../data/lawyerData";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6 lg:px-8">
      <nav className="mx-auto max-w-7xl border border-white/10 bg-[#0b0b0b]/80 backdrop-blur-xl">
        <div className="flex h-20 items-center justify-between px-5 sm:px-7">
          <a href="#home" className="group flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center border border-[#c5a46d]/40 bg-[#c5a46d]/5">
              <span className="font-serif text-xl text-[#c5a46d]"></span>
            </div>

            <div className="hidden text-right sm:block">
              <p className="font-['Noto_Kufi_Arabic'] text-sm font-semibold text-[#f5f0e8]">
                {lawyerData.name}
              </p>

              <p className="mt-0.5 text-[10px] tracking-wider text-[#a9a39a]">
                {lawyerData.firm}
              </p>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-7 lg:flex">
            {lawyerData.navigation.slice(0, 5).map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="relative py-2 text-sm text-[#bdb7ae] transition-colors duration-300 hover:text-[#c5a46d]"
              >
                {item.label}

                <span className="absolute bottom-0 right-0 h-px w-0 bg-[#c5a46d] transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <a
            href="#contact"
            className="hidden items-center gap-2 border border-[#c5a46d] bg-[#c5a46d] px-5 py-3 text-sm font-semibold text-[#0b0b0b] transition-all duration-300 hover:bg-transparent hover:text-[#c5a46d] lg:flex"
          >
            احجز استشارة
            <ArrowUpLeft size={16} strokeWidth={1.8} />
          </a>

          {/* Mobile Button */}
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "إغلاق القائمة" : "فتح القائمة"}
            className="flex h-11 w-11 items-center justify-center border border-white/10 text-[#f5f0e8] transition-colors hover:border-[#c5a46d]/50 hover:text-[#c5a46d] lg:hidden"
          >
            {isOpen ? <X size={21} /> : <Menu size={21} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`overflow-hidden border-t border-white/10 transition-all duration-500 lg:hidden ${
            isOpen ? "max-h-125 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="flex flex-col px-5 py-5">
            {lawyerData.navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="border-b border-white/5 py-4 text-sm text-[#d8d2c8] transition-colors hover:text-[#c5a46d]"
              >
                {item.label}
              </a>
            ))}

            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="mt-5 flex items-center justify-center gap-2 bg-[#c5a46d] px-5 py-3.5 text-sm font-semibold text-[#0b0b0b]"
            >
              احجز استشارة
              <ArrowUpLeft size={16} strokeWidth={1.8} />
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
