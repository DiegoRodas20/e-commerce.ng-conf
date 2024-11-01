import { Component, OnInit } from "@angular/core";
import { CartService } from "../../data/cart.service";
import { CommonModule } from "@angular/common";

@Component({
    selector: 'app-cart-view',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './cart-view.component.html',
    styleUrl: './cart-view.component.css'
})
export class CartViewComponent implements OnInit {

    cartItems: { productId: number; quantity: number }[] = [];

    constructor(
        private _cartService: CartService
    ) { }

    ngOnInit() {
        this.cartItems = this._cartService['cartItems'];
    }
}
