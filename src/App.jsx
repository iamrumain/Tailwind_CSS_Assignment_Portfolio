
import './App.css'
import { Navbar } from './Components/Navbar';
import { Banner } from './Components/Banner';
import { Process } from './Components/Process';
import { Project } from './Components/Project';
import { WorkTogether } from './Components/WorkTogether';
import { About } from './Components/About';
import { Contract } from './Components/Contract';
import { Footer } from './Components/Footer';


function App() {

  return (
    <>
      <Navbar />
      <Banner />
      <Process />
      <Project />
      <WorkTogether />
      <About />
      <Contract />
      <Footer />
    </>
  )
}

export default App
