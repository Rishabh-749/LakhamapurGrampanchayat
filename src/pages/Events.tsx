import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Star } from "lucide-react";
import content from "@/data/content.json";

const Events = () => {
  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 village-gradient-text marathi-text">
            कार्यक्रम आणि उत्सव
          </h1>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto marathi-text">
            गावातील सर्व महत्वाचे कार्यक्रम, उत्सव आणि सामाजिक घटना
          </p>
        </div>

        {/* Events Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {content.events.map((event) => (
            <Card key={event.id} className="village-card relative overflow-hidden">
              {event.featured && (
                <div className="absolute top-4 right-4 z-10">
                  <Badge className="bg-accent text-accent-foreground gap-1">
                    <Star className="w-3 h-3" />
                    <span className="marathi-text">विशेष</span>
                  </Badge>
                </div>
              )}
              
              <CardHeader>
                <CardTitle className="text-xl marathi-text">
                  {event.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <p className="text-muted-foreground marathi-text">
                  {event.description}
                </p>
                
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Calendar className="w-5 h-5 text-primary" />
                    <span className="marathi-text font-medium">{event.date}</span>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <MapPin className="w-5 h-5 text-primary" />
                    <span className="marathi-text">{event.location}</span>
                  </div>
                </div>

                {event.featured && (
                  <div className="bg-primary/5 rounded-lg p-4 mt-4">
                    <p className="text-sm text-primary font-medium marathi-text">
                      ⭐ मुख्य कार्यक्रम - सर्वांचे स्वागत आहे
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-12 text-center bg-muted/30 rounded-lg p-8">
          <h2 className="text-2xl font-bold mb-4 marathi-text">आपला कार्यक्रम जाहीर करा</h2>
          <p className="text-muted-foreground mb-6 marathi-text">
            आपल्या कार्यक्रमाची माहिती गावातील सर्वांपर्यंत पोहोचवण्यासाठी आमच्याशी संपर्क साधा
          </p>
        </div>
      </div>
    </div>
  );
};

export default Events;