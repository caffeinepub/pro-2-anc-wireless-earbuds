import { Card, CardContent } from '@/components/ui/card';
import { Volume2, Battery, Smartphone, Headphones, Zap } from 'lucide-react';
import { useRevealOnScroll } from '../../hooks/useRevealOnScroll';

const features = [
  {
    icon: Headphones,
    title: 'Active Noise Cancellation',
    description: 'Block out the world and immerse yourself in pure sound',
  },
  {
    icon: Volume2,
    title: 'Deep Bass Sound',
    description: 'Feel every beat with powerful, rich bass',
  },
  {
    icon: Battery,
    title: '30 Hours Battery Backup',
    description: 'All-day listening without interruption',
  },
  {
    icon: Zap,
    title: 'Touch Control',
    description: 'Intuitive controls at your fingertips',
  },
  {
    icon: Smartphone,
    title: 'Universal Compatibility',
    description: 'Works seamlessly with iPhone and Android',
  },
];

export default function FeaturesSection() {
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
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Premium Features</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Engineered for excellence, designed for your lifestyle
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <FeatureCard key={index} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FeatureCard({ feature, index }: { feature: typeof features[0]; index: number }) {
  const { ref, isVisible } = useRevealOnScroll();
  const Icon = feature.icon;

  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <Card className="h-full bg-card/50 backdrop-blur-sm border-white/10 hover:border-accent/50 transition-all hover:shadow-lg hover:shadow-accent/10">
        <CardContent className="p-6 space-y-4">
          <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
            <Icon className="w-6 h-6 text-accent" />
          </div>
          <h3 className="text-xl font-semibold text-white">{feature.title}</h3>
          <p className="text-muted-foreground">{feature.description}</p>
        </CardContent>
      </Card>
    </div>
  );
}
