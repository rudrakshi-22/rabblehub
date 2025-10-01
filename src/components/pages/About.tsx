import { Target, Eye, Award, Users } from 'lucide-react';
import { Card, CardContent } from '../ui/card';
import { ImageWithFallback } from '../figma/ImageWithFallback';

export function About() {
  const values = [
    {
      icon: Target,
      title: 'Our Mission',
      description: 'To connect talented professionals with companies that value their skills and foster their growth.',
    },
    {
      icon: Eye,
      title: 'Our Vision',
      description: 'To be the world\'s most trusted platform for career development and recruitment.',
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'We strive for excellence in everything we do, from our platform features to customer support.',
    },
    {
      icon: Users,
      title: 'Community',
      description: 'Building a supportive community where professionals and employers thrive together.',
    },
  ];

  const team = [
    {
      name: 'Sarah Johnson',
      role: 'CEO & Founder',
      bio: '15+ years in HR and recruitment technology',
    },
    {
      name: 'Michael Chen',
      role: 'CTO',
      bio: 'Former tech lead at major Silicon Valley companies',
    },
    {
      name: 'Emily Rodriguez',
      role: 'Head of Product',
      bio: 'Product expert with passion for user experience',
    },
    {
      name: 'David Kim',
      role: 'VP of Sales',
      bio: 'Building relationships with companies worldwide',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-primary/80 text-primary-foreground py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-primary-foreground mb-6">About RabbleHub</h1>
          <p className="text-primary-foreground/90">
            We're on a mission to transform how people find jobs and how companies discover talent. 
            Since 2015, we've helped over 200,000 professionals land their dream jobs.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="mb-6">Our Story</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  RabbleHub was founded in 2025 by a team of recruitment professionals who believed 
                  there had to be a better way to connect talent with opportunities. What started as 
                  a simple job board has evolved into a comprehensive career platform.
                </p>
                <p>
                  Today, we serve thousands of companies and hundreds of thousands of job seekers 
                  across the globe. Our platform combines cutting-edge technology with human expertise 
                  to create meaningful connections.
                </p>
                <p>
                  We believe that finding the right job shouldn't be a matter of luck. It should be 
                  a seamless process that empowers both candidates and employers to make informed decisions.
                </p>
              </div>
            </div>
            <div className="bg-secondary rounded-lg h-96 flex items-center justify-center">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800"
                alt="Team collaboration"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="mb-4">Our Values</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              These core values guide everything we do and shape our company culture
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value) => (
              <Card key={value.title}>
                <CardContent className="p-6 text-center">
                  <div className="flex justify-center mb-4">
                    <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center">
                      <value.icon className="text-primary-foreground" size={28} />
                    </div>
                  </div>
                  <h3 className="mb-2">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="mb-4">Meet Our Team</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Passionate professionals dedicated to helping you succeed
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member) => (
              <Card key={member.name} className="text-center">
                <CardContent className="p-6">
                  <div className="w-24 h-24 bg-secondary rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Users className="text-primary" size={40} />
                  </div>
                  <h3 className="mb-1">{member.name}</h3>
                  <p className="text-primary mb-2">{member.role}</p>
                  <p className="text-muted-foreground">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <h2 className="text-primary-foreground mb-2">10+</h2>
              <p className="text-primary-foreground/80">Years Experience</p>
            </div>
            <div className="text-center">
              <h2 className="text-primary-foreground mb-2">200K+</h2>
              <p className="text-primary-foreground/80">Happy Users</p>
            </div>
            <div className="text-center">
              <h2 className="text-primary-foreground mb-2">10K+</h2>
              <p className="text-primary-foreground/80">Partner Companies</p>
            </div>
            <div className="text-center">
              <h2 className="text-primary-foreground mb-2">50K+</h2>
              <p className="text-primary-foreground/80">Successful Hires</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}