import './App.scss';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Home from './component/home';
import Resume from './component/resume';
import About from './component/about';
import Contact from './component/contact';
import Skills from './component/skills';
import Portfolio from './component/portfolio';
import Navbar from './component/navbar';
import { Particless } from './particles'; // Adjust the import statement

function Layout() {
  const location = useLocation();
  const renderParticle = location.pathname === '/';

  return (
    <>
      {renderParticle && <Particless/>}
      <Navbar />
      <div className='appcontent'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/AboutMe' element={<About />} />
        <Route path='/resume' element={<Resume />} />
        <Route path='/Skills' element={<Skills />} />
        <Route path='/portfolio' element={<Portfolio />} />
        <Route path='/Contact' element={<Contact />} />
      </Routes>         
      </div>
    </>
  );
}

function App() {
  return (
    <div className="App">
      <Router>
        <Layout />
      </Router>
    </div>
  );
}

export default App;
