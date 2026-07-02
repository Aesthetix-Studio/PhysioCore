import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Services } from "./components/Services";
import { About } from "./components/About";
import { WhyUs } from "./components/WhyUs";
import { Team } from "./components/Team";
import { Testimonials } from "./components/Testimonials";
import { BookAppointment } from "./components/BookAppointment";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <About />
        <WhyUs />
        <Team />
        <Testimonials />
        <BookAppointment />
      </main>
      <Footer />
    </div>
  );
}
