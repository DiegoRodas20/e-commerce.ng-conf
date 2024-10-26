import { SheriffConfig } from '@softarc/sheriff-core';

export const config: SheriffConfig = {

    enableBarrelLess: true,
    modules: {
        // Cart
        'src/app/domains/cart/feature': ['domain:cart', 'type:feature'],
        'src/app/domains/cart/domain': ['domain:cart', 'type:data'],

        // Catalog
        'src/app/domains/catalog/feature': ['domain:catalog', 'type:feature'],
        'src/app/domains/catalog/domain': ['domain:catalog', 'type:data'],

        // Order
        'src/app/domains/order/feature': ['domain:order', 'type:feature'],
        'src/app/domains/order/domain': ['domain:order', 'type:data'],

        // Payment
        'src/app/domains/payment/feature': ['domain:payment', 'type:feature'],
        'src/app/domains/payment/domain': ['domain:payment', 'type:data'],
    },
    depRules: {
        'domain:cart': ['domain:cart'],
        'domain:catalog': ['domain:catalog'],
        'domain:order': ['domain:order'],
        'domain:payment': ['domain:payment'],
        'type:feature': 'type:data',
        root: 'type:feature',
    },
};
