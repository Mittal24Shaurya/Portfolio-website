import {Route,Routes} from 'react-router-dom'
import FirstLanding from './components/FirstLanding'
import About from './pages/About'
import Skills from "./pages/skills"
import Contact from './pages/Contact'
import Acumen from "./pages/AcumenIntelligence"
import DataAnalysis from "./pages/DataAnalysisProject"
import MortgageCalculator from "./pages/MortgageCalculator"


const App = () => {
  return (
    <Routes>
      <Route path="/" element={<FirstLanding/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/skills" element={<Skills/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/acumen" element={<Acumen/>}/>
      <Route path="/dataanalysis" element={<DataAnalysis/>}/>
      <Route path="/mortgage-calculator" element={<MortgageCalculator/>}/>
    </Routes>

  )
}

export default App