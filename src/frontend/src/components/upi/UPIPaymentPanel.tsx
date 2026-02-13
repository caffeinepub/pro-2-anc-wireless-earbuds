import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Smartphone } from 'lucide-react';
import { generateUPILink } from '../../lib/upi';

interface UPIPaymentPanelProps {
  amount: number;
  orderId: string;
}

export default function UPIPaymentPanel({ amount, orderId }: UPIPaymentPanelProps) {
  const upiLink = generateUPILink(amount, orderId);
  const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(upiLink)}`;

  return (
    <Card className="bg-card/50 backdrop-blur-sm border-white/10">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Smartphone className="w-5 h-5" />
          Pay with UPI
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="text-center space-y-4">
          <div className="bg-white p-6 rounded-xl inline-block">
            <img
              src={qrCodeUrl}
              alt="UPI Payment QR Code"
              width={200}
              height={200}
              className="w-[200px] h-[200px]"
            />
          </div>
          <p className="text-sm text-muted-foreground">Scan QR code with any UPI app</p>
        </div>

        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-white/10" />
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-card px-2 text-muted-foreground">Or</span>
          </div>
        </div>

        <Button
          asChild
          variant="outline"
          className="w-full"
          size="lg"
        >
          <a href={upiLink}>Open UPI App</a>
        </Button>

        <div className="text-xs text-muted-foreground text-center space-y-1">
          <p>Amount: ₹{amount}</p>
          <p>After payment, enter your UPI reference number below</p>
        </div>
      </CardContent>
    </Card>
  );
}
