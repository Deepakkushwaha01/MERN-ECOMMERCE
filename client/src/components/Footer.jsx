import React from "react";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CallIcon from "@mui/icons-material/Call";
import MailIcon from "@mui/icons-material/Mail";

const Footer = () => {
  return (
    <>
      <div className="bg-[#2C2C2C] w-full h-auto grid grid-cols-1 lg:grid-cols-3 gap-16 px-5 lg:px-20 py-10">
        <div className="w-[100%] ">
          <figure className="w-[50%]">
            <img src="/logo/logo.png" alt="" className="w-full h-full" />
          </figure>
        </div>

        <div>
          <h1 className="text-white text-2xl">About Us</h1>
          <p className="text-[#96968F] text-justify mt-3">
            My name is Deepak kushwaha and I’m professional Coder and
            Degisner. I’m offering my services to individual and corporate
            clients throughout the USA. Make your favorite life moment or event
            last and remain in your memory!
          </p>
        </div>

        <div className="w-full  flex flex-col gap-5 h-auto">
          <h1 className="w-full text-white text-2xl">Contact Information</h1>

          <div className="flex gap-3">
            <LocationOnIcon sx={{ color: "white" }} />
            <p className="text-[#96968F]">Nangloi New Delhi 110041</p>
          </div>

          <div className="flex gap-3">
            <CallIcon sx={{ color: "white" }} />
            <p className="text-[#96968F]">9582083811</p>
          </div>

          <div className="flex gap-3">
            <MailIcon sx={{ color: "white" }} />
            <p className="text-[#96968F]">deepakkushwaha95820@gmail.com</p>
          </div>
        </div>
      </div>

<div className="bg-[#2C2C2C] pt-10 flex justify-center"><p className="text-[#96968F] font-bold">© 2023 All Rights Reserved. Terms of Use and Privacy Policy</p></div>

    </>
  );
};

export default Footer;
