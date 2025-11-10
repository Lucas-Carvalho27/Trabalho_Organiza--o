import AbstractComponent from "../AbstractComponent";
import LoadBufferCell from "./LoadBufferCell";

export default class LoadBuffer extends AbstractComponent {
    loadBufferSize: number;
    loadBuffer: LoadBufferCell[] = [];

    constructor(clockCyclesToWait: number, loadBufferSize: number,) {
        super(clockCyclesToWait);
        this.loadBufferSize = loadBufferSize;
    }

    override receiveData(data: number): boolean {
        let [opCode, rs, rt, offset] = [
            (data >> 26) & 0x3F,
            (data >> 21) & 0x1F,
            (data >> 16) & 0x1F,
            data & 0xFFFF
        ];
        return this.addLoadBufferCell(opCode, rs, rt, offset);
    }

    addLoadBufferCell(opCode: number, rs: number, rt: number, offset: number): boolean {
        if (this.loadBuffer.length < this.loadBufferSize) {
            const newCell = new LoadBufferCell(opCode, rs, rt, offset);
            this.loadBuffer.push(newCell);
            return true;
        } else {
            return false;
        }
    }


}