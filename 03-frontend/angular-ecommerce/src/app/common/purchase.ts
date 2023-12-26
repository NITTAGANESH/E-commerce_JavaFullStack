import { Address } from "./address";
import { Customer } from "./customer";
import { Order } from "./order";
import { OrderItem } from "./order-item";

export class Purchase {
    public customer!: Customer;
    public order!: Order;
    public orderItems!: OrderItem[];
    public shippingAddress!: Address;
    public billingAddress!: Address;

}

