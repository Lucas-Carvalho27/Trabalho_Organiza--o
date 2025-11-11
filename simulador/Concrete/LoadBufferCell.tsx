export default class LoadBufferCell {
    isBusy: boolean = false;
    opCode: number;
    rs: number;
    rt: number;
    offset: number;

    constructor(opCode: number, rs: number, rt: number, offset: number) {
        this.opCode = opCode;
        this.rs = rs;
        this.rt = rt;
        this.offset = offset;
    }
}