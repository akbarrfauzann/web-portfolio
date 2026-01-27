import {
  Github,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
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
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold mb-6 text-center md:text-left">
              Contact Information
            </h3>

            <div className="space-y-6">
              <div className="flex flex-col items-center md:flex-row md:items-center space-y-2 md:space-y-0 md:space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div className="text-center md:text-left">
                  <h4 className="font-medium">Email</h4>
                  <a
                    href="mailto:makbarfauzans@gmail.com"
                    className="text-muted-foreground transition-colors hover:text-primary"
                  >
                    makbarfauzans@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex flex-col items-center md:flex-row md:items-center space-y-2 md:space-y-0 md:space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div className="text-center md:text-left">
                  <h4 className="font-medium">Phone</h4>
                  <a
                    href="tel:+628889013488"
                    className="text-muted-foreground transition-colors hover:text-primary"
                  >
                    +62 888 9013 488
                  </a>
                </div>
              </div>

              <div className="flex flex-col items-center md:flex-row md:items-center space-y-2 md:space-y-0 md:space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div className="text-center md:text-left">
                  <h4 className="font-medium">Location</h4>
                  <p className="text-muted-foreground">Bogor, Indonesia</p>
                </div>
              </div>
            </div>

            <div className="pt-8">
              <h4 className="font-medium mb-4 text-center md:text-left">
                Connect With Me
              </h4>
              <div className="flex justify-center md:justify-start space-x-4">
                <a
                  href="#"
                  target="_blank"
                  className="hover:text-primary transition-colors"
                  aria-label="Linkedin"
                >
                  <Linkedin className="w-6 h-6" />
                </a>
                <a
                  href="#"
                  target="_blank"
                  className="hover:text-primary transition-colors"
                  aria-label="GitHub"
                >
                  <Github className="w-6 h-6" />
                </a>
                <a
                  href="#"
                  target="_blank"
                  className="hover:text-primary transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>

          <div className="bg-card rounded-lg shadow-lg p-8">
            <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>

            <form className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-md font-medium text-left mb-2"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-3 py-4 rounded-md border border-input bg-background text-foreground focus:outline-hidden focus:ring-2 focus:ring-primary"
                  placeholder="Enter your name"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-md font-medium text-left mb-2"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-3 py-4 rounded-md border border-input bg-background text-foreground focus:outline-hidden focus:ring-2 focus:ring-primary"
                  placeholder="Enter your email"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-md font-medium text-left mb-2"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  className="w-full px-3 py-4 rounded-md border border-input bg-background text-foreground focus:outline-hidden focus:ring-2 focus:ring-primary resize-none"
                  placeholder="Write your message here..."
                  required
                />
              </div>

              <button
                type="submit"
                className={cn(
                  "cosmic-button w-full h-12 flex items-center justify-center gap-2",
                )}
              >
                Send Message
                <Send size={16} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
