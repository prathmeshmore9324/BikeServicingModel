// src/App.jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Services from "./pages/Services";
import Profile from "./pages/Profile";
import Cart from "./pages/Cart"; // You'll need to create this page
import ServicePackagesPage from "./pages/ServicePackagesPage";
import CheckoutPage from "./pages/CheckoutPage";
import RefundPolicy from "./pages/RefundPolicy";
import TermsAndConditions from "./pages/TermsAndConditions";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/services" element={<Services />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/refund" element={<RefundPolicy />} />
        <Route path="/terms" element={<TermsAndConditions />} /> 
        <Route path="/cart" element={<Cart />} />
        <Route path="/service-packages" element={<ServicePackagesPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />        
      </Routes>
    </BrowserRouter>
  );
}

export default App;