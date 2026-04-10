import { Card, CardContent } from "@/components/ui/card";
import { Monitor, Settings } from "lucide-react";

const operatingSystems = [
  "Ubuntu 22.04 / 24.04",
  "Debian 11 / 12",
  "CentOS Stream 9",
  "AlmaLinux 9",
  "Rocky Linux 9",
  "Fedora 39",
  "Windows Server 2022",
  "Arch Linux",
];

const controlPanels = [
  { name: "cPanel / WHM", desc: "Industry-standard hosting panel" },
  { name: "Plesk", desc: "All-in-one server management" },
  { name: "DirectAdmin", desc: "Lightweight & fast panel" },
  { name: "CyberPanel", desc: "Free OpenLiteSpeed panel" },
  { name: "Webmin", desc: "Open-source system admin" },
  { name: "Custom / None", desc: "Bare metal with root access" },
];

const OsPanelsSection = () => (
  <section id="os-panels" className="py-20">
    <div className="container mx-auto px-4">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold text-foreground">Operating Systems & Control Panels</h2>
        <p className="mt-3 text-muted-foreground">
          Choose from a wide range of operating systems and management panels for your VPS.
        </p>
      </div>

      <div className="mt-12 grid gap-12 lg:grid-cols-2">
        {/* OS */}
        <div>
          <div className="mb-6 flex items-center gap-2">
            <Monitor className="h-5 w-5 text-primary" />
            <h3 className="text-xl font-semibold text-foreground">Operating Systems</h3>
          </div>
          <div className="grid grid-cols-2 gap-3">
            {operatingSystems.map((os) => (
              <div
                key={os}
                className="rounded-lg border bg-background px-4 py-3 text-sm font-medium text-foreground transition-colors hover:bg-muted"
              >
                {os}
              </div>
            ))}
          </div>
        </div>

        {/* Panels */}
        <div>
          <div className="mb-6 flex items-center gap-2">
            <Settings className="h-5 w-5 text-primary" />
            <h3 className="text-xl font-semibold text-foreground">Control Panels</h3>
          </div>
          <div className="grid gap-3">
            {controlPanels.map((panel) => (
              <Card key={panel.name} className="border">
                <CardContent className="flex items-center justify-between p-4">
                  <div>
                    <p className="text-sm font-semibold text-foreground">{panel.name}</p>
                    <p className="text-xs text-muted-foreground">{panel.desc}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default OsPanelsSection;
