import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-product-list',
    standalone: true,
    templateUrl: './product-list.component.html',
    styleUrl: './product-list.component.css'
})
export class ProductListComponent implements OnInit {

    ngOnInit() {
        throw new Error('Method not implemented.');
    }
}
