import { SiX, SiInstagram, SiFacebook } from 'react-icons/si';
import { Heart } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const appIdentifier = typeof window !== 'undefined' ? window.location.hostname : 'pro2anc-earbuds';

  return (
    <footer className="border-t border-white/10 backdrop-blur-sm bg-black/20 py-8 mt-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-lg font-semibold text-white mb-3">Pro 2 ANC Wireless Earbuds</h3>
            <p className="text-sm text-muted-foreground">
              Premium audio experience with Active Noise Cancellation. Designed for music lovers across India.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white mb-3">Customer Support</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>7 Days Replacement Guarantee</li>
              <li>Free Shipping All Over India</li>
              <li>Secure UPI Payments</li>
              <li>Email: support@pro2anc.com</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white mb-3">Follow Us</h3>
            <div className="flex gap-4">
              <a href="#" className="text-muted-foreground hover:text-white transition-colors">
                <SiInstagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-white transition-colors">
                <SiFacebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-white transition-colors">
                <SiX className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
        <div className="pt-6 border-t border-white/10 text-center text-sm text-muted-foreground">
          <p>
            © {currentYear} Pro 2 ANC. All rights reserved. | Built with{' '}
            <Heart className="inline w-4 h-4 text-accent fill-accent" /> using{' '}
            <a
              href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(appIdentifier)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:underline"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
