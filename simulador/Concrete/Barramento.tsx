import type IBarramento from "../Ibarramento";
import type Iclock from "../Iclock";
import AbstractComponent from "../AbstractComponent";
import type IInputOutput from "../IInputoutPut";

export default class Barramento implements IBarramento, Iclock, IInputOutput {
    isBusy: boolean = false;
    data: number | null = null;
    originComponent: AbstractComponent[] = [];
    destinationComponent: AbstractComponent[] = [];
    receiveData(data: number): boolean {
        if (!this.isBusy) {
            this.data = data;
            this.isBusy = true;
            return true
        }
        else {
            return false;
        }
    }

    sendData(): void {
        let sent = false;
        for (const component of this.destinationComponent) {
            const accepted = component.receiveData(this.data!);
            if (accepted) sent = true;
        }
        if (sent) {
            this.data = null;
            this.isBusy = false;
        }
    }

    addDestination(compoment: AbstractComponent) {
        this.destinationComponent.push(compoment)
    }

    addOrigin(compoment: AbstractComponent) {
        this.originComponent.push(compoment)
    }

    tick(): void {
        this.sendData()
    }
}