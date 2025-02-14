import { BrowserRouter as Router, Routes, Route} from "react-router-dom"

import Home from "./components/pages/Home"
import Contact from "./components/pages/Contact"
import Company from "./components/pages/Company"
import NewProject from "./components/pages/NewProject"
import Projects from './components/pages/Projects'

import Footer from "./components/layout/Footer"
import NavBar from "./components/layout/NavBar"

import Container from "./components/layout/Container"

function App() {
  return (
    <Router>
      <NavBar />

      {/* CONECTANDO OS LINKS */}
      <Container customClass="min-height">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/company" element={<Company />} />
          <Route path="/newproject" element={<NewProject />} />
        </Routes>
      </Container>  

      <Footer />

    </Router>
  )
}

export default App
