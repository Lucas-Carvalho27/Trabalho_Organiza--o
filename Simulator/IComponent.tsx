import type Iclock from "./Iclock";

export default interface IComponent {
    name: string;
    inputs: IComponent[];
    outputs: IComponent[];
    clock: Iclock;

    tick(): void;
    getBuffer(): number | null;
}