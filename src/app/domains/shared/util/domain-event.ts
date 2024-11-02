export type DomainEventType = 'ProductAddedToCart' | 'CartConfirmed';

export interface DomainEvent<T = unknown> {
    type: DomainEventType;
    payload: T;
}