import { Routes } from "@angular/router";

export const routes: Routes = [
    {
        path: 'payment-form',
        loadComponent: () => import('./feature/payment-form/payment-form.component').then(m => m.PaymentFormComponent)
    },
    {
        path: 'payment-summary',
        loadComponent: () => import('./feature/payment-summary/payment-summary.component').then(m => m.PaymentSummaryComponent)
    },
];