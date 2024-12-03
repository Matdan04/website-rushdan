"use client";

import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import grainImage from "@/assets/images/grain.jpg";

export const ContactSection = () => {
  return (
    <div className="py-16 pt-12 lg:pt-20 lg:pb-24">
      <div className="container ">
        <div className="bg-gradient-to-r from-emerald-300 to-sky-400 text-gray-900 py-8 px-10 rounded-3xl text-center md:text-left relative overflow-hidden z-0">
          <div
            className="absolute inset-0 opacity-20 -z-10"
            style={{
              backgroundImage: `url(${grainImage.src})`,
            }}
          ></div>
          <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-center">
            <div>
              <h2 className="font-serif text-2xl md:text-3xl">
                Let&apos;s create something amazing together
              </h2>
              <p className="text-sm mt-2 md:text-base">
                Ready to bring your ideas to life? Let&apos;s connect and
                discuss your project and how I can help you achieve your goals.
              </p>
            </div>
            <div>
              <button
                onClick={() => {
                  const phoneNumber = "60143477252";
                  const message =
                    "Hi, I see your website portfolio and I would like to connect with you regarding a Software Developer position. I'm interested in discussing potential opportunities with you.";
                  const encodedMessage = encodeURIComponent(message);
                  window.open(
                    `https://wa.me/${phoneNumber}?text=${encodedMessage}`,
                    "_blank"
                  );
                }}
                className="text-white bg-gray-900 inline-flex items-center gap-2 px-6 h-12 rounded-full mt-8 hover:bg-gray-700 transition-colors duration-300 w-max border border-gray-950"
              >
                <span className="font-semibold">Contact Me</span>
                <ArrowUpRightIcon className="size-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
