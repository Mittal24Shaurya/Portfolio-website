import Navbar from "../components/Navbar"
import {useNavigate} from "react-router-dom"


const About = () => {
  const navigate=useNavigate();
  const handleClick=()=>{
    navigate("/contact");
  }
  return (

       <section className="min-h-screen bg-gradient-to-br from-emerald-950 via-black to-slate-950 relative overflow-hidden">

      {/* Background Glow */}
      <div className="absolute top-20 left-10 w-80 h-80 bg-emerald-500/20 blur-[130px] rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-emerald-400/10 blur-[150px] rounded-full"></div>
      <Navbar/>
    <div className="mt-30">
      <div className="py-5 text-white leading-relaxed">
        <div className="items-center gap-6 bg-white/5 border border-white/10 rounded-xl p-5 hover:border-emerald-400 transition">
        <h3 className="text-2xl font-bold">About Me :</h3>
         
          <p>
          Hi, I'm Shaurya, a Computer Science student and aspiring Full-Stack Developer with a strong interest in Artificial Intelligence, Machine Learning, and Data Analytics. I enjoy building practical applications that solve real-world problems by combining modern web technologies with intelligent systems.

          I have experience developing full-stack applications using React, Node.js, Express.js, MongoDB, PostgreSQL, and Tailwind CSS. I also work with Python for data analysis and AI workflows, and I'm continuously expanding my knowledge of machine learning, large language models (LLMs), and cloud-based technologies.

          One of my key projects is Acumen Intelligence, an AI-powered customer intelligence platform that analyzes customer conversations to uncover sentiment, revenue opportunities, customer pain points, feature requests, and business trends. Through this project, I have gained hands-on experience integrating LLMs, designing analytics dashboards, and building scalable backend systems.

          Beyond coding, I enjoy solving Data Structures & Algorithms problems, learning new technologies, and contributing to projects that challenge me to grow as a developer. My goal is to build innovative software that creates meaningful impact while continuously improving my technical and problem-solving skills.

          I'm always excited to collaborate on interesting projects, explore emerging technologies, and connect with fellow developers and innovators.
</p>
        </div>
      </div>

       <div className=" py-5 text-white leading-relaxed">
        <div className="items-center gap-6 bg-white/5 border border-white/10 rounded-xl p-5 hover:border-emerald-400 transition">
        <h3 className="text-2xl font-bold">Education : </h3>
        <ul className="list-disc pl-5 space-y-2">
          <li>Class 10th  CBSE BOARD : 92% (AGDAV Centenary Public School) </li>
          <li>Class 12th  CBSE BOARD : 89.2% (AGDAV Centenary Public School) </li>
          <li>Currently pursuing B.Tech in computer science from IIIT Dharwad CGPA: 9.03 (1st Year)</li>
        </ul>
        </div>
      </div>

        <div className="py-5 text-white leading-relaxed">
        <div className="items-center gap-6 bg-white/5 border border-white/10 rounded-xl p-5 hover:border-emerald-400 transition px-10">
        <h3 className="text-2xl font-bold">Current Focus: </h3>
        <p>I believe there's always something new to learn in technology. Right now, I'm focused on becoming a better full-stack developer by building practical applications, improving my analytical and logical thinking, and exploring modern technologies like AI and data-driven development. I'm also looking forward to securing a software development internship where I can contribute to impactful projects while learning from experienced engineers and growing as a developer.</p>
        </div>
      </div>
        <div className="text-white leading-relaxed">
        <div className="items-center gap-6 bg-white/5 border border-white/10 rounded-xl p-5 hover:border-emerald-400 transition px-10">
        <h3 className="text-2xl font-bold">Acheivement : </h3>
        <ul className="list-disc pl-5 space-y-2">
          <li> AIR : 47464 in Joint Entrance Examination </li>
          <li> 210+ Leetcode problems done</li>
          <li> Fresher's Amatuer project Winner</li>
        </ul>
        </div>
      </div>
      <div className="py-5 text-white leading-relaxed">
        <div className="items-center gap-6 bg-white/5 border border-white/10 rounded-xl p-5 hover:border-emerald-400 transition px-10">
        <h3 className="text-2xl font-bold">My Abilities : </h3>
        <ul className="list-disc pl-5 space-y-2">
          <li>  Project Management</li>
          <li>  Team Work</li>
          <li>  Creating Solutions</li>
          <li>  Time Management</li>
        </ul>
        </div>
      </div>
      <div className="py-5 text-white leading-relaxed">
        <div className="items-center gap-6 bg-white/5 border border-white/10 rounded-xl p-5 hover:border-emerald-400 transition px-10">
        <h3 className="text-2xl font-bold">My Hobbies : </h3>
        <ul className="list-disc pl-5 space-y-2">
          <li> Doing workout</li>
          <li> Listening Music</li>
          <li>Watching movies</li>
        </ul>
        </div>
      </div>
      <div className="py-5 text-white leading-relaxed">
        <div className="flex items-center gap-6 bg-white/5 border border-white/10 rounded-xl p-5 hover:border-emerald-400 transition">
        <h3>Let's Connect : </h3>
        <button className="bg-green-500 w-25 rounded hover:bg-green-700" onClick={handleClick}>Contact</button>
        </div>
      </div>
      </div>

      </section>
  )
}

export default About