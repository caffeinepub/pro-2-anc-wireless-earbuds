import { useState } from 'react';
import { useNavigate } from '@tanstack/react-router';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { useSubmitUPIReference } from '../../hooks/useQueries';

interface UPIReferenceFormProps {
  orderId: string;
}

export default function UPIReferenceForm({ orderId }: UPIReferenceFormProps) {
  const navigate = useNavigate();
  const submitReferenceMutation = useSubmitUPIReference();
  const [reference, setReference] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!reference.trim()) {
      setError('Please enter your UPI reference number');
      return;
    }

    if (reference.trim().length < 6) {
      setError('Please enter a valid reference number');
      return;
    }

    try {
      await submitReferenceMutation.mutateAsync({ orderId, reference: reference.trim() });
      navigate({ to: '/order/$orderId/submitted', params: { orderId } });
    } catch (err) {
      setError('Failed to submit reference. Please try again.');
    }
  };

  return (
    <Card className="bg-card/50 backdrop-blur-sm border-white/10">
      <CardHeader>
        <CardTitle>Submit Payment Reference</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="reference">UPI Transaction ID / Reference Number</Label>
            <Input
              id="reference"
              value={reference}
              onChange={(e) => {
                setReference(e.target.value);
                setError('');
              }}
              placeholder="Enter 12-digit UTR or reference number"
              className={error ? 'border-destructive' : ''}
            />
            {error && <p className="text-sm text-destructive mt-1">{error}</p>}
            <p className="text-xs text-muted-foreground mt-2">
              Find this in your UPI app's transaction history. Your order will be verified manually within 24 hours.
            </p>
          </div>
          <Button
            type="submit"
            className="w-full"
            disabled={submitReferenceMutation.isPending}
          >
            {submitReferenceMutation.isPending ? 'Submitting...' : 'Submit Reference'}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
