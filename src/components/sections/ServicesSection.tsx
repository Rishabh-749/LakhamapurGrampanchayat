import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, Home, Download } from "lucide-react";
import { Link } from "react-router-dom";
import content from "@/data/content.json";

const iconMap = {
  FileText,
  Home,
};

const ServicesSection = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 village-gradient-text marathi-text">
            सरकारी सेवा
          </h2>
          <p className="text-lg text-muted-foreground marathi-text">
            ऑनलाइन फॉर्म्स आणि दस्तऐवज डाउनलोड करा
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {content.services.map((service) => {
            const Icon = iconMap[service.icon as keyof typeof iconMap] || FileText;
            
            return (
              <Card key={service.id} className="village-card text-center hover:scale-105 transition-transform">
                <CardHeader>
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="text-lg marathi-text">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground marathi-text">
                    {service.description}
                  </p>
                  
                  <Button variant="outline" size="sm" className="w-full gap-2 marathi-text">
                    <Download className="w-4 h-4" />
                    फॉर्म डाउनलोड करा
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Quick Access */}
        <div className="bg-primary/5 rounded-lg p-6 text-center">
          <h3 className="text-xl font-semibold mb-4 marathi-text">त्वरित सेवा</h3>
          <p className="text-muted-foreground mb-6 marathi-text">
            आपत्कालीन परिस्थितीत किंवा तत्काळ मदतीसाठी
          </p>
          
          <div className="flex flex-wrap gap-4 justify-center">
            <Button asChild variant="secondary">
              <Link to="/contact#emergency" className="marathi-text">
                आपत्कालीन नंबर
              </Link>
            </Button>
            
            <Button asChild variant="outline">
              <Link to="/forms" className="marathi-text">
                सर्व फॉर्म्स
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;