export default class Registers {
    registers: number[];
    size: number;
    constructor(size: number) {
        this.size = size;
        this.registers = [];
        for (let i = 0; i < size; i++) {
            this.registers.push(0);
        }
        Object.freeze(this.registers);
    }
}