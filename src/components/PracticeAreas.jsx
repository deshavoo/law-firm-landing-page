import { motion } from "framer-motion";
import {
  Scale,
  BriefcaseBusiness,
  Building2,
  Users,
  FileText,
  ShieldCheck,
  ArrowUpLeft,
} from "lucide-react";

const practiceAreas = [
  {
    number: "01",
    icon: Scale,
    title: "القانون الجنائي",
    description:
      "تمثيل قانوني ومتابعة دقيقة للقضايا الجنائية والدفاع عن حقوق العملاء في مختلف مراحل الدعوى.",
  },
  {
    number: "02",
    icon: BriefcaseBusiness,
    title: "القانون التجاري",
    description:
      "استشارات وتمثيل قانوني للشركات والأعمال التجارية، وصياغة ومراجعة العقود والاتفاقيات.",
  },
  {
    number: "03",
    icon: Building2,
    title: "القضايا العقارية",
    description:
      "معالجة النزاعات العقارية ومراجعة عقود البيع والإيجار والملكية والمعاملات المرتبطة بالعقارات.",
  },
  {
    number: "04",
    icon: Users,
    title: "الأحوال الشخصية",
    description:
      "تقديم الاستشارات والتمثيل القانوني في قضايا الأسرة والأحوال الشخصية مع مراعاة خصوصية كل حالة.",
  },
  {
    number: "05",
    icon: FileText,
    title: "العقود والاتفاقيات",
    description:
      "صياغة ومراجعة العقود والاتفاقيات بما يساعد على وضوح الالتزامات وحماية المصالح القانونية.",
  },
  {
    number: "06",
    icon: ShieldCheck,
    title: "الاستشارات القانونية",
    description:
      "استشارات قانونية متخصصة تساعد الأفراد والشركات على فهم الموقف القانوني واتخاذ قرارات مدروسة.",
  },
];

function PracticeAreas() {
  return (
    <section
      id="practice"
      className="relative overflow-hidden border-t border-white/6 bg-[#11100f] py-24 sm:py-32 lg:py-40"
    >
      {/* Background Detail */}
      <div className="pointer-events-none absolute left-0 top-0 h-125 w-125 rounded-full bg-[#c5a46d]/2.5 blur-3xl" />

      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
        {/* Header */}
        <div className="mb-14 grid gap-8 lg:mb-20 lg:grid-cols-[1fr_0.6fr] lg:items-end">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
          >
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-10 bg-[#c5a46d]" />

              <span className="text-xs font-medium tracking-[0.18em] text-[#c5a46d]">
                مجالات الممارسة
              </span>
            </div>

            <h2 className="font-['Noto_Kufi_Arabic'] text-3xl font-semibold leading-[1.7] text-[#f5f0e8] sm:text-4xl lg:text-5xl">
              حلول قانونية
              <br />
              <span className="text-[#c5a46d]">لمختلف احتياجاتك.</span>
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-sm leading-8 text-[#9f9990] lg:pb-1"
          >
            نقدم مجموعة متكاملة من الخدمات القانونية للأفراد والشركات، مع دراسة
            كل حالة بصورة مستقلة للوصول إلى الحل القانوني المناسب.
          </motion.p>
        </div>

        {/* Cards */}
        <div className="grid border-t border-white/10 md:grid-cols-2 lg:grid-cols-3">
          {practiceAreas.map((area, index) => {
            const Icon = area.icon;

            return (
              <motion.article
                key={area.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.08,
                }}
                className="group relative min-h-77.5 border-b border-white/10 p-7 transition-colors duration-500 hover:bg-[#171513] sm:p-9 lg:min-h-85"
              >
                {/* Number */}
                <div className="flex items-start justify-between">
                  <span className="font-serif text-sm tracking-wider text-[#6f6a63] transition-colors duration-300 group-hover:text-[#c5a46d]">
                    {area.number}
                  </span>

                  <div className="flex h-12 w-12 items-center justify-center border border-white/10 transition-all duration-500 group-hover:border-[#c5a46d]/40 group-hover:bg-[#c5a46d]/10">
                    <Icon
                      size={21}
                      strokeWidth={1.4}
                      className="text-[#c5a46d]"
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="mt-16">
                  <h3 className="font-['Noto_Kufi_Arabic'] text-lg font-semibold text-[#f5f0e8] transition-colors duration-300 group-hover:text-[#c5a46d]">
                    {area.title}
                  </h3>

                  <p className="mt-4 max-w-sm text-sm leading-8 text-[#89847d]">
                    {area.description}
                  </p>
                </div>

                {/* Bottom Arrow */}
                <div className="absolute bottom-7 left-7 flex h-9 w-9 items-center justify-center border border-white/10 opacity-0 transition-all duration-500 group-hover:-translate-y-1 group-hover:opacity-100 sm:bottom-9 sm:left-9">
                  <ArrowUpLeft size={15} className="text-[#c5a46d]" />
                </div>

                {/* Hover Line */}
                <div className="absolute bottom-0 right-0 h-px w-0 bg-[#c5a46d] transition-all duration-500 group-hover:w-full" />
              </motion.article>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-10 flex flex-col gap-5 border border-white/10 bg-[#0b0b0b]/50 p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8"
        >
          <div>
            <p className="font-['Noto_Kufi_Arabic'] text-sm font-semibold text-[#f5f0e8]">
              هل تحتاج إلى استشارة قانونية؟
            </p>

            <p className="mt-2 text-xs leading-6 text-[#89847d]">
              تحدث معنا لمعرفة الخيارات القانونية المتاحة لحالتك.
            </p>
          </div>

          <a
            href="#contact"
            className="group flex w-fit items-center gap-3 bg-[#c5a46d] px-6 py-3.5 text-sm font-semibold text-[#0b0b0b] transition-colors duration-300 hover:bg-[#d5b982]"
          >
            احجز استشارة
            <ArrowUpLeft
              size={16}
              className="transition-transform duration-300 group-hover:-translate-x-1 group-hover:-translate-y-1"
            />
          </a>
        </motion.div>
      </div>
    </section>
  );
}

export default PracticeAreas;
