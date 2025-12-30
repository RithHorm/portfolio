import React from "react";
import { Monitor } from "lucide-react";
import RuppLogo from "@/assets/img/RUPP_logo.png";
const ItSppExp = () => {
  return (
    <div className="mt-10">
      <header>
        <h3 className="text-lg md:text-2xl font-montserrat font-semibold mb-4">
          Technical Experience (University / Acedemic)
        </h3>
        <h5 className="">
          This technical experience was gained through university coursework
          combined with independent self-directed learning using reputable
          online resources and practical projects.
        </h5>
      </header>
      <section className="mt-6">
        <div className="max-w-3xl mx-auto">
          <div
            className="
            rounded-2xl
            border border-white/10
            bg-black
            p-6 md:p-8
            transition
            hover:border-white/30
            hover:shadow-[0_0_25px_rgba(255,255,255,0.05)]
          "
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 rounded-xl bg-white/5">
                <img src={RuppLogo} alt="Rupp Logo" className="w-10 h-10" />
              </div>
              <div>
                <h3 className="text-lg md:text-xl font-semibold text-white">
                  IT Support & Technical Assistance
                </h3>
                <p className="text-sm text-white/60">
                  Royal University of Phnom Penh • 2022 – 2025
                </p>
              </div>
            </div>

            <ul className="space-y-3 text-sm md:text-base text-white/70 list-disc pl-5">
              <li>
                Provided technical support to students and peers by diagnosing
                and resolving software, system, and application-related issues
              </li>
              <li>
                Installed, configured, and removed software applications,
                ensuring proper functionality and compatibility
              </li>
              <li>
                Assisted with operating system updates, driver installations,
                and system optimization
              </li>
              <li>
                Troubleshot network connectivity issues including Wi-Fi and
                Bluetooth on laptops and mobile devices
              </li>
              <li>
                Identified and resolved browser, compatibility, and performance
                issues affecting web-based applications
              </li>
              <li>
                Conducted basic system maintenance such as cleanup, updates, and
                performance checks
              </li>
              <li>
                Explained technical issues and solutions clearly to
                non-technical users
              </li>
              <li>
                Demonstrated strong problem-solving, communication, and customer
                support skills
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ItSppExp;
