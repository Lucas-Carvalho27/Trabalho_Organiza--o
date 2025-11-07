export default interface IModule {
    cyclesPerInstruction: number;
    cycleCounter: number;
    busy: boolean;
    subscribers: IModule[];

    subscribe(module: IModule): void
    cycle(): void
    broadcast(): number
}