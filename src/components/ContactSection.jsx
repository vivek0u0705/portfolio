import {
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import emailjs from "emailjs-com";

export const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // ------------------- EMAILJS SEND -------------------
      await emailjs.sendForm(
        "service_g545cwl",
        "template_q2ubsd9",
        e.target,
        "Qe2_Z0O-2mDM5tlO3"
      ).catch(err => {
        throw new Error(`EmailJS Error: ${err.text || err.message || JSON.stringify(err)}`);
      });

      toast({
        title: "Message sent successfully!",
        description: "Thank you for your message. I'll get back to you soon.",
      });

      // ------------------- STORE IN DYNAMODB VIA API -------------------
      try {
        const formData = {
          name: e.target.name.value,
          email: e.target.email.value,
          message: e.target.message.value,
        };

        const response = await fetch(
          "https://bupwzl0hod.execute-api.us-east-1.amazonaws.com/contact",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
          }
        );

        if (response.ok) {
          e.target.reset();
        } else {
          const errorText = await response.text();
          toast({
            title: "Database storage failed",
            description: `Server error: ${errorText}. However, your email was still sent.`,
          });
        }
      } catch (awsError) {
        console.error("AWS Storage Error:", awsError);
        const isFetchError = awsError.message === "Failed to fetch";
        toast({
          title: "Database storage failed",
          description: isFetchError
            ? "Connection to database failed (likely CORS or Stage Name issue). Check your AWS API settings. Your email was still sent!"
            : `Could not save to database: ${awsError.message}. Your email was still sent!`,
        });
      }
    } catch (error) {
      console.error("Contact Form Error:", error);
      toast({
        title: "Error",
        description: error.message || "Something went wrong. Please try again later.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 px-4 relative bg-transparent">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Get In <span className="text-primary"> Touch</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold mb-6">
              {" "}
              Contact Information
            </h3>

            <div className="space-y-6 justify-center">
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Mail className="h-6 w-6 text-primary" />{" "}
                </div>
                <div>
                  <h4 className="font-medium"> Email</h4>
                  <a
                    href="mailto:vivekvelugoti070705@gmail.com"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    vivekvelugoti070705@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Phone className="h-6 w-6 text-primary" />{" "}
                </div>
                <div>
                  <h4 className="font-medium"> Phone</h4>
                  <a
                    href="tel:+91 9063282084"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    +91 9063282084
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <MapPin className="h-6 w-6 text-primary" />{" "}
                </div>
                <div>
                  <h4 className="font-medium"> Location</h4>
                  <a className="text-muted-foreground hover:text-primary transition-colors">
                    Vijayawad,AP, India
                  </a>
                </div>
              </div>
            </div>

            <div className="pt-8">
              <h4 className="font-medium mb-4 text-center"> Connect With Me</h4>
              <div className="flex space-x-6 justify-center">
                <a href="https://www.linkedin.com/in/vivek-velugoti-a0a28a291/" target="_blank" rel="noreferrer" className="hover:text-primary transition-colors text-muted-foreground w-6 h-6 flex items-center justify-center">
                  <Linkedin size={24} />
                </a>
                <a href="https://www.instagram.com/_vivek___7_/" target="_blank" rel="noreferrer" className="group w-6 h-6 flex items-center justify-center transition-all duration-300" aria-label="Instagram">
                  <img src="https://cdn.simpleicons.org/instagram" alt="Instagram" className="w-5 h-5 opacity-70 dark:invert group-hover:opacity-100 group-hover:[filter:invert(46%)_sepia(97%)_saturate(1786%)_hue-rotate(334deg)_brightness(100%)_contrast(102%)] dark:group-hover:[filter:invert(46%)_sepia(97%)_saturate(1786%)_hue-rotate(334deg)_brightness(100%)_contrast(102%)] transition-all duration-300" />
                </a>
                <a href="https://x.com/VivekVelugoti" target="_blank" rel="noreferrer" className="group w-6 h-6 flex items-center justify-center transition-all duration-300" aria-label="X (Twitter)">
                  <img src="https://cdn.simpleicons.org/x" alt="X (Twitter)" className="w-4 h-4 opacity-70 dark:invert group-hover:opacity-100 group-hover:[filter:invert(46%)_sepia(97%)_saturate(1786%)_hue-rotate(334deg)_brightness(100%)_contrast(102%)] dark:group-hover:[filter:invert(46%)_sepia(97%)_saturate(1786%)_hue-rotate(334deg)_brightness(100%)_contrast(102%)] transition-all duration-300" />
                </a>
              </div>
            </div>
          </div>

          <div
            className="bg-card p-8 rounded-lg shadow-xs"
          >
            <h3 className="text-2xl font-semibold mb-6"> Send a Message</h3>

            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2"
                >
                  {" "}
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden foucs:ring-2 focus:ring-primary"
                  placeholder="Your Name..."
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2"
                >
                  {" "}
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden foucs:ring-2 focus:ring-primary"
                  placeholder="john@gmail.com"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2"
                >
                  {" "}
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden foucs:ring-2 focus:ring-primary resize-none"
                  placeholder="Hello, I'd like to talk about..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={cn(
                  "cosmic-button w-full flex items-center justify-center gap-2"
                )}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
                <Send size={16} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
