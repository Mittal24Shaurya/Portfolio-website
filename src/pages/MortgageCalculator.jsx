import Mortgagecalculator from "../assets/Mortgage-calculator.png"

const MortgageCalculator = () => {

  const handleClick=()=>{
    window.open("https://mortgage-calculator-acumen3.vercel.app")
  }
  return (
    <section  className="min-h-screen bg-gradient-to-br from-emerald-950 via-black to-slate-950 relative overflow-hidden">
    <div className="absolute top-20 left-10 w-80 h-80 bg-emerald-500/20 blur-[130px] rounded-full"></div>
    <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-emerald-400/10 blur-[150px] rounded-full"></div>
     <div className=" py-5 text-white leading-relaxed">
        <div className="items-center gap-6 bg-white/5 border border-white/10 rounded-xl p-5 ml-2 hover:border-emerald-400 transition">
        <h3 className="text-2xl font-bold">Mortgage Calculator</h3>
        <p>This is a project focused on the use of React Hook "useEffect", which helps in state management.
          A Mortgage Calculator helps you plan your budget by breaking down costs like principal, interest, taxes, and insurance.
        </p>
        <br/>
        <p className=" text-xl font-bold">Tech stack :</p>
        <ul className="list-disc pl-5 space-y-2">
          <li>Frontend : React + vite (use of useEffect)</li>
        </ul>
        </div>
        <button onClick={handleClick} className="bg-green-400 ml-3 mt-5 text-black rounded hover:bg-green-700">Live Demo</button>
        <div className=" py-5 text-white leading-relaxed">
              <div className="items-center gap-6 bg-white/5 border border-white/10 rounded-xl p-5 hover:border-emerald-400 transition">
                  <img src={Mortgagecalculator} className="w-full" alt="Acumen-Intelligence"></img>
              </div>
                
        </div>
      </div>
 
    </section>
  )
}

export default MortgageCalculator