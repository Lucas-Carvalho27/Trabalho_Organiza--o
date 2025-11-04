import type Iclock from "./Iclock";
import type IComponent from "./IComponent";

export default class Clock implements Iclock {
    name: string;
    components: IComponent[];
    ticks: number = 0;

    constructor(name: string) {
        this.name = name;
        this.components = [];
    }

    addcomponent(component: IComponent): void {
        this.components.push(component);
    }

    tick(): void {
        console.log(`\nClock ${this.name} — ciclo ${this.ticks + 1}`);

        for (const component of this.components) {
            component.preTick();
        }

        for (const component of this.components) {
            component.tick();
        }

        this.ticks++;
    }
}
