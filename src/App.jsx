
import './App.css'
import { Navbar } from './Components/Navbar';
import { Banner } from './Components/Banner';
import { Process } from './Components/Process';
import { Project } from './Components/Projects/Project';


function App() {

  return (
    <>
      <Navbar />
      <Banner />
      <Process />
      <Project />
    </>
  )
}

export default App
