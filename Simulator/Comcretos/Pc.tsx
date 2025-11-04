import { BaseComponent } from "../BaseComponent";

export default class Pc extends BaseComponent {
    type: string = "PC"
    value: number = 0;


    override preTick(): void {
        if (this.clock.ticks % this.time === 0) {
            const inputVal = this.inputs?.[0]?.getBuffer?.() ?? 0;
        }
    }

    override tick(): void {
        console.log(`${this.name} executando ciclo de clock`);
    }

}