"use client";

import Title from "@/components/Title";
import Button from "@/components/UI/buttons/Buttons";
import Wrapper from "@/components/Wrapper";
import { sendContactForm } from "@/services/contactService";
import { useState } from "react";
import toast from "react-hot-toast";

const ContactUs = ({ locale }) => {
  console.log("ContactUs component rendered with locale:", locale);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: "" }));
    }
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = locale === "en" ? "Name is required" : "Ім'я є обов'язковим";
    } else if (formData.name.trim().length < 2) {
      newErrors.name = locale === "en" ? "Minimum 2 characters" : "Мінімум 2 символи";
    }

    if (!formData.email.trim()) {
      newErrors.email = locale === "en" ? "Email is required" : "Email є обов'язковим";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = locale === "en" ? "Enter a valid email" : "Введіть коректний email";
    }

    if (!formData.message.trim()) {
      newErrors.message = locale === "en" ? "Message is required" : "Повідомлення є обов'язковим";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = locale === "en" ? "Minimum 10 characters" : "Мінімум 10 символів";
    }

    return newErrors;
  };

  const resetForm = () => {
    setFormData({ name: "", email: "", message: "" });
    setErrors({});
  };

  const handleSubmit = async e => {
    e.preventDefault();

    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);
    try {
      await sendContactForm(formData);

      resetForm();
      toast.success(
        locale === "en" ? "Message sent successfully!" : "Повідомлення успішно надіслано!"
      );
    } catch (error) {
      toast.error(
        error.message || locale === "en"
          ? "An error occurred. Try again."
          : "Сталася помилка. Спробуйте ще раз."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      className={
        "bg-white w-full pt-2 md:pt-6 xl:pt-[100px] pb-[40px] md:pb-[100px] xl:pb-20 relative"
      }
    >
      <Wrapper>
        <Title tag={"h2"} styles={"text-center mb-8"}>
          {locale === "en" ? (
            <>
              Contact <span className="text-red"> Us</span>
            </>
          ) : (
            <>
              Зв'яжіться <span className="text-red"> з нами</span>
            </>
          )}
        </Title>
        <p className="text-grey text-xl text-center">
          {locale === "en"
            ? "Have questions? Write to us through the form"
            : "Маєте питання? Напишіть нам через форму"}
        </p>

        <form
          onSubmit={handleSubmit}
          noValidate
          className="w-full md:w-[600px] rounded-2xl shadow-md mx-auto mt-6 py-8 px-4 md:px-6 xl:px-10 bg-bgGrey flex flex-col gap-y-4"
        >
          {/* Ім'я */}
          <div className="flex flex-col gap-y-2 relative">
            <label htmlFor="name" className="text-lg font-semibold">
              {locale === "en" ? "Name" : "Ім'я"}{" "}
              <span aria-hidden="true" className="text-red">
                *
              </span>
            </label>
            <input
              id="name"
              name="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              placeholder={locale === "en" ? "Name" : "Ваше ім'я"}
              aria-invalid={!!errors.name}
              className="p-5 text-lg border-0 focus:outline-none focus:shadow-none rounded-xl h-14 bg-white w-full"
            />
            {errors.name && (
              <span role="alert" className="text-red absolute -bottom-5 left-0 text-sm italic">
                {errors.name}
              </span>
            )}
          </div>

          {/* Email */}
          <div className="flex flex-col gap-y-2 relative">
            <label htmlFor="email" className="text-lg font-semibold">
              {locale === "en" ? "Email" : "Електронна пошта"}{" "}
              <span aria-hidden="true" className="text-red">
                *
              </span>
            </label>
            <input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="your@email.com"
              aria-invalid={!!errors.email}
              className="p-5 text-lg border-0 focus:outline-none focus:shadow-none rounded-xl h-14 bg-white w-full"
            />
            {errors.email && (
              <span role="alert" className="text-red absolute -bottom-5 left-0 text-sm italic">
                {errors.email}
              </span>
            )}
          </div>

          {/* Повідомлення */}
          <div className="flex flex-col gap-y-2 relative">
            <label htmlFor="message" className="text-lg font-semibold">
              {locale === "en" ? "Message" : "Повідомлення"}

              <span aria-hidden="true" className="text-red">
                *
              </span>
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder={locale === "en" ? "Your message..." : "Ваше повідомлення..."}
              aria-invalid={!!errors.message}
              className="p-5 text-lg border-0 focus:outline-none focus:shadow-none rounded-xl h-40 bg-white w-full"
            />
            {errors.message && (
              <span role="alert" className="text-red absolute -bottom-5 left-0 text-sm italic">
                {errors.message}
              </span>
            )}
          </div>

          <Button view="red" btnType="submit" style={"mx-auto mt-4"} icon disabled={isSubmitting}>
            {isSubmitting
              ? locale === "en"
                ? "Sending..."
                : "  Відправляється..."
              : locale === "en"
                ? "Send Message"
                : "Відправити повідомлення"}
          </Button>
        </form>
      </Wrapper>
    </section>
  );
};

export default ContactUs;
