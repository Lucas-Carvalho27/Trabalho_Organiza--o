import type Iclock from "../Iclock";

export default class Clock implements Iclock {

    elemetns: Iclock[] = [];

    addElement(element: Iclock) {
        this.elemetns.push(element);
    }

    tick(): void {
        this.elemetns.forEach(element => {
            element.tick();
        });
    }

}