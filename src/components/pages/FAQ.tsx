import { Search } from 'lucide-react';
import { Input } from '../ui/input';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../ui/accordion';
import { Card, CardContent } from '../ui/card';
import { Button } from '../ui/button';

interface FAQProps {
  onNavigate: (page: string) => void;
}

export function FAQ({ onNavigate }: FAQProps) {
  const faqCategories = [
    {
      category: 'For Job Seekers',
      questions: [
        {
          question: 'How do I create an account?',
          answer: 'Creating an account is easy! Click on the "Sign Up" button in the top right corner, fill in your basic information, and verify your email. You can then complete your profile with your work experience, education, and skills.',
        },
        {
          question: 'How do I apply for a job?',
          answer: 'Once you find a job you\'re interested in, click on the job listing to view details. Then click the "Apply Now" button. You\'ll be able to submit your resume and cover letter. Some positions may require you to answer additional questions.',
        },
        {
          question: 'Can I edit my application after submitting?',
          answer: 'Unfortunately, once an application is submitted, it cannot be edited. However, you can update your profile and resume at any time, which will be used for future applications.',
        },
        {
          question: 'How do I know if my application was received?',
          answer: 'You\'ll receive an email confirmation as soon as your application is submitted. You can also check the status of all your applications in your account dashboard under "My Applications".',
        },
        {
          question: 'How can I set up job alerts?',
          answer: 'Job alerts can be set up from your account dashboard. Click on "Job Alerts" and specify your preferences including job title, location, and salary range. You\'ll receive email notifications when matching jobs are posted.',
        },
      ],
    },
    {
      category: 'For Employers',
      questions: [
        {
          question: 'How do I post a job?',
          answer: 'To post a job, create an employer account and click on "Post a Job" from your dashboard. Fill in the job details including title, description, requirements, and salary range. You can preview your listing before publishing.',
        },
        {
          question: 'How long does a job posting stay active?',
          answer: 'Standard job postings remain active for 30 days. You can extend or renew your posting at any time before it expires. Premium plans offer longer posting durations and featured placement.',
        },
        {
          question: 'Can I edit a job posting after it\'s published?',
          answer: 'Yes! You can edit your job posting at any time from your employer dashboard. Changes are reflected immediately, and applicants are notified if there are significant updates.',
        },
        {
          question: 'How do I review applications?',
          answer: 'All applications for your job postings can be viewed in your employer dashboard. You can filter, sort, and search through candidates. Our system also provides matching scores based on job requirements.',
        },
        {
          question: 'What payment methods do you accept?',
          answer: 'We accept all major credit cards (Visa, Mastercard, American Express), PayPal, and bank transfers for Enterprise plans. All payments are processed securely through our payment partners.',
        },
      ],
    },
    {
      category: 'Account & Billing',
      questions: [
        {
          question: 'Is RabbleHub free to use?',
          answer: 'Yes! Job seekers can use RabbleHub completely free. For employers, we offer a free trial and various paid plans depending on your hiring needs. Check our Pricing page for more details.',
        },
        {
          question: 'How do I upgrade my account?',
          answer: 'You can upgrade your account at any time from your account settings. Go to "Billing & Plans" and choose the plan that best fits your needs. The upgrade takes effect immediately.',
        },
        {
          question: 'Can I cancel my subscription?',
          answer: 'Yes, you can cancel your subscription at any time from your account settings. You\'ll continue to have access to premium features until the end of your billing period. No refunds are provided for partial months.',
        },
        {
          question: 'Do you offer refunds?',
          answer: 'We offer a 30-day money-back guarantee for Premium subscriptions. If you\'re not satisfied within the first 30 days, contact our support team for a full refund. This policy doesn\'t apply to job posting purchases.',
        },
        {
          question: 'How do I delete my account?',
          answer: 'You can delete your account from Account Settings > Privacy > Delete Account. Please note that this action is permanent and cannot be undone. All your data will be permanently removed from our system.',
        },
      ],
    },
    {
      category: 'Privacy & Security',
      questions: [
        {
          question: 'How is my personal information protected?',
          answer: 'We take your privacy seriously. All data is encrypted in transit and at rest. We never sell your personal information to third parties. Read our Privacy Policy for complete details on how we handle your data.',
        },
        {
          question: 'Who can see my profile?',
          answer: 'By default, your profile is visible to registered employers. You can adjust your privacy settings to make your profile private or only visible to specific companies. Your contact information is never shown publicly.',
        },
        {
          question: 'Can I hide my profile from my current employer?',
          answer: 'Yes! Premium users can block specific companies from viewing their profile. This is useful if you want to keep your job search confidential from your current employer.',
        },
        {
          question: 'How do I report suspicious activity?',
          answer: 'If you encounter any suspicious job postings, scams, or inappropriate behavior, please report it immediately using the "Report" button or contact our support team at support@rabblehub.com.',
        },
      ],
    },
    {
      category: 'Technical Support',
      questions: [
        {
          question: 'What browsers are supported?',
          answer: 'JobPortal works best on the latest versions of Chrome, Firefox, Safari, and Edge. We recommend keeping your browser up to date for the best experience.',
        },
        {
          question: 'I\'m having trouble uploading my resume. What should I do?',
          answer: 'We accept PDF, DOC, and DOCX files up to 5MB. Make sure your file meets these requirements. If you\'re still having issues, try using a different browser or contact our support team.',
        },
        {
          question: 'Is there a mobile app?',
          answer: 'Yes! RabbleHub is available on both iOS and Android. Download the app from the App Store or Google Play. You can also access our fully responsive website from any mobile browser.',
        },
        {
          question: 'How do I reset my password?',
          answer: 'Click on "Forgot Password" on the login page. Enter your email address and we\'ll send you a link to reset your password. The link is valid for 24 hours.',
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="bg-gradient-to-br from-primary to-primary/80 text-primary-foreground py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-primary-foreground mb-4">Frequently Asked Questions</h1>
          <p className="text-primary-foreground/90 mb-8">
            Find answers to common questions about RabbleHub
          </p>

          {/* Search Bar */}
          <div className="bg-white rounded-lg p-2 flex items-center shadow-lg max-w-2xl mx-auto">
            <Search className="text-muted-foreground ml-3 mr-2" size={20} />
            <Input
              placeholder="Search for answers..."
              className="border-0 focus-visible:ring-0 focus-visible:ring-offset-0"
            />
          </div>
        </div>
      </section>

      {/* FAQ Categories */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {faqCategories.map((category, categoryIndex) => (
              <div key={category.category}>
                <h2 className="mb-6">{category.category}</h2>
                <Accordion type="single" collapsible className="space-y-4">
                  {category.questions.map((faq, faqIndex) => (
                    <AccordionItem
                      key={`${categoryIndex}-${faqIndex}`}
                      value={`${categoryIndex}-${faqIndex}`}
                      className="border border-border rounded-lg px-6"
                    >
                      <AccordionTrigger className="hover:no-underline">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-16 bg-secondary/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="mb-4">Need More Help?</h2>
            <p className="text-muted-foreground">
              Explore our additional resources
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="text-center">
              <CardContent className="p-6">
                <h3 className="mb-2">Contact Support</h3>
                <p className="text-muted-foreground mb-4">
                  Get help from our support team
                </p>
                <Button 
                  variant="outline" 
                  className="w-full"
                  onClick={() => onNavigate('contact')}
                >
                  Contact Us
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <h3 className="mb-2">Career Resources</h3>
                <p className="text-muted-foreground mb-4">
                  Tips and advice for job seekers
                </p>
                <Button 
                  variant="outline" 
                  className="w-full"
                  onClick={() => onNavigate('blog')}
                >
                  Visit Blog
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <h3 className="mb-2">Pricing Plans</h3>
                <p className="text-muted-foreground mb-4">
                  Learn about our pricing options
                </p>
                <Button 
                  variant="outline" 
                  className="w-full"
                  onClick={() => onNavigate('pricing')}
                >
                  View Pricing
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Still Have Questions CTA */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-primary-foreground mb-4">Still Have Questions?</h2>
          <p className="mb-8 text-primary-foreground/90">
            Our support team is here to help. Send us a message and we'll get back to you within 24 hours.
          </p>
          <Button 
            size="lg" 
            variant="secondary"
            onClick={() => onNavigate('contact')}
          >
            Get in Touch
          </Button>
        </div>
      </section>
    </div>
  );
}