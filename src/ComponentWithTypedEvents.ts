import Component from 'vue-class-component';
import VueWithTypedEvents from './VueWithTypedEvents';

export interface ComponentWithTypedEventsEvents {
    'event-with-string-payload': string;
    'event-with-number-payload': number;
    'event-without-payload': undefined;
}

@Component
export default class ComponentWithTypedEvents extends VueWithTypedEvents<ComponentWithTypedEventsEvents> {
    emitEventWithStringPayload(): void {
        this.$emit('event-with-string-payload', '1');
        // this.$emit('event-with-string-payload', 1); // Don't compile. Payload is a number and must be a string.
        // this.$emit('event-with-string-payload'); // Don't compile. Payload is undefined and must be defined with a string.
    }

    emitEventWithNumberPayload(): void {
        // this.$emit('event-with-number-payload', '1'); // Don't compile. Payload is a string and must be a number.
        this.$emit('event-with-number-payload', 1);
        // this.$emit('event-with-number-payload'); // Don't compile. Payload is undefined and must be defined with a number.
    }

    emitEventWithoutPayload(): void {
        // this.$emit('event-without-payload', '1'); // Don't compile. Payload must be undefined.
        // this.$emit('event-without-payload', 1); // Don't compile. Payload must be undefined.
        this.$emit('event-without-payload');
    }

    emitEventThatDoesNotExist(): void {
        // this.$emit('event-that-does-not-exist'); // Don't compile. Event does not exist on the ComponentWithTypedEventsEvents interface.
    }
}
