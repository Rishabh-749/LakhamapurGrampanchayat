import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle } from "lucide-react";
import content from "@/data/content.json";

const AboutSection = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 village-gradient-text marathi-text">
            {content.about.title}
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto marathi-text">
            {content.about.description}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* About Info */}
          <div className="space-y-6">
            <Card className="village-card">
              <CardHeader>
                <CardTitle className="text-xl marathi-text">गावाची माहिती</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-muted-foreground marathi-text">लोकसंख्या</p>
                    <p className="text-lg font-semibold marathi-text">{content.about.population}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground marathi-text">क्षेत्रफळ</p>
                    <p className="text-lg font-semibold marathi-text">{content.about.area}</p>
                  </div>
                  <div className="col-span-2">
                    <p className="text-sm text-muted-foreground marathi-text">स्थापना</p>
                    <p className="text-lg font-semibold marathi-text">{content.about.established}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Features */}
            <Card className="village-card">
              <CardHeader>
                <CardTitle className="text-xl marathi-text">मुख्य सुविधा</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 gap-3">
                  {content.about.features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="marathi-text">{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Visual Element */}
          <div className="relative">
            <Card className="village-card bg-gradient-to-br from-primary/5 to-secondary/5 border-primary/20">
              <CardContent className="p-8 text-center">
                <div className="w-34 h-34 rounded-md overflow-hidden bg-primary/10  flex items-center justify-center mx-auto mb-6">
                  <span className="text-4xl marathi-text">
                    <img src="/Grampamchayat.jpg" alt="Grampanchayat" />
                  </span>
                </div>
                <h3 className="text-2xl font-bold mb-4 marathi-text">ग्रामपंचायत</h3>
                <p className="text-muted-foreground mb-6 marathi-text">
                  स्थानिक स्वराज्य संस्थेच्या माध्यमातून गावाचा विकास
                </p>
                <div className="flex flex-wrap gap-2 justify-center">
                  <Badge variant="secondary" className="marathi-text">लोकशाही</Badge>
                  <Badge variant="secondary" className="marathi-text">पारदर्शकता</Badge>
                  <Badge variant="secondary" className="marathi-text">विकास</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;