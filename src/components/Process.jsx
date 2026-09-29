import { motion } from "framer-motion";
import {
  MessageSquareText,
  SearchCheck,
  Scale,
  ClipboardCheck,
  ArrowLeft,
} from "lucide-react";

const steps = [
  {
    number: "01",
    icon: MessageSquareText,
    title: "تواصل معنا",
    description:
      "ابدأ بالتواصل معنا وشاركنا المعلومات الأساسية المتعلقة بالموضوع أو الحالة التي تحتاج إلى مساعدة قانونية بشأنها.",
  },
  {
    number: "02",
    icon: SearchCheck,
    title: "دراسة الحالة",
    description:
      "نراجع التفاصيل والمستندات المتاحة لفهم الموقف وتحديد الجوانب القانونية والخيارات الممكنة.",
  },
  {
    number: "03",
    icon: Scale,
    title: "الاستشارة القانونية",
    description:
      "نوضح لك الموقف القانوني والخيارات المتاحة والخطوات المقترحة بصورة واضحة ومباشرة.",
  },
  {
    number: "04",
    icon: ClipboardCheck,
    title: "المتابعة",
    description:
      "في حال الاتفاق على المتابعة، يتم وضع خطة عمل واضحة والتعامل مع الملف وفق الإجراءات القانونية المناسبة.",
  },
];

function Process() {
  return (
    <section
      id="process"
      className="relative overflow-hidden border-t border-white/6 bg-[#11100f] py-24 sm:py-32 lg:py-40"
    >
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-3xl text-center"
        >
          <div className="mb-5 flex items-center justify-center gap-3">
            <span className="h-px w-10 bg-[#c5a46d]" />

            <span className="text-xs font-medium tracking-[0.18em] text-[#c5a46d]">
              آلية العمل
            </span>

            <span className="h-px w-10 bg-[#c5a46d]" />
          </div>

          <h2 className="font-['Noto_Kufi_Arabic'] text-3xl font-semibold leading-[1.8] text-[#f5f0e8] sm:text-4xl lg:text-5xl">
            خطوات واضحة،
            <br />
            <span className="text-[#c5a46d]">من الاستشارة إلى المتابعة.</span>
          </h2>

          <p className="mt-6 text-sm leading-8 text-[#8f8a83] sm:text-base">
            نحرص على أن تكون خطوات التعامل واضحة منذ البداية، حتى تعرف ما يمكن
            توقعه في كل مرحلة.
          </p>
        </motion.div>

        {/* Desktop Timeline */}
        <div className="relative mt-20 hidden lg:block">
          {/* Connecting Line */}
          <div className="absolute right-[12.5%] left-[12.5%] top-8 h-px bg-white/10" />

          <div className="grid grid-cols-4">
            {steps.map((step, index) => {
              const Icon = step.icon;

              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.7,
                    delay: index * 0.12,
                  }}
                  className="group relative px-5 text-center"
                >
                  {/* Timeline Point */}
                  <div className="relative z-10 mx-auto flex h-16 w-16 items-center justify-center border border-white/15 bg-[#11100f] transition-all duration-500 group-hover:border-[#c5a46d] group-hover:bg-[#c5a46d]">
                    <Icon
                      size={22}
                      strokeWidth={1.4}
                      className="text-[#c5a46d] transition-colors duration-500 group-hover:text-[#0b0b0b]"
                    />
                  </div>

                  {/* Number */}
                  <p className="mt-7 font-serif text-xs tracking-[0.2em] text-[#c5a46d]">
                    {step.number}
                  </p>

                  {/* Title */}
                  <h3 className="mt-3 font-['Noto_Kufi_Arabic'] text-base font-semibold text-[#f5f0e8] transition-colors duration-300 group-hover:text-[#c5a46d]">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="mx-auto mt-4 max-w-xs text-sm leading-7 text-[#817c75]">
                    {step.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Mobile Timeline */}
        <div className="relative mt-16 lg:hidden">
          {/* Vertical Line */}
          <div className="absolute bottom-6 right-6 top-6 w-px bg-white/10" />

          <div className="space-y-10">
            {steps.map((step, index) => {
              const Icon = step.icon;

              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, x: 25 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.08,
                  }}
                  className="relative flex gap-6"
                >
                  {/* Point */}
                  <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center border border-white/15 bg-[#11100f]">
                    <Icon
                      size={18}
                      strokeWidth={1.4}
                      className="text-[#c5a46d]"
                    />
                  </div>

                  {/* Content */}
                  <div className="pt-1">
                    <p className="font-serif text-xs tracking-[0.2em] text-[#c5a46d]">
                      {step.number}
                    </p>

                    <h3 className="mt-2 font-['Noto_Kufi_Arabic'] text-base font-semibold text-[#f5f0e8]">
                      {step.title}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-[#817c75]">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Bottom Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mx-auto mt-16 flex max-w-2xl items-center justify-center gap-3 border-t border-white/10 pt-8 text-center"
        >
          <span className="text-xs leading-6 text-[#77726b]">
            تختلف الإجراءات والخطوات بحسب طبيعة كل حالة واحتياجاتها القانونية.
          </span>

          <ArrowLeft size={15} className="shrink-0 text-[#c5a46d]" />
        </motion.div>
      </div>
    </section>
  );
}

export default Process;
