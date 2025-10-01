import { Search, Briefcase, Users, TrendingUp, MapPin, DollarSign, Clock } from 'lucide-react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Card, CardContent, CardHeader } from '../ui/card';
import { Badge } from '../ui/badge';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { motion } from 'motion/react';

interface HomeProps {
  onNavigate: (page: string) => void;
}

export function Home({ onNavigate }: HomeProps) {
  const featuredJobs = [
    {
      id: 1,
      title: 'Senior Frontend Developer',
      company: 'TechCorp Inc.',
      location: 'San Francisco, CA',
      type: 'Full-time',
      salary: '$120k - $160k',
      posted: '2 days ago',
    },
    {
      id: 2,
      title: 'UX/UI Designer',
      company: 'Design Studio',
      location: 'Remote',
      type: 'Full-time',
      salary: '$90k - $120k',
      posted: '1 day ago',
    },
    {
      id: 3,
      title: 'Product Manager',
      company: 'Innovation Labs',
      location: 'New York, NY',
      type: 'Full-time',
      salary: '$130k - $170k',
      posted: '3 days ago',
    },
  ];

  const categories = [
    { name: 'Technology', count: 1234, icon: Briefcase },
    { name: 'Design', count: 567, icon: Briefcase },
    { name: 'Marketing', count: 890, icon: Briefcase },
    { name: 'Sales', count: 432, icon: Briefcase },
    { name: 'Finance', count: 321, icon: Briefcase },
    { name: 'Healthcare', count: 654, icon: Briefcase },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-primary/80 text-primary-foreground py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <motion.h1 
              style={{ fontSize: '80px' }}
              className="text-primary-foreground mb-6"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Find Your Dream Job Today
            </motion.h1>
            <motion.p 
              style={{ fontSize: '20px' }}
              className="mb-8 text-primary-foreground/90"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              Connect with thousands of employers and discover opportunities that match your skills and passion.
            </motion.p>

            {/* Search Bar */}
            <motion.div 
              className="bg-white rounded-lg p-2 flex flex-col md:flex-row gap-2 shadow-lg"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="flex-1 flex items-center px-3 border-r-0 md:border-r border-border">
                <Search className="text-muted-foreground mr-2" size={20} />
                <Input
                  placeholder="Job title or keyword"
                  className="border-0 focus-visible:ring-0 focus-visible:ring-offset-0"
                />
              </div>
              <div className="flex-1 flex items-center px-3">
                <MapPin className="text-muted-foreground mr-2" size={20} />
                <Input
                  placeholder="Location"
                  className="border-0 focus-visible:ring-0 focus-visible:ring-offset-0"
                />
              </div>
              <Button size="lg">Search Jobs</Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex justify-center mb-3">
                <Briefcase className="text-primary" size={40} />
              </div>
              <h2 className="text-primary">50,000+</h2>
              <p className="text-muted-foreground">Active Jobs</p>
            </motion.div>
            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="flex justify-center mb-3">
                <Users className="text-primary" size={40} />
              </div>
              <h2 className="text-primary">200,000+</h2>
              <p className="text-muted-foreground">Registered Users</p>
            </motion.div>
            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="flex justify-center mb-3">
                <TrendingUp className="text-primary" size={40} />
              </div>
              <h2 className="text-primary">10,000+</h2>
              <p className="text-muted-foreground">Companies</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Jobs */}
      <section className="py-16 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="mb-4">Featured Jobs</h2>
            <p className="text-muted-foreground">
              Explore our handpicked selection of top job opportunities
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {featuredJobs.map((job) => (
              <Card key={job.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-4">
                      <Briefcase className="text-primary-foreground" size={24} />
                    </div>
                    <Badge variant="secondary">{job.type}</Badge>
                  </div>
                  <h3>{job.title}</h3>
                  <p className="text-muted-foreground">{job.company}</p>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center text-muted-foreground">
                    <MapPin size={16} className="mr-2" />
                    <span>{job.location}</span>
                  </div>
                  <div className="flex items-center text-muted-foreground">
                    <DollarSign size={16} className="mr-2" />
                    <span>{job.salary}</span>
                  </div>
                  <div className="flex items-center text-muted-foreground">
                    <Clock size={16} className="mr-2" />
                    <span>{job.posted}</span>
                  </div>
                  <Button className="w-full mt-4">Apply Now</Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => onNavigate('careers')}
            >
              View All Jobs
            </Button>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="mb-4">Browse by Category</h2>
            <p className="text-muted-foreground">
              Find opportunities in your field of expertise
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {categories.map((category) => (
              <Card 
                key={category.name}
                className="hover:shadow-lg transition-shadow cursor-pointer"
              >
                <CardContent className="p-6 text-center">
                  <div className="flex justify-center mb-3">
                    <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center">
                      <category.icon className="text-primary" size={24} />
                    </div>
                  </div>
                  <h4>{category.name}</h4>
                  <p className="text-muted-foreground">{category.count} jobs</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="mb-4">How It Works</h2>
            <p className="text-muted-foreground">
              Get hired in three easy steps
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div 
              className="text-center"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4">
                <span>1</span>
              </div>
              <h3 className="mb-2">Create Account</h3>
              <p className="text-muted-foreground">
                Sign up and create your professional profile in minutes
              </p>
            </motion.div>
            <motion.div 
              className="text-center"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4">
                <span>2</span>
              </div>
              <h3 className="mb-2">Search & Apply</h3>
              <p className="text-muted-foreground">
                Browse thousands of jobs and apply with one click
              </p>
            </motion.div>
            <motion.div 
              className="text-center"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4">
                <span>3</span>
              </div>
              <h3 className="mb-2">Get Hired</h3>
              <p className="text-muted-foreground">
                Connect with employers and land your dream job
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-primary-foreground mb-4">
            Ready to Take the Next Step?
          </h2>
          <p className="mb-8 text-primary-foreground/90">
            Join thousands of professionals who found their dream job through RabbleHub
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary">
              Create Free Account
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
              onClick={() => onNavigate('contact')}
            >
              Contact Sales
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}