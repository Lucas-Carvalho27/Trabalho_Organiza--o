

export default interface Icomponent {
    clockCycle: number;
    clockWaitCycles: number;
    data: number | null;
    isBusy: boolean;

    performOperation(): void;
}