import ReservationCell from "./ReservationCell";

export default class ReservationTable {
    name: string;
    table: ReservationCell[];


    constructor(size: number, name: string) {
        this.name = name;
        this.table = [];
        for (let i = 0; i < size; i++) {
            this.table.push(new ReservationCell());
        }
        Object.freeze(this.table);
    }

    availableCell(): ReservationCell | null {
        for (let cell of this.table) {
            if (!cell.busy) {
                return cell;
            }
        }
        return null;
    }

}