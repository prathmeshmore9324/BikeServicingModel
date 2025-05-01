// src/pages/HomePage.jsx
import PageLayout from "../components/layout/PageLayout";
import HeroSection from "../components/sections/HeroSection";
import ServicesSection from "../components/sections/ServicesSection";

const HomePage = () => {
  return (
    <PageLayout>
      <HeroSection />
      <ServicesSection />
    </PageLayout>
  );
};

export default HomePage;