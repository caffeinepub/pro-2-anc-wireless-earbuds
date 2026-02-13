import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface Order {
    id: string;
    customerName: string;
    status: string;
    upiReference?: string;
    address: string;
    timestamp: Time;
    quantity: bigint;
    amount: bigint;
}
export type Time = bigint;
export interface backendInterface {
    createOrder(id: string, customerName: string, address: string, quantity: bigint, amount: bigint): Promise<Order>;
    getOrder(id: string): Promise<Order | null>;
    listOrders(): Promise<Array<Order>>;
    submitUPIReference(orderId: string, reference: string): Promise<void>;
}
