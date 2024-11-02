import { effect, Injectable, signal } from "@angular/core";
import { DomainEvent, DomainEventType } from "./domain-event";

@Injectable({
    providedIn: 'root'
})
export class EventBusService {

    private eventSignal = signal<DomainEvent | null>(null);
    private listeners = new Map<DomainEventType, ((payload: unknown) => void)[]>();

    constructor() {
        effect(() => {
            const event = this.eventSignal();
            if (event) {
                const callbacks = this.listeners.get(event.type) || [];
                callbacks.forEach(callback => callback(event.payload));
            }
        });
    }

    emitEvent(event: DomainEvent) {

        this.eventSignal.set(event);
    }

    onEvent(type: DomainEventType, callback: (payload: unknown) => void) {
        if (!this.listeners.has(type)) {
            this.listeners.set(type, []);
        }
        this.listeners.get(type)!.push(callback);
    }
}