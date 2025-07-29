import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import Facilities from './components/Facilities';
import Trainers from './components/Trainers';
import MembershipPlans from './components/MembershipPlans';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Facilities />
      <Trainers />
      <MembershipPlans />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
