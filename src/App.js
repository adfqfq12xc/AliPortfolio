import './App.scss';
import Home from './component/home';
import About from './component/about';
import Contact from './component/contact';
import Skills from './component/skills';
import Portfolio from './component/portfolio';
import Navbar from './component/navbar';

function Layout() {
  return (
      <>
      <div className='navbarHome'>
      <Navbar  />
      </div>
      <div className='appcontent'>
        <Home /> 
        <About />
        <Skills />
        <Portfolio />
        <Contact />
        
      </div>
    </>
  );
}

function App() {
  return (
    <div className="App">
        <Layout />
    </div>
  );
}
export default App;
