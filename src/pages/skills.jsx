import Navbar from "../components/Navbar";
import {FaPython,FaReact,FaNodeJs} from "react-icons/fa";
import {useNavigate} from 'react-router-dom'
import {SiMongodb,SiExpress,SiNumpy,SiPandas} from "react-icons/si";

import { GoProject } from "react-icons/go";

const skillData = [
  {
    title: "Python",
    icon: <FaPython size={42} className="text-yellow-400" />,
    desc: "Data Analysis",
  },
  {
    title: "NumPy",
    icon: <SiNumpy size={42} className="text-cyan-400" />,
    desc: "Numerical Computing",
  },
  {
    title: "Pandas",
    icon: <SiPandas size={42} className="text-indigo-400" />,
    desc: "Data Cleaning & Analysis",
  },
  {
    title: "React",
    icon: <FaReact size={42} className="text-cyan-400" />,
    desc: "Modern Frontend Development",
  },
  {
    title: "Express.js",
    icon: <SiExpress size={42} className="text-gray-300" />,
    desc: "REST API Development",
  },
  {
    title: "MongoDB",
    icon: <SiMongodb size={42} className="text-green-500" />,
    desc: "NoSQL Database",
  },
  {
    title: "Node.js",
    icon: <FaNodeJs size={42} className="text-green-500" />,
    desc: "Backend Development",
  },
];

const projects = [
  {
    title: "GameStop vs Tesla Revenue Analysis",
    link: "https://github.com/Mittal24Shaurya/Gamestop-and-Tesla-stock-s-Revenue-",
  },
  {
    title: "Mortgage Calculator",
    link: "https://github.com/Mittal24Shaurya/Mortgage-Calculator",
  },
  {
    title: "Acumen Intelligence",
    link: "https://github.com/Mittal24Shaurya/Acumen-fin",
  },
];

const Skills = () => {
  const navigate=useNavigate();
  const handleClick=()=>{
    console.log("Button clicked")
    navigate("/acumen")
  }
  return (
    <section className="min-h-screen bg-gradient-to-br from-emerald-950 via-black to-slate-950 relative overflow-hidden text-white">

      <div className="absolute top-24 left-0 w-96 h-96 bg-emerald-500/20 blur-[140px] rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-cyan-500/10 blur-[160px] rounded-full"></div>

      <Navbar />

      <div className="max-w-7xl mx-auto px-8 pt-32 pb-20">

        <h1 className="text-5xl md:text-6xl font-bold text-center">
          My{" "}
          <span className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Skills
          </span>
        </h1>


        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-20">

          {skillData.map((skill, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8 hover:border-emerald-400 transition duration-300 hover:-translate-y-2"
            >
              <div className="mb-5">{skill.icon}</div>

              <h2 className="text-2xl font-semibold">{skill.title}</h2>

              <p className="text-gray-400 mt-3 text-sm leading-6">
                {skill.desc}
              </p>
            </div>
          ))}

        </div>

        {/* Projects */}

        <div className="mt-24">

          <div className="flex items-center gap-3 mb-10">
            <GoProject size={34} className="text-emerald-400" />
            <h2 className="text-4xl font-bold">
              Featured Projects
            </h2>
          </div>

          <div className="space-y-6">

            {projects.map((project, index) => (
              <div
                key={index}
                className="flex flex-col md:flex-row justify-between items-center bg-white/5 border border-white/10 rounded-xl p-6 hover:border-cyan-400 transition"
              >
                <h3 className="text-xl font-semibold">
                  {project.title}
                </h3>
                <button className="bg-green-500 w-40 rounded hover:bg-green-700 ml-2" onClick={handleClick}>Explore More</button>
              </div>

            ))}


          </div>

        </div>

      </div>
    </section>
  );
};

export default Skills;