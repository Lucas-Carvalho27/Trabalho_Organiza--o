import type IComponent from "./IComponent";

export default interface Iclock {
    name: string;
    components: IComponent[];

    tick(): void
    addcomponent(components: IComponent): void
}