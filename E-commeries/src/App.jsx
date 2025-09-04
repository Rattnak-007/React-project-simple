import Navbar from "./components/Home/Navbar/Navbar";
import Slide from "./components/Home/Slide/Slide";
import Explore from "./components/Home/Explore/Explore";
import Hero from "./components/Home/Hero/Hero";
import ServicesSolutions from "./components/Home/Services & Solutions/Services-Solutions";
import Footer from "./components/Home/Footer/Footer";
function App() {
  return (
    <>
      <Navbar />
      <Slide />
      <Explore />
      <Hero />
      <ServicesSolutions />
      <Footer />
    </>
  );
}
export default App;
