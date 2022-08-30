
import Vue from 'vue';
import Component from 'vue-class-component';

type IfAny<T, Y, N> = 0 extends (1 & T) ? Y : N;

export default interface VueWithTypedEvents<Events extends Record<string, any> = any> {
    $emit<Event extends keyof Events>(
        event: Event,
        ...args: IfAny<Events, any[], Events[Event] extends undefined ? [] : [Events[Event]]>
    ): this;
}

@Component
export default class VueWithTypedEvents<Events extends Record<string, any> = any> extends Vue {}
