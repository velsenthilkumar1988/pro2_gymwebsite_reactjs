import { useEffect } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Exercise from './components/UI/Exercise';
import Footer from './components/UI/Footer';
import Hero from './components/UI/Hero';
import Pricing from './components/UI/Pricing';
import Start from './components/UI/Start';
import Testimonials from './components/UI/Testimonials';
import Aos from 'aos';


function App() {
  useEffect(()=>{
    Aos.init();
  },[]);
  return (
    <>
      <Header/>
      <Hero/>
      <Exercise/>
      <Start/>
      <Pricing/>
      <Testimonials/>
      <Footer/>
    </>
  );
}

export default App;
