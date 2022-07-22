import Navbar from "./components/Navbar";
import Landing from "./pages/Landing";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import Fonts from "./components/Fonts";

const App = () => {
  if (window.location.pathname === "/") {
    return (
      <ChakraProvider>
        <Fonts />
        <Router>
          <Routes>
            <Route path="/" element={<Landing />} />
          </Routes>
        </Router>
      </ChakraProvider>
    );
  } else {
    return (
      <ChakraProvider>
        <Fonts />
        <Router>
          <Navbar />
          <Routes>
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>
          <Footer />
        </Router>
      </ChakraProvider>
    );
  }
};

export default App;
