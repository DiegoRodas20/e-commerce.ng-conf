import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { RatingModule } from 'primeng/rating';
import { TagModule } from 'primeng/tag';
import { TooltipModule } from 'primeng/tooltip';
import { CatalogService } from '../../data/catalog.service';
import { Product } from '../../data/product';
// import { CartService } from '../../../cart/data/cart.service';

@Component({
    selector: 'app-product-list',
    standalone: true,
    imports: [
        ButtonModule,
        FormsModule,
        RatingModule,
        TagModule,
        TooltipModule
    ],
    templateUrl: './product-list.component.html',
    styleUrl: './product-list.component.css'
})
export class ProductListComponent implements OnInit {

    products: Product[] = [];

    constructor(
        private _catalogService: CatalogService
    ) { }

    ngOnInit() {
        this.getProducts()
    }

    private getProducts() {

        this.products = this._catalogService.getProducts()
    }

    public addProductToShoppingCart(product: Product) {

        this._catalogService.addProductToShoppingCart(product)
    }
}
