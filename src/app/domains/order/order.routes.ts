import { Routes } from "@angular/router";

export const routes: Routes = [
    {
        path: 'order-history',
        loadComponent: () => import('./feature/order-history/order-history.component').then(m => m.OrderHistoryComponent)
    },
    {
        path: 'order-detail',
        loadComponent: () => import('./feature/order-detail/order-detail.component').then(m => m.OrderDetailComponent)
    },
];
