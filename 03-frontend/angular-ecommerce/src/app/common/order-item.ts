import { CartItem } from "./cart-item";

export class OrderItem {

    imageUrl!: string;
    unitPrice!: number;
    quantity!: number;
    productid!: string;

    constructor(cartItem: CartItem) {
        this.imageUrl = cartItem.name;
        this.unitPrice = cartItem.unitPrice;
        this.quantity = cartItem.quantity;
        this.productid = cartItem.id;
    }


}
