import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Stats from './components/Stats';
import Services from './components/Services';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Certifications from './components/Certifications';
import Projects from './components/Projects';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { profile } from './data/profile';

export default function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero profile={profile} />
      <About profile={profile} />
      <Stats profile={profile} />
      <Services profile={profile} />
      <Skills profile={profile} />
      <Experience profile={profile} />
      <Certifications profile={profile} />
      <Projects profile={profile} />
      <Testimonials profile={profile} />
      <Contact profile={profile} />
      <Footer profile={profile} />
    </div>
  );
}
