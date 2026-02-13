import { useParams } from '@tanstack/react-router';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle2, Package, Clock } from 'lucide-react';
import { useGetOrder } from '../hooks/useQueries';

export default function PaymentSubmittedPage() {
  const { orderId } = useParams({ from: '/order/$orderId/submitted' });
  const { data: order } = useGetOrder(orderId);

  return (
    <div className="py-12 md:py-16">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="text-center mb-8">
          <CheckCircle2 className="w-20 h-20 text-accent mx-auto mb-4" />
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">Payment Reference Received!</h1>
          <p className="text-lg text-muted-foreground">Thank you for your order</p>
        </div>

        <Card className="bg-card/50 backdrop-blur-sm border-white/10 mb-6">
          <CardContent className="p-8 space-y-6">
            <div className="text-center space-y-2">
              <p className="text-muted-foreground">Order ID</p>
              <p className="text-2xl font-bold text-white">{orderId}</p>
            </div>

            {order?.upiReference && (
              <div className="text-center space-y-2 pt-4 border-t border-white/10">
                <p className="text-muted-foreground">Payment Reference</p>
                <p className="text-xl font-semibold text-accent">{order.upiReference}</p>
              </div>
            )}
          </CardContent>
        </Card>

        <div className="space-y-4">
          <div className="flex gap-4 items-start">
            <Clock className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-semibold text-white mb-1">What happens next?</h3>
              <p className="text-muted-foreground">
                Our team will verify your payment within 24 hours. You'll receive a confirmation email once verified.
              </p>
            </div>
          </div>

          <div className="flex gap-4 items-start">
            <Package className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-semibold text-white mb-1">Shipping & Delivery</h3>
              <p className="text-muted-foreground">
                Once payment is confirmed, your order will be dispatched within 2-3 business days. Free shipping across India!
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8 p-6 bg-accent/5 rounded-lg border border-accent/20">
          <p className="text-sm text-muted-foreground text-center">
            Need help? Contact us at <span className="text-accent">support@pro2anc.com</span>
          </p>
        </div>
      </div>
    </div>
  );
}
