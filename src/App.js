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
    <div className="min-h-screen flex flex-col items-center font-montserrat">
      <header className="mt-5 text-center px-4">
        <img
          src={AgnikulLogo}
          alt="Agnikul Logo"
          className="w-[280px] md:w-[300px] h-auto mx-auto"
        />
        <p className="text-[#969696] text-[14px] md:text-[18px] mt-2.5 max-w-md mx-auto">
          Launch anywhere, anytime, affordably
        </p>
      </header>

      <h1 className="text-[#5c8a58] font-semibold text-[24px] md:text-[43.39px] leading-none mt-6 md:mt-10 mb-6 md:mb-10 text-center px-4 max-w-4xl font-montserrat">
        A few updates and a few upgrades
        <br />
        are coming
      </h1>

      <div className="mt-5 w-full max-w-[867px] px-4">
        <iframe
          className="w-full h-[200px] md:h-[501px] rounded-[10px]"
          src="https://www.youtube.com/embed/3J2Lnck_vgU?rel=0"
          title="Agnibaan SOrTeD Launch"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>

      {/* Footer Section */}
      <footer
        className="w-full mt-8 md:mt-12 py-8 md:py-12 px-4 md:px-12 lg:px-16"
        style={{ backgroundColor: "#EDEDED" }}
      >
        <div className="max-w-7xl mx-auto">
          {/* Main footer content - responsive layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16">
            {/* Left Column */}
            <div className="space-y-6 md:space-y-8 ml-40 pl-2 md:pl-4 lg:pl-8">
              {/* Curious section */}
              <div className="text-left">
                <p className="text-[#5c8a58] font-bold italic text-[16px] md:text-[19.12px] leading-none mb-3 md:mb-4">
                  Curious to know more about us
                </p>
                <div className="space-y-2 md:space-y-3">
                  <div className="flex items-center gap-2">
                    <img
                      src={PhoneIcon}
                      alt="Phone"
                      className="w-5 h-5 text-[#5c8a58]"
                    />
                    <p className="text-[#666666] font-medium text-[14px] md:text-[16.67px] leading-none">
                      +91 72472 46334
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <img
                      src={EmailIcon}
                      alt="Email"
                      className="w-5 h-5 text-[#5c8a58]"
                    />
                    <p className="text-[#666666] font-medium text-[14px] md:text-[16.67px] leading-none">
                      curious@agnikul.in
                    </p>
                  </div>
                </div>
              </div>

              {/* Email section */}
              <div className="text-left">
                <p className="text-[#5c8a58] font-bold italic text-[16px] md:text-[19.12px] leading-none mb-4 md:mb-5">
                  Email
                </p>
                <div className="space-y-3 md:space-y-4">
                  <div>
                    <p className="text-[#666666] font-semibold text-[13px] md:text-[15.12px] leading-none mb-1">
                      Customer Inquiries
                    </p>
                    <div className="flex items-center gap-2">
                      <img
                        src={EmailIcon}
                        alt="Email"
                        className="w-5 h-5 text-[#5c8a58]"
                      />
                      <p className="text-[#666666]  text-[14px] md:text-[16.67px] leading-none">
                        payloadpeople@agnikul.in
                      </p>
                    </div>
                  </div>
                  <div>
                    <p className="text-[#666666] font-semibold text-[13px] md:text-[15.12px] leading-none mb-1">
                      Careers Inquiries
                    </p>
                    <div className="flex items-center gap-2">
                      <img
                        src={EmailIcon}
                        alt="Email"
                        className="w-5 h-5 text-[#5c8a58]"
                      />
                      <p className="text-[#666666]  text-[14px] md:text-[16.67px] leading-none">
                        humancapital@agnikul.in
                      </p>
                    </div>
                  </div>
                  <div>
                    <p className="text-[#666666] font-semibold text-[13px] md:text-[15.12px] leading-none mb-1">
                      Vendor Inquiries
                    </p>
                    <div className="flex items-center gap-2">
                      <img
                        src={EmailIcon}
                        alt="Email"
                        className="w-5 h-5 text-[#5c8a58]"
                      />
                      <p className="text-[#666666]  text-[14px] md:text-[16.67px] leading-none">
                        vendor_relations@agnikul.in
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-6 md:space-y-8 pr-2 md:pr-4 lg:pr-8">
              {/* Follow us section */}
              <div className="text-left">
                <p className="text-[#5c8a58] font-bold italic text-[16px] md:text-[19.12px] leading-none mb-3 md:mb-4">
                  Follow us for more updates
                </p>
                <div className="flex gap-4 md:gap-5 justify-start">
                  <a
                    href="https://www.linkedin.com/company/agnikul-cosmos/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src={Linkedin}
                      alt="LinkedIn"
                      className="w-[35px] h-[35px] md:w-[53px] md:h-[50px]"
                    />
                  </a>
                  <a
                    href="https://www.instagram.com/agnikul/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src={insta}
                      alt="Instagram"
                      className="w-[35px] h-[35px] md:w-[53px] md:h-[50px]"
                    />
                  </a>
                  <a
                    href="https://www.youtube.com/@agnikulcosmos1404"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src={youtube}
                      alt="YouTube"
                      className="w-[35px] h-[35px] md:w-[53px] md:h-[50px]"
                    />
                  </a>
                  <a
                    href="https://x.com/agnikulcosmos"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src={x}
                      alt="X"
                      className="w-[35px] h-[35px] md:w-[53px] md:h-[50px]"
                    />
                  </a>
                </div>
              </div>

              {/* Corporate Addresses section */}
              <div className="text-left">
                <p className="text-[#5c8a58] font-bold italic text-[16px] md:text-[19.12px] leading-none mb-4 md:mb-5">
                  Corporate Addresses
                </p>
                <div className="space-y-5 md:space-y-6">
                  <div>
                    <p className="text-[#666666] font-semibold text-[13px] md:text-[15.12px] leading-none mb-2">
                      Agnikul Cosmos Private Limited.
                    </p>
                    <div className="flex items-start gap-2">
                      <img
                        src={LocationIcon}
                        alt="Location"
                        className="w-5 h-5 text-[#5c8a58] mt-0.5"
                      />
                      <p className="text-[#666666]  text-[14px] md:text-[16.67px] leading-tight">
                        Rocket Factory - I, 1st floor, A-Block,
                        <br />
                        IIT Madras Research Park, Chennai 600113
                      </p>
                    </div>
                  </div>
                  <div>
                    <p className="text-[#666666] font-semibold text-[13px] md:text-[15.12px] leading-none mb-2">
                      Agnikul Cosmos Launch Vehicles Private Limited
                    </p>
                    <div className="flex items-start gap-2">
                      <img
                        src={LocationIcon}
                        alt="Location"
                        className="w-5 h-5 text-[#5c8a58] mt-0.5"
                      />
                      <p className="text-[#666666]  text-[14px] md:text-[16.67px] leading-tight">
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
        </div>
      </footer>
    </div>
  );
}

export default App;
