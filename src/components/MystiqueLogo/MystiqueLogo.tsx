import Image from "next/image";
import React from "react";
import mainLogo from "@/assets/mystique-main.png";

const MystiqueLogo = () => {
  return (
    <div>
      <Image src={mainLogo} alt="mainLogo" />;
    </div>
  );
};

export default MystiqueLogo;
