import { useNavigate } from '@tanstack/react-router';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useRevealOnScroll } from '../../hooks/useRevealOnScroll';
import { PRODUCT_PRICE_INR } from '../../lib/pricing';

export default function OfferSection() {
  const navigate = useNavigate();
  const { ref, isVisible } = useRevealOnScroll();

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div
          ref={ref}
          className={`max-w-4xl mx-auto text-center space-y-8 transition-all duration-1000 ${
            isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}
        >
          <Badge variant="secondary" className="text-base px-6 py-2">
            🔥 Limited Time Offer
          </Badge>
          <h2 className="text-4xl md:text-6xl font-bold text-white">
            Get 50% Off Today
          </h2>
          <div className="flex items-center justify-center gap-6">
            <span className="text-3xl md:text-4xl text-muted-foreground line-through">₹2,999</span>
            <span className="text-6xl md:text-7xl font-bold text-accent">₹{PRODUCT_PRICE_INR}</span>
          </div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Don't miss out on this exclusive deal. Premium audio quality at an unbeatable price.
          </p>
          <Button
            size="lg"
            onClick={() => navigate({ to: '/checkout' })}
            className="text-lg px-12 py-6 shadow-xl shadow-accent/30 hover:shadow-accent/50 transition-all"
          >
            Claim Your Offer Now
          </Button>
        </div>
      </div>
    </section>
  );
}
