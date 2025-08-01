import React from "react";

function LogoSection() {
  return (
    <section className="bg-[#07292F] w-full py-6">
      <div>
        <p className="flex items-center justify-center text-white text-lg md:text-xl mt-2">
          our trusted partners
        </p>
      </div>

      <img
        className="mx-auto w-3/4 md:w-2/3 lg:w-1/2 h-auto"
        src="/Logos.png"
        alt="Logos"
      />
    </section>
  );
}

export default LogoSection;
