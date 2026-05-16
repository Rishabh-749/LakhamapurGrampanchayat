import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import content from "@/data/content.json";
import navigation from "@/data/navigation.json";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Village Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold marathi-text">लखमापूर गाव</h3>
            <p className="text-primary-foreground/80 marathi-text">
              {content.site.description}
            </p>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm">
                <MapPin className="w-4 h-4" />
                <span className="marathi-text">नाशिक जिल्हा, महाराष्ट्र</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold marathi-text">त्वरित लिंक्स</h4>
            <div className="space-y-2">
              {navigation.primary.slice(0, 5).map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors marathi-text"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold marathi-text">सेवा</h4>
            <div className="space-y-2">
              {navigation.quick.map((item, index) => (
                <Link
                  key={index}
                  to={item.path}
                  className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors marathi-text"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold marathi-text">संपर्क माहिती</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <Phone className="w-4 h-4 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-sm marathi-text">{content.contact.gramPanchayat.phone}</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <Mail className="w-4 h-4 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-sm">{content.contact.gramPanchayat.email}</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <Clock className="w-4 h-4 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-sm marathi-text">{content.contact.gramPanchayat.timings}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Emergency Contacts */}
        <div className="border-t border-primary-foreground/20 mt-8 pt-8">
          <h4 className="text-lg font-semibold mb-4 marathi-text">आपत्कालीन संपर्क</h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {content.contact.emergencyContacts.map((contact, index) => (
              <div key={index} className="flex items-center gap-3 bg-primary-foreground/10 rounded-lg p-3">
                <Phone className="w-5 h-5" />
                <div>
                  <p className="font-medium marathi-text">{contact.service}</p>
                  <p className="text-sm text-primary-foreground/80">{contact.phone}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <p className="text-primary-foreground/80 marathi-text">
            © २०२५ लखमापूर ग्रामपंचायत. सर्व हक्क राखीव.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;