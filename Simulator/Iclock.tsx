import type IComponent from "./IComponent";

export default interface Iclock {
    name: string;
    ticks: number;
    components: IComponent[];

    tick(): void
    addcomponent(components: IComponent): void
}