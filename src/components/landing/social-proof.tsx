// Using inline SVGs for logos to provide a more professional look than placeholders.
// Each SVG is a functional component representing a fictional company logo.

const LogoInnovate = () => (
  <svg width="140" height="40" viewBox="0 0 140 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M18.8 32L12 22.4V32H8V8H12L18.8 17.6V8H22.8V32H18.8Z" fill="currentColor"/>
    <path d="M43.6 32H39.6L33.2 13.2V32H29.2V8H34.4L40.4 25.6L46.4 8H51.6V32H47.6V13.2L43.6 32Z" fill="currentColor"/>
    <path d="M72.4 32H57.2V8H72.4V12H61.2V18H71.2V22H61.2V28H72.4V32Z" fill="currentColor"/>
    <path d="M78.8 32V8H82.8V32H78.8Z" fill="currentColor"/>
    <path d="M103.6 32H88.4V8H103.6V12H92.4V18H102.4V22H92.4V28H103.6V32Z" fill="currentColor"/>
    <path d="M110 32V8H122V12H114V14.8H120.8V18.8H114V28H123.2V32H110Z" fill="currentColor"/>
    <rect x="2" y="2" width="36" height="36" rx="18" fill="hsl(var(--primary))" stroke="currentColor" strokeWidth="2"/>
    <path d="M16 14L24 22M24 14L16 22" stroke="white" strokeWidth="2"/>
  </svg>
);

const LogoApex = () => (
  <svg width="140" height="40" viewBox="0 0 140 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M22 15L15 28L8 15H22Z" fill="hsl(var(--primary))"/>
    <path d="M36 8L44 22L52 8H36Z" fill="currentColor" fillOpacity="0.6"/>
    <path d="M58 8V32H62V18L68 25L74 18V32H78V8H71L65 14L59 8H58Z" fill="currentColor"/>
    <path d="M85 32V8H99V12H89V18H98V22H89V28H99V32H85Z" fill="currentColor"/>
    <path d="M105 32V8H109V28L119 8H125L115 20L125 32H119L112 24L109 28V32H105Z" fill="currentColor"/>
  </svg>
);

const LogoQuantum = () => (
  <svg width="140" height="40" viewBox="0 0 140 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="20" cy="20" r="12" stroke="currentColor" strokeWidth="2"/>
    <circle cx="20" cy="20" r="5" fill="hsl(var(--primary))"/>
    <path d="M40 32V8H55.5C60.5 8 63 10.5 63 15.5C63 20.5 60.5 23 55.5 23H44V32H40ZM44 19H55C57.5 19 59 17.5 59 15.5C59 13.5 57.5 12 55 12H44V19Z" fill="currentColor"/>
    <path d="M70 32V8H74V32H70Z" fill="currentColor"/>
    <path d="M80 32V8H84L92 24V8H96V32H92L84 16V32H80Z" fill="currentColor"/>
    <path d="M102 32V8H118V12H106V18H116V22H106V32H102Z" fill="currentColor"/>
    <path d="M125 32V8H129V28L139 8H145L135 20L145 32H139L132 24L129 28V32H125Z" fill="currentColor"/>
  </svg>
);

const LogoStellar = () => (
  <svg width="140" height="40" viewBox="0 0 140 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M20 8L23.5 18L33 20L23.5 22L20 32L16.5 22L7 20L16.5 18L20 8Z" fill="hsl(var(--primary))"/>
    <path d="M40 32V8H54V12H44V14H53V18H44V20H54V24H44V32H40Z" fill="currentColor"/>
    <path d="M60 32V8H75V12H64V18H73V22H64V28H75V32H60Z" fill="currentColor"/>
    <path d="M81 32V8H85V32H81Z" fill="currentColor"/>
    <path d="M91 32V8H95V28H105V32H91Z" fill="currentColor"/>
    <path d="M112 32V8H116V28H126V32H112Z" fill="currentColor"/>
  </svg>
);

const LogoMomentum = () => (
  <svg width="140" height="40" viewBox="0 0 140 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M8 8H12L18 20L24 8H28V32H24V16L19 26H17L12 16V32H8V8Z" fill="currentColor"/>
    <circle cx="42" cy="20" r="12" stroke="currentColor" strokeWidth="2"/>
    <circle cx="42" cy="20" r="6" fill="hsl(var(--primary))" />
    <path d="M60 32V8H64L72 24V8H76V32H72L64 16V32H60Z" fill="currentColor"/>
    <path d="M82 32V8H98V12H86V18H96V22H86V32H82Z" fill="currentColor"/>
    <path d="M104 32V8H119V12H108V14H117V18H108V20H118V24H108V32H104Z" fill="currentColor"/>
    <path d="M125 32V8H129V28L139 8H145L135 20L145 32H139L132 24L129 28V32H125Z" fill="currentColor"/>
  </svg>
);

const logos = [
  { name: "Innovate Inc.", component: LogoInnovate },
  { name: "Apex Solutions", component: LogoApex },
  { name: "Quantum Labs", component: LogoQuantum },
  { name: "Stellar Co.", component: LogoStellar },
  { name: "Momentum Digital", component: LogoMomentum },
];

export default function SocialProof() {
  return (
    <section id="social-proof" className="py-16 bg-background">
      <div className="container mx-auto px-6">
        <h3 className="text-center text-lg font-medium text-foreground/70 mb-8 font-headline">
          Adcione imagens de logotipos abaixo
        </h3>
        <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8 md:gap-x-16">
          {logos.map((logo) => {
            const LogoComponent = logo.component;
            return (
              <div key={logo.name} title={logo.name} className="text-foreground/60 hover:text-foreground/100 transition-colors duration-300">
                <LogoComponent />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
