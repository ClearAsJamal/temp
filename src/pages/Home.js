import React from 'react';
import HeroSection from '../components/HeroSection';
import Services from './Services';
import About from './About';
import TechnologyStack from '../components/TechnologyStack';
import WhyCustomSoftware from '../components/WhyCustomSoftware';
import Testimonials from '../components/Testimonials';
import ContactUs from './ContactUs';
import FAQ from '../components/FAQ';



const Home = () => (
  <>
    <section id="home">
      <HeroSection />
    </section>

    <section id="services">
      <Services />
    </section>

    <section id="testimonials">
      <Testimonials />
    </section>

    <section id="technologies">
      <TechnologyStack />
    </section>

    <section id="why-custom-software">
      <WhyCustomSoftware />
    </section>

    <section id="about">
      <About />
    </section>

    <section id="faq">
      <FAQ />
    </section>
  </>
);

export default Home;