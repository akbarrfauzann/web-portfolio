import {
  Github,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  MessageCircle,
} from "lucide-react";
import { cn } from "../lib/utils";

export const ContactSection = () => {
  return (
    <section id="contact" className="px-4 py-24 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl text-center font-bold mb-4">
          Get In <span className="text-primary">Touch</span>
        </h2>
        <p className="text-md text-muted-foreground text-center mx-auto max-w-2xl mb-12">
          Feel free to reach out for collaborations or just a friendly hello!
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* LEFT */}
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold mb-6 text-center md:text-left">
              Contact Information
            </h3>

            <div className="space-y-6">
              {/* Email */}
              <div className="flex flex-col items-center md:flex-row md:space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div className="text-center md:text-left">
                  <h4 className="font-medium">Email</h4>
                  <a
                    href="mailto:makbarfauzans@gmail.com"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    makbarfauzans@gmail.com
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex flex-col items-center md:flex-row md:space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div className="text-center md:text-left">
                  <h4 className="font-medium">Phone</h4>
                  <a
                    href="tel:+628889013488"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    +62 888 9013 488
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="flex flex-col items-center md:flex-row md:space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div className="text-center md:text-left">
                  <h4 className="font-medium">Location</h4>
                  <p className="text-muted-foreground">Bogor, Indonesia</p>
                </div>
              </div>
            </div>

            {/* Social */}
            <div className="pt-8">
              <h4 className="font-medium mb-4 text-center md:text-left">
                Connect With Me
              </h4>
              <div className="flex justify-center md:justify-start space-x-4">
                <a
                  href="https://www.linkedin.com/in/muhammad-akbar-fauzan-susetyo-50697b260/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="hover:text-primary transition-colors"
                >
                  <Linkedin className="w-6 h-6" />
                </a>

                <a
                  href="https://github.com/akbarrfauzann"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="hover:text-primary transition-colors"
                >
                  <Github className="w-6 h-6" />
                </a>

                <a
                  href="https://www.instagram.com/akbarrfauzannn/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="hover:text-primary transition-colors"
                >
                  <Instagram className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div className="bg-card rounded-lg shadow-lg p-8 flex flex-col items-center justify-center">
            <MessageCircle className="w-16 h-16 text-primary mb-6" />
            <h3 className="text-2xl font-semibold mb-4 text-center">
              Let's Chat on WhatsApp
            </h3>
            <p className="text-muted-foreground text-center mb-8">
              Click the button below to send me a message directly on WhatsApp
            </p>

            <a
              href="https://wa.me/628889013488"
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                "cosmic-button w-full h-12 flex items-center justify-center gap-2",
              )}
            >
              <MessageCircle size={20} />
              Connect to WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
