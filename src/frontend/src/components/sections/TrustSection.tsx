import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Shield, Truck } from 'lucide-react';
import { useRevealOnScroll } from '../../hooks/useRevealOnScroll';

const trustBadges = [
  {
    icon: Shield,
    title: '7 Days Replacement',
    description: 'Not satisfied? Get a hassle-free replacement within 7 days',
  },
  {
    icon: Truck,
    title: 'Free Shipping India',
    description: 'Enjoy free delivery to your doorstep anywhere in India',
  },
];

export default function TrustSection() {
  const { ref, isVisible } = useRevealOnScroll();

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div
          ref={ref}
          className={`text-center mb-12 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Shop with Confidence</h2>
          <p className="text-lg text-muted-foreground">Your satisfaction is our priority</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {trustBadges.map((badge, index) => (
            <TrustCard key={index} badge={badge} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function TrustCard({ badge, index }: { badge: typeof trustBadges[0]; index: number }) {
  const { ref, isVisible } = useRevealOnScroll();
  const Icon = badge.icon;

  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      <Card className="bg-card/50 backdrop-blur-sm border-white/10 hover:border-accent/50 transition-all">
        <CardContent className="p-8 text-center space-y-4">
          <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto">
            <Icon className="w-8 h-8 text-accent" />
          </div>
          <Badge variant="secondary" className="text-sm">
            {badge.title}
          </Badge>
          <p className="text-muted-foreground">{badge.description}</p>
        </CardContent>
      </Card>
    </div>
  );
}
