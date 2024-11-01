import { Injectable } from "@angular/core";
import { EventBusService } from "../../shared/util/event-bus.service";
import { Product } from "../../catalog/domain/product";

@Injectable({
    providedIn: 'root'
})
export class CartService {

    private cartItems: { productId: number; quantity: number }[] = [];

    constructor(
        private eventBus: EventBusService
    ) {
        this.eventBus.onEvent('ProductSelected', (payload) => {
            this.addProductToCart(payload.productId);
        });
    }

    private addProductToCart(product: Product) {

        const existingItem = this.cartItems.find(item => item.productId === product.id);

        if (existingItem) {
            existingItem.quantity = (existingItem.quantity || 0) + 1;
        } else {
            // this.cartItems.push({ ...product, quantity: 1 });
        }
    }
}