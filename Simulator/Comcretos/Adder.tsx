import { BaseComponent } from "../BaseComponent";
import type Iclock from "../Iclock";

export default class Adder extends BaseComponent {
    type: string = "Adder";
    value: number | null = null;
    nextValue: number | null = null;

    constructor(name: string, clock: Iclock) {
        super(name, clock);
    }

    override preTick(): void {
        if (this.clock.ticks % this.time === 0) {
            const inputVal1 = Number(this.inputs?.[0]?.getBuffer?.() ?? 0);
            const inputVal2 = Number(this.inputs?.[1]?.getBuffer?.() ?? 0);
            this.nextValue = inputVal1 + inputVal2;
            console.log(`${this.name}: pré-cálculo -> nextValue=${this.nextValue}`);
        }
    }

    override tick(): void {
        if (this.nextValue !== null) {
            this.buffer = this.nextValue;
            this.value = this.nextValue;
            console.log(`${this.name}: commit -> buffer=${this.buffer}`);
            this.nextValue = null;
        }
    }
}