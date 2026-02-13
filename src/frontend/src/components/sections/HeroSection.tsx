import { useNavigate } from '@tanstack/react-router';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useRevealOnScroll } from '../../hooks/useRevealOnScroll';
import { useTilt } from '../../hooks/useTilt';
import { PRODUCT_NAME, PRODUCT_PRICE_INR } from '../../lib/pricing';

export default function HeroSection() {
  const navigate = useNavigate();
  const { ref: contentRef, isVisible: contentVisible } = useRevealOnScroll();
  const { ref: imageRef, style: tiltStyle } = useTilt();

  return (
    <section className="relative py-12 md:py-20 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div
            ref={contentRef}
            className={`space-y-6 transition-all duration-1000 ${
              contentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <Badge variant="secondary" className="text-sm px-4 py-1">
              Limited Time Offer
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
              {PRODUCT_NAME}
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              Experience premium sound with Active Noise Cancellation. Deep bass, 30-hour battery, and seamless touch controls.
            </p>
            <div className="flex items-baseline gap-3">
              <span className="text-5xl md:text-6xl font-bold text-accent">₹{PRODUCT_PRICE_INR}</span>
              <span className="text-2xl text-muted-foreground line-through">₹2,999</span>
            </div>
            <Button
              size="lg"
              onClick={() => navigate({ to: '/checkout' })}
              className="text-lg px-8 py-6 shadow-lg shadow-accent/20 hover:shadow-accent/40 transition-all"
            >
              Buy Now
            </Button>
          </div>
          <div
            ref={imageRef}
            style={tiltStyle}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/20 via-transparent to-accent/10 blur-3xl" />
              <img
                src="/assets/generated/product-hero.dim_1600x1200.png"
                alt={PRODUCT_NAME}
                className="relative w-full h-auto drop-shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
