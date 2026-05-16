import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, Mail, MapPin, Clock, AlertTriangle } from "lucide-react";
import content from "@/data/content.json";

const Contact = () => {
  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 village-gradient-text marathi-text">
            संपर्क माहिती
          </h1>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto marathi-text">
            आमच्याशी संपर्क साधा आणि आवश्यक मदत मिळवा
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Gram Panchayat Info */}
          <Card className="village-card">
            <CardHeader>
              <CardTitle className="text-2xl marathi-text flex items-center gap-3">
                <MapPin className="w-6 h-6 text-primary" />
                {content.contact.gramPanchayat.name}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <p className="marathi-text">{content.contact.gramPanchayat.address}</p>
                </div>
                
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-primary" />
                  <p className="marathi-text">{content.contact.gramPanchayat.phone}</p>
                </div>
                
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-primary" />
                  <p>{content.contact.gramPanchayat.email}</p>
                </div>
                
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-primary" />
                  <p className="marathi-text">{content.contact.gramPanchayat.timings}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Map Placeholder */}
          <Card className="village-card">
            <CardHeader>
              <CardTitle className="text-xl marathi-text">स्थान</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="bg-muted/50 rounded-lg h-64 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-12 h-12 text-primary mx-auto mb-4" />
                  <p className="text-muted-foreground marathi-text">
                    Google Maps येथे लवकरच उपलब्ध होईल
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Emergency Contacts */}
        <Card className="village-card mb-8" id="emergency">
          <CardHeader>
            <CardTitle className="text-2xl marathi-text flex items-center gap-3">
              <AlertTriangle className="w-6 h-6 text-destructive" />
              आपत्कालीन संपर्क नंबर
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-4">
              {content.contact.emergencyContacts.map((contact, index) => (
                <div key={index} className="bg-destructive/5 border border-destructive/20 rounded-lg p-4 text-center">
                  <Phone className="w-8 h-8 text-destructive mx-auto mb-3" />
                  <h3 className="font-semibold marathi-text mb-2">{contact.service}</h3>
                  <p className="text-2xl font-bold text-destructive mb-1">{contact.phone}</p>
                  <p className="text-xs text-muted-foreground marathi-text">२४ तास उपलब्ध</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Office Timing */}
        <Card className="village-card bg-primary/5 border-primary/20">
          <CardContent className="p-6 text-center">
            <Clock className="w-12 h-12 text-primary mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2 marathi-text">कार्यालयीन वेळ</h3>
            <p className="text-lg marathi-text mb-4">{content.contact.gramPanchayat.timings}</p>
            <p className="text-sm text-muted-foreground marathi-text">
              सोमवार ते शनिवार (रविवार सुट्टी)
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Contact;