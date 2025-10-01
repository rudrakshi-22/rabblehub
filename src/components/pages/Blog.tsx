import { Calendar, User, Clock, ArrowRight } from 'lucide-react';
import { Button } from '../ui/button';
import { Card, CardContent } from '../ui/card';
import { Badge } from '../ui/badge';
import { ImageWithFallback } from '../figma/ImageWithFallback';

export function Blog() {
  const featuredPost = {
    id: 1,
    title: '10 Essential Tips for Landing Your Dream Job in 2025',
    excerpt: 'Discover the strategies that successful job seekers are using to stand out in today\'s competitive job market.',
    author: 'Sarah Johnson',
    date: 'March 15, 2025',
    readTime: '8 min read',
    category: 'Career Advice',
    image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800',
  };

  const blogPosts = [
    {
      id: 2,
      title: 'The Rise of Remote Work: How to Succeed in a Virtual Environment',
      excerpt: 'Remote work is here to stay. Learn how to thrive in a distributed team and maintain work-life balance.',
      author: 'Michael Chen',
      date: 'March 12, 2025',
      readTime: '6 min read',
      category: 'Remote Work',
      image: 'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?w=800',
    },
    {
      id: 3,
      title: 'Resume Writing Guide: Stand Out from the Competition',
      excerpt: 'Your resume is your first impression. Make it count with these expert tips and examples.',
      author: 'Emily Rodriguez',
      date: 'March 10, 2025',
      readTime: '10 min read',
      category: 'Resume Tips',
      image: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=800',
    },
    {
      id: 4,
      title: 'Mastering the Job Interview: Questions and Best Practices',
      excerpt: 'Prepare for your next interview with our comprehensive guide to common questions and how to answer them.',
      author: 'David Kim',
      date: 'March 8, 2025',
      readTime: '12 min read',
      category: 'Interview Tips',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800',
    },
    {
      id: 5,
      title: 'Negotiating Your Salary: A Complete Guide',
      excerpt: 'Learn the art of salary negotiation and get paid what you\'re worth with confidence.',
      author: 'Sarah Johnson',
      date: 'March 5, 2025',
      readTime: '7 min read',
      category: 'Salary',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800',
    },
    {
      id: 6,
      title: 'Career Transition: How to Successfully Change Industries',
      excerpt: 'Thinking about switching careers? Here\'s how to make a smooth transition to a new industry.',
      author: 'Michael Chen',
      date: 'March 1, 2025',
      readTime: '9 min read',
      category: 'Career Change',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800',
    },
    {
      id: 7,
      title: 'Building Your Professional Network: LinkedIn Tips',
      excerpt: 'Your network is your net worth. Discover how to build meaningful professional relationships.',
      author: 'Emily Rodriguez',
      date: 'February 28, 2025',
      readTime: '5 min read',
      category: 'Networking',
      image: 'https://images.unsplash.com/photo-1591115765373-5207764f72e7?w=800',
    },
  ];

  const categories = [
    'All Posts',
    'Career Advice',
    'Remote Work',
    'Resume Tips',
    'Interview Tips',
    'Networking',
    'Salary',
  ];

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="bg-gradient-to-br from-primary to-primary/80 text-primary-foreground py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-primary-foreground mb-4">Career Insights & Advice</h1>
          <p className="text-primary-foreground/90 max-w-2xl mx-auto">
            Expert tips, industry trends, and career guidance to help you succeed in your professional journey
          </p>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-12 bg-secondary/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
              <div className="bg-secondary h-64 md:h-auto">
                <ImageWithFallback
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-8 flex flex-col justify-center">
                <Badge className="w-fit mb-4">{featuredPost.category}</Badge>
                <h2 className="mb-4">{featuredPost.title}</h2>
                <p className="text-muted-foreground mb-6">{featuredPost.excerpt}</p>
                <div className="flex items-center gap-4 mb-6 text-muted-foreground">
                  <div className="flex items-center">
                    <User size={16} className="mr-1" />
                    <span>{featuredPost.author}</span>
                  </div>
                  <div className="flex items-center">
                    <Calendar size={16} className="mr-1" />
                    <span>{featuredPost.date}</span>
                  </div>
                  <div className="flex items-center">
                    <Clock size={16} className="mr-1" />
                    <span>{featuredPost.readTime}</span>
                  </div>
                </div>
                <Button>
                  Read Full Article
                  <ArrowRight className="ml-2" size={16} />
                </Button>
              </CardContent>
            </div>
          </Card>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <Button
                key={category}
                variant={category === 'All Posts' ? 'default' : 'outline'}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.map((post) => (
              <Card key={post.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="bg-secondary h-48">
                  <ImageWithFallback
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <Badge variant="secondary" className="mb-3">
                    {post.category}
                  </Badge>
                  <h3 className="mb-3">{post.title}</h3>
                  <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                  <div className="flex flex-col gap-2 mb-4 text-muted-foreground">
                    <div className="flex items-center">
                      <User size={14} className="mr-1" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <Calendar size={14} className="mr-1" />
                        <span>{post.date}</span>
                      </div>
                      <div className="flex items-center">
                        <Clock size={14} className="mr-1" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                  </div>
                  <Button variant="outline" className="w-full">
                    Read More
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-12">
            <Button size="lg" variant="outline">
              Load More Articles
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-primary-foreground mb-4">Stay Updated</h2>
          <p className="mb-8 text-primary-foreground/90">
            Subscribe to our newsletter and get the latest career advice delivered to your inbox
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 rounded-lg text-foreground"
            />
            <Button variant="secondary">Subscribe</Button>
          </div>
        </div>
      </section>
    </div>
  );
}