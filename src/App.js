import { Route, Routes } from 'react-router';
import './App.css';
import Homepage from './pages/homepage';
import Aboutpage from './pages/aboutpage';
import Skillpage from './pages/skillpage';
import Projectpage from './pages/projectpage';
import Contactpage from './pages/contactpage';



function App() {
 
  return (
  <>
  
  <Routes>
    <Route index element={<Homepage/>}/>
    <Route path='/about'element={<Aboutpage/>}/>
    <Route path='/skill'element={<Skillpage/>}/>
    <Route path='/projects'element={<Projectpage/>}/>
    <Route path='/contact'element={<Contactpage/>}/>
  </Routes>
  </>
  );
}

export default App;
