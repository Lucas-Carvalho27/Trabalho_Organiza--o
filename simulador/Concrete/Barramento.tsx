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
            console.log("Barramento received data:", data);
            this.data = data;
            this.isBusy = true;
            return true
        }
        else {
            return false;
        }
    }

    sendData(): void {
        console.log("Barramento sending data:", this.data);
        for (const component of this.destinationComponent) {
            component.receiveData(this.data!);
        }
    }

    addDestination(compoment: AbstractComponent) {
        this.destinationComponent.push(compoment)
    }

    addOrigin(compoment: AbstractComponent) {
        this.originComponent.push(compoment)
    }

    tick(): void {
        if (this.isBusy) {
            this.sendData();
            this.isBusy = false;
        }


    }
}