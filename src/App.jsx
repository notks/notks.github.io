import { useTheme } from './hooks/useTheme';
import Header from './components/Header';
import Hero from './components/Hero';
import Work from './components/Work';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Writing from './components/Writing';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { showBlog } from './data/content';

export default function App() {
  const { isDark, toggleTheme } = useTheme();

  return (
    <>
      <Header isDark={isDark} toggleTheme={toggleTheme} />
      <main>
        <Hero />
        <Work />
        <Experience />
        <Skills />
        {showBlog && <Writing />}
        <Contact />
      </main>
      <Footer />
    </>
  );
}
