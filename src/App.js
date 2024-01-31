import Home from "./components/Home";
import About from "./components/About";
import NavBar from "./components/NavBar";
import Reliability from "./components/Reliability";
import Contact from './components/Contact'
import './App.css';

function App() {
  
  return (
    <>
      <NavBar />
      <Home />
      <Reliability />
      {/* <SocialLinks /> */}

      <About />
      {/* <Portfolio /> */}
      
      <Contact />
    </>
  );
}

export default App;
