import './App.css'
import Hero from './pages/Hero'
import About from './pages/About'
import Services from './pages/Services'
import Navbar from './Components/Nav'
import Price from './pages/Price'
import OurWork from './pages/OurWork'
import Contact from './pages/Contact'

function App() {
  return (
    <>
      
      <section id="home" style={{ height: "100vh" }}><Hero /></section>
      <section id="about"><About /></section>
      <section id="services"><Services /></section>
      <section id="our-work"><OurWork /></section>
      <section id="price"><Price /></section>
      <section id="contact"><Contact /></section>

    </>
  );
}
export default App;
