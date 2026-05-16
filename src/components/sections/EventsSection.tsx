import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Star } from "lucide-react";
import { Link } from "react-router-dom";
import content from "@/data/content.json";

const EventsSection = () => {
  const featuredEvents = content.events.filter(event => event.featured);
  const upcomingEvents = content.events.slice(0, 3);

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 village-gradient-text marathi-text">
            आगामी कार्यक्रम
          </h2>
          <p className="text-lg text-muted-foreground marathi-text">
            गावातील महत्वाचे कार्यक्रम आणि उत्सव
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {upcomingEvents.map((event) => (
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
                <CardTitle className="text-lg marathi-text line-clamp-2">
                  {event.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <p className="text-muted-foreground text-sm line-clamp-3 marathi-text">
                  {event.description}
                </p>
                
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm">
                    <Calendar className="w-4 h-4 text-primary" />
                    <span className="marathi-text">{event.date}</span>
                  </div>
                  
                  <div className="flex items-center gap-2 text-sm">
                    <MapPin className="w-4 h-4 text-primary" />
                    <span className="marathi-text">{event.location}</span>
                  </div>
                </div>
                
                <div className="pt-2">
                  <Button variant="ghost" size="sm" className="w-full marathi-text">
                    अधिक वाचा
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View All Events Button */}
        <div className="text-center">
          <Button asChild variant="outline" size="lg">
            <Link to="/events" className="marathi-text">
              सर्व कार्यक्रम पाहा
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default EventsSection;