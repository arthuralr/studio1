import Header from '@/components/landing/header';
import Hero from '@/components/landing/hero';
import SocialProof from '@/components/landing/social-proof';
import Problem from '@/components/landing/problem';
import Solution from '@/components/landing/solution';
import CaseStudies from '@/components/landing/case-studies';
import Testimonials from '@/components/landing/testimonials';
import Faq from '@/components/landing/faq';
import Cta from '@/components/landing/cta';
import Footer from '@/components/landing/footer';
import Chatbot from '@/components/landing/chatbot';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow">
        <Hero />
        <SocialProof />
        <Problem />
        <Solution />
        <CaseStudies />
        <Testimonials />
        <Faq />
        <Cta />
      </main>
      <Footer />
      <Chatbot />
    </div>
  );
}
