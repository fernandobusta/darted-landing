import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav';
import Hero from './components/Hero';
import Footer from './components/Footer';
import Product from './components/Product';
import Contact from './components/Contact';
import Feature from './components/Feature';

function App() {
  return (
    <div className="App bg-stone-800 z-20">
      <Nav />
      <section id = "hero" >
        <Hero />
      </section>
      <section id = "feature" >
        <Feature />
      </section>
      <section id = "product" >
        <Product />
      </section>
      <section id = "contact" >
        <Contact />
      </section>
      <Footer />
      
    </div>
  );
}

export default App;
