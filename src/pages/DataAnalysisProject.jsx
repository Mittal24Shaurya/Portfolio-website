import Tesla from "../assets/Tesla.png"
import GameStop from "../assets/GameStop.png"

const DataAnalysisProject = () => {
  return (
    <section  className="min-h-screen bg-gradient-to-br from-emerald-950 via-black to-slate-950 relative overflow-hidden">
    <div className="absolute top-20 left-10 w-80 h-80 bg-emerald-500/20 blur-[130px] rounded-full"></div>
    <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-emerald-400/10 blur-[150px] rounded-full"></div>
    <div className=" py-5 text-white leading-relaxed">
        <div className="items-center gap-6 bg-white/5 border border-white/10 rounded-xl p-5 ml-2 hover:border-emerald-400 transition">
        <h3 className="text-2xl font-bold">Data Analysis Project (GameStop vs Tesla)</h3>
        <p>In this project , I have analysed the revenue vs sales of both the companies and plotted that in a graph</p>
        <br/>
        <p className=" text-xl font-bold">Tech stack :</p>
        <ul className="list-disc pl-5 space-y-2">
          <li>Pandas</li>
          <li>Beautiful Soup</li>
          <li>Plotly</li>
          <li>Requests</li>
          <li>yfinance</li>
        </ul>
        </div>
        <div className=" py-5 text-white leading-relaxed">
                <div className="items-center gap-6 bg-white/5 border border-white/10 rounded-xl p-5 hover:border-emerald-400 transition">
                <img src={Tesla} className="w-full" alt="Acumen-Intelligence"></img>
                </div>
        
        </div>
              <div className=" py-5 text-white leading-relaxed">
                <div className="items-center gap-6 bg-white/5 border border-white/10 rounded-xl p-5 hover:border-emerald-400 transition">
                {/* //CHANGE IMAGE */}
                <img src={GameStop} className="w-full" alt="Dashboard Preview"></img>
                </div>
                
              </div>
      </div>



    </section>
  )
}

export default DataAnalysisProject