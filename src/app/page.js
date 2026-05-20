import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

import Hero from '@/components/home/Hero';
import Skills from '@/components/home/Skills';
import State from '@/components/home/Stats';
import ChatBot from '@/components/chatbot/ChatBot';
export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <Skills />
        <State />
        <ChatBot />
      </main>

      <Footer />
    </>
  );
}
