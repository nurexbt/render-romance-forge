import { Button } from "@/components/ui/button";
import { Shield, Zap } from "lucide-react";

const HeroSection = () => (
  <section className="relative overflow-hidden border-b bg-background py-20 md:py-32">
    {/* Subtle grid pattern */}
    <div className="absolute inset-0 opacity-[0.03]" style={{
      backgroundImage: "linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)",
      backgroundSize: "60px 60px"
    }} />

    <div className="container relative mx-auto px-4 text-center">
      <div className="mx-auto flex items-center justify-center gap-2 rounded-full border bg-muted px-4 py-1.5 text-sm text-muted-foreground w-fit mb-6">
        <Shield className="h-3.5 w-3.5" />
        Privacy-First Cloud Infrastructure
      </div>

      <h1 className="mx-auto max-w-3xl text-4xl font-bold tracking-tight text-foreground md:text-6xl">
        Decentralized VPS Hosting,{" "}
        <span className="text-primary">Powered by Blockchain</span>
      </h1>

      <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
        Deploy high-performance virtual private servers with full privacy. Pay with Bitcoin, Ethereum, USDT, or 50+ cryptocurrencies. No KYC required.
      </p>

      <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
        <Button size="lg" asChild>
          <a href="#pricing">
            <Zap className="mr-2 h-4 w-4" />
            View Plans
          </a>
        </Button>
        <Button size="lg" variant="outline" asChild>
          <a href="#features">Learn More</a>
        </Button>
      </div>

      <div className="mt-12 flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
        <span className="flex items-center gap-1.5">✓ Instant Deployment</span>
        <span className="flex items-center gap-1.5">✓ 99.9% Uptime SLA</span>
        <span className="flex items-center gap-1.5">✓ 50+ Crypto Accepted</span>
        <span className="flex items-center gap-1.5">✓ No KYC Required</span>
      </div>
    </div>
  </section>
);

export default HeroSection;
