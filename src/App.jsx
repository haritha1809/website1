import './App.css';
import Hero from './Components/Hero/Hero';
import Plans from './Components/Plans/Plans';
import Programs from './Components/Programs/Programs';
import Reasons from './Components/Reasons/Reasons';
import Testimonials from './Components/Testimonials/Testimonials';
import Footer from './Components/Footer/Footer';
import Join from './Components/Join/Join';
import Contact from './Components/Contact/Contact';

// ✅ Import Router things
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AboutUs from './data/aboutData'
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <div className="App">
            <Hero />
            <Programs />
            <Reasons />
            <Plans />
            <Testimonials />
            <Join />
            <Contact />
            <Footer />
          </div>
        } />

        {/* ✅ Route for About Us */}
        <Route path="/about" element={<AboutUs />} />
      </Routes>
    </Router>
  );
}

export default App;