import {
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";
import Navbar from "./Navbar";
import Logo from "../assets/Myphoto.jpeg"
const FirstLanding = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-950 via-black to-slate-950 overflow-hidden relative">

      {/* Background Glow */}
      <div className="absolute top-20 left-10 w-80 h-80 bg-emerald-500/20 blur-[130px] rounded-full"></div>

      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-emerald-400/10 blur-[150px] rounded-full"></div>

      {/* ================= Navbar ================= */}

      <Navbar/>

      {/* ================= Hero Section ================= */}

      <section className="max-w-7xl mx-auto min-h-screen flex flex-col-reverse lg:flex-row items-center justify-between px-8 lg:px-16">

        {/* Left Side */}

        <div className="text-center lg:text-left mt-20 lg:mt-0">

          <h2 className="text-2xl text-gray-300 mb-4">
            Hello 👋 I'm
          </h2>

          <h1 className="text-6xl lg:text-7xl font-extrabold leading-tight">

            <span className="text-white">
              Shaurya
            </span>

            <br />

            <span className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Mittal
            </span>

          </h1>

          <h3 className="text-3xl text-emerald-300 mt-6 font-semibold">
            Full Stack Developer
          </h3>

          <p className="text-gray-400 text-lg max-w-xl mt-8 leading-8">
            I'm a passionate Full-Stack Developer who enjoys building modern,
            scalable, and user-friendly web applications. I love solving
            real-world problems through clean code and continuously learning new
            technologies.
          </p>

          {/* Buttons */}

          <div className="flex flex-wrap justify-center lg:justify-start gap-6 mt-10">

            <button className="px-8 py-4 rounded-full bg-emerald-500 hover:bg-emerald-400 text-black font-bold transition duration-300 shadow-lg shadow-emerald-500/40 hover:scale-105">

              Hire Me

            </button>

            <button className="px-8 py-4 rounded-full border border-emerald-400 text-emerald-400 hover:bg-emerald-500 hover:text-black transition duration-300 hover:scale-105">
              <a href="https://go.fliplink.me/view/1A70B772-96DF-4A72-82CE-0B4AB38F0FAE">
              Download CV
              </a>

            </button>

          </div>

          {/* Social Icons */}

          <div className="flex justify-center lg:justify-start gap-6 mt-10">

            <a href="https://github.com/Mittal24Shaurya" className="text-gray-400 hover:text-emerald-400 text-3xl transition">
              <FaGithub />
            </a>

            <a href="https://www.linkedin.com/in/shaurya-mittal-b61283312/?skipRedirect=true" className="text-gray-400 hover:text-emerald-400 text-3xl transition">
              <FaLinkedin />
            </a>
          </div>

        </div>

        {/* Right Side */}

        <div className="relative">

          <div className="w-[330px] h-[330px] lg:w-[430px] lg:h-[430px] rounded-full bg-gradient-to-br from-emerald-400 via-cyan-400 to-blue-500 p-[5px] shadow-[0_0_80px_rgba(16,185,129,0.45)]">

            <img
              src={Logo}
              alt="Shaurya"
              className="w-full h-full object-cover rounded-full border-4 border-slate-950"
            />

          </div>

        </div>

      </section>

    </div>
  );
};

export default FirstLanding;