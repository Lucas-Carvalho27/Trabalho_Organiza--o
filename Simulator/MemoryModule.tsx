import type IModule from "./IModule";


export default class MemoryModule implements IModule {
    memory: number[];
    size: number;
    cyclesPerInstruction: number;
    cycleCounter: number = 0;
    busy: boolean;
    subscribers: IModule[];
    operation: number = 0;

    constructor(size: number, cyclesPerInstruction: number) {
        this.size = size;
        this.memory = [];
        for (let i = 0; i < size; i++) {
            this.memory.push(0);
        }
        Object.freeze(this.memory);
        this.cyclesPerInstruction = cyclesPerInstruction;
        this.busy = false;
        this.subscribers = [];
    }

    readMemory(address: number): number {
        return this.memory[address];
    }

    writeMemory(address: number, value: number) {
        this.memory[address] = value;
    }

    cycle(): void {
        //nothing to do
    }

    broadcast(): number {
        //nothing to broadcast
        return 0;
    }

    subscribe(module: IModule): void {

    }
}