import { Card, CardContent } from "@/components/ui/card";
import { Users, MapPin, Home, GraduationCap } from "lucide-react";
import content from "@/data/content.json";

const iconMap = {
  Users,
  MapPin,
  Home,
  GraduationCap,
};

const StatsSection = () => {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {content.stats.map((stat, index) => {
            const Icon = iconMap[stat.icon as keyof typeof iconMap];
            
            return (
              <Card key={index} className="village-card text-center p-6">
                <CardContent className="p-0">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    {Icon && <Icon className="w-6 h-6 text-primary" />}
                  </div>
                  <div className="text-2xl md:text-3xl font-bold text-primary mb-2 marathi-text">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground marathi-text">
                    {stat.label}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;