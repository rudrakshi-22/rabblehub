import { Check } from 'lucide-react';
import { Button } from '../ui/button';
import { Card, CardContent, CardHeader } from '../ui/card';
import { Badge } from '../ui/badge';

export function Pricing() {
  const plans = [
    {
      name: 'Free',
      price: '$0',
      period: 'forever',
      description: 'Perfect for job seekers starting their search',
      badge: null,
      features: [
        'Browse all job listings',
        'Apply to unlimited jobs',
        'Create basic profile',
        'Email job alerts',
        'Access to career resources',
        'Basic resume builder',
      ],
      cta: 'Get Started Free',
      variant: 'outline' as const,
    },
    {
      name: 'Premium',
      price: '$29',
      period: 'per month',
      description: 'For serious job seekers who want an edge',
      badge: 'Most Popular',
      features: [
        'Everything in Free',
        'Featured profile visibility',
        'Advanced resume builder',
        'Priority application status',
        'Direct messaging with recruiters',
        'Career coaching sessions',
        'Interview preparation tools',
        'Salary negotiation guidance',
      ],
      cta: 'Start Free Trial',
      variant: 'default' as const,
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: 'contact sales',
      description: 'For companies looking to hire top talent',
      badge: null,
      features: [
        'Unlimited job postings',
        'Access to entire candidate database',
        'Advanced candidate filtering',
        'Dedicated account manager',
        'Custom branding',
        'API access',
        'Analytics and reporting',
        'Bulk hiring tools',
        'Team collaboration features',
      ],
      cta: 'Contact Sales',
      variant: 'outline' as const,
    },
  ];

  const comparisonFeatures = [
    {
      category: 'Job Search',
      features: [
        { name: 'Browse Jobs', free: true, premium: true, enterprise: true },
        { name: 'Apply to Jobs', free: true, premium: true, enterprise: true },
        { name: 'Job Alerts', free: true, premium: true, enterprise: true },
        { name: 'Priority Support', free: false, premium: true, enterprise: true },
        { name: 'Featured Applications', free: false, premium: true, enterprise: true },
      ],
    },
    {
      category: 'Profile & Resume',
      features: [
        { name: 'Basic Profile', free: true, premium: true, enterprise: true },
        { name: 'Enhanced Profile Visibility', free: false, premium: true, enterprise: true },
        { name: 'Resume Builder', free: true, premium: true, enterprise: true },
        { name: 'Advanced Resume Templates', free: false, premium: true, enterprise: true },
        { name: 'Profile Analytics', free: false, premium: true, enterprise: true },
      ],
    },
    {
      category: 'Career Tools',
      features: [
        { name: 'Career Resources', free: true, premium: true, enterprise: true },
        { name: 'Interview Prep', free: false, premium: true, enterprise: true },
        { name: 'Career Coaching', free: false, premium: true, enterprise: true },
        { name: 'Salary Insights', free: false, premium: true, enterprise: true },
      ],
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="bg-gradient-to-br from-primary to-primary/80 text-primary-foreground py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-primary-foreground mb-4">Simple, Transparent Pricing</h1>
          <p className="text-primary-foreground/90">
            Choose the plan that's right for you. No hidden fees, cancel anytime.
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan) => (
              <Card
                key={plan.name}
                className={`relative ${
                  plan.badge ? 'border-primary shadow-lg scale-105' : ''
                }`}
              >
                {plan.badge && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="px-4 py-1">{plan.badge}</Badge>
                  </div>
                )}
                <CardHeader className="text-center pb-8 pt-8">
                  <h3 className="mb-2">{plan.name}</h3>
                  <div className="mb-2">
                    <span className="text-primary">{plan.price}</span>
                    {plan.period && (
                      <span className="text-muted-foreground"> / {plan.period}</span>
                    )}
                  </div>
                  <p className="text-muted-foreground">{plan.description}</p>
                </CardHeader>
                <CardContent>
                  <Button
                    variant={plan.variant}
                    className="w-full mb-6"
                    size="lg"
                  >
                    {plan.cta}
                  </Button>
                  <ul className="space-y-3">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start">
                        <Check
                          className="text-primary mr-2 flex-shrink-0 mt-0.5"
                          size={20}
                        />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-16 bg-secondary/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="mb-4">Compare Plans</h2>
            <p className="text-muted-foreground">
              Detailed comparison of all features across plans
            </p>
          </div>

          <Card>
            <CardContent className="p-0">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="border-b border-border">
                    <tr>
                      <th className="text-left p-4">Features</th>
                      <th className="text-center p-4">Free</th>
                      <th className="text-center p-4">Premium</th>
                      <th className="text-center p-4">Enterprise</th>
                    </tr>
                  </thead>
                  <tbody>
                    {comparisonFeatures.map((category, categoryIndex) => (
                      <>
                        <tr key={category.category} className="bg-secondary/30">
                          <td colSpan={4} className="p-4">
                            <strong>{category.category}</strong>
                          </td>
                        </tr>
                        {category.features.map((feature, featureIndex) => (
                          <tr
                            key={`${categoryIndex}-${featureIndex}`}
                            className="border-b border-border last:border-0"
                          >
                            <td className="p-4">{feature.name}</td>
                            <td className="text-center p-4">
                              {feature.free ? (
                                <Check className="inline text-primary" size={20} />
                              ) : (
                                <span className="text-muted-foreground">-</span>
                              )}
                            </td>
                            <td className="text-center p-4">
                              {feature.premium ? (
                                <Check className="inline text-primary" size={20} />
                              ) : (
                                <span className="text-muted-foreground">-</span>
                              )}
                            </td>
                            <td className="text-center p-4">
                              {feature.enterprise ? (
                                <Check className="inline text-primary" size={20} />
                              ) : (
                                <span className="text-muted-foreground">-</span>
                              )}
                            </td>
                          </tr>
                        ))}
                      </>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="mb-4">Frequently Asked Questions</h2>
          </div>

          <div className="space-y-6">
            <Card>
              <CardContent className="p-6">
                <h4 className="mb-2">Can I switch plans later?</h4>
                <p className="text-muted-foreground">
                  Yes! You can upgrade or downgrade your plan at any time. Changes will be reflected in your next billing cycle.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h4 className="mb-2">Is there a free trial for Premium?</h4>
                <p className="text-muted-foreground">
                  Yes, we offer a 14-day free trial for the Premium plan. No credit card required.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h4 className="mb-2">What payment methods do you accept?</h4>
                <p className="text-muted-foreground">
                  We accept all major credit cards, PayPal, and bank transfers for Enterprise plans.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h4 className="mb-2">Do you offer refunds?</h4>
                <p className="text-muted-foreground">
                  Yes, we offer a 30-day money-back guarantee if you're not satisfied with our Premium plan.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-primary-foreground mb-4">Ready to Get Started?</h2>
          <p className="mb-8 text-primary-foreground/90">
            Join thousands of professionals who found their dream job with RabbleHub
          </p>
          <Button size="lg" variant="secondary">
            Start Your Free Trial
          </Button>
        </div>
      </section>
    </div>
  );
}