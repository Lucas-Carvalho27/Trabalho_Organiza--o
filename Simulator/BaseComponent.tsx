import type IComponent from "./IComponent";
import type Iclock from "./Iclock";

export class BaseComponent implements IComponent {
    buffer: number | null = null;
    time: number = 1;
    name: string;
    inputs: IComponent[];
    outputs: IComponent[];
    clock: Iclock;

    constructor(name: string, clock: Iclock, time: number = 1) {
        this.name = name;
        this.clock = clock;
        this.time = time;
        this.outputs = [];
        this.inputs = [];
        clock.addcomponent(this);
    }

    getBuffer(): number | null {
        return this.buffer;
    }


    connect(target: IComponent): void {
        if (target === this) return;

        if (!this.outputs.includes(target)) {
            this.outputs.push(target);
        }

        if (!target.inputs.includes(this)) {
            target.inputs.push(this);
        }
    }


    disconnect(target: IComponent): void {
        this.outputs = this.outputs.filter(o => o !== target);
        target.inputs = target.inputs.filter(i => i !== this);
    }

    preTick(): void {

    }

    tick(): void {
        // Implementação da lógica de clock, se necessário
    }
}
