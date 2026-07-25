

const AcumenIntelligence = () => {
  return (
    <section  className="min-h-screen bg-gradient-to-br from-emerald-950 via-black to-slate-950 relative overflow-hidden">
    <div className="absolute top-20 left-10 w-80 h-80 bg-emerald-500/20 blur-[130px] rounded-full"></div>
    <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-emerald-400/10 blur-[150px] rounded-full"></div>
      <div className="py-5 text-white leading-relaxed">
        <h1 className="text-5xl md:text-6xl font-bold text-center">
          More About{" "}
          <span className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Projects
          </span>
        </h1>
        <div className="mt-10 items-center gap-6 bg-white/5 border border-white/10 rounded-xl p-5 hover:border-emerald-400 transition">
        <h3 className="text-2xl font-bold">Acumen Intelligence</h3>
         
          <p>
          Acumen Intelligence transforms
          complex business data into clear, actionable insights—
          helping enterprises identify opportunities, predict trends,
          and stay ahead of the competition.
          We help organizations uncover
          hidden opportunities, identify customer intent,
          and make strategic decisions with confidence.
        </p>
        </div>

        <button className="bg-green-500 w-40 rounded hover:bg-green-700 text-black mt-5 ml-2"><a>Live Demo</a></button>

        <div className=" mt-10 items-center gap-6 bg-white/5 border border-white/10 rounded-xl p-5 hover:border-emerald-400 transition">
        <h3 className="text-2xl font-bold">Mortgage Calculator</h3>
         
        <p>It is an online tool used to estimate monthly home loan payments, total interest costs, and payoff schedules based on specific financial inputs.</p>
        </div>

        <button className="bg-green-500 w-40 rounded hover:bg-green-700 text-black mt-5 ml-2"><a>Live Demo</a></button>
         <div className=" mt-10 items-center gap-6 bg-white/5 border border-white/10 rounded-xl p-5 hover:border-emerald-400 transition">
        <h3 className="text-2xl font-bold">Gamestop vs Tesla (sales vs revenue analysis)</h3>
         
        <p>It helps in comparing the sales and revenue of the above given two companies and is also visually showed in form of graphs</p>
        </div>

        <button className="bg-green-500 w-40 rounded hover:bg-green-700 text-black mt-5 ml-2"><a>Live Demo</a></button>
      </div>
    </section>
  )
}

export default AcumenIntelligence