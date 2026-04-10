import { Card, CardContent } from "@/components/ui/card";
import { Bitcoin, Globe, Shield, Server, Zap, Lock } from "lucide-react";

const features = [
  {
    icon: Bitcoin,
    title: "Crypto Payments",
    description: "Pay with BTC, ETH, USDT, and 50+ cryptocurrencies. No bank account needed.",
  },
  {
    icon: Globe,
    title: "Decentralized Infrastructure",
    description: "Distributed across multiple independent data centers worldwide for maximum resilience.",
  },
  {
    icon: Shield,
    title: "Privacy First",
    description: "No KYC verification required. Your identity stays private with anonymous sign-up.",
  },
  {
    icon: Server,
    title: "99.9% Uptime SLA",
    description: "Enterprise-grade reliability backed by our uptime guarantee and redundant systems.",
  },
  {
    icon: Lock,
    title: "DDoS Protection",
    description: "Built-in Layer 3-7 DDoS mitigation to keep your services online under any attack.",
  },
  {
    icon: Zap,
    title: "Instant Deployment",
    description: "Your VPS is live within 60 seconds of payment confirmation. Fully automated setup.",
  },
];

const FeaturesSection = () => (
  <section id="features" className="bg-muted/30 py-20">
    <div className="container mx-auto px-4">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold text-foreground">Why Choose BlockVPS?</h2>
        <p className="mt-3 text-muted-foreground">
          Built for developers and businesses who value privacy, performance, and freedom.
        </p>
      </div>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((f) => (
          <Card key={f.title} className="border bg-background transition-shadow hover:shadow-md">
            <CardContent className="p-6">
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                <f.icon className="h-5 w-5 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground">{f.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{f.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  </section>
);

export default FeaturesSection;
