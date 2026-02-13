export const PRODUCT_NAME = 'Pro 2 ANC Wireless Earbuds';
export const PRODUCT_PRICE_INR = 1499;

export function calculateTotal(quantity: number): number {
  return PRODUCT_PRICE_INR * quantity;
}
