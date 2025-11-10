export default class LoadBufferCell {
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