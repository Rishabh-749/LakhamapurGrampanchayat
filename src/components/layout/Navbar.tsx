import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Home, Info, Calendar, Image, FileText, Phone } from "lucide-react";
import navigation from "@/data/navigation.json";

const iconMap = {
  Home,
  Info, 
  Calendar,
  Image,
  FileText,
  Phone,
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const NavLink = ({ item, onClick = () => {} }: { item: any; onClick?: () => void }) => {
    const Icon = iconMap[item.icon as keyof typeof iconMap];
    
    return (
      <Link
        to={item.path}
        onClick={onClick}
        className="flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground marathi-text"
      >
        {Icon && <Icon className="w-4 h-4" />}
        {item.label}
      </Link>
    );
  };

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <div className="w-14 h-14 rounded-full flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg marathi-text">
                <img src="/logo1.png" alt="logo" />
              </span>
            </div>
            <div>
              <h1 className="text-lg font-bold village-gradient-text marathi-text">लखमापूर गाव</h1>
              <p className="text-xs text-muted-foreground">ग्रामपंचायत</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navigation.primary.map((item) => (
              <NavLink key={item.path} item={item} />
            ))}
          </div>

          {/* Mobile Navigation */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="outline" size="icon">
                <Menu className="h-5 w-5" />
                <span className="sr-only">मेनू उघडा</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-80">
              <div className="flex flex-col gap-4 mt-8">
                <div className="border-b pb-4">
                  <h2 className="text-lg font-semibold marathi-text">लखमापूर गाव</h2>
                  <p className="text-sm text-muted-foreground">ग्रामपंचायत</p>
                </div>
                
                <div className="flex flex-col gap-2">
                  {navigation.primary.map((item) => (
                    <NavLink key={item.path} item={item} onClick={() => setIsOpen(false)} />
                  ))}
                </div>

                <div className="border-t pt-4">
                  <h3 className="text-sm font-medium text-muted-foreground mb-3 marathi-text">त्वरित लिंक्स</h3>
                  <div className="flex flex-col gap-2">
                    {navigation.quick.map((item, index) => (
                      <Link
                        key={index}
                        to={item.path}
                        onClick={() => setIsOpen(false)}
                        className="text-sm text-muted-foreground hover:text-foreground transition-colors marathi-text"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;