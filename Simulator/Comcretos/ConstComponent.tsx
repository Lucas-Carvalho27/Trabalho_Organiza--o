import { BaseComponent } from "../BaseComponent";
import type Iclock from "../Iclock";

export default class ConstComponent extends BaseComponent {
    type: string = "ConstComponent"
    value: number;

    constructor(value: number, name: string, clock: Iclock) {
        super(name, clock);
        this.value = value;
        this.buffer = value;
    }

}