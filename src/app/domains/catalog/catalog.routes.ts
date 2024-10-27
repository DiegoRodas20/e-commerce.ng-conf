import { Routes } from "@angular/router";

export const routes: Routes = [
    {
        path: 'product-list',
        loadComponent: () => import('./feature/product-list/product-list.component').then(m => m.ProductListComponent)
    },
    {
        path: 'product-detail',
        loadComponent: () => import('./feature/product-detail/product-detail.component').then(m => m.ProductDetailComponent)
    },
];
