export default class LoadBufferCell {
    busy: boolean;
    address: number;

    constructor() {
        this.busy = false;
        this.address = 0;
    }

    addAdress(address: number) {
        this.address = address;
        this.busy = true;
    }

    getAdress(): number {
        return this.address;
    }

    clearCell() {
        this.busy = false;
    }
}