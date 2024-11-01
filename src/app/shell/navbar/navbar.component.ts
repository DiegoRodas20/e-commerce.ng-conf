import { Component, OnInit } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { SidebarModule } from 'primeng/sidebar';
import { CartViewComponent } from "../../domains/cart/feature/cart-view/cart-view.component";

@Component({
    selector: 'app-navbar',
    standalone: true,
    imports: [
        ButtonModule,
        CartViewComponent,
        SidebarModule
    ],
    templateUrl: './navbar.component.html',
    styleUrl: './navbar.component.css'
})
export class NavBarComponent implements OnInit {

    openCart = false
    
    ngOnInit() {
        console.log('')
    }
}
