import { useNavigate } from '@tanstack/react-router';
import { Button } from '@/components/ui/button';
import { ShoppingCart } from 'lucide-react';

export default function TopNav() {
  const navigate = useNavigate();

  return (
    <header className="border-b border-white/10 backdrop-blur-sm bg-black/20">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <button
          onClick={() => navigate({ to: '/' })}
          className="text-xl md:text-2xl font-bold text-white hover:text-accent transition-colors"
        >
          Pro 2 ANC
        </button>
        <Button
          onClick={() => navigate({ to: '/checkout' })}
          className="gap-2"
          size="sm"
        >
          <ShoppingCart className="w-4 h-4" />
          <span className="hidden sm:inline">Buy Now</span>
        </Button>
      </div>
    </header>
  );
}
