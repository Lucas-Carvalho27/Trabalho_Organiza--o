import type Icomponent from "./IComponent";



export default interface IBarramento {
    isBusy: boolean;
    data: number | null;
    originComponent: Icomponent[];
    destinationComponent: Icomponent[];


}