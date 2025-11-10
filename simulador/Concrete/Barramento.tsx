import IBarramento from "../Ibarramento";
import Iclock from "../Iclock";
import AbstractComponent from "../AbstractComponent";
import IInputOutput from "../IInputoutPut";

export default class Barramento implements IBarramento, Iclock, IInputOutput {
    isBusy: boolean = false;
    data: number | null = null;
    originComponent: AbstractComponent[] = [];
    destinationComponent: AbstractComponent[] = [];
    receiveData(data: number): boolean {
        if (!this.isBusy) {
            this.data = data;
            return true
        }
        else {
            return false;
        }
    }
    sendData(): number {
        return 0;

    }

    addOrigin(compoment: AbstractComponent) {
        this.originComponent.push(compoment)
    }

    tick(): void {
        this.sendData()
    }
}