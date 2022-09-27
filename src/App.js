import logo from './logo.svg';
import './App.css';
import Navbar from './navbar/Navbar';
import Hyiam from './Hyiam/Hyiam';
import Myawesome from './Myawesome/Myawesome';
import Experience from './Experience/Experience';
import Workfor from './wordkfor/Workfor';
import Swiper from './Swiper/Swiperss';
import Exceptional from './Exceptional/Exceptional';
import Contact from './Contact/Contact';
import Footer from './footer/Footer';

function App() {
  return (
    <div className="App">
    <Footer top="-19px" rotate="rotate(3.142rad)" />
     <Navbar/>
     <Hyiam/>
     <Myawesome/>
     <Experience/>
     <Workfor/>
     <Swiper/>
     <Exceptional/>
     <Contact/>
     <Footer top="6000px" rotate="rotate(0)" />
    </div>
  );
}

export default App;
