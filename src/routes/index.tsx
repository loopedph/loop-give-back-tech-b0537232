import { createFileRoute } from "@tanstack/react-router";
import logoMark from "@/assets/looped-logo.png";
import productDashboard from "@/assets/product-dashboard.png";
import productAssets from "@/assets/product-assets.png";
import productRetire from "@/assets/product-retire.png";
import { Button } from "@/components/ui/button";
import { ImpactCalculator } from "@/components/Calculator";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Check, Layers } from "lucide-react";
import {
  Recycle,
  ShieldCheck,
  Cpu,
  HeartHandshake,
  Leaf,
  Droplets,
  Cloud,
  Scale,
  Mail,
  ArrowRight,
  TrendingUp,
  Wallet,
  Sparkles,
  Instagram,
  Facebook,
  Linkedin,
} from "lucide-react";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Looped ITAD PH — Circular IT Asset Disposition Philippines" },
      {
        name: "description",
        content:
          "Looped ITAD PH is the Philippines' circular IT asset disposition partner. We recover, sanitize, and refurbish retired laptops and PCs for NGOs — 100% e-waste recovery, zero data leaks.",
      },
      {
        name: "keywords",
        content:
          "Looped ITAD, Looped ITAD PH, Looped PH, ITAD PH, IT asset disposition Philippines, e-waste Philippines, laptop refurbishment Philippines, circular IT, data destruction Philippines, Looped",
      },
      { name: "robots", content: "index, follow" },
      { name: "author", content: "Looped ITAD PH" },
      { property: "og:site_name", content: "Looped ITAD PH" },
      { property: "og:title", content: "Looped ITAD PH — Circular IT Asset Disposition Philippines" },
      {
        property: "og:description",
        content:
          "Closing the loop on e-waste in the Philippines. Certified ITAD, 100% recovery rate, zero liabilities, real climate impact.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://loopedph.com" },
      { property: "og:locale", content: "en_PH" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Looped ITAD PH — Circular IT Asset Disposition" },
      {
        name: "twitter:description",
        content: "Philippines' circular ITAD partner. Recover, refurbish, redistribute.",
      },
    ],
    links: [
      { rel: "canonical", href: "https://loopedph.com" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "Looped ITAD PH",
          alternateName: ["Looped", "Looped PH", "Looped ITAD", "LoopedIT PH"],
          url: "https://loopedph.com",
          logo: "https://loopedph.com/favicon.ico",
          description:
            "Looped ITAD PH is the Philippines' circular IT asset disposition partner — recovering, sanitizing, refurbishing, and redistributing retired IT assets.",
          email: "looped@loopedph.com",
          address: {
            "@type": "PostalAddress",
            addressCountry: "PH",
          },
          sameAs: [
            "https://www.instagram.com/loopedit.ph/",
            "https://www.facebook.com/loopedit.ph",
            "https://www.linkedin.com/company/loopedph",
          ],
        }),
      },
    ],
  }),
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <Hero />
      <Sustainability />
      <Process />
      <Product />
      <Packages />
      <Impact />
      <AdvisedBy />
      <Financials />
      <ImpactCalculator />
      <Contact />
      <Footer />
    </div>
  );
}

function Logo({ className = "h-9 w-9" }: { className?: string }) {
  return <img src={logoMark} alt="Looped" className={className} />;
}

function Nav() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-background/75 border-b border-border/60">
      <div className="mx-auto max-w-6xl px-6 py-3 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2.5 text-xl">
          <Logo className="h-9 w-9" />
          <span style={{ fontFamily: '"Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande", sans-serif', fontWeight: 400 }}>Looped</span>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
          <a href="#sustainability" className="hover:text-foreground transition-colors">Sustainability</a>
          <a href="#process" className="hover:text-foreground transition-colors">Process</a>
          <a href="#financials" className="hover:text-foreground transition-colors">Model</a>
          <a href="#calculator" className="hover:text-foreground transition-colors">Calculator</a>
          <a href="#contact" className="hover:text-foreground transition-colors">Contact</a>
        </nav>
        <Button asChild size="sm" className="rounded-full">
          <a href="#contact">Partner with us</a>
        </Button>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10" style={{ background: "var(--gradient-soft)" }} />
      <div className="mx-auto max-w-4xl px-6 pt-20 pb-24 md:pt-28 md:pb-32 text-center">
        <div className="space-y-7 flex flex-col items-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card/80 px-4 py-1.5 text-xs font-medium text-muted-foreground">
            <Leaf className="h-3.5 w-3.5 text-primary" />
            Circular IT • Pre-seed • Philippines
          </span>
          <h1 className="text-5xl md:text-7xl font-semibold tracking-tight leading-[1.05]">
            Closing the loop on{" "}
            <span className="italic" style={{ color: "var(--primary)" }}>
              e-waste.
            </span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">
            We recover retired IT assets from companies and universities, refurbish them with
            care, and redistribute them to NGOs and communities who need them most.
          </p>
          <div className="flex flex-wrap gap-3 pt-2 justify-center">
            <Button asChild size="lg" className="rounded-full shadow-[var(--shadow-soft)]">
              <a href="#contact">
                Donate your IT assets <ArrowRight className="ml-1 h-4 w-4" />
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="rounded-full">
              <a href="#sustainability">See our impact</a>
            </Button>
          </div>
          <div className="flex items-center gap-8 pt-6 text-sm">
            <Stat value="100%" label="E-waste recovered" />
            <div className="h-8 w-px bg-border" />
            <Stat value="966 kg" label="CO₂e avoided" />
            <div className="h-8 w-px bg-border" />
            <Stat value="570K L" label="Water saved" />
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <div className="text-2xl font-semibold tracking-tight">{value}</div>
      <div className="text-xs text-muted-foreground mt-0.5">{label}</div>
    </div>
  );
}

function Sustainability() {
  const items = [
    { icon: Recycle, value: "100%", label: "E-waste recovery rate", note: "Nothing we touch goes to landfill." },
    { icon: Cloud, value: "966 kg", label: "CO₂e emissions avoided", note: "Equivalent to ~3,900 km not driven." },
    { icon: Droplets, value: "570,000 L", label: "Freshwater saved", note: "From avoided new-device manufacturing." },
    { icon: Scale, value: "4.5 g", label: "Neurotoxins kept out of soil", note: "Lead, cadmium, mercury — diverted." },
    { icon: Leaf, value: "6.64 kg", label: "Diverted from landfill", note: "Every gram matters in a linear world." },
    { icon: ShieldCheck, value: "100%", label: "Data destruction success", note: "Zero data leaks. Ever." },
  ];
  return (
    <section id="sustainability" className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 -z-10 opacity-[0.04]" style={{ background: "var(--gradient-hero)" }} />
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl mb-16">
          <p className="text-sm uppercase tracking-[0.2em] text-primary font-medium mb-3 inline-flex items-center gap-2">
            <Leaf className="h-4 w-4" /> Sustainability First
          </p>
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight leading-[1.1]">
            Every laptop we save is a small win for the planet —{" "}
            <span style={{ color: "var(--primary)" }}>and a big win for someone.</span>
          </h2>
          <p className="mt-5 text-lg text-muted-foreground leading-relaxed">
            E-waste is the fastest-growing waste stream on Earth. Looped exists to slow it down,
            one refurbished device at a time.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {items.map((item) => (
            <div
              key={item.label}
              className="group rounded-2xl border border-border bg-card p-7 hover:shadow-[var(--shadow-soft)] hover:-translate-y-1 transition-[var(--transition-smooth)]"
            >
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-secondary text-primary mb-5 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <item.icon className="h-5 w-5" />
              </div>
              <div className="text-3xl font-semibold tracking-tight">{item.value}</div>
              <div className="text-sm font-medium mt-1">{item.label}</div>
              <p className="text-xs text-muted-foreground mt-2 leading-relaxed">{item.note}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Process() {
  const steps = [
    { icon: Recycle, title: "Sourcing", desc: "We partner with universities and corporations to recover retired IT assets at end-of-life." },
    { icon: ShieldCheck, title: "Data Sanitization", desc: "Every unit undergoes certified data destruction to guarantee institutional security." },
    { icon: Cpu, title: "Hardware Upgrade", desc: "We install new SSDs and RAM upgrades so devices meet modern performance standards." },
    { icon: HeartHandshake, title: "Redistribution", desc: "Refurbished units are earmarked for NGOs, schools, and community partners." },
  ];
  return (
    <section id="process" className="py-24 md:py-32 bg-secondary/40">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl mb-16">
          <p className="text-sm uppercase tracking-[0.2em] text-primary font-medium mb-3">Our Process</p>
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight">
            From retired hardware to renewed purpose.
          </h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {steps.map((step, i) => (
            <div
              key={step.title}
              className="group relative rounded-2xl border border-border bg-card p-7 hover:shadow-[var(--shadow-soft)] hover:-translate-y-1 transition-[var(--transition-smooth)]"
            >
              <div className="absolute top-5 right-5 text-xs font-mono text-muted-foreground">
                0{i + 1}
              </div>
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-secondary text-primary mb-5 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <step.icon className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Product() {
  const shots = [
    { src: productDashboard, title: "Dashboard", desc: "Your IT portfolio at a glance — value, CO₂e, and salvage in one view." },
    { src: productAssets, title: "Asset Inventory", desc: "Track every device's age, useful life, and salvage value in real time." },
    { src: productRetire, title: "One-click Retirement", desc: "Certified data destruction, refurbishment, and NGO redistribution — all logged." },
  ];
  return (
    <section id="product" className="py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl mb-12">
          <p className="text-sm uppercase tracking-[0.2em] text-primary font-medium mb-3 inline-flex items-center gap-2">
            <Layers className="h-4 w-4" /> Built for MSMEs
          </p>
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight leading-[1.1]">
            IT asset management,{" "}
            <span style={{ color: "var(--primary)" }}>without the enterprise price tag.</span>
          </h2>
          <p className="mt-5 text-lg text-muted-foreground leading-relaxed">
            Most MSMEs lose track of their hardware long before it loses value. Looped gives you a
            simple dashboard to inventory, value, and responsibly retire every device.
          </p>
        </div>
        <Carousel opts={{ align: "start", loop: true }} className="w-full">
          <CarouselContent className="-ml-4">
            {shots.map((s) => (
              <CarouselItem key={s.title} className="pl-4 md:basis-4/5 lg:basis-3/4">
                <div className="rounded-2xl border border-border bg-card overflow-hidden shadow-[var(--shadow-soft)]">
                  <img src={s.src} alt={s.title} className="w-full h-auto block" loading="lazy" />
                  <div className="p-6">
                    <h3 className="text-lg font-semibold">{s.title}</h3>
                    <p className="text-sm text-muted-foreground mt-1.5 leading-relaxed">{s.desc}</p>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-end gap-2 mt-6">
            <CarouselPrevious className="static translate-y-0" />
            <CarouselNext className="static translate-y-0" />
          </div>
        </Carousel>
      </div>
    </section>
  );
}

function Packages() {
  const tiers = [
    { name: "Free", units: "5", highlight: false },
    { name: "Starter", units: "30", highlight: true },
    { name: "Growth", units: "100", highlight: false },
    { name: "Enterprise", units: "Unlimited", highlight: false },
  ];
  const perks = ["Free dashboard", "Free retirement*", "Free ESG reports"];
  return (
    <section id="packages" className="py-24 md:py-32 bg-secondary/40">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl mb-12 text-center mx-auto">
          <p className="text-sm uppercase tracking-[0.2em] text-primary font-medium mb-3">How we source</p>
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight leading-[1.1]">
            The <span style={{ color: "var(--primary)" }}>ITAM Loop.</span>
          </h2>
          <p className="mt-5 text-lg text-muted-foreground leading-relaxed">
            Pick the tier that fits your fleet. Every plan includes the dashboard, retirement, and
            ESG reporting at no cost.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {tiers.map((t) => (
            <div
              key={t.name}
              className={`relative rounded-2xl border bg-card p-7 transition-[var(--transition-smooth)] hover:-translate-y-1 hover:shadow-[var(--shadow-soft)] ${
                t.highlight ? "border-primary" : "border-border"
              }`}
            >
              {t.highlight && (
                <div className="absolute -top-3 left-7 rounded-full bg-primary px-3 py-0.5 text-xs font-medium text-primary-foreground">
                  Most popular
                </div>
              )}
              <div className="text-xl font-semibold tracking-tight" style={{ color: "var(--primary)" }}>
                {t.name}
              </div>
              <div className="mt-4 flex items-baseline gap-1.5">
                <span className="text-3xl font-semibold tracking-tight">{t.units}</span>
                <span className="text-sm text-muted-foreground">IT units</span>
              </div>
              <ul className="mt-6 space-y-2.5">
                {perks.map((p) => (
                  <li key={p} className="flex items-center gap-2 text-sm">
                    <Check className="h-4 w-4 text-primary shrink-0" />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <p className="text-xs text-muted-foreground text-center mt-6 italic">
          *Other costs may be incurred — only the data wipe is free.
        </p>
      </div>
    </section>
  );
}

function Impact() {
  return (
    <section id="impact" className="py-24 md:py-32">
      <div className="mx-auto max-w-3xl px-6 text-center space-y-6">
        <p className="text-sm uppercase tracking-[0.2em] text-primary font-medium">Why it matters</p>
        <h2 className="text-4xl md:text-5xl font-semibold tracking-tight">
          Every laptop has a second life — and someone waiting for it.
        </h2>
        <p className="text-lg text-muted-foreground leading-relaxed">
          Millions of working machines are scrapped each year while millions of students and
          non-profits go without. Looped bridges that gap, turning corporate IT turnover into
          community access.
        </p>
        <div className="flex items-start gap-4 pt-2 rounded-2xl border border-border bg-card p-5 text-left max-w-xl mx-auto">
          <Sparkles className="h-5 w-5 text-primary mt-0.5 shrink-0" />
          <p className="text-sm text-muted-foreground leading-relaxed">
            <span className="font-medium text-foreground">3 assets sourced · 100% functional.</span> Small numbers,
            big proof: our circular model works at scale-of-one before it scales to thousands.
          </p>
        </div>
      </div>
    </section>
  );
}

function AdvisedBy() {
  return (
    <section id="advised-by" className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 -z-10 opacity-[0.05]" style={{ background: "var(--gradient-hero)" }} />
      <div className="mx-auto max-w-5xl px-6">
        <div className="text-center mb-12">
          <p className="text-sm uppercase tracking-[0.2em] text-primary font-medium mb-4 inline-flex items-center gap-2">
            <Sparkles className="h-4 w-4" /> Advised by
          </p>
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight leading-[1.1] max-w-3xl mx-auto">
            Guided by leaders in{" "}
            <span style={{ color: "var(--primary)" }}>human rights</span> and institutional governance.
          </h2>
          <p className="mt-5 text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            Our social impact framework is built on the counsel of those who shape the country's
            most consequential institutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          <div className="relative">
            <div
              className="absolute -inset-px rounded-3xl opacity-20 blur-md"
              style={{ background: "var(--gradient-hero)" }}
            />
            <div className="relative rounded-3xl border border-border bg-card p-8 md:p-10 h-full">
              <div className="flex items-start gap-5">
                <div
                  className="hidden sm:inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl text-primary-foreground"
                  style={{ background: "var(--gradient-hero)" }}
                >
                  <Scale className="h-6 w-6" />
                </div>
                <div className="flex-1 space-y-3">
                  <div className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                    <ShieldCheck className="h-3 w-3" />
                    Strategic Advisor
                  </div>
                  <div>
                    <div className="text-xl md:text-2xl font-semibold tracking-tight">
                      The Chairman of the Commission on Human Rights
                    </div>
                    <div className="text-sm text-muted-foreground mt-1.5">
                      Republic of the Philippines
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div
              className="absolute -inset-px rounded-3xl opacity-20 blur-md"
              style={{ background: "var(--gradient-hero)" }}
            />
            <div className="relative rounded-3xl border border-border bg-card p-8 md:p-10 h-full">
              <div className="flex items-start gap-5">
                <div
                  className="hidden sm:inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl text-primary-foreground"
                  style={{ background: "var(--gradient-hero)" }}
                >
                  <Sparkles className="h-6 w-6" />
                </div>
                <div className="flex-1 space-y-3">
                  <div className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                    <ShieldCheck className="h-3 w-3" />
                    Strategic Advisor
                  </div>
                  <div>
                    <div className="text-xl md:text-2xl font-semibold tracking-tight">
                      Managing Director of AquaKlima Inc.
                    </div>
                    <div className="text-sm text-muted-foreground mt-1.5">
                      Consultant to ADB and UNDP
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Financials() {
  const headline = [
    { icon: TrendingUp, value: "90%", label: "Gross margin", note: "₱2,500 sales · ₱250 COGS" },
    { icon: Wallet, value: "79%", label: "Net income margin", note: "Lean opex, no waste" },
    { icon: ShieldCheck, value: "₱0", label: "Total liabilities", note: "Fully equity-funded" },
  ];
  return (
    <section id="financials" className="py-24 md:py-32 bg-secondary/40">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl mb-14">
          <p className="text-sm uppercase tracking-[0.2em] text-primary font-medium mb-3">Lean by design</p>
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight leading-[1.1]">
            A profitable model with{" "}
            <span style={{ color: "var(--primary)" }}>zero liabilities.</span>
          </h2>
          <p className="mt-5 text-lg text-muted-foreground leading-relaxed">
            We don't burn capital chasing growth. Every peso is reinvested into recovery,
            refurbishment, and redistribution.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-5 mb-10">
          {headline.map((m) => (
            <div
              key={m.label}
              className="rounded-2xl border border-border bg-card p-7 hover:shadow-[var(--shadow-soft)] transition-[var(--transition-smooth)]"
            >
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary mb-5">
                <m.icon className="h-5 w-5" />
              </div>
              <div className="text-4xl font-semibold tracking-tight">{m.value}</div>
              <div className="text-sm font-medium mt-2">{m.label}</div>
              <div className="text-xs text-muted-foreground mt-1">{m.note}</div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-px rounded-2xl overflow-hidden bg-border">
          <MiniMetric value="₱23.7K" label="Total equity" />
          <MiniMetric value="3" label="Assets sourced" />
          <MiniMetric value="1.0" label="Refurbishment yield" />
          <MiniMetric value="0%" label="Lost asset rate" />
        </div>
      </div>
    </section>
  );
}

function MiniMetric({ value, label }: { value: string; label: string }) {
  return (
    <div className="bg-card p-6">
      <div className="text-2xl font-semibold tracking-tight">{value}</div>
      <div className="text-xs text-muted-foreground mt-2 leading-snug">{label}</div>
    </div>
  );
}

function Contact() {
  return (
    <section id="contact" className="py-24 md:py-32">
      <div className="mx-auto max-w-4xl px-6">
        <div
          className="relative overflow-hidden rounded-[2.5rem] p-12 md:p-16 text-center"
          style={{ background: "var(--gradient-hero)" }}
        >
          <div
            className="absolute inset-0 opacity-20 mix-blend-overlay"
            style={{
              backgroundImage:
                "radial-gradient(circle at 20% 20%, white 1px, transparent 1px), radial-gradient(circle at 80% 70%, white 1px, transparent 1px)",
              backgroundSize: "40px 40px",
            }}
          />
          <div className="relative space-y-6 text-primary-foreground">
            <h2 className="text-4xl md:text-5xl font-semibold tracking-tight">
              Have IT assets to retire? Let's loop them in.
            </h2>
            <p className="text-lg opacity-90 max-w-xl mx-auto">
              Partner with Looped to turn your end-of-life hardware into measurable social and
              environmental impact.
            </p>
            <div className="pt-2">
              <Button asChild size="lg" variant="secondary" className="rounded-full text-base">
                <a href="mailto:looped@loopedph.com">
                  <Mail className="mr-2 h-4 w-4" />
                  looped@loopedph.com
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  const socials = [
    { href: "https://www.instagram.com/loopedit.ph/", label: "Instagram", Icon: Instagram },
    { href: "https://www.facebook.com/loopedit.ph", label: "Facebook", Icon: Facebook },
    { href: "https://www.linkedin.com/company/loopedph", label: "LinkedIn", Icon: Linkedin },
  ];
  return (
    <footer className="border-t border-border py-10">
      <div className="mx-auto max-w-6xl px-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
        <div className="flex items-center gap-2">
          <Logo className="h-7 w-7" />
          <span className="font-medium text-foreground">Looped</span>
          <span>· Circular IT for the Philippines</span>
        </div>
        <div className="flex items-center gap-3">
          {socials.map(({ href, label, Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Looped ITAD PH on ${label}`}
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border bg-card text-muted-foreground hover:text-primary hover:border-primary transition-colors"
            >
              <Icon className="h-4 w-4" />
            </a>
          ))}
        </div>
        <div>© {new Date().getFullYear()} Looped ITAD PH. All rights reserved.</div>
      </div>
    </footer>
  );
}
