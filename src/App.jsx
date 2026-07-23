import {Route,Routes} from 'react-router-dom'
import FirstLanding from './components/FirstLanding'
import About from './pages/About'
import Skills from "./pages/skills"
import Contact from './pages/Contact'
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<FirstLanding/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/skills" element={<Skills/>}/>
      <Route path="/contact" element={<Contact/>}/>
    </Routes>

  )
}

export default App