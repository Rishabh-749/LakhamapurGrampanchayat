import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, Download, Home } from "lucide-react";
import content from "@/data/content.json";

const iconMap = {
  FileText,
  Home,
};

const Forms = () => {
  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 village-gradient-text marathi-text">
            सरकारी फॉर्म्स
          </h1>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto marathi-text">
            आवश्यक दस्तावेजांसाठी फॉर्म्स डाउनलोड करा
          </p>
        </div>

        {/* Forms Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {content.services.map((service) => {
            const Icon = iconMap[service.icon as keyof typeof iconMap] || FileText;
            
            return (
              <Card key={service.id} className="village-card text-center">
                <CardHeader>
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl marathi-text">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground marathi-text">
                    {service.description}
                  </p>
                  
                  <Button className="w-full gap-2 marathi-text">
                    <Download className="w-4 h-4" />
                    फॉर्म डाउनलोड करा
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Instructions */}
        <div className="bg-muted/30 rounded-lg p-8">
          <h2 className="text-2xl font-bold mb-6 marathi-text">फॉर्म भरण्याच्या सूचना</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold mb-3 marathi-text">आवश्यक कागदपत्रे</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="marathi-text">• आधार कार्ड</li>
                <li className="marathi-text">• निवास प्रमाणपत्र</li>
                <li className="marathi-text">• पॅन कार्ड</li>
                <li className="marathi-text">• संबंधित कागदपत्रे</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-3 marathi-text">प्रक्रिया</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="marathi-text">१. फॉर्म डाउनलोड करा</li>
                <li className="marathi-text">२. संपूर्ण माहिती भरा</li>
                <li className="marathi-text">३. आवश्यक कागदपत्रे जोडा</li>
                <li className="marathi-text">४. ग्रामपंचायत कार्यालयात जमा करा</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Forms;