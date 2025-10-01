import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import { Card, CardContent } from '../ui/card';
import { Label } from '../ui/label';

export function Contact() {
  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      content: 'support@rabblehub.com',
      subContent: 'We will respond within 24 hours',
    },
    {
      icon: Phone,
      title: 'Phone',
      content: '+1 (555) 123-4567',
      subContent: 'Mon-Fri from 8am to 6pm EST',
    },
    {
      icon: MapPin,
      title: 'Office',
      content: '123 Business Ave, Suite 100',
      subContent: 'San Francisco, CA 94105',
    },
    {
      icon: Clock,
      title: 'Business Hours',
      content: 'Monday - Friday',
      subContent: '8:00 AM - 6:00 PM EST',
    },
  ];

  const offices = [
    {
      city: 'San Francisco',
      address: '123 Business Ave, Suite 100',
      phone: '+1 (555) 123-4567',
    },
    {
      city: 'New York',
      address: '456 Park Avenue, Floor 20',
      phone: '+1 (555) 234-5678',
    },
    {
      city: 'London',
      address: '789 Oxford Street',
      phone: '+44 20 1234 5678',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="bg-gradient-to-br from-primary to-primary/80 text-primary-foreground py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-primary-foreground mb-4">Get in Touch</h1>
          <p className="text-primary-foreground/90">
            Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-12 bg-secondary/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info) => (
              <Card key={info.title}>
                <CardContent className="p-6 text-center">
                  <div className="flex justify-center mb-4">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                      <info.icon className="text-primary-foreground" size={24} />
                    </div>
                  </div>
                  <h4 className="mb-2">{info.title}</h4>
                  <p className="mb-1">{info.content}</p>
                  <p className="text-muted-foreground">{info.subContent}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Form */}
            <div>
              <h2 className="mb-2">Send us a Message</h2>
              <p className="text-muted-foreground mb-8">
                Fill out the form below and our team will get back to you within 24 hours.
              </p>

              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name</Label>
                    <Input
                      id="firstName"
                      placeholder="John"
                      className="bg-input-background"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input
                      id="lastName"
                      placeholder="Doe"
                      className="bg-input-background"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="john.doe@example.com"
                    className="bg-input-background"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number (Optional)</Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="+1 (555) 123-4567"
                    className="bg-input-background"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input
                    id="subject"
                    placeholder="How can we help?"
                    className="bg-input-background"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    placeholder="Tell us more about your inquiry..."
                    rows={6}
                    className="bg-input-background"
                  />
                </div>

                <Button size="lg" className="w-full">
                  <Send className="mr-2" size={20} />
                  Send Message
                </Button>
              </form>
            </div>

            {/* Additional Info */}
            <div className="space-y-8">
              <Card>
                <CardContent className="p-6">
                  <h3 className="mb-4">Our Offices</h3>
                  <div className="space-y-6">
                    {offices.map((office) => (
                      <div key={office.city} className="border-b border-border last:border-0 pb-6 last:pb-0">
                        <h4 className="mb-2">{office.city}</h4>
                        <div className="space-y-1 text-muted-foreground">
                          <p className="flex items-start">
                            <MapPin size={16} className="mr-2 mt-1 flex-shrink-0" />
                            <span>{office.address}</span>
                          </p>
                          <p className="flex items-center">
                            <Phone size={16} className="mr-2 flex-shrink-0" />
                            <span>{office.phone}</span>
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="mb-4">Support Resources</h3>
                  <div className="space-y-3">
                    <button className="text-left w-full text-primary hover:underline">
                      → Visit our Help Center
                    </button>
                    <button className="text-left w-full text-primary hover:underline">
                      → Browse FAQ
                    </button>
                    <button className="text-left w-full text-primary hover:underline">
                      → Schedule a Demo
                    </button>
                    <button className="text-left w-full text-primary hover:underline">
                      → Download Resources
                    </button>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-primary text-primary-foreground">
                <CardContent className="p-6">
                  <h3 className="text-primary-foreground mb-2">For Sales Inquiries</h3>
                  <p className="text-primary-foreground/90 mb-4">
                    Interested in our Enterprise plan? Contact our sales team for a personalized demo.
                  </p>
                  <Button variant="secondary" className="w-full">
                    Contact Sales Team
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-secondary/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="mb-4">Visit Our Headquarters</h2>
            <p className="text-muted-foreground">
              Come say hello at our main office in San Francisco
            </p>
          </div>
          <div className="bg-secondary rounded-lg h-96 flex items-center justify-center">
            <p className="text-muted-foreground">Map placeholder</p>
          </div>
        </div>
      </section>
    </div>
  );
}