import { motion } from "framer-motion";
import { LockKeyhole, Target, MessageCircle, Scale } from "lucide-react";

const advantages = [
  {
    icon: LockKeyhole,
    number: "01",
    title: "سرية تامة",
    description:
      "نحرص على الحفاظ على خصوصية المعلومات والبيانات المتعلقة بكل حالة، والتعامل معها بمهنية ومسؤولية.",
  },
  {
    icon: Target,
    number: "02",
    title: "دراسة دقيقة",
    description:
      "نبدأ بفهم تفاصيل الحالة ودراسة المعطيات القانونية قبل تحديد المسار المناسب للتعامل معها.",
  },
  {
    icon: MessageCircle,
    number: "03",
    title: "وضوح وتواصل",
    description:
      "نحرص على توضيح الموقف القانوني والخيارات المتاحة والخطوات المقترحة بصورة واضحة للعميل.",
  },
  {
    icon: Scale,
    number: "04",
    title: "منهج مهني",
    description:
      "نتعامل مع كل ملف وفق منهج منظم يراعي طبيعة الحالة والأهداف القانونية الخاصة بكل عميل.",
  },
];

function WhyUs() {
  return (
    <section
      id="why-us"
      className="relative overflow-hidden bg-[#0b0b0b] py-24 sm:py-32 lg:py-40"
    >
      <div className="pointer-events-none absolute -left-20 top-20 select-none font-serif text-[20rem] leading-none text-white/1.5">
        04
      </div>

      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
        <div className="grid gap-16 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
            className="lg:sticky lg:top-32 lg:h-fit"
          >
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-10 bg-[#c5a46d]" />

              <span className="text-xs font-medium tracking-[0.18em] text-[#c5a46d]">
                لماذا نحن
              </span>
            </div>

            <h2 className="font-['Noto_Kufi_Arabic'] text-3xl font-semibold leading-[1.8] text-[#f5f0e8] sm:text-4xl lg:text-5xl">
              لأن قضيتك
              <br />
              <span className="text-[#c5a46d]">تستحق اهتمامًا خاصًا.</span>
            </h2>

            <p className="mt-7 max-w-md text-sm leading-8 text-[#908b84] sm:text-base">
              نؤمن أن كل حالة لها تفاصيلها الخاصة، ولذلك نعتمد على الفهم الدقيق
              والتواصل الواضح والعمل القانوني المنظم في كل ملف نتولاه.
            </p>

            <div className="mt-12 border-t border-white/10 pt-8">
              <div className="flex items-end gap-4">
                <span className="font-serif text-7xl leading-none text-[#c5a46d]">
                  +15
                </span>

                <div className="pb-1">
                  <p className="text-sm text-[#f5f0e8]">عامًا</p>

                  <p className="mt-1 text-xs text-[#77726c]">
                    من الخبرة القانونية
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Advantages */}
          <div className="border-t border-white/10">
            {advantages.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.number}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.7,
                    delay: index * 0.1,
                  }}
                  className="group border-b border-white/10 py-8 sm:py-10"
                >
                  <div className="grid gap-6 sm:grid-cols-[70px_55px_1fr] sm:items-start">
                    {/* Number */}
                    <span className="font-serif text-sm tracking-wider text-[#625e58] transition-colors duration-300 group-hover:text-[#c5a46d]">
                      {item.number}
                    </span>

                    {/* Icon */}
                    <div className="flex h-11 w-11 items-center justify-center border border-white/10 transition-all duration-500 group-hover:border-[#c5a46d]/40 group-hover:bg-[#c5a46d]/5">
                      <Icon
                        size={19}
                        strokeWidth={1.4}
                        className="text-[#c5a46d]"
                      />
                    </div>

                    {/* Content */}
                    <div>
                      <h3 className="font-['Noto_Kufi_Arabic'] text-lg font-semibold text-[#f5f0e8] transition-colors duration-300 group-hover:text-[#c5a46d]">
                        {item.title}
                      </h3>

                      <p className="mt-3 max-w-xl text-sm leading-8 text-[#89847d]">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhyUs;
