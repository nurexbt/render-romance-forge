import { Card, CardContent } from "@/components/ui/card";
import { MapPin } from "lucide-react";

const locations = [
  { city: "Amsterdam", country: "Netherlands", region: "Europe", latency: "~5ms" },
  { city: "Frankfurt", country: "Germany", region: "Europe", latency: "~8ms" },
  { city: "New York", country: "USA", region: "North America", latency: "~12ms" },
  { city: "Los Angeles", country: "USA", region: "North America", latency: "~15ms" },
  { city: "Singapore", country: "Singapore", region: "Asia Pacific", latency: "~20ms" },
  { city: "Tokyo", country: "Japan", region: "Asia Pacific", latency: "~25ms" },
  { city: "London", country: "UK", region: "Europe", latency: "~6ms" },
  { city: "São Paulo", country: "Brazil", region: "South America", latency: "~30ms" },
];

const LocationsSection = () => (
  <section id="locations" className="bg-muted/30 py-20">
    <div className="container mx-auto px-4">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold text-foreground">Global Server Locations</h2>
        <p className="mt-3 text-muted-foreground">
          Deploy close to your users with data centers across 4 continents.
        </p>
      </div>

      {/* Simple visual map representation */}
      <div className="relative mx-auto mt-12 max-w-4xl rounded-xl border bg-background p-8">
        <div className="mb-6 text-center text-sm font-medium text-muted-foreground">
          🌍 8 Data Centers · 4 Continents · Ultra-low Latency
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {locations.map((loc) => (
            <Card key={loc.city} className="border transition-shadow hover:shadow-md">
              <CardContent className="flex items-start gap-3 p-4">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <div>
                  <p className="text-sm font-semibold text-foreground">{loc.city}</p>
                  <p className="text-xs text-muted-foreground">{loc.country}</p>
                  <p className="mt-1 text-xs font-medium text-primary">{loc.latency}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default LocationsSection;
