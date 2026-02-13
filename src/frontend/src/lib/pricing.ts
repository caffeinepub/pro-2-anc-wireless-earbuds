export const PRODUCT_NAME = 'Pro 2 ANC Wireless Earbuds';
export const PRODUCT_PRICE_INR = 1499;
export const HERO_IMAGE_SRC = '/assets/generated/product-hero.dim_1600x1200.png';

export function calculateTotal(quantity: number): number {
  return PRODUCT_PRICE_INR * quantity;
}
