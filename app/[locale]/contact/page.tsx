"use client";
import { useState } from "react";
import { Button } from "@/app/[locale]/components/ui/button";
import { Input } from "@/app/[locale]/components/ui/input";
import { Textarea } from "@/app/[locale]/components/ui/textarea";
import Navbar from "@/app/[locale]/components/navbar";
import { useTranslations } from "next-intl";

export default function ContactPage() {
  const t = useTranslations("contactPage");

  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    const data = await res.json();
    if (data.success) {
      setStatus("success");
      setForm({ name: "", email: "", message: "" });
    } else {
      setStatus("error");
    }
  }

  return (
    <div className="min-h-screen bg-white pt-20">
      {/* Navigation */}
      <Navbar />

      {/* Contact Form */}
      <section className="py-32">
        <div className="container mx-auto px-8">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-4xl font-light text-gray-900 mb-8 tracking-wider">
                {t("hero.title")}
              </h1>
              <p className="text-gray-600 font-light leading-relaxed">
                {t("hero.description")}
              </p>
            </div>

            <form className="space-y-8" onSubmit={handleSubmit}>
              <div className="grid md:grid-cols-2 gap-6">
                <Input
                  placeholder={t("form.firstName")}
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="border-0 border-b border-gray-200 rounded-none px-0 py-4 font-light tracking-wide placeholder:text-gray-400 focus:border-gray-900"
                />
                <Input
                  placeholder={t("form.lastName")}
                  className="border-0 border-b border-gray-200 rounded-none px-0 py-4 font-light tracking-wide placeholder:text-gray-400 focus:border-gray-900"
                />
              </div>

              <Input
                placeholder={t("form.email")}
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="border-0 border-b border-gray-200 rounded-none px-0 py-4 font-light tracking-wide placeholder:text-gray-400 focus:border-gray-900"
              />

              <Input
                placeholder={t("form.company")}
                className="border-0 border-b border-gray-200 rounded-none px-0 py-4 font-light tracking-wide placeholder:text-gray-400 focus:border-gray-900"
              />

              <Input
                placeholder={t("form.phone")}
                className="border-0 border-b border-gray-200 rounded-none px-0 py-4 font-light tracking-wide placeholder:text-gray-400 focus:border-gray-900"
              />

              <Input
                placeholder={t("form.projectType")}
                className="border-0 border-b border-gray-200 rounded-none px-0 py-4 font-light tracking-wide placeholder:text-gray-400 focus:border-gray-900"
              />

              <Textarea
                placeholder={t("form.message")}
                rows={6}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="border-0 border-b border-gray-200 rounded-none px-0 py-4 font-light tracking-wide placeholder:text-gray-400 focus:border-gray-900 resize-none"
              />

              <div className="pt-8">
                <Button type="submit" className="w-full font-light tracking-wider py-4">
                  {status === "loading"
                    ? t("form.button.sending")
                    : t("form.button.send")}
                </Button>
              </div>
            </form>

            {status === "success" && (
              <p className="text-green-600 mt-4">{t("form.status.success")}</p>
            )}
            {status === "error" && (
              <p className="text-red-600 mt-4">{t("form.status.error")}</p>
            )}
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-32 bg-gray-50">
        <div className="container mx-auto px-8">
          <div className="grid md:grid-cols-3 gap-16 text-center">
            <div>
              <h3 className="text-lg font-light text-gray-900 mb-4 tracking-wider">
                {t("info.headquarters.title")}
              </h3>
              <p className="text-gray-600 font-light text-sm leading-relaxed whitespace-pre-line">
                {t("info.headquarters.address")}
              </p>
            </div>

            <div>
              <h3 className="text-lg font-light text-gray-900 mb-4 tracking-wider">
                {t("info.contact.title")}
              </h3>
              <p className="text-gray-600 font-light text-sm leading-relaxed whitespace-pre-line">
                {t("info.contact.details")}
              </p>
            </div>

            <div>
              <h3 className="text-lg font-light text-gray-900 mb-4 tracking-wider">
                {t("info.hours.title")}
              </h3>
              <p className="text-gray-600 font-light text-sm leading-relaxed whitespace-pre-line">
                {t("info.hours.details")}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="py-32">
        <div className="container mx-auto px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 border border-gray-200">
              <h3 className="text-lg font-light text-gray-900 mb-4 tracking-wider">
                {t("quickActions.samples.title")}
              </h3>
              <p className="text-gray-600 font-light text-sm mb-6 leading-relaxed">
                {t("quickActions.samples.description")}
              </p>
              <Button variant="outline" className="font-light tracking-wide bg-transparent">
                {t("quickActions.samples.button")}
              </Button>
            </div>

            <div className="text-center p-8 border border-gray-200">
              <h3 className="text-lg font-light text-gray-900 mb-4 tracking-wider">
                {t("quickActions.consultation.title")}
              </h3>
              <p className="text-gray-600 font-light text-sm mb-6 leading-relaxed">
                {t("quickActions.consultation.description")}
              </p>
              <Button variant="outline" className="font-light tracking-wide bg-transparent">
                {t("quickActions.consultation.button")}
              </Button>
            </div>

            <div className="text-center p-8 border border-gray-200">
              <h3 className="text-lg font-light text-gray-900 mb-4 tracking-wider">
                {t("quickActions.visit.title")}
              </h3>
              <p className="text-gray-600 font-light text-sm mb-6 leading-relaxed">
                {t("quickActions.visit.description")}
              </p>
              <Button variant="outline" className="font-light tracking-wide bg-transparent">
                {t("quickActions.visit.button")}
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
