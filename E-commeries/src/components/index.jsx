import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { useState, useEffect } from "react";
import Navbar from "./Home/Navbar/Navbar";
import Slide from "./Home/Slide/Slide";
import Explore from "./Home/Explore/Explore";
import Hero from "./Home/Hero/Hero";
import ServicesSolutions from "./Home/Services & Solutions/Services-Solutions";
import Footer from "./Home/Footer/Footer";
import Deals from "./Deals/Deals";
import Gaming from "./Gaming/Gaming";
import Support from "./Support/Support";
import Professionals from "./Professional/Professional";
import Loading from "./Reload/Loadind";

function PageRoutes() {
  const location = useLocation();
  const [showLoading, setShowLoading] = useState(false);
  const [fade, setFade] = useState(false);

  useEffect(() => {
    setShowLoading(true);
    setFade(false);
    const timer1 = setTimeout(() => setFade(true), 2000); // fade out after 0.9s
    const timer2 = setTimeout(() => setShowLoading(false), 3000); // hide after 5s
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, [location.pathname]);

  return (
    <>
      {showLoading && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 9999,
            background: "rgba(255,255,255,0.95)",
            transition: "opacity 0.4s",
            opacity: fade ? 0 : 1,
            pointerEvents: fade ? "none" : "auto",
          }}
        >
          <Loading />
        </div>
      )}
      <Routes>
        {/* Home route */}
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <Slide />
              <Explore />
              <Hero />
              <ServicesSolutions />
              <Footer />
            </>
          }
        />
        {/* Deals route */}
        <Route
          path="/Deals"
          element={
            <>
              <Navbar />
              <Deals />
              <Footer />
            </>
          }
        />
        {/* Gaming route */}
        <Route
          path="/Gaming"
          element={
            <>
              <Navbar />
              <Gaming />
              <Footer />
            </>
          }
        />
        {/* Support route */}
        <Route
          path="/Support"
          element={
            <>
              <Navbar />
              <Support />
              <Footer />
            </>
          }
        />
        {/* Professionals route */}
        <Route
          path="/Professional"
          element={
            <>
              <Navbar />
              <Professionals />
              <Footer />
            </>
          }
        />
      </Routes>
    </>
  );
}

const index = () => {
  return (
    <Router>
      <PageRoutes />
    </Router>
  );
};
export default index;
