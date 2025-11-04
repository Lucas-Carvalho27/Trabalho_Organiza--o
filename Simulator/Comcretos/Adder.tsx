import { BaseComponent } from "../BaseComponent";
import type Iclock from "../Iclock";

export default class Adder extends BaseComponent {
    type: string = "Adder";
    value: number | null = null;
    sum: number;
    clockCounter: number = 0;

    constructor(time: number, name: string, clock: Iclock, sum: number) {
        super(time, name, clock);
        this.sum = sum;
    }

    handle(): void {
        console.log(`${this.name} executado`);

        const result = (this.inputs?.[0]?.getBuffer?.() ?? 0) + this.sum;

        this.buffer = result;

        console.log(`${this.name} executado, com valor: ${this.buffer}`);
        this.clockCounter = 0;
    }

    override tick(): void {
        this.clockCounter += 1;
        if (this.clockCounter >= this.time) {
            this.handle();
        }
    }
}
