import { Bitcoin } from "lucide-react";

const Footer = () => (
  <footer className="border-t bg-background py-12">
    <div className="container mx-auto px-4">
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-2 text-lg font-bold text-foreground">
            <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-primary">
              <span className="text-xs font-bold text-primary-foreground">BV</span>
            </div>
            BlockVPS
          </div>
          <p className="mt-3 text-sm text-muted-foreground">
            Privacy-first VPS hosting powered by blockchain technology. Deploy in seconds, pay with crypto.
          </p>
        </div>

        <div>
          <h4 className="mb-3 text-sm font-semibold text-foreground">Product</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><a href="#pricing" className="hover:text-foreground">Pricing</a></li>
            <li><a href="#features" className="hover:text-foreground">Features</a></li>
            <li><a href="#locations" className="hover:text-foreground">Locations</a></li>
            <li><a href="#os-panels" className="hover:text-foreground">OS & Panels</a></li>
          </ul>
        </div>

        <div>
          <h4 className="mb-3 text-sm font-semibold text-foreground">Support</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><a href="#faq" className="hover:text-foreground">FAQ</a></li>
            <li><a href="#" className="hover:text-foreground">Documentation</a></li>
            <li><a href="#" className="hover:text-foreground">Status Page</a></li>
            <li><a href="#" className="hover:text-foreground">Contact Us</a></li>
          </ul>
        </div>

        <div>
          <h4 className="mb-3 text-sm font-semibold text-foreground">Accepted Payments</h4>
          <div className="flex flex-wrap gap-2">
            {["BTC", "ETH", "USDT", "USDC", "LTC", "XMR"].map((c) => (
              <span
                key={c}
                className="inline-flex items-center gap-1 rounded-md border bg-muted px-2 py-1 text-xs font-medium text-muted-foreground"
              >
                {c}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-10 border-t pt-6 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} BlockVPS. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
