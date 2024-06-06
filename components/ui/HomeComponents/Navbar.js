import Image from "next/image";
import Logo from "../../../public/logo.svg";
import Phone from "../../../public/phone.svg";

export default function Navbar() {
  return (
    <>
      <nav
        className="bg-primary flex items-center"
        style={{ height: 82, fontFamily: "Poppins" }}
      >
        <div className="px-6">
          <Image src={Logo} height={29.914} width={149.001} alt="logo"></Image>
        </div>
        <div className="flex justify-end w-full">
          <div className="flex">
            <a
              href=""
              className="text-amber-50 text-base text-center leading-10 font-normal p-6 border-x border-slate-700 text-white font-bold"
            >
              Home
            </a>
            <a
              href=""
              className="text-amber-50 text-base text-center leading-10 font-normal p-6 border-r border-slate-700 text-slate-400"
            >
              About us
            </a>
            <a
              href=""
              className="text-amber-50 text-base text-center leading-10 font-normal p-6 border-r border-slate-700 text-slate-400"
            >
              Project
            </a>
            <a
              href=""
              className="text-amber-50 text-base text-center leading-10 font-normal p-6 border-r border-slate-700 text-slate-400"
            >
              Services
            </a>
            <a
              href=""
              className="text-amber-50 text-base text-center leading-10 font-normal p-6 border-r border-slate-700 text-slate-400"
            >
              Safety
            </a>
            <a
              href=""
              className="text-amber-50 text-base text-center leading-10 font-normal p-6 border-r border-slate-700 text-slate-400"
            >
              News
            </a>
            <a
              href=""
              className="text-amber-50 text-base text-center leading-10 font-normal p-6 border-r border-slate-700 text-slate-400"
            >
              Contact
            </a>
          </div>
          <div
            className="flex justify-center items-center"
            style={{
              width: 250,
              height: 85,
              flexShrink: 0,
              background:
                "linear-gradient(95deg, #FD7C29 0.98%, #E95C01 90.99%)",
            }}
          >
            <Image src={Phone} height={18} width={18}></Image>
            <p className="font-bold px-3 text-white">+1317373890</p>
          </div>
        </div>
      </nav>
    </>
  );
}
