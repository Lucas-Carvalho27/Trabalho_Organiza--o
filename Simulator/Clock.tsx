import type Iclock from "./Iclock";
import type IComponent from "./IComponent";

export default class Clock implements Iclock {
    name: string;
    components: IComponent[];

    constructor(name: string) {
        this.name = name;
        this.components = [];
    }
    addcomponent(components: IComponent): void {
        this.components.push(components);
    }

    tick(): void {
        console.log(`Clock ${this.name} executando ciclo de clock`);
        for (const component of this.components) {
            component.tick();
        }
    }
}