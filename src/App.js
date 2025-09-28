// src/App.js
import React from "react";
import AgnikulLogo from "./assets/agnikullogo.png";
import Linkedin from "./assets/linkedin.png";
import insta from "./assets/instagram.png";
import youtube from "./assets/youtube.png";
import x from "./assets/twitter.png";
import EmailIcon from "./assets/mail.png";
import PhoneIcon from "./assets/call.png";
import LocationIcon from "./assets/distance.png";

function App() {
  return (
    <div className="min-h-screen flex flex-col items-center font-montserrat bg-white">
      {/* Header Section */}
      <header className="mt-4 sm:mt-5 text-center px-4 w-full">
        <img
          src={AgnikulLogo}
          alt="Agnikul Logo"
          className="w-[240px] sm:w-[280px] md:w-[320px] h-auto mx-auto"
        />
        <p className="text-[#969696] text-[13px] sm:text-[14px] md:text-[16px] lg:text-[18px] mt-2 sm:mt-2.5 max-w-md mx-auto leading-relaxed">
          Launch anywhere, anytime, affordably
        </p>
      </header>

      {/* Main Heading */}
      {/* <h1
        className="text-[#5c8a58] font-semibold font-montserrat 
             text-[20px] sm:text-[24px] md:text-[32px] lg:text-[43.39px] 
             leading-tight text-center mt-4 sm:mt-6 md:mt-8 lg:mt-10 
             mb-4 sm:mb-6 md:mb-8 lg:mb-10 px-4  mx-auto"
      >
        <span className="block">
          A few updates and a few upgrades are coming.
        </span>
        <span className="block">
          In the meantime,here is our launch video.
        </span>
      </h1> */}
      <h1
        className="text-[#5c8a58] font-semibold font-montserrat 
             text-[20px] sm:text-[24px] md:text-[32px] lg:text-[43.39px] 
             leading-tight text-center mt-4 sm:mt-6 md:mt-8 lg:mt-10 
             mb-4 sm:mb-6 md:mb-8 lg:mb-10 px-4 mx-auto"
      >
        <span className="block">
          A few updates and a few upgrades are coming.
        </span>
        <span className="block">
          In the meantime, here is our launch video.
        </span>
      </h1>

      {/* Video Section */}
      <div className="mt-3 sm:mt-5 w-full max-w-[867px] px-3 sm:px-4">
        <div className="relative w-full pb-[56.25%] h-0 overflow-hidden rounded-[8px] sm:rounded-[10px] shadow-lg">
          <iframe
            className="absolute top-0 left-0 w-full h-full"
            src="https://www.youtube.com/embed/RkXlRchE18o"
            title="Agnibaan SOrTeD Launch"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
      </div>
      {/* Cosmos Store Section */}
      <div className="mt-6 sm:mt-8 w-full max-w-[867px] px-3 sm:px-4">
        <div className="flex items-center justify-between bg-white border-2 border-[#5c8a58] rounded-[8px] sm:rounded-[10px] p-4 sm:p-6 shadow-md">
          <div className="flex-1">
            <h2 className="text-[#5c8a58] font-bold text-[18px] sm:text-[20px] md:text-[24px] mb-1">
              Cosmos Store
            </h2>
            <p className="text-[#666666] text-[13px] sm:text-[14px] md:text-[16px]">
              Explore our merchandise
            </p>
          </div>
          <div className="ml-4">
            <a
              href="https://shop.agnikul.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#5c8a58] text-white font-semibold px-6 sm:px-8 py-2.5 sm:py-3 rounded-[6px] sm:rounded-[8px] text-[14px] sm:text-[16px] hover:bg-[#4a7449] transition-colors duration-200 shadow-sm"
            >
              Shop Now
            </a>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <footer
        className="w-full mt-6 sm:mt-8 md:mt-12 py-6 sm:py-8 md:py-12 px-3 sm:px-4 md:px-6 lg:px-12 xl:px-16"
        style={{ backgroundColor: "#EDEDED" }}
      >
        <div className="max-w-7xl mx-auto">
          {/* Mobile Layout Only - Reordered sections (visible only on mobile/tablet) */}
          <div className="block lg:hidden">
            <div className="space-y-5 sm:space-y-6 ml-4">
              {/* 1. Follow us section - FIRST on mobile */}
              <div className="text-left">
                <h3 className="text-[#5c8a58] font-bold italic text-[15px] sm:text-[16px] leading-tight mb-2 sm:mb-3">
                  Follow us for more updates
                </h3>
                <div className="flex gap-3 sm:gap-4 justify-start flex-wrap">
                  <a
                    href="https://www.linkedin.com/company/agnikul-cosmos/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transform hover:scale-110 transition-transform duration-200 hover:opacity-80"
                    aria-label="Follow us on LinkedIn"
                  >
                    <img
                      src={Linkedin}
                      alt="LinkedIn"
                      className="w-[32px] h-[32px] sm:w-[35px] sm:h-[35px]"
                    />
                  </a>
                  <a
                    href="https://www.instagram.com/agnikul/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transform hover:scale-110 transition-transform duration-200 hover:opacity-80"
                    aria-label="Follow us on Instagram"
                  >
                    <img
                      src={insta}
                      alt="Instagram"
                      className="w-[32px] h-[32px] sm:w-[35px] sm:h-[35px]"
                    />
                  </a>
                  <a
                    href="https://www.youtube.com/@agnikulcosmos1404"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transform hover:scale-110 transition-transform duration-200 hover:opacity-80"
                    aria-label="Follow us on YouTube"
                  >
                    <img
                      src={youtube}
                      alt="YouTube"
                      className="w-[32px] h-[32px] sm:w-[35px] sm:h-[35px]"
                    />
                  </a>
                  <a
                    href="https://x.com/agnikulcosmos"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transform hover:scale-110 transition-transform duration-200 hover:opacity-80"
                    aria-label="Follow us on X (Twitter)"
                  >
                    <img
                      src={x}
                      alt="X"
                      className="w-[32px] h-[32px] sm:w-[35px] sm:h-[35px]"
                    />
                  </a>
                </div>
              </div>

              {/* 2. Curious section - SECOND on mobile */}
              <div className="text-left">
                <h3 className="text-[#5c8a58] font-bold italic text-[15px] sm:text-[16px] leading-tight mb-2 sm:mb-3">
                  Curious to know more about us
                </h3>
                <div className="space-y-2 sm:space-y-3">
                  <div className="flex items-center gap-2 sm:gap-3">
                    <img
                      src={PhoneIcon}
                      alt="Phone"
                      className="w-4 h-4 sm:w-5 sm:h-5 text-[#5c8a58] flex-shrink-0"
                    />
                    <a
                      href="tel:+917247246334"
                      className="text-[#666666] font-medium text-[13px] sm:text-[14px] leading-relaxed hover:text-[#5c8a58] transition-colors duration-200"
                    >
                      +91 72472 46334
                    </a>
                  </div>
                  <div className="flex items-center gap-2 sm:gap-3">
                    <img
                      src={EmailIcon}
                      alt="Email"
                      className="w-4 h-4 sm:w-5 sm:h-5 text-[#5c8a58] flex-shrink-0"
                    />
                    <a
                      href="mailto:curious@agnikul.in"
                      className="text-[#666666] font-medium text-[13px] sm:text-[14px] leading-relaxed hover:text-[#5c8a58] transition-colors duration-200 break-all"
                    >
                      curious@agnikul.in
                    </a>
                  </div>
                </div>
              </div>

              {/* 3. Email section - THIRD on mobile */}
              <div className="text-left">
                <h3 className="text-[#5c8a58] font-bold italic text-[15px] sm:text-[16px] leading-tight mb-3 sm:mb-4">
                  Email
                </h3>
                <div className="space-y-3 sm:space-y-4">
                  <div>
                    <p className="text-[#666666] font-semibold text-[12px] sm:text-[13px] leading-tight mb-1 sm:mb-2">
                      Customer Inquiries
                    </p>
                    <div className="flex items-center gap-2 sm:gap-3">
                      <img
                        src={EmailIcon}
                        alt="Email"
                        className="w-4 h-4 sm:w-5 sm:h-5 text-[#5c8a58] flex-shrink-0"
                      />
                      <a
                        href="mailto:payloadpeople@agnikul.in"
                        className="text-[#666666] font-medium text-[13px] sm:text-[14px] leading-relaxed hover:text-[#5c8a58] transition-colors duration-200 break-all"
                      >
                        payloadpeople@agnikul.in
                      </a>
                    </div>
                  </div>
                  <div>
                    <p className="text-[#666666] font-semibold text-[12px] sm:text-[13px] leading-tight mb-1 sm:mb-2">
                      Careers Inquiries
                    </p>
                    <div className="flex items-center gap-2 sm:gap-3">
                      <img
                        src={EmailIcon}
                        alt="Email"
                        className="w-4 h-4 sm:w-5 sm:h-5 text-[#5c8a58] flex-shrink-0"
                      />
                      <a
                        href="mailto:humancapital@agnikul.in"
                        className="text-[#666666] font-medium text-[13px] sm:text-[14px] leading-relaxed hover:text-[#5c8a58] transition-colors duration-200 break-all"
                      >
                        humancapital@agnikul.in
                      </a>
                    </div>
                  </div>
                  <div>
                    <p className="text-[#666666] font-semibold text-[12px] sm:text-[13px] leading-tight mb-1 sm:mb-2">
                      Vendor Inquiries
                    </p>
                    <div className="flex items-center gap-2 sm:gap-3">
                      <img
                        src={EmailIcon}
                        alt="Email"
                        className="w-4 h-4 sm:w-5 sm:h-5 text-[#5c8a58] flex-shrink-0"
                      />
                      <a
                        href="mailto:vendor_relations@agnikul.in"
                        className="text-[#666666] font-medium text-[13px] sm:text-[14px] leading-relaxed hover:text-[#5c8a58] transition-colors duration-200 break-all"
                      >
                        vendor_relations@agnikul.in
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* 4. Corporate Addresses section - FOURTH on mobile */}
              <div className="text-left">
                <h3 className="text-[#5c8a58] font-bold italic text-[15px] sm:text-[16px] leading-tight mb-3 sm:mb-4">
                  Corporate Addresses
                </h3>
                <div className="space-y-4 sm:space-y-5">
                  <div>
                    <p className="text-[#666666] font-semibold text-[12px] sm:text-[13px] leading-tight mb-1 sm:mb-2">
                      Agnikul Cosmos Private Limited.
                    </p>
                    <div className="flex items-start gap-2 sm:gap-3">
                      <img
                        src={LocationIcon}
                        alt="Location"
                        className="w-4 h-4 sm:w-5 sm:h-5 text-[#5c8a58] mt-0.5 flex-shrink-0"
                      />
                      <p className="text-[#666666] font-medium text-[13px] sm:text-[14px] leading-relaxed">
                        Rocket Factory - I, 1st floor, A-Block,
                        <br />
                        IIT Madras Research Park, Chennai 600113
                      </p>
                    </div>
                  </div>
                  <div>
                    <p className="text-[#666666] font-semibold text-[12px] sm:text-[13px] leading-tight mb-1 sm:mb-2">
                      Agnikul Cosmos Launch Vehicles Private Limited
                    </p>
                    <div className="flex items-start gap-2 sm:gap-3">
                      <img
                        src={LocationIcon}
                        alt="Location"
                        className="w-4 h-4 sm:w-5 sm:h-5 text-[#5c8a58] mt-0.5 flex-shrink-0"
                      />
                      <p className="text-[#666666] font-medium text-[13px] sm:text-[14px] leading-relaxed">
                        Kerala Startup Mission, Technopark, Thejaswini,
                        <br />
                        G3B, Technopark Rd, Karyavattom,
                        <br />
                        Thiruvananthapuram, Kerala 695581
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Desktop Layout - Original order (visible only on desktop lg and above) */}
          <div className="hidden lg:grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Left Column - Desktop */}
            <div className="space-y-6 md:space-y-8 ml-16 xl:ml-44">
              {/* Curious section */}
              <div className="text-left">
                <h3 className="text-[#5c8a58] font-bold italic text-[18px] lg:text-[19.12px] leading-tight mb-3 md:mb-4">
                  Curious to know more about us
                </h3>
                <div className="space-y-2 md:space-y-3">
                  <div className="flex items-center gap-2 md:gap-3">
                    <img
                      src={PhoneIcon}
                      alt="Phone"
                      className="w-5 h-5 text-[#5c8a58] flex-shrink-0"
                    />
                    <a
                      href="tel:+917247246334"
                      className="text-[#666666] font-medium text-[16px] lg:text-[16.67px] leading-relaxed hover:text-[#5c8a58] transition-colors duration-200"
                    >
                      +91 72472 46334
                    </a>
                  </div>
                  <div className="flex items-center gap-2 md:gap-3">
                    <img
                      src={EmailIcon}
                      alt="Email"
                      className="w-5 h-5 text-[#5c8a58] flex-shrink-0"
                    />
                    <a
                      href="mailto:curious@agnikul.in"
                      className="text-[#666666] font-medium text-[16px] lg:text-[16.67px] leading-relaxed hover:text-[#5c8a58] transition-colors duration-200 break-all"
                    >
                      curious@agnikul.in
                    </a>
                  </div>
                </div>
              </div>

              {/* Email section */}
              <div className="text-left">
                <h3 className="text-[#5c8a58] font-bold italic text-[18px] lg:text-[19.12px] leading-tight mb-4 md:mb-5">
                  Email
                </h3>
                <div className="space-y-3 md:space-y-4">
                  <div>
                    <p className="text-[#666666] font-semibold text-[14px] lg:text-[15.12px] leading-tight mb-1 md:mb-2">
                      Customer Inquiries
                    </p>
                    <div className="flex items-center gap-2 md:gap-3">
                      <img
                        src={EmailIcon}
                        alt="Email"
                        className="w-5 h-5 text-[#5c8a58] flex-shrink-0"
                      />
                      <a
                        href="mailto:payloadpeople@agnikul.in"
                        className="text-[#666666] font-medium text-[16px] lg:text-[16.67px] leading-relaxed hover:text-[#5c8a58] transition-colors duration-200 break-all"
                      >
                        payloadpeople@agnikul.in
                      </a>
                    </div>
                  </div>
                  <div>
                    <p className="text-[#666666] font-semibold text-[14px] lg:text-[15.12px] leading-tight mb-1 md:mb-2">
                      Careers Inquiries
                    </p>
                    <div className="flex items-center gap-2 md:gap-3">
                      <img
                        src={EmailIcon}
                        alt="Email"
                        className="w-5 h-5 text-[#5c8a58] flex-shrink-0"
                      />
                      <a
                        href="mailto:humancapital@agnikul.in"
                        className="text-[#666666] font-medium text-[16px] lg:text-[16.67px] leading-relaxed hover:text-[#5c8a58] transition-colors duration-200 break-all"
                      >
                        humancapital@agnikul.in
                      </a>
                    </div>
                  </div>
                  <div>
                    <p className="text-[#666666] font-semibold text-[14px] lg:text-[15.12px] leading-tight mb-1 md:mb-2">
                      Vendor Inquiries
                    </p>
                    <div className="flex items-center gap-2 md:gap-3">
                      <img
                        src={EmailIcon}
                        alt="Email"
                        className="w-5 h-5 text-[#5c8a58] flex-shrink-0"
                      />
                      <a
                        href="mailto:vendor_relations@agnikul.in"
                        className="text-[#666666] font-medium text-[16px] lg:text-[16.67px] leading-relaxed hover:text-[#5c8a58] transition-colors duration-200 break-all"
                      >
                        vendor_relations@agnikul.in
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Desktop */}
            <div className="space-y-6 md:space-y-8">
              {/* Follow us section */}
              <div className="text-left">
                <h3 className="text-[#5c8a58] font-bold italic text-[18px] lg:text-[19.12px] leading-tight mb-3 md:mb-4">
                  Follow us for more updates
                </h3>
                <div className="flex gap-4 md:gap-5 justify-start flex-wrap">
                  <a
                    href="https://www.linkedin.com/company/agnikul-cosmos/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transform hover:scale-110 transition-transform duration-200 hover:opacity-80"
                    aria-label="Follow us on LinkedIn"
                  >
                    <img
                      src={Linkedin}
                      alt="LinkedIn"
                      className="w-[45px] h-[45px] lg:w-[53px] lg:h-[50px]"
                    />
                  </a>
                  <a
                    href="https://www.instagram.com/agnikul/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transform hover:scale-110 transition-transform duration-200 hover:opacity-80"
                    aria-label="Follow us on Instagram"
                  >
                    <img
                      src={insta}
                      alt="Instagram"
                      className="w-[45px] h-[45px] lg:w-[53px] lg:h-[50px]"
                    />
                  </a>
                  <a
                    href="https://www.youtube.com/@agnikulcosmos1404"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transform hover:scale-110 transition-transform duration-200 hover:opacity-80"
                    aria-label="Follow us on YouTube"
                  >
                    <img
                      src={youtube}
                      alt="YouTube"
                      className="w-[45px] h-[45px] lg:w-[53px] lg:h-[50px]"
                    />
                  </a>
                  <a
                    href="https://x.com/agnikulcosmos"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transform hover:scale-110 transition-transform duration-200 hover:opacity-80"
                    aria-label="Follow us on X (Twitter)"
                  >
                    <img
                      src={x}
                      alt="X"
                      className="w-[45px] h-[45px] lg:w-[53px] lg:h-[50px]"
                    />
                  </a>
                </div>
              </div>

              {/* Corporate Addresses section */}
              <div className="text-left">
                <h3 className="text-[#5c8a58] font-bold italic text-[18px] lg:text-[19.12px] leading-tight mb-4 md:mb-5">
                  Corporate Addresses
                </h3>
                <div className="space-y-5 md:space-y-6">
                  <div>
                    <p className="text-[#666666] font-semibold text-[14px] lg:text-[15.12px] leading-tight mb-1 md:mb-2">
                      Agnikul Cosmos Private Limited.
                    </p>
                    <div className="flex items-start gap-2 md:gap-3">
                      <img
                        src={LocationIcon}
                        alt="Location"
                        className="w-5 h-5 text-[#5c8a58] mt-0.5 flex-shrink-0"
                      />
                      <p className="text-[#666666] font-medium text-[16px] lg:text-[16.67px] leading-relaxed">
                        Rocket Factory - I, 1st floor, A-Block,
                        <br />
                        IIT Madras Research Park, Chennai 600113
                      </p>
                    </div>
                  </div>
                  <div>
                    <p className="text-[#666666] font-semibold text-[14px] lg:text-[15.12px] leading-tight mb-1 md:mb-2">
                      Agnikul Cosmos Launch Vehicles Private Limited
                    </p>
                    <div className="flex items-start gap-2 md:gap-3">
                      <img
                        src={LocationIcon}
                        alt="Location"
                        className="w-5 h-5 text-[#5c8a58] mt-0.5 flex-shrink-0"
                      />
                      <p className="text-[#666666] font-medium text-[16px] lg:text-[16.67px] leading-relaxed">
                        Kerala Startup Mission, Technopark, Thejaswini,
                        <br />
                        G3B, Technopark Rd, Karyavattom,
                        <br />
                        Thiruvananthapuram, Kerala 695581
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Copyright Section */}
          <div className="mt-6 sm:mt-8 md:mt-10 pt-4 sm:pt-6 border-t border-[#d0d0d0] text-center">
            <p className="text-[#888888] text-[11px] sm:text-[12px] md:text-[13px]">
              © {new Date().getFullYear()} Agnikul Cosmos. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
