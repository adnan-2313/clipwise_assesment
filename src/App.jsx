import HeroSection from "./Components/HeroSection";
import ProductsComponents from "./Components/ProductsComponents";
import Navbar from "./Components/Navbar";
import AboutComponent from "./Components/AboutComponent";
import Footer from "./Components/Footer"
const App = () => {
  return (
    <>
      <div className="w-full font-OpenSans bg-gradient-to-r  overflow-hidden from-[#74c4e6] via-[#80d9f9] to-[#6db9ff]">
        <Navbar></Navbar>
        <HeroSection />
        <ProductsComponents />
        <AboutComponent />
        <Footer/>
      </div>
    </>
  );
};

export default App;
