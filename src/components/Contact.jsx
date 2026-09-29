import { motion } from "framer-motion";
import {
  ArrowUpLeft,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Send,
} from "lucide-react";
import { lawyerData } from "../data/lawyerData";
function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden border-t border-white/5 bg-[#11100f] py-24 sm:py-28 lg:py-36"
    >
      {" "}
      {/* Background */}{" "}
      <div className="pointer-events-none absolute inset-0">
        {" "}
        <div className="absolute -right-40 top-1/3 h-125 w-125 rounded-full bg-[#c5a46d]/5 blur-[120px]" />{" "}
        <div className="absolute bottom-0 left-0 h-px w-1/2 bg-linear-to-l from-[#c5a46d]/30 to-transparent" />{" "}
      </div>{" "}
      <div className="relative mx-auto max-w-7xl px-5 sm:px-7 lg:px-8">
        {" "}
        {/* CTA Header */}{" "}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="mb-16 max-w-4xl lg:mb-20"
        >
          {" "}
          <div className="mb-5 flex items-center gap-3">
            {" "}
            <span className="h-px w-10 bg-[#c5a46d]" />{" "}
            <span className="text-xs font-semibold tracking-[0.2em] text-[#c5a46d]">
              {" "}
              تواصل معنا{" "}
            </span>{" "}
          </div>{" "}
          <h2 className="font-['Noto_Kufi_Arabic'] text-3xl font-semibold leading-[1.9] text-[#f5f0e8] sm:text-4xl lg:text-5xl">
            {" "}
            لديك قضية أو استشارة؟ <br />{" "}
            <span className="text-[#c5a46d]">لنبدأ من التفاصيل.</span>{" "}
          </h2>{" "}
          <p className="mt-6 max-w-2xl text-sm leading-8 text-[#a9a39a] sm:text-base">
            {" "}
            شاركنا التفاصيل الأساسية لحالتك، وسنتواصل معك لمعرفة احتياجاتك
            وتحديد الخطوة المناسبة.{" "}
          </p>{" "}
        </motion.div>{" "}
        {/* Main Contact Grid */}{" "}
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          {" "}
          {/* Contact Info */}{" "}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
            className="flex flex-col"
          >
            {" "}
            <div className="border-y border-white/10 py-2">
              {" "}
              {/* Phone */}{" "}
              <a
                href={`tel:${lawyerData.contact.phone}`}
                className="group flex items-center justify-between border-b border-white/10 py-6 transition-colors duration-300 hover:border-[#c5a46d]/40"
              >
                {" "}
                <div className="flex items-center gap-4">
                  {" "}
                  <span className="flex h-11 w-11 items-center justify-center border border-white/10 text-[#c5a46d] transition-colors group-hover:border-[#c5a46d]/50">
                    {" "}
                    <Phone size={18} strokeWidth={1.5} />{" "}
                  </span>{" "}
                  <div>
                    {" "}
                    <p className="mb-1 text-xs text-[#6f6b65]">الهاتف</p>{" "}
                    <p
                      dir="ltr"
                      className="text-sm text-[#f5f0e8] transition-colors group-hover:text-[#c5a46d]"
                    >
                      {" "}
                      {lawyerData.contact.phone}{" "}
                    </p>{" "}
                  </div>{" "}
                </div>{" "}
                <ArrowUpLeft
                  size={17}
                  className="text-[#55514c] transition-all duration-300 group-hover:-translate-x-1 group-hover:text-[#c5a46d]"
                />{" "}
              </a>{" "}
              {/* WhatsApp */}{" "}
              <a
                href={`https://wa.me/${lawyerData.contact.whatsapp}`}
                target="_blank"
                rel="noreferrer"
                className="group flex items-center justify-between border-b border-white/10 py-6 transition-colors duration-300 hover:border-[#c5a46d]/40"
              >
                {" "}
                <div className="flex items-center gap-4">
                  {" "}
                  <span className="flex h-11 w-11 items-center justify-center border border-white/10 text-[#c5a46d] transition-colors group-hover:border-[#c5a46d]/50">
                    {" "}
                    <MessageCircle size={18} strokeWidth={1.5} />{" "}
                  </span>{" "}
                  <div>
                    {" "}
                    <p className="mb-1 text-xs text-[#6f6b65]">واتساب</p>{" "}
                    <p
                      dir="ltr"
                      className="text-sm text-[#f5f0e8] transition-colors group-hover:text-[#c5a46d]"
                    >
                      {" "}
                      تواصل عبر واتساب{" "}
                    </p>{" "}
                  </div>{" "}
                </div>{" "}
                <ArrowUpLeft
                  size={17}
                  className="text-[#55514c] transition-all duration-300 group-hover:-translate-x-1 group-hover:text-[#c5a46d]"
                />{" "}
              </a>{" "}
              {/* Email */}{" "}
              <a
                href={`mailto:${lawyerData.contact.email}`}
                className="group flex items-center justify-between border-b border-white/10 py-6 transition-colors duration-300 hover:border-[#c5a46d]/40"
              >
                {" "}
                <div className="flex items-center gap-4">
                  {" "}
                  <span className="flex h-11 w-11 items-center justify-center border border-white/10 text-[#c5a46d] transition-colors group-hover:border-[#c5a46d]/50">
                    {" "}
                    <Mail size={18} strokeWidth={1.5} />{" "}
                  </span>{" "}
                  <div>
                    {" "}
                    <p className="mb-1 text-xs text-[#6f6b65]">
                      البريد الإلكتروني
                    </p>{" "}
                    <p className="text-sm text-[#f5f0e8] transition-colors group-hover:text-[#c5a46d]">
                      {" "}
                      {lawyerData.contact.email}{" "}
                    </p>{" "}
                  </div>{" "}
                </div>{" "}
                <ArrowUpLeft
                  size={17}
                  className="text-[#55514c] transition-all duration-300 group-hover:-translate-x-1 group-hover:text-[#c5a46d]"
                />{" "}
              </a>{" "}
              {/* Location */}{" "}
              <div className="flex items-center gap-4 py-6">
                {" "}
                <span className="flex h-11 w-11 items-center justify-center border border-white/10 text-[#c5a46d]">
                  {" "}
                  <MapPin size={18} strokeWidth={1.5} />{" "}
                </span>{" "}
                <div>
                  {" "}
                  <p className="mb-1 text-xs text-[#6f6b65]">الموقع</p>{" "}
                  <p className="text-sm text-[#f5f0e8]">
                    {" "}
                    القاهرة، جمهورية مصر العربية{" "}
                  </p>{" "}
                </div>{" "}
              </div>{" "}
            </div>{" "}
            {/* Direct CTA */}{" "}
            <a
              href={`https://wa.me/${lawyerData.contact.whatsapp}`}
              target="_blank"
              rel="noreferrer"
              className="mt-8 flex items-center justify-center gap-3 border border-[#c5a46d] bg-[#c5a46d] px-6 py-4 text-sm font-semibold text-[#0b0b0b] transition-all duration-300 hover:bg-transparent hover:text-[#c5a46d]"
            >
              {" "}
              <MessageCircle size={18} strokeWidth={1.7} /> تحدث معنا مباشرة{" "}
            </a>{" "}
          </motion.div>{" "}
          {/* Contact Form */}{" "}
          <motion.form
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
            onSubmit={(e) => e.preventDefault()}
            className="border border-white/10 bg-[#0b0b0b] p-6 sm:p-8 lg:p-10"
          >
            {" "}
            <div className="mb-8">
              {" "}
              <p className="font-['Noto_Kufi_Arabic'] text-lg font-medium text-[#f5f0e8]">
                {" "}
                اطلب استشارة{" "}
              </p>{" "}
              <p className="mt-2 text-sm text-[#77736d]">
                {" "}
                اترك بياناتك وسنتواصل معك لمناقشة التفاصيل.{" "}
              </p>{" "}
            </div>{" "}
            <div className="grid gap-5 sm:grid-cols-2">
              {" "}
              {/* Name */}{" "}
              <div>
                {" "}
                <label
                  htmlFor="name"
                  className="mb-2 block text-xs text-[#8f8a82]"
                >
                  {" "}
                  الاسم الكامل{" "}
                </label>{" "}
                <input
                  id="name"
                  type="text"
                  placeholder="اكتب اسمك"
                  className="w-full border border-white/10 bg-transparent px-4 py-3.5 text-sm text-[#f5f0e8] outline-none transition-colors placeholder:text-[#55514c] focus:border-[#c5a46d]/60"
                />{" "}
              </div>{" "}
              {/* Phone */}{" "}
              <div>
                {" "}
                <label
                  htmlFor="phone"
                  className="mb-2 block text-xs text-[#8f8a82]"
                >
                  {" "}
                  رقم الهاتف{" "}
                </label>{" "}
                <input
                  id="phone"
                  type="tel"
                  placeholder="01xxxxxxxxx"
                  dir="ltr"
                  className="w-full border border-white/10 bg-transparent px-4 py-3.5 text-left text-sm text-[#f5f0e8] outline-none transition-colors placeholder:text-[#55514c] focus:border-[#c5a46d]/60"
                />{" "}
              </div>{" "}
              {/* Email */}{" "}
              <div className="sm:col-span-2">
                {" "}
                <label
                  htmlFor="email"
                  className="mb-2 block text-xs text-[#8f8a82]"
                >
                  {" "}
                  البريد الإلكتروني{" "}
                </label>{" "}
                <input
                  id="email"
                  type="email"
                  placeholder="example@email.com"
                  dir="ltr"
                  className="w-full border border-white/10 bg-transparent px-4 py-3.5 text-left text-sm text-[#f5f0e8] outline-none transition-colors placeholder:text-[#55514c] focus:border-[#c5a46d]/60"
                />{" "}
              </div>{" "}
              {/* Subject */}{" "}
              <div className="sm:col-span-2">
                {" "}
                <label
                  htmlFor="subject"
                  className="mb-2 block text-xs text-[#8f8a82]"
                >
                  {" "}
                  نوع الاستشارة{" "}
                </label>{" "}
                <select
                  id="subject"
                  defaultValue=""
                  className="w-full appearance-none border border-white/10 bg-[#0b0b0b] px-4 py-3.5 text-sm text-[#a9a39a] outline-none transition-colors focus:border-[#c5a46d]/60"
                >
                  {" "}
                  <option value="" disabled>
                    {" "}
                    اختر نوع الاستشارة{" "}
                  </option>{" "}
                  <option value="criminal">قضايا جنائية</option>{" "}
                  <option value="commercial">قضايا تجارية</option>{" "}
                  <option value="real-estate">قضايا عقارية</option>{" "}
                  <option value="personal">أحوال شخصية</option>{" "}
                  <option value="contracts">عقود واتفاقيات</option>{" "}
                  <option value="consultation">استشارة قانونية عامة</option>{" "}
                </select>{" "}
              </div>{" "}
              {/* Message */}{" "}
              <div className="sm:col-span-2">
                {" "}
                <label
                  htmlFor="message"
                  className="mb-2 block text-xs text-[#8f8a82]"
                >
                  {" "}
                  تفاصيل مختصرة{" "}
                </label>{" "}
                <textarea
                  id="message"
                  rows="5"
                  placeholder="اكتب نبذة مختصرة عن موضوعك..."
                  className="w-full resize-none border border-white/10 bg-transparent px-4 py-3.5 text-sm leading-7 text-[#f5f0e8] outline-none transition-colors placeholder:text-[#55514c] focus:border-[#c5a46d]/60"
                />{" "}
              </div>{" "}
            </div>{" "}
            <button
              type="submit"
              className="mt-6 flex w-full items-center justify-center gap-3 bg-[#c5a46d] px-6 py-4 text-sm font-semibold text-[#0b0b0b] transition-all duration-300 hover:bg-[#d4b77e]"
            >
              {" "}
              إرسال طلب الاستشارة <Send size={17} strokeWidth={1.7} />{" "}
            </button>{" "}
            <p className="mt-4 text-center text-[11px] leading-6 text-[#5f5b55]">
              {" "}
              سيتم التعامل مع البيانات المقدمة بسرية واحترام لخصوصية العميل.{" "}
            </p>{" "}
          </motion.form>{" "}
        </div>{" "}
      </div>{" "}
    </section>
  );
}
export default Contact;
