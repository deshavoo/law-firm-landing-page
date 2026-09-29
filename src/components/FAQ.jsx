import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";

const faqs = [
  {
    question: "كيف يمكنني حجز استشارة قانونية؟",
    answer:
      "يمكنك التواصل معنا من خلال الهاتف أو واتساب أو نموذج التواصل الموجود في الموقع، وسيتم تحديد الموعد المناسب وطريقة الاستشارة وفقًا لطبيعة حالتك.",
  },
  {
    question: "هل يمكن الحصول على استشارة عن بُعد؟",
    answer:
      "نعم، يمكن تقديم الاستشارات القانونية عن بُعد حسب طبيعة الموضوع، سواء من خلال مكالمة هاتفية أو وسيلة التواصل المناسبة.",
  },
  {
    question: "ما المعلومات المطلوبة قبل الاستشارة؟",
    answer:
      "يفضل تجهيز ملخص واضح للموضوع، وأهم التواريخ والمستندات المرتبطة به، حتى يمكن تكوين صورة دقيقة عن الحالة قبل تقديم الرأي القانوني.",
  },
  {
    question: "هل جميع الاستشارات تتم بسرية؟",
    answer:
      "يتم التعامل مع المعلومات والمستندات التي يشاركها العميل ضمن إطار مهني يحترم خصوصية العميل وسرية المعلومات وفقًا للضوابط القانونية والمهنية المعمول بها.",
  },
  {
    question: "هل يمكن للمكتب متابعة القضية بالكامل؟",
    answer:
      "تختلف طبيعة المتابعة والخدمات القانونية حسب نوع القضية واحتياجات العميل. بعد دراسة الحالة يتم توضيح نطاق العمل والخطوات المقترحة بشكل واضح.",
  },
  {
    question: "كم تستغرق الاستشارة القانونية؟",
    answer:
      "تختلف مدة الاستشارة حسب طبيعة الموضوع ومدى تعقيده. بعد الاطلاع على التفاصيل الأساسية يمكن تحديد الوقت المناسب للاستشارة.",
  },
];

function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section
      id="faq"
      className="relative overflow-hidden border-t border-white/5 bg-[#0b0b0b] py-24 sm:py-28 lg:py-36"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-7 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="mb-14 lg:mb-20"
        >
          <div className="mb-5 flex items-center gap-3">
            <span className="h-px w-10 bg-[#c5a46d]" />

            <span className="text-xs font-semibold tracking-[0.2em] text-[#c5a46d]">
              الأسئلة الشائعة
            </span>
          </div>

          <div className="grid gap-6 lg:grid-cols-[1fr_380px] lg:items-end lg:gap-16">
            <h2 className="max-w-3xl font-['Noto_Kufi_Arabic'] text-3xl font-semibold leading-[1.9] text-[#f5f0e8] sm:text-4xl lg:text-5xl">
              كل ما تحتاج إلى معرفته
              <span className="text-[#c5a46d]"> قبل البداية.</span>
            </h2>

            <p className="text-sm leading-8 text-[#a9a39a]">
              إذا لم تجد إجابة على سؤالك، يمكنك التواصل معنا مباشرة للحصول على
              توضيح يناسب حالتك القانونية.
            </p>
          </div>
        </motion.div>

        {/* FAQ List */}
        <div className="border-t border-white/10">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <motion.div
                key={faq.question}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.5, delay: index * 0.04 }}
                className="border-b border-white/10"
              >
                <button
                  type="button"
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={isOpen}
                  className="group flex w-full items-center justify-between gap-6 py-6 text-right sm:py-7 lg:py-8"
                >
                  <div className="flex items-center gap-5">
                    <span className="hidden font-mono text-xs text-[#6f6b65] sm:block">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <span
                      className={`font-['Noto_Kufi_Arabic'] text-base font-medium transition-colors duration-300 sm:text-lg ${
                        isOpen
                          ? "text-[#c5a46d]"
                          : "text-[#f5f0e8] group-hover:text-[#c5a46d]"
                      }`}
                    >
                      {faq.question}
                    </span>
                  </div>

                  <span
                    className={`flex h-10 w-10 shrink-0 items-center justify-center border transition-all duration-300 ${
                      isOpen
                        ? "rotate-45 border-[#c5a46d] text-[#c5a46d]"
                        : "border-white/10 text-[#a9a39a] group-hover:border-[#c5a46d]/50 group-hover:text-[#c5a46d]"
                    }`}
                  >
                    <Plus size={18} strokeWidth={1.5} />
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="pb-7 pr-0 sm:pb-8 sm:pr-14 lg:pr-20">
                        <p className="max-w-3xl text-sm leading-8 text-[#9e9991] sm:text-base">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-10 flex items-center gap-3 text-xs text-[#6f6b65]"
        >
          <span className="h-px w-8 bg-[#c5a46d]/40" />
          <span>الاستشارة القانونية تبدأ بفهم التفاصيل.</span>
        </motion.div>
      </div>
    </section>
  );
}

export default FAQ;
