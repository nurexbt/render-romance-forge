import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "$5",
    crypto: "≈ 0.00005 BTC",
    period: "/mo",
    description: "Perfect for small projects and testing",
    features: ["1 vCPU Core", "1 GB RAM", "25 GB NVMe SSD", "1 TB Bandwidth", "1 IPv4 Address", "Basic DDoS Protection"],
    popular: false,
  },
  {
    name: "Pro",
    price: "$20",
    crypto: "≈ 0.0002 BTC",
    period: "/mo",
    description: "Ideal for production workloads",
    features: ["4 vCPU Cores", "8 GB RAM", "100 GB NVMe SSD", "4 TB Bandwidth", "1 IPv4 + IPv6", "Advanced DDoS Protection"],
    popular: true,
  },
  {
    name: "Enterprise",
    price: "$80",
    crypto: "≈ 0.0008 BTC",
    period: "/mo",
    description: "For demanding applications",
    features: ["8 vCPU Cores", "32 GB RAM", "400 GB NVMe SSD", "10 TB Bandwidth", "2 IPv4 + IPv6", "Premium DDoS Protection"],
    popular: false,
  },
  {
    name: "Custom",
    price: "Custom",
    crypto: "Contact us",
    period: "",
    description: "Tailored to your exact needs",
    features: ["Up to 64 vCPUs", "Up to 256 GB RAM", "Up to 4 TB NVMe", "Unlimited Bandwidth", "Dedicated IPs", "24/7 Priority Support"],
    popular: false,
  },
];

const PricingSection = () => (
  <section id="pricing" className="py-20">
    <div className="container mx-auto px-4">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold text-foreground">Simple, Transparent Pricing</h2>
        <p className="mt-3 text-muted-foreground">
          All plans include full root access and your choice of OS. Pay with crypto or card.
        </p>
      </div>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {plans.map((plan) => (
          <Card
            key={plan.name}
            className={`relative border bg-background ${plan.popular ? "ring-2 ring-primary" : ""}`}
          >
            {plan.popular && (
              <Badge className="absolute -top-3 left-1/2 -translate-x-1/2">Most Popular</Badge>
            )}
            <CardHeader className="pb-4">
              <CardTitle className="text-lg">{plan.name}</CardTitle>
              <CardDescription>{plan.description}</CardDescription>
              <div className="mt-3">
                <span className="text-3xl font-bold text-foreground">{plan.price}</span>
                <span className="text-muted-foreground">{plan.period}</span>
              </div>
              <p className="text-xs text-muted-foreground">{plan.crypto}</p>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2.5">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Check className="h-4 w-4 shrink-0 text-primary" />
                    {f}
                  </li>
                ))}
              </ul>
              <Button className="mt-6 w-full" variant={plan.popular ? "default" : "outline"}>
                {plan.name === "Custom" ? "Contact Sales" : "Deploy Now"}
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  </section>
);

export default PricingSection;
