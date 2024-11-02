import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ToastModule } from 'primeng/toast';
import { CartViewComponent } from "./domains/cart/feature/cart-view/cart-view.component";
import { NavBarComponent } from './shell/navbar/navbar.component';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [
        RouterOutlet,
        NavBarComponent,
        CartViewComponent,
        ToastModule
    ],
    template: `
        <p-toast />
        <app-navbar></app-navbar>
        <main class="m-3">
            <router-outlet />
        </main>
    `
})
export class AppComponent {
    title = 'e-commerce.ng-conf';
}
