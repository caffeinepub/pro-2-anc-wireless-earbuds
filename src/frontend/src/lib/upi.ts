import { UPI_CONFIG } from '../config/upi';

export function generateUPILink(amount: number, orderId: string): string {
  const params = new URLSearchParams({
    pa: UPI_CONFIG.vpa,
    pn: UPI_CONFIG.payeeName,
    am: amount.toString(),
    cu: 'INR',
    tn: `${UPI_CONFIG.transactionNote} ${orderId}`,
  });

  return `upi://pay?${params.toString()}`;
}
