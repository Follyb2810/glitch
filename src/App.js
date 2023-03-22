import './App.css';
import Hero from './Component/Hero';
import NavBar from './Component/navBar';
import Card from './Component/card';
import Backed from './Component/backed'
import Footer from './Component/footer';
import Social from './Component/social';
function App() {
  return (
    <div className="App" >
        <NavBar/>
        <Hero/>
        <Card/>
        <Backed/>
        <Social/>
        <Footer/>
        
    </div>
  );
}

export default App;
