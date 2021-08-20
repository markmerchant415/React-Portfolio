
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import Navbar from './Components/Navbar';
import Header from './Components/Header';
//import Particles from './Components/Particles';
import Aboutme from './Components/Aboutme';
import Services from './Components/Services';
import Contacts from './Components/Contacts';

function App() {
  return (
    <>
    
    <Navbar/>
    <Header/>
    <Aboutme/>
    <Services/>
    <Contacts/>
    </>
  );
}

export default App;
