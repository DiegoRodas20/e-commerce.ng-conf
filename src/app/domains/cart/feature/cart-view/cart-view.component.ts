import { CommonModule } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { ButtonModule } from "primeng/button";
import { InputNumberModule } from "primeng/inputnumber";
import { Cart } from "../../data/cart";
import { CartService } from "../../data/cart.service";

@Component({
    selector: 'app-cart-view',
    standalone: true,
    imports: [
        CommonModule,
        FormsModule,
        InputNumberModule,
        ButtonModule
    ],
    templateUrl: './cart-view.component.html',
    styleUrl: './cart-view.component.css'
})
export class CartViewComponent implements OnInit {

    cartItems: Cart[] = [];

    constructor(
        private _cartService: CartService,
    ) { }

    ngOnInit() {
        this.cartItems = this._cartService['cartItems'];
    }

    increaseQuantity(item: Cart) {
        item.quantity++;
    }

    decreaseQuantity(item: Cart) {
        if (item.quantity > 1) {
            item.quantity--;
        }
    }

    calculateTotal(): number {
        return this.cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);
    }

    trackById(index: number, item: Cart): number {
        return item.productId;
    }

    cartConfirmed() {
        
        this._cartService.cartConfirmed()
    }
}
