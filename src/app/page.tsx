import AnimatedSection from '@/components/landing/animated-section';
import Header from '@/components/landing/header';
import Hero from '@/components/landing/hero';
import SocialProof from '@/components/landing/social-proof';
import Problem from '@/components/landing/problem';
import Solution from '@/components/landing/solution';
import Timeline from '@/components/landing/timeline';
import Features from '@/components/landing/features';
import Portfolio from '@/components/landing/portfolio';
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
        <AnimatedSection>
            <Hero />
        </AnimatedSection>
        <AnimatedSection>
            <SocialProof />
        </AnimatedSection>
        <AnimatedSection>
            <Problem />
        </AnimatedSection>
        <AnimatedSection>
            <Solution />
        </AnimatedSection>
        <AnimatedSection>
            <Timeline />
        </AnimatedSection>
        <AnimatedSection>
            <Features />
        </AnimatedSection>
        <AnimatedSection>
            <Portfolio />
        </AnimatedSection>
        <AnimatedSection>
            <CaseStudies />
        </AnimatedSection>
        <AnimatedSection>
            <Testimonials />
        </AnimatedSection>
        <AnimatedSection>
            <Faq />
        </AnimatedSection>
        <AnimatedSection>
            <Cta />
        </AnimatedSection>
      </main>
      <Footer />
      <Chatbot />
    </div>
  );
}
