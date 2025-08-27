import Link from "next/link"
import { Button } from "@/app/[locale]/components/ui/button"
import { Input } from "@/app/[locale]/components/ui/input"
import { Textarea } from "@/app/[locale]/components/ui/textarea"
import Navbar from "@/app/[locale]/components/navbar"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white pt-20">
      {/* Navigation */}
      <Navbar />

      {/* Contact Form */}
      <section className="py-32">
        <div className="container mx-auto px-8">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-4xl font-light text-gray-900 mb-8 tracking-wider">CONTACT</h1>
              <p className="text-gray-600 font-light leading-relaxed">
                Ready to discuss your project? Our team of specialists is here to help you create the perfect materials
                for your furniture designs.
              </p>
            </div>

            <form className="space-y-8">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <Input
                    placeholder="FIRST NAME"
                    className="border-0 border-b border-gray-200 rounded-none px-0 py-4 font-light tracking-wide placeholder:text-gray-400 focus:border-gray-900"
                  />
                </div>
                <div>
                  <Input
                    placeholder="LAST NAME"
                    className="border-0 border-b border-gray-200 rounded-none px-0 py-4 font-light tracking-wide placeholder:text-gray-400 focus:border-gray-900"
                  />
                </div>
              </div>

              <div>
                <Input
                  placeholder="EMAIL ADDRESS"
                  type="email"
                  className="border-0 border-b border-gray-200 rounded-none px-0 py-4 font-light tracking-wide placeholder:text-gray-400 focus:border-gray-900"
                />
              </div>

              <div>
                <Input
                  placeholder="COMPANY"
                  className="border-0 border-b border-gray-200 rounded-none px-0 py-4 font-light tracking-wide placeholder:text-gray-400 focus:border-gray-900"
                />
              </div>

              <div>
                <Input
                  placeholder="PHONE NUMBER"
                  className="border-0 border-b border-gray-200 rounded-none px-0 py-4 font-light tracking-wide placeholder:text-gray-400 focus:border-gray-900"
                />
              </div>

              <div>
                <Input
                  placeholder="PROJECT TYPE"
                  className="border-0 border-b border-gray-200 rounded-none px-0 py-4 font-light tracking-wide placeholder:text-gray-400 focus:border-gray-900"
                />
              </div>

              <div>
                <Textarea
                  placeholder="MESSAGE"
                  rows={6}
                  className="border-0 border-b border-gray-200 rounded-none px-0 py-4 font-light tracking-wide placeholder:text-gray-400 focus:border-gray-900 resize-none"
                />
              </div>

              <div className="pt-8">
                <Button className="w-full font-light tracking-wider py-4">SEND MESSAGE</Button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-32 bg-gray-50">
        <div className="container mx-auto px-8">
          <div className="grid md:grid-cols-3 gap-16 text-center">
            <div>
              <h3 className="text-lg font-light text-gray-900 mb-4 tracking-wider">HEADQUARTERS</h3>
              <p className="text-gray-600 font-light text-sm leading-relaxed">
                1234 Industrial Boulevard
                <br />
                Manufacturing District
                <br />
                New York, NY 10001
              </p>
            </div>

            <div>
              <h3 className="text-lg font-light text-gray-900 mb-4 tracking-wider">CONTACT</h3>
              <p className="text-gray-600 font-light text-sm leading-relaxed">
                +1 (555) 123-4567
                <br />
                info@luxcraft.com
                <br />
                sales@luxcraft.com
              </p>
            </div>

            <div>
              <h3 className="text-lg font-light text-gray-900 mb-4 tracking-wider">HOURS</h3>
              <p className="text-gray-600 font-light text-sm leading-relaxed">
                Monday - Friday: 8:00 - 18:00
                <br />
                Saturday: 9:00 - 16:00
                <br />
                Sunday: Closed
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
              <h3 className="text-lg font-light text-gray-900 mb-4 tracking-wider">REQUEST SAMPLES</h3>
              <p className="text-gray-600 font-light text-sm mb-6 leading-relaxed">
                Evaluate our materials with physical samples delivered to your location.
              </p>
              <Button variant="outline" className="font-light tracking-wide bg-transparent">
                REQUEST
              </Button>
            </div>

            <div className="text-center p-8 border border-gray-200">
              <h3 className="text-lg font-light text-gray-900 mb-4 tracking-wider">PROJECT CONSULTATION</h3>
              <p className="text-gray-600 font-light text-sm mb-6 leading-relaxed">
                Schedule a consultation with our technical specialists.
              </p>
              <Button variant="outline" className="font-light tracking-wide bg-transparent">
                SCHEDULE
              </Button>
            </div>

            <div className="text-center p-8 border border-gray-200">
              <h3 className="text-lg font-light text-gray-900 mb-4 tracking-wider">FACILITY VISIT</h3>
              <p className="text-gray-600 font-light text-sm mb-6 leading-relaxed">
                Experience our manufacturing process and quality standards firsthand.
              </p>
              <Button variant="outline" className="font-light tracking-wide bg-transparent">
                ARRANGE
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
