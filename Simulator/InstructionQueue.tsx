import type LoadBuffer from "./Load/LoadBuffer"

export default class InstructionQueue {
    size: number
    queue: [number, number][]
    loadBuffer: LoadBuffer


    constructor(size: number, loadBuffer: LoadBuffer) {
        this.size = size
        this.queue = []
        this.loadBuffer = loadBuffer
    }

    getOpcode(instruction: number): [number, number] {
        let op = instruction >>> 26;
        let func = instruction & 0x3F;
        return [op, func];
    }


    addInstruction(instruction: number) {
        let [op, func] = this.getOpcode(instruction);

        if (this.queue.length < this.size) {
            this.queue.push([op, func])
        }
    }

    cycle() {


    }

}