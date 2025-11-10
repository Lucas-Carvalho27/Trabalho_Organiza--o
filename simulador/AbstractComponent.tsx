import type Iclock from "./Iclock";
import type Icomponent from "./IComponent";
import type IInputOutput from "./IInputoutPut";

export default abstract class AbstractComponent implements Icomponent, Iclock, IInputOutput {
    clockCycle: number = 0;
    clockWaitCycles: number;
    data: number | null = null;
    isBusy: boolean = false;
    out: IInputOutput[] = [];
    in: IInputOutput[] = [];

    constructor(clockWaitCycles: number) {
        this.clockWaitCycles = clockWaitCycles;
    }

    performOperation(): void {
        throw new Error("Method not implemented.");
    }

    tick(): void {
        this.clockCycle++;
        if (this.clockCycle >= this.clockWaitCycles) {
            this.performOperation();
        }
    }

    receiveData(data: number): boolean {
        if (!this.isBusy) {
            this.data = data;
            return true
        }
        else {
            return false;
        }
    }
    sendData(): void {
        this.out.forEach(component => {
            component.receiveData(this.data!);
        });
    }
}