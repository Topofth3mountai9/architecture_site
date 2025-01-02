import Hero from './components/hero/hero.component';
import Nav_bar from './components/nav_bar/nav_bar.component';
import About from './components/about/about.component';
import './global.scss';
import Latest_projects from './components/latest_projects/latest_projects.component';
import Testimonials from './components/testimonials/testimonials.component';
import Footer from './components/footer/footer.component';
import Nav_and_hero from './components/nav_and_hero/nav_and_hero.component';
import Contact from './components/contact/contact.component';

function App() {
  return (
    <>
      <div>
        <Nav_and_hero />
        <About />
        <Latest_projects />
        <Testimonials />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default App;
