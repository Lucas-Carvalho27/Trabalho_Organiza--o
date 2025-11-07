export default class ReservationCell {
    busy: boolean;
    op?: number;
    Vj?: number;
    Vk?: number;
    Qj?: number;
    Qk?: number;

    constructor() {
        this.busy = false;
    }
}