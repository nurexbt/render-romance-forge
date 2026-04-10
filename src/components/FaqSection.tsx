import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "Which cryptocurrencies do you accept?",
    a: "We accept Bitcoin (BTC), Ethereum (ETH), USDT, USDC, Litecoin, Monero, and 50+ other cryptocurrencies via our payment gateway. Payments are confirmed within minutes.",
  },
  {
    q: "How fast is VPS deployment?",
    a: "Your VPS is automatically provisioned within 60 seconds after payment confirmation. For most cryptocurrencies, this means your server is ready in under 15 minutes total.",
  },
  {
    q: "Do you require KYC or identity verification?",
    a: "No. We believe in privacy. You can sign up with just an email address and pay with cryptocurrency. No ID documents or personal information required.",
  },
  {
    q: "What is your uptime guarantee?",
    a: "We offer a 99.9% uptime SLA on all plans. If we fail to meet this, you'll receive account credits proportional to the downtime experienced.",
  },
  {
    q: "Can I upgrade my plan later?",
    a: "Yes. You can upgrade or downgrade your VPS plan at any time from your control panel. Changes take effect immediately with prorated billing.",
  },
  {
    q: "What kind of support do you offer?",
    a: "We provide 24/7 ticket-based support for all customers. Enterprise plan users get priority support with guaranteed response times under 1 hour.",
  },
  {
    q: "Do you offer refunds?",
    a: "We offer a 48-hour money-back guarantee on all new VPS orders. Refunds are processed back to your original payment method, including cryptocurrency.",
  },
];

const FaqSection = () => (
  <section id="faq" className="bg-muted/30 py-20">
    <div className="container mx-auto px-4">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold text-foreground">Frequently Asked Questions</h2>
        <p className="mt-3 text-muted-foreground">
          Everything you need to know about our blockchain VPS hosting.
        </p>
      </div>

      <div className="mx-auto mt-12 max-w-2xl">
        <Accordion type="single" collapsible>
          {faqs.map((faq, i) => (
            <AccordionItem key={i} value={`faq-${i}`}>
              <AccordionTrigger className="text-left text-sm">{faq.q}</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">{faq.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  </section>
);

export default FaqSection;
