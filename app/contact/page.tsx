"use client";

import AnimatedSection from "../../components/AnimatedSection";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaClock,
} from "react-icons/fa";

export default function Contact() {
  return (
    <main className="min-h-screen bg-[#F8F9FA]">

      {/* Hero */}
     
      <section className="relative h-[350px]">
      <img
        src="/contact-us-banner.jpg"
        className="absolute inset-0 h-full w-full object-cover"
        alt="Contact Us Banner"
      />

      <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
        <div className="text-center text-white">
          <h1 className="text-6xl font-bold">Contact Us</h1>
          <p className="mt-4 text-xl">
            We'd love to hear from you. Send us a message anytime.
          </p>
        </div>
      </div>
    </section>

      <div className="mx-auto max-w-7xl px-6 py-16">

        <AnimatedSection>

          <div className="grid gap-10 lg:grid-cols-2">

            {/* Contact Information */}

            <div className="space-y-6">

              <div className="rounded-2xl bg-white p-6 shadow-lg flex gap-4">

                <FaMapMarkerAlt className="text-3xl text-blue-600" />

                <div>
                  <h3 className="text-xl font-bold">
                    Address
                  </h3>

                  <p className="text-gray-600">
                    D-5 2nd Floor, Lingayen Public Market, <br></br>Lingayen, Pangasinan
                  </p>
                </div>

              </div>

              <div className="rounded-2xl bg-white p-6 shadow-lg flex gap-4">

                <FaPhoneAlt className="text-3xl text-green-600" />

                <div>
                  <h3 className="text-xl font-bold">
                    Phone
                  </h3>

                  <p className="text-gray-600">
                    0951 318 0858
                  </p>
                </div>

              </div>

              <div className="rounded-2xl bg-white p-6 shadow-lg flex gap-4">

                <FaEnvelope className="text-3xl text-red-500" />

                <div>
                  <h3 className="text-xl font-bold">
                    Email
                  </h3>

                  <p className="text-gray-600">
                    cathlyshoppe@gmail.com
                  </p>
                </div>

              </div>
              

              <div className="rounded-2xl bg-white p-6 shadow-lg flex gap-4">

                <FaClock className="text-3xl text-yellow-500" />

                <div>
                  <h3 className="text-xl font-bold">
                    Business Hours
                  </h3>

                  <p className="text-gray-600">
                    Monday - Saturday
                    <br />
                    9:00 AM - 7:00 PM
                  </p>
                </div>

              </div>

            </div>

            {/* Contact Form */}

            <div className="rounded-2xl bg-white p-8 shadow-lg">

              <h2 className="mb-6 text-3xl font-bold">
                Send a Message
              </h2>

              <form className="space-y-5">

                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full rounded-lg border p-3 outline-none focus:border-blue-600"
                />

                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full rounded-lg border p-3 outline-none focus:border-blue-600"
                />

                <input
                  type="text"
                  placeholder="Subject"
                  className="w-full rounded-lg border p-3 outline-none focus:border-blue-600"
                />

                <textarea
                  rows={6}
                  placeholder="Your Message..."
                  className="w-full rounded-lg border p-3 outline-none focus:border-blue-600"
                />

                <button
                  className="w-full rounded-lg bg-[#111827] py-3 text-white transition hover:bg-gray-700"
                >
                  Send Message
                </button>

              </form>

            </div>

          </div>

        </AnimatedSection>

        {/* Google Map */}

        <AnimatedSection>

          <section className="mt-20">

            <h2 className="mb-8 text-center text-4xl font-bold">
                  Visit and Shop With Us
            </h2>
            

            <div className="overflow-hidden rounded-2xl shadow-lg">

              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3834.871634688862!2d120.22887817490307!3d16.020196384652206!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33915f8578ded0fb%3A0xc74c30cfc4aafd0e!2sLingayen%20Public%20Market!5e0!3m2!1sen!2sph!4v1784455107057!5m2!1sen!2sph"
                width="100%"
                height="450"
                loading="lazy"
                allowFullScreen
              />

            </div>

          </section>

        </AnimatedSection>

      </div>

    </main>
  );
}