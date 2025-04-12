import Hero from '@/components/Hero';
import Skills from '@/components/Skills';
import Projects from '../components/Projects';
import Designs from '@/components/Designs';
import Contact from '@/components/Contact';
import Footer from '../components/Footer';
import Accounts from '@/components/Accounts';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1">
        <Hero />
        <Projects />
        <Designs />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
