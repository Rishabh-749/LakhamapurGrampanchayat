import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Home, ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-[60vh] flex items-center justify-center bg-background">
      <div className="text-center space-y-6 max-w-md mx-auto px-4">
        <div className="text-8xl font-bold text-primary/20 marathi-text">४०४</div>
        <h1 className="text-3xl font-bold marathi-text">पृष्ठ आढळले नाही</h1>
        <p className="text-muted-foreground marathi-text">
          क्षमस्व! आपण शोधत असलेले पृष्ठ उपलब्ध नाही.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild>
            <Link to="/" className="marathi-text gap-2">
              <Home className="w-4 h-4" />
              मुख्यपृष्ठावर जा
            </Link>
          </Button>
          
          <Button variant="outline" onClick={() => window.history.back()} className="marathi-text gap-2">
            <ArrowLeft className="w-4 h-4" />
            मागे जा
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
