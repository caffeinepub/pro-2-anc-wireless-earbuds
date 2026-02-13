import { useParams } from '@tanstack/react-router';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { CheckCircle2, Clock } from 'lucide-react';
import { useGetOrder } from '../hooks/useQueries';
import UPIPaymentPanel from '../components/upi/UPIPaymentPanel';
import UPIReferenceForm from '../components/orders/UPIReferenceForm';

export default function OrderConfirmationPage() {
  const { orderId } = useParams({ from: '/order/$orderId' });
  const { data: order, isLoading } = useGetOrder(orderId);

  if (isLoading) {
    return (
      <div className="py-16 text-center">
        <p className="text-muted-foreground">Loading order details...</p>
      </div>
    );
  }

  if (!order) {
    return (
      <div className="py-16 text-center">
        <p className="text-destructive">Order not found</p>
      </div>
    );
  }

  const hasReference = !!order.upiReference;

  return (
    <div className="py-12 md:py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-8">
          <CheckCircle2 className="w-16 h-16 text-accent mx-auto mb-4" />
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">Order Confirmed</h1>
          <p className="text-muted-foreground">Order ID: {order.id}</p>
        </div>

        <div className="space-y-6">
          <Card className="bg-card/50 backdrop-blur-sm border-white/10">
            <CardHeader>
              <CardTitle>Order Details</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Customer Name</span>
                <span className="text-white font-medium">{order.customerName}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Quantity</span>
                <span className="text-white font-medium">{Number(order.quantity)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Total Amount</span>
                <span className="text-white font-bold text-xl">₹{Number(order.amount)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Shipping Address</span>
                <span className="text-white text-right max-w-xs">{order.address}</span>
              </div>
            </CardContent>
          </Card>

          {!hasReference && (
            <>
              <Alert className="bg-accent/10 border-accent/30">
                <Clock className="h-4 w-4 text-accent" />
                <AlertDescription className="text-accent-foreground">
                  Complete your payment using UPI to confirm your order
                </AlertDescription>
              </Alert>

              <UPIPaymentPanel amount={Number(order.amount)} orderId={order.id} />

              <UPIReferenceForm orderId={order.id} />
            </>
          )}

          {hasReference && (
            <Alert className="bg-accent/10 border-accent/30">
              <CheckCircle2 className="h-4 w-4 text-accent" />
              <AlertDescription className="text-accent-foreground">
                Payment reference received: {order.upiReference}
              </AlertDescription>
            </Alert>
          )}
        </div>
      </div>
    </div>
  );
}
