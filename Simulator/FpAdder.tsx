import IModule from "./IModule";

export default class FpAdder implements IModule {
    cyclesPerInstruction: number;
    cycleCounter: number;
    busy: boolean;
    subscribers: IModule[];

    constructor(cyclesPerInstruction: number) {
        this.cyclesPerInstruction = cyclesPerInstruction;
        this.cycleCounter = 0;
        this.busy = false;
        this.subscribers = [];
    }

    subscribe(module: IModule): void {
        this.subscribers.push(module);
    }


    cycle(): void {
        //nothing to do
    }
    broadcast(): number {
        //nothing to broadcast
        return 0;
    }

}