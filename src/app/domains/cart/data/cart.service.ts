import { Injectable } from "@angular/core";
import { EventBusService } from "../../shared/util/event-bus.service";
import { ProductAddedToCart } from "../../shared/util/product-added-to-cart";
import { Cart } from "./cart";
// import { Product } from "../../catalog/data/product";

@Injectable({
    providedIn: 'root'
})
export class CartService {

    private cartItems: Cart[] = [];

    constructor(
        private _eventBus: EventBusService
    ) {
        this.listenProductAddedToCart()
    }

    private listenProductAddedToCart() {

        this._eventBus.onEvent('ProductAddedToCart', (payload: unknown) => {
            this.addProductToCart(payload as ProductAddedToCart);
        });
    }

    private addProductToCart(product: ProductAddedToCart) {

        const existingItem = this.cartItems.find(item => item.productId === product.productId);

        if (existingItem) {
            existingItem.quantity = (existingItem.quantity || 0) + 1;
        } else {
            this.cartItems.push({
                productId: product.productId,
                name: product.name,
                price: product.price,
                quantity: 1
            });
        }
    }
}