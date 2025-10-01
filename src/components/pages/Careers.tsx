import { useState } from 'react';
import { Search, MapPin, Briefcase, DollarSign, Clock, Filter } from 'lucide-react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Card, CardContent, CardHeader } from '../ui/card';
import { Badge } from '../ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';

export function Careers() {
  const [searchTerm, setSearchTerm] = useState('');
  const [location, setLocation] = useState('');

  const jobs = [
    {
      id: 1,
      title: 'Senior Frontend Developer',
      company: 'TechCorp Inc.',
      location: 'San Francisco, CA',
      type: 'Full-time',
      level: 'Senior',
      salary: '$120k - $160k',
      posted: '2 days ago',
      description: 'We are looking for an experienced frontend developer to join our growing team.',
    },
    {
      id: 2,
      title: 'UX/UI Designer',
      company: 'Design Studio',
      location: 'Remote',
      type: 'Full-time',
      level: 'Mid',
      salary: '$90k - $120k',
      posted: '1 day ago',
      description: 'Create beautiful and intuitive user experiences for our products.',
    },
    {
      id: 3,
      title: 'Product Manager',
      company: 'Innovation Labs',
      location: 'New York, NY',
      type: 'Full-time',
      level: 'Senior',
      salary: '$130k - $170k',
      posted: '3 days ago',
      description: 'Lead product strategy and execution for our flagship products.',
    },
    {
      id: 4,
      title: 'Backend Engineer',
      company: 'DataTech Solutions',
      location: 'Austin, TX',
      type: 'Full-time',
      level: 'Mid',
      salary: '$110k - $140k',
      posted: '4 days ago',
      description: 'Build scalable backend systems and APIs.',
    },
    {
      id: 5,
      title: 'Marketing Manager',
      company: 'Growth Co.',
      location: 'Remote',
      type: 'Full-time',
      level: 'Mid',
      salary: '$85k - $110k',
      posted: '5 days ago',
      description: 'Drive marketing strategy and lead generation efforts.',
    },
    {
      id: 6,
      title: 'Data Scientist',
      company: 'AI Innovations',
      location: 'Boston, MA',
      type: 'Full-time',
      level: 'Senior',
      salary: '$140k - $180k',
      posted: '1 week ago',
      description: 'Apply machine learning to solve complex business problems.',
    },
  ];

  return (
    <div className="min-h-screen bg-secondary/20">
      {/* Header */}
      <section className="bg-gradient-to-br from-primary to-primary/80 text-primary-foreground py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h1 className="text-primary-foreground mb-4">Find Your Next Opportunity</h1>
            <p className="text-primary-foreground/90">
              Browse through thousands of job openings from top companies
            </p>
          </div>

          {/* Search Bar */}
          <div className="bg-white rounded-lg p-2 flex flex-col md:flex-row gap-2 shadow-lg max-w-4xl mx-auto">
            <div className="flex-1 flex items-center px-3 border-r-0 md:border-r border-border">
              <Search className="text-muted-foreground mr-2" size={20} />
              <Input
                placeholder="Job title, keywords, or company"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="border-0 focus-visible:ring-0 focus-visible:ring-offset-0"
              />
            </div>
            <div className="flex-1 flex items-center px-3">
              <MapPin className="text-muted-foreground mr-2" size={20} />
              <Input
                placeholder="City, state, or remote"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="border-0 focus-visible:ring-0 focus-visible:ring-offset-0"
              />
            </div>
            <Button size="lg">Search</Button>
          </div>
        </div>
      </section>

      {/* Filters and Results */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Filters Sidebar */}
            <div className="lg:col-span-1">
              <Card>
                <CardHeader>
                  <div className="flex items-center">
                    <Filter className="mr-2" size={20} />
                    <h3>Filters</h3>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Job Type */}
                  <div>
                    <label className="mb-2 block">Job Type</label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="All types" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="full-time">Full-time</SelectItem>
                        <SelectItem value="part-time">Part-time</SelectItem>
                        <SelectItem value="contract">Contract</SelectItem>
                        <SelectItem value="internship">Internship</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Experience Level */}
                  <div>
                    <label className="mb-2 block">Experience Level</label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="All levels" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="entry">Entry Level</SelectItem>
                        <SelectItem value="mid">Mid Level</SelectItem>
                        <SelectItem value="senior">Senior Level</SelectItem>
                        <SelectItem value="lead">Lead/Principal</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Salary Range */}
                  <div>
                    <label className="mb-2 block">Salary Range</label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Any salary" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="0-50k">$0 - $50k</SelectItem>
                        <SelectItem value="50-100k">$50k - $100k</SelectItem>
                        <SelectItem value="100-150k">$100k - $150k</SelectItem>
                        <SelectItem value="150k+">$150k+</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <Button className="w-full" variant="outline">
                    Reset Filters
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Job Listings */}
            <div className="lg:col-span-3 space-y-4">
              <div className="flex justify-between items-center mb-6">
                <p className="text-muted-foreground">
                  Showing {jobs.length} jobs
                </p>
                <Select defaultValue="recent">
                  <SelectTrigger className="w-48">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="recent">Most Recent</SelectItem>
                    <SelectItem value="relevant">Most Relevant</SelectItem>
                    <SelectItem value="salary-high">Highest Salary</SelectItem>
                    <SelectItem value="salary-low">Lowest Salary</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {jobs.map((job) => (
                <Card key={job.id} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-start gap-4">
                          <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                            <Briefcase className="text-primary-foreground" size={24} />
                          </div>
                          <div className="flex-1">
                            <h3 className="mb-1">{job.title}</h3>
                            <p className="text-muted-foreground mb-3">{job.company}</p>
                            <p className="text-muted-foreground mb-4">{job.description}</p>
                            
                            <div className="flex flex-wrap gap-3 mb-3">
                              <div className="flex items-center text-muted-foreground">
                                <MapPin size={16} className="mr-1" />
                                <span>{job.location}</span>
                              </div>
                              <div className="flex items-center text-muted-foreground">
                                <DollarSign size={16} className="mr-1" />
                                <span>{job.salary}</span>
                              </div>
                              <div className="flex items-center text-muted-foreground">
                                <Clock size={16} className="mr-1" />
                                <span>{job.posted}</span>
                              </div>
                            </div>

                            <div className="flex gap-2">
                              <Badge variant="secondary">{job.type}</Badge>
                              <Badge variant="outline">{job.level}</Badge>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex md:flex-col gap-2">
                        <Button className="flex-1 md:flex-none">Apply Now</Button>
                        <Button variant="outline" className="flex-1 md:flex-none">
                          Save
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}

              {/* Pagination */}
              <div className="flex justify-center gap-2 mt-8">
                <Button variant="outline" disabled>Previous</Button>
                <Button variant="outline">1</Button>
                <Button variant="outline">2</Button>
                <Button variant="outline">3</Button>
                <Button variant="outline">Next</Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}