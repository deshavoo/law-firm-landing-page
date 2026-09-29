import { motion } from "framer-motion";
import { ArrowUpLeft, Quote, Scale } from "lucide-react";

function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#0b0b0b] py-24 sm:py-32 lg:py-40"
    >
      {/* Decorative Background */}
      <div className="pointer-events-none absolute right-0 top-1/3 h-72 w-72 rounded-full bg-[#c5a46d]/4 blur-3xl" />

      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="mb-16 flex flex-col gap-5 lg:mb-20 lg:flex-row lg:items-end lg:justify-between"
        >
          <div>
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-10 bg-[#c5a46d]" />

              <span className="text-xs font-medium tracking-[0.18em] text-[#c5a46d]">
                من نحن
              </span>
            </div>

            <h2 className="max-w-3xl font-['Noto_Kufi_Arabic'] text-3xl font-semibold leading-[1.7] text-[#f5f0e8] sm:text-4xl lg:text-5xl">
              خبرة قانونية،
              <br />
              <span className="text-[#c5a46d]">تبدأ بفهم قضيتك.</span>
            </h2>
          </div>

          <p className="max-w-md text-sm leading-8 text-[#9f9990] lg:text-right">
            نؤمن أن العمل القانوني لا يقتصر على تقديم الحلول، بل يبدأ أولًا بفهم
            احتياجات العميل ودراسة تفاصيل كل حالة بعناية.
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          {/* Visual Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
            className="relative min-h-120 overflow-hidden border border-white/10"
          >
            <img
              src="https://images.unsplash.com/photo-1555374018-13a8994ab246?auto=format&fit=crop&w=1200&q=85"
              alt="مكتب قانوني"
              className="absolute inset-0 h-full w-full object-cover grayscale"
            />

            <div className="absolute inset-0 bg-linear-to-t from-[#0b0b0b] via-[#0b0b0b]/20 to-transparent" />

            {/* Gold Frame */}
            <div className="absolute inset-5 border border-[#c5a46d]/30" />

            {/* Quote */}
            <div className="absolute bottom-8 right-8 left-8">
              <Quote
                size={30}
                strokeWidth={1}
                className="mb-4 text-[#c5a46d]"
              />

              <p className="font-['Noto_Kufi_Arabic'] text-lg leading-9 text-[#f5f0e8]">
                العدالة تبدأ من معرفة حقوقك،
                <br />
                وتحقيقها يبدأ بخطوة صحيحة.
              </p>
            </div>
          </motion.div>

          {/* Text Side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="flex flex-col justify-center"
          >
            <div className="max-w-2xl">
              <p className="text-base leading-9 text-[#c1bbb2] sm:text-lg">
                <span className="text-[#f5f0e8]">
                  مكتب المستشار عبدالرحمن ناصر
                </span>{" "}
                هو مكتب متخصص في تقديم خدمات المحاماة والاستشارات القانونية
                للأفراد والشركات، مع التركيز على تقديم حلول عملية ومدروسة تتناسب
                مع طبيعة كل قضية واحتياج.
              </p>

              <p className="mt-6 text-base leading-9 text-[#9f9990]">
                نعمل على بناء علاقة مهنية قائمة على الثقة والوضوح والسرية، ونحرص
                على أن يكون العميل على دراية كاملة بالخيارات القانونية المتاحة
                أمامه والخطوات التي يمكن اتخاذها.
              </p>

              {/* Philosophy */}
              <div className="mt-10 border-y border-white/10 py-8">
                <div className="flex gap-5">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center border border-[#c5a46d]/30 bg-[#c5a46d]/5">
                    <Scale
                      size={21}
                      strokeWidth={1.5}
                      className="text-[#c5a46d]"
                    />
                  </div>

                  <div>
                    <h3 className="font-['Noto_Kufi_Arabic'] text-base font-semibold text-[#f5f0e8]">
                      رؤيتنا
                    </h3>

                    <p className="mt-2 text-sm leading-7 text-[#969088]">
                      تقديم خدمة قانونية احترافية تجمع بين المعرفة القانونية
                      والفهم العملي لاحتياجات العملاء.
                    </p>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <a
                href="#contact"
                className="group mt-8 inline-flex w-fit items-center gap-3 text-sm font-semibold text-[#c5a46d]"
              >
                تعرف على خدماتنا
                <ArrowUpLeft
                  size={17}
                  className="transition-transform duration-300 group-hover:-translate-x-1 group-hover:-translate-y-1"
                />
              </a>
            </div>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="mt-20 grid border border-white/10 sm:grid-cols-3"
        >
          <div className="border-b border-white/10 p-7 text-center sm:border-b-0 sm:border-l sm:p-10">
            <span className="font-serif text-4xl text-[#c5a46d] sm:text-5xl">
              +15
            </span>

            <p className="mt-3 text-sm text-[#9f9990]">عامًا من الخبرة</p>
          </div>

          <div className="border-b border-white/10 p-7 text-center sm:border-b-0 sm:border-l sm:p-10">
            <span className="font-serif text-4xl text-[#c5a46d] sm:text-5xl">
              +500
            </span>

            <p className="mt-3 text-sm text-[#9f9990]">استشارة قانونية</p>
          </div>

          <div className="p-7 text-center sm:p-10">
            <span className="font-serif text-4xl text-[#c5a46d] sm:text-5xl">
              +300
            </span>

            <p className="mt-3 text-sm text-[#9f9990]">حالة تمت متابعتها</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default About;
