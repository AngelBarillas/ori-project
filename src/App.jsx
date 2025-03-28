import { Routes, Route } from "react-router-dom";
import "/src/index.css";
import Navbar from "/src/components/NavBar.jsx";
import {
  Home,
  About,
  Services,
  Contact,
  BookingPage,
  PrivacyPolicy,
  TermsOfService,
  Sitemap,
} from "./pages";
import Footer from "/src/components/Footer.jsx";
import { Box } from "@mui/material";

function App() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh", // Ensures the container takes up at least the full height of the viewport
      }}
    >
      <Navbar />
      <Box sx={{ flexGrow: 1, overflowY: "auto" }}>
        {" "}
        {/* Main content area that grows to take available space */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/bookingpage" element={<BookingPage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          <Route path="/Sitemap" element={<Sitemap />} />
        </Routes>
      </Box>
      <Footer /> {/* Footer is always at the bottom */}
    </Box>
  );
}

export default App;
