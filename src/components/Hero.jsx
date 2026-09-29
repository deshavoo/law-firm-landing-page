import { motion } from "framer-motion";
import { ArrowLeft, ArrowUpLeft, ShieldCheck, Scale } from "lucide-react";
import { lawyerData } from "../data/lawyerData";

function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-[#0b0b0b]"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=2200&q=85"
          alt="مكتب محاماة"
          className="h-full w-full object-cover"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-[#0b0b0b]/75" />

        {/* Gradient */}
        <div className="absolute inset-0 bg-linear-to-l from-[#0b0b0b] via-[#0b0b0b]/80 to-[#0b0b0b]/45" />

        {/* Bottom Fade */}
        <div className="absolute inset-x-0 bottom-0 h-48 bg-linear-to-t from-[#0b0b0b] to-transparent" />
      </div>

      {/* Decorative Lines */}
      <div className="absolute right-[8%] top-0 hidden h-full w-px bg-white/6 lg:block" />

      <div className="absolute left-[8%] top-0 hidden h-full w-px bg-white/6 lg:block" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center px-6 pb-16 pt-32 sm:px-8 lg:px-10">
        <div className="grid w-full items-center gap-14 lg:grid-cols-[1.2fr_0.8fr]">
          {/* Main Content */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="max-w-3xl"
          >
            {/* Eyebrow */}
            <div className="mb-7 flex items-center gap-3">
              <span className="h-px w-12 bg-[#c5a46d]" />

              <span className="text-xs font-medium tracking-[0.18em] text-[#c5a46d] sm:text-sm">
                {lawyerData.firm}
              </span>
            </div>

            {/* Heading */}
            <h1 className="font-['Noto_Kufi_Arabic'] text-4xl font-semibold leading-normal text-[#f5f0e8] sm:text-5xl md:text-6xl lg:text-[4.5rem]">
              حماية حقوقك
              <br />
              <span className="text-[#c5a46d]">تبدأ بقرار قانوني صحيح.</span>
            </h1>

            {/* Description */}
            <p className="mt-7 max-w-2xl text-base leading-8 text-[#d0cbc2] sm:text-lg">
              نقدم خدمات المحاماة والاستشارات القانونية للأفراد والشركات، من
              خلال فهم دقيق لكل حالة وتقديم حلول قانونية مدروسة تحمي مصالحك
              وتساعدك على اتخاذ القرار المناسب.
            </p>

            {/* CTA */}
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href="#contact"
                className="group flex items-center justify-center gap-3 bg-[#c5a46d] px-7 py-4 text-sm font-bold text-[#0b0b0b] transition-all duration-300 hover:bg-[#d5b982]"
              >
                احجز استشارتك الآن
                <ArrowUpLeft
                  size={18}
                  className="transition-transform duration-300 group-hover:-translate-x-1 group-hover:-translate-y-1"
                />
              </a>

              <a
                href="#practice"
                className="group flex items-center justify-center gap-3 border border-white/20 bg-white/3 px-7 py-4 text-sm font-semibold text-[#f5f0e8] backdrop-blur-sm transition-all duration-300 hover:border-[#c5a46d]/60 hover:text-[#c5a46d]"
              >
                مجالات الممارسة
                <ArrowLeft
                  size={17}
                  className="transition-transform duration-300 group-hover:-translate-x-1"
                />
              </a>
            </div>

            {/* Trust Points */}
            <div className="mt-12 flex flex-wrap gap-x-8 gap-y-5 border-t border-white/10 pt-7">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center border border-[#c5a46d]/25 bg-[#c5a46d]/5">
                  <ShieldCheck size={19} className="text-[#c5a46d]" />
                </div>

                <div>
                  <p className="text-xs text-[#a9a39a]">التزام كامل</p>
                  <p className="mt-0.5 text-sm font-medium text-[#f5f0e8]">
                    بسرية معلوماتك
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center border border-[#c5a46d]/25 bg-[#c5a46d]/5">
                  <Scale size={19} className="text-[#c5a46d]" />
                </div>

                <div>
                  <p className="text-xs text-[#a9a39a]">استشارات</p>
                  <p className="mt-0.5 text-sm font-medium text-[#f5f0e8]">
                    قانونية متخصصة
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Side Info */}
          <motion.div
            initial={{ opacity: 0, x: 35 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            className="hidden justify-end lg:flex"
          >
            <div className="relative w-72 border border-white/10 bg-[#0b0b0b]/45 p-7 backdrop-blur-md">
              {/* Gold Corner */}
              <div className="absolute -right-px -top-px h-12 w-12 border-r border-t border-[#c5a46d]" />

              <p className="text-xs tracking-[0.15em] text-[#c5a46d]">
                خبرة قانونية
              </p>

              <div className="mt-5">
                <span className="font-serif text-6xl text-[#f5f0e8]">+15</span>

                <p className="mt-2 text-sm text-[#aaa49b]">
                  عامًا من الخبرة في تقديم
                  <br />
                  الخدمات القانونية
                </p>
              </div>

              <div className="my-6 h-px bg-white/10" />

              <p className="text-sm leading-7 text-[#c5c0b8]">
                نضع خبرتنا القانونية في خدمة أهدافك، مع الالتزام بأعلى معايير
                المهنية والسرية.
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-7 left-1/2 z-20 hidden -translate-x-1/2 flex-col items-center gap-3 text-[#a9a39a] lg:flex"
      >
        <span className="text-[10px] tracking-[0.25em]">اكتشف المزيد</span>

        <motion.div
          animate={{ y: [0, 7, 0] }}
          transition={{
            duration: 1.8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <ArrowLeft size={17} className="-rotate-90" />
        </motion.div>
      </motion.a>
    </section>
  );
}

export default Hero;
