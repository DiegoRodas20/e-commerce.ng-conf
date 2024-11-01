import { Injectable } from "@angular/core";
import { EventBusService } from "../../shared/util/event-bus.service";
import { Product } from "./product";

@Injectable({
    providedIn: 'root'
})
export class CatalogService {

    constructor(
        private _eventBus: EventBusService
    ) { }

    getProducts(): Product[] {

        const products = [
            {
                id: 1,
                name: 'DW Collector\'s Series Maple Drum Kit',
                images: ['https://www.dwdrums.com/_next/image/?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0621%2F5027%2F9317%2Ffiles%2FDRKT2250A_55fe5d1e-c1e7-4fc8-8772-5f8bcd571d10.jpg%3Fv%3D1725981907&w=2048&q=75'],
                description: 'DW Collector\'s Series Maple Shell Pack, 5-piece, ideal para profesionales.',
                price: 3500.00,
                stock: 5,
                rating: 5
            },
            {
                id: 2,
                name: 'DW Performance Series 4-piece Shell Pack',
                images: ['https://www.dwdrums.com/_next/image/?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0621%2F5027%2F9317%2Ffiles%2FDDLM2214BL_8be0d0e3-9251-413c-81b4-fcb69c678ab4.jpg%3Fv%3D1726003046&w=2048&q=75'],
                description: 'DW Performance Series, con excelente resonancia y proyección, perfecta para cualquier escenario.',
                price: 2500.00,
                stock: 8,
                rating: 4
            },
            {
                id: 3,
                name: 'DW Design Series 5-piece Drum Kit',
                images: ['https://www.dwdrums.com/_next/image/?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0621%2F5027%2F9317%2Ffiles%2FDDFP2214BG_ce0195a2-5882-4acd-8605-49d5d68c2363.jpg%3Fv%3D1726004105&w=2048&q=75'],
                description: 'DW Design Series, madera de arce con un acabado excepcional. Incluye bombo, toms y caja.',
                price: 1800.00,
                stock: 10,
                rating: 4
            },
            {
                id: 4,
                name: 'DW Performance Series Snare Drum',
                images: ['https://www.dwdrums.com/_next/image/?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0621%2F5027%2F9317%2Ffiles%2FDRKTPFC05AJBR_c5d9b237-261a-4b4e-b9d2-240523bdfa37.jpg%3Fv%3D1726011136&w=2048&q=75'],
                description: 'Caja DW Performance Series de 14 pulgadas, sonido potente y resonante.',
                price: 650.00,
                stock: 15,
                rating: 5
            },
            {
                id: 5,
                name: 'DW Design Series Acrylic Drum Kit',
                images: ['https://www.dwdrums.com/_next/image/?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0621%2F5027%2F9317%2Ffiles%2FDDAC2214CL_d7ec0d9e-611c-4fa1-a4c8-f62c4f3b7fdd.jpg%3Fv%3D1726002995&w=2048&q=75'],
                description: 'DW Design Series en acrílico transparente, diseño moderno y sonido nítido.',
                price: 2200.00,
                stock: 4,
                rating: 3
            },
            {
                id: 6,
                name: 'DW Collector\'s Series Exotic Drum Kit',
                images: ['https://www.dwdrums.com/_next/image/?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0621%2F5027%2F9317%2Ffiles%2FDRKTPLC04AZCS.jpg%3Fv%3D1726011129&w=2048&q=75'],
                description: 'Edición exótica de la DW Collector\'s Series, con acabado en madera exótica.',
                price: 4500.00,
                stock: 3,
                rating: 5
            }
        ];

        return products
    }

    addProductToShoppingCart(product: Product) {

        this._eventBus.emitEvent({
            type: 'ProductSelected',
            payload: { product }
        })
    }
}