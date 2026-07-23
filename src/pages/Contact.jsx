import {
  FaGithub,
  FaEnvelope,
  FaPhone,
  FaLinkedin,
} from "react-icons/fa";
import Navbar from "../components/Navbar";

const Contact = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-emerald-950 via-black to-slate-950 relative overflow-hidden">

      {/* Background Glow */}
      <div className="absolute top-20 left-10 w-80 h-80 bg-emerald-500/20 blur-[130px] rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-emerald-400/10 blur-[150px] rounded-full"></div>

      <Navbar />

      <div className="max-w-4xl mx-auto px-8 pt-32">

        <h1 className="text-center text-6xl font-bold text-white">
          My{" "}
          <span className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Socials
          </span>
        </h1>

        <p className="text-center text-gray-400 mt-4 mb-14">
          Feel free to connect with me through any of the platforms below.
        </p>

        <div className="space-y-6">

          {/* Email */}
          <div className="flex items-center gap-6 bg-white/5 border border-white/10 rounded-xl p-5 hover:border-emerald-400 transition">
            <FaEnvelope size={38} className="text-blue-500" />

            <div>
              <p className="text-gray-400 text-sm">Email</p>
              <a
                href="mailto:shauryamittal11acs@gmail.com"
                className="text-white text-lg hover:text-emerald-400"
              >
                shauryamittal11acs@gmail.com
              </a>
            </div>
          </div>

          {/* Phone */}
          <div className="flex items-center gap-6 bg-white/5 border border-white/10 rounded-xl p-5 hover:border-emerald-400 transition">
            <FaPhone size={38} className="text-green-500" />

            <div>
              <p className="text-gray-400 text-sm">Phone / WhatsApp</p>
              <a
                href="tel:+917011757352"
                className="text-white text-lg hover:text-emerald-400"
              >
                +91 7011757352
              </a>
            </div>
          </div>

          {/* LinkedIn */}
          <div className="flex items-center gap-6 bg-white/5 border border-white/10 rounded-xl p-5 hover:border-emerald-400 transition">
            <FaLinkedin size={38} className="text-[#0A66C2]" />

            <div>
              <p className="text-gray-400 text-sm">LinkedIn</p>
              <a
                href="https://www.linkedin.com/in/shaurya-mittal-b61283312"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white text-lg hover:text-emerald-400"
              >
                linkedin.com/in/shaurya-mittal-b61283312
              </a>
            </div>
          </div>

          {/* GitHub */}
          <div className="flex items-center gap-6 bg-white/5 border border-white/10 rounded-xl p-5 hover:border-emerald-400 transition">
            <FaGithub size={38} className="text-white" />

            <div>
              <p className="text-gray-400 text-sm">GitHub</p>
              <a
                href="https://github.com/Mittal24Shaurya"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white text-lg hover:text-emerald-400"
              >
                github.com/Mittal24Shaurya
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;