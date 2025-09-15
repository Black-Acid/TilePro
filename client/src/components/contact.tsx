import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { insertContactSubmissionSchema } from "@shared/schema";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { z } from "zod";

const contactFormSchema = insertContactSubmissionSchema.extend({
  firstName: z.string().min(2, "First name must be at least 2 characters"),
  lastName: z.string().min(2, "Last name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  projectType: z.string().min(1, "Please select a project type"),
  message: z.string().min(10, "Message must be at least 10 characters")
});

type ContactFormData = z.infer<typeof contactFormSchema>;

export default function Contact() {
  const { toast } = useToast();
  
  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      projectType: "",
      message: ""
    }
  });

  const contactMutation = useMutation({
    mutationFn: async (data: ContactFormData) => {
      return apiRequest("POST", "/api/contact", data);
    },
    onSuccess: (data) => {
      console.log('Form submission successful:', data);
      toast({
        title: "Quote Request Sent!",
        description: "Thank you for your request. We'll respond within 24 hours with a detailed estimate.",
        duration: 5000,
      });
      form.reset();
    },
    onError: (error) => {
      toast({
        title: "Failed to Send Request",
        description: "There was an error sending your quote request. Please try again or contact us directly.",
        variant: "destructive",
      });
    }
  });

  const onSubmit = (data: ContactFormData) => {
    contactMutation.mutate(data);
  };

  return (
    <section id="contact" className="py-20 hero-gradient text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div>
            <h2 className="text-4xl font-bold mb-6" data-testid="contact-title">
              Get Your Free Quote Today
            </h2>
            <p className="text-xl mb-8 text-gray-200" data-testid="contact-description">
              Ready to transform your space? Contact us for a detailed consultation and free estimate.
            </p>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-center" data-testid="contact-phone">
                <div className="w-12 h-12 bg-yellow-400 rounded-lg flex items-center justify-center mr-4">
                  <Phone className="w-6 h-6 text-gray-900" />
                </div>
                <div>
                  <div className="font-semibold">Call Us</div>
                  <div className="text-gray-200">+233 55 686 2984 / +233 53 599 2377</div>
                </div>
              </div>
              
              <div className="flex items-center" data-testid="contact-email">
                <div className="w-12 h-12 bg-yellow-400 rounded-lg flex items-center justify-center mr-4">
                  <Mail className="w-6 h-6 text-gray-900" />
                </div>
                <div>
                  <div className="font-semibold">Email Us</div>
                  <div className="text-gray-200">info@tankotilingcompany.com</div>
                </div>
              </div>
              
              <div className="flex items-center" data-testid="contact-location">
                <div className="w-12 h-12 bg-yellow-400 rounded-lg flex items-center justify-center mr-4">
                  <MapPin className="w-6 h-6 text-gray-900" />
                </div>
                <div>
                  <div className="font-semibold">Service Areas</div>
                  <div className="text-gray-200">Greater Metro Area & Surrounding Counties</div>
                </div>
              </div>
              
              <div className="flex items-center" data-testid="contact-hours">
                <div className="w-12 h-12 bg-yellow-400 rounded-lg flex items-center justify-center mr-4">
                  <Clock className="w-6 h-6 text-gray-900" />
                </div>
                <div>
                  <div className="font-semibold">Business Hours</div>
                  <div className="text-gray-200">Mon-Fri: 7AM-6PM | Sat: 8AM-4PM</div>
                </div>
              </div>
            </div>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors"
                data-testid="social-facebook"
              >
                <span className="text-white font-bold">f</span>
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors"
                data-testid="social-instagram"
              >
                <span className="text-white font-bold">ig</span>
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors"
                data-testid="social-linkedin"
              >
                <span className="text-white font-bold">in</span>
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors"
                data-testid="social-google"
              >
                <span className="text-white font-bold">g</span>
              </a>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="glass-effect rounded-2xl p-8">
            <h3 className="text-2xl font-semibold mb-6" data-testid="contact-form-title">
              Request Your Quote
            </h3>
            
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6" data-testid="contact-form">
                <div className="grid md:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="firstName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-white">First Name</FormLabel>
                        <FormControl>
                          <Input 
                            {...field}
                            className="bg-white/20 border-white/30 text-white placeholder-gray-300 focus:border-yellow-400 focus:ring-yellow-400/20"
                            placeholder="John"
                            data-testid="input-first-name"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="lastName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-white">Last Name</FormLabel>
                        <FormControl>
                          <Input 
                            {...field}
                            className="bg-white/20 border-white/30 text-white placeholder-gray-300 focus:border-yellow-400 focus:ring-yellow-400/20"
                            placeholder="Doe"
                            data-testid="input-last-name"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white">Email Address</FormLabel>
                      <FormControl>
                        <Input 
                          {...field}
                          type="email"
                          className="bg-white/20 border-white/30 text-white placeholder-gray-300 focus:border-yellow-400 focus:ring-yellow-400/20"
                          placeholder="john@example.com"
                          data-testid="input-email"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white">Phone Number</FormLabel>
                      <FormControl>
                        <Input 
                          {...field}
                          type="tel"
                          className="bg-white/20 border-white/30 text-white placeholder-gray-300 focus:border-yellow-400 focus:ring-yellow-400/20"
                          placeholder="(555) 123-4567"
                          data-testid="input-phone"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="projectType"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white">Project Type</FormLabel>
                      <Select onValueChange={field.onChange} value={field.value}>
                        <FormControl>
                          <SelectTrigger 
                            className="bg-white/20 border-white/30 text-white focus:border-yellow-400 focus:ring-yellow-400/20"
                            data-testid="select-project-type"
                          >
                            <SelectValue placeholder="Select Project Type" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="bathroom">Bathroom Tiling</SelectItem>
                          <SelectItem value="kitchen">Kitchen Backsplash</SelectItem>
                          <SelectItem value="floor">Floor Installation</SelectItem>
                          <SelectItem value="commercial">Commercial Project</SelectItem>
                          <SelectItem value="repair">Repair & Restoration</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white">Project Details</FormLabel>
                      <FormControl>
                        <Textarea 
                          {...field}
                          rows={4}
                          className="bg-white/20 border-white/30 text-white placeholder-gray-300 focus:border-yellow-400 focus:ring-yellow-400/20 resize-none"
                          placeholder="Please describe your project, including size, timeline, and any specific requirements..."
                          data-testid="textarea-message"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <Button 
                  type="submit"
                  disabled={contactMutation.isPending}
                  className="w-full custom-accent hover:opacity-90 py-4 rounded-lg font-semibold text-lg transition-all"
                  data-testid="submit-contact-form"
                >
                  {contactMutation.isPending ? "Sending..." : "Send My Quote Request"}
                </Button>
                
                <p className="text-sm text-gray-300 text-center" data-testid="contact-form-note">
                  We'll respond within 24 hours with a detailed estimate
                </p>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </section>
  );
}
