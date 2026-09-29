import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote, ArrowLeft, ArrowRight } from "lucide-react";

const testimonials = [
  {
    quote:
      "من أول استشارة شعرت أن قضيتي في أيدٍ أمينة. كان هناك وضوح كامل في شرح الموقف القانوني والخطوات المطلوبة.",
    name: "أحمد م.",
    role: "عميل فردي",
  },
  {
    quote:
      "التعامل كان احترافيًا جدًا، والأهم بالنسبة لي كان الوضوح في كل مرحلة وعدم ترك أي تفاصيل غير مفهومة.",
    name: "محمد ع.",
    role: "صاحب شركة",
  },
  {
    quote:
      "حصلت على استشارة واضحة ساعدتني في فهم حقوقي واتخاذ القرار المناسب بناءً على وضعي القانوني.",
    name: "سارة أ.",
    role: "عميلة",
  },
];

function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  const current = testimonials[activeIndex];

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const previousTestimonial = () => {
    setActiveIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <section
      id="testimonials"
      className="relative overflow-hidden border-t border-white/5 bg-[#11100f] py-24 sm:py-28 lg:py-36"
    >
      {/* Background Detail */}
      <div className="pointer-events-none absolute -left-32 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full bg-[#c5a46d]/5 blur-3xl" />

      <div className="mx-auto max-w-7xl px-5 sm:px-7 lg:px-8">
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

              <span className="text-xs font-semibold tracking-[0.2em] text-[#c5a46d]">
                آراء العملاء
              </span>
            </div>

            <h2 className="max-w-2xl font-['Noto_Kufi_Arabic'] text-3xl font-semibold leading-[1.8] text-[#f5f0e8] sm:text-4xl lg:text-5xl">
              الثقة تبدأ من تجربة
              <span className="text-[#c5a46d]"> حقيقية.</span>
            </h2>
          </div>

          <p className="max-w-md text-sm leading-8 text-[#a9a39a]">
            نؤمن أن أفضل ما يعكس جودة العمل القانوني هو وضوح التجربة التي يعيشها
            العميل منذ أول تواصل وحتى متابعة قضيته.
          </p>
        </motion.div>

        {/* Testimonial */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
          className="relative border-y border-white/10 py-12 sm:py-16 lg:py-20"
        >
          <div className="grid gap-10 lg:grid-cols-[120px_1fr_180px] lg:items-start lg:gap-16">
            {/* Quote Icon */}
            <div className="flex">
              <div className="flex h-16 w-16 items-center justify-center border border-[#c5a46d]/30 text-[#c5a46d]">
                <Quote size={27} strokeWidth={1.2} />
              </div>
            </div>

            {/* Quote Content */}
            <div className="min-h-60">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.35 }}
                >
                  <blockquote className="max-w-4xl font-['Noto_Kufi_Arabic'] text-xl font-medium leading-[2.1] text-[#f5f0e8] sm:text-2xl lg:text-3xl lg:leading-loose">
                    “{current.quote}”
                  </blockquote>

                  <div className="mt-10">
                    <p className="font-semibold text-[#f5f0e8]">
                      {current.name}
                    </p>

                    <p className="mt-1 text-sm text-[#8f8a82]">
                      {current.role}
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Controls */}
            <div className="flex items-center justify-between lg:flex-col lg:items-end lg:justify-between lg:self-stretch">
              <div className="text-sm text-[#77736d]">
                <span className="text-lg text-[#c5a46d]">
                  {String(activeIndex + 1).padStart(2, "0")}
                </span>

                <span className="mx-2">/</span>

                <span>{String(testimonials.length).padStart(2, "0")}</span>
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={nextTestimonial}
                  aria-label="التقييم التالي"
                  className="flex h-12 w-12 items-center justify-center border border-white/10 text-[#f5f0e8] transition-all duration-300 hover:border-[#c5a46d] hover:text-[#c5a46d]"
                >
                  <ArrowLeft size={18} strokeWidth={1.5} />
                </button>

                <button
                  type="button"
                  onClick={previousTestimonial}
                  aria-label="التقييم السابق"
                  className="flex h-12 w-12 items-center justify-center border border-white/10 text-[#f5f0e8] transition-all duration-300 hover:border-[#c5a46d] hover:text-[#c5a46d]"
                >
                  <ArrowRight size={18} strokeWidth={1.5} />
                </button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Bottom Statement */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-10 flex flex-col gap-3 text-sm text-[#77736d] sm:flex-row sm:items-center sm:justify-between"
        >
          <p>كل قضية لها خصوصيتها، وكل عميل يستحق اهتمامًا خاصًا.</p>

          <div className="h-px w-20 bg-[#c5a46d]/40" />
        </motion.div>
      </div>
    </section>
  );
}

export default Testimonials;
