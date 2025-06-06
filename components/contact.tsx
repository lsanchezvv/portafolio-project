import { Badge } from "@/components/ui/badge";
import { Mail, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="relative py-20 px-6">
      <div className="max-w-screen-md mx-auto">
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4">
            Contact
          </Badge>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">
            Get in touch
          </h2>
          <p className="text-muted-foreground mt-2 sm:mt-4 text-lg">
            I&apos;m always open to discussing new opportunities, collaborations, or just connecting with fellow engineers.
          </p>
        </div>
        <div className="flex flex-col items-center gap-8">
          <div className="flex items-center gap-3">
            <Mail className="h-6 w-6 text-primary" />
            <a
              href="mailto:heyluis@duck.com"
              className="text-lg font-medium text-primary underline hover:text-primary/80"
            >
              heyluis@duck.com
            </a>
          </div>
          <div className="flex items-center gap-3">
            <MapPin className="h-6 w-6 text-primary" />
            <span className="text-lg text-muted-foreground">
              Based in Stockholm, Sweden
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 
