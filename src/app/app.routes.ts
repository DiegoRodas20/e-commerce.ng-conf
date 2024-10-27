import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'catalog',
        loadChildren: () => import('./domains/catalog/catalog.routes').then(m => m.routes)
    },
    {
        path: 'payment',
        loadChildren: () => import('./domains/payment/payment.routes').then(m => m.routes)
    },
    {
        path: 'order',
        loadChildren: () => import('./domains/order/order.routes').then(m => m.routes)
    }
];
