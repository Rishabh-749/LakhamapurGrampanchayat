import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Users, MapPin, Calendar } from "lucide-react";
import content from "@/data/content.json";

const About = () => {
  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 village-gradient-text marathi-text">
            {content.about.title}
          </h1>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto marathi-text">
            {content.about.description}
          </p>
        </div>

        {/* Main Stats */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <Card className="village-card text-center">
            <CardContent className="p-6">
              <Users className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-2xl font-bold marathi-text mb-2">{content.about.population}</h3>
              <p className="text-muted-foreground marathi-text">लोकसंख्या</p>
            </CardContent>
          </Card>
          
          <Card className="village-card text-center">
            <CardContent className="p-6">
              <MapPin className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-2xl font-bold marathi-text mb-2">{content.about.area}</h3>
              <p className="text-muted-foreground marathi-text">क्षेत्रफळ</p>
            </CardContent>
          </Card>
          
          <Card className="village-card text-center">
            <CardContent className="p-6">
              <Calendar className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-2xl font-bold marathi-text mb-2">{content.about.established}</h3>
              <p className="text-muted-foreground marathi-text">स्थापना</p>
            </CardContent>
          </Card>
        </div>

        {/* Features & Facilities */}
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="village-card">
            <CardHeader>
              <CardTitle className="text-2xl marathi-text">मुख्य सुविधा</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4">
                {content.about.features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="marathi-text text-lg">{feature}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="village-card bg-gradient-to-br from-primary/5 to-secondary/5 border-primary/20">
            <CardHeader>
              <CardTitle className="text-2xl marathi-text">गावाचे वैशिष्ट्य</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="marathi-text text-lg">
                खडकसुखणे गाव हे त्याच्या समृद्ध सांस्कृतिक वारशासाठी प्रसिद्ध आहे. 
                येथील लोक शिक्षण आणि कृषीच्या क्षेत्रात अग्रणी आहेत.
              </p>
              
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary" className="marathi-text">पारंपरिक कृषी</Badge>
                <Badge variant="secondary" className="marathi-text">स्वच्छता अभियान</Badge>
                <Badge variant="secondary" className="marathi-text">डिजिटल गाव</Badge>
                <Badge variant="secondary" className="marathi-text">सहकारी चळवळ</Badge>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default About;