import { Injectable } from "@angular/core";
import { EventBusService } from "../../shared/util/event-bus.service";
// import { Product } from "../../catalog/data/product";

@Injectable({
    providedIn: 'root'
})
export class CartService {

    private cartItems: { productId: number; quantity: number }[] = [];

    constructor(
        private eventBus: EventBusService
    ) {
        this.eventBus.onEvent('ProductSelected', (payload: unknown) => {
            this.addProductToCart(payload);
        });
    }

    private addProductToCart(product: unknown) {

        const existingItem = this.cartItems.find(item => item.productId === product);

        if (existingItem) {
            existingItem.quantity = (existingItem.quantity || 0) + 1;
        } else {
            // this.cartItems.push({ ...product, quantity: 1 });
        }
    }
}