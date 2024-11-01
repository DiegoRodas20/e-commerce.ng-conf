import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBarComponent } from './shell/navbar/navbar.component';
import { CartViewComponent } from "./domains/cart/feature/cart-view/cart-view.component";

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [RouterOutlet, NavBarComponent, CartViewComponent],
    template: `
        <app-navbar></app-navbar>
        <main class="m-3">
            <router-outlet />
        </main>
    `
})
export class AppComponent {
    title = 'e-commerce.ng-conf';
}
