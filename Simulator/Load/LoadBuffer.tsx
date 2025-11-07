import LoadBufferCell from "./LoadBufferCell";
import MemoryModule from "../MemoryModule";

export default class LoadBuffer {
    size: number;
    buffer: LoadBufferCell[];
    memoryModule: MemoryModule;

    constructor(size: number, memoryModule: MemoryModule) {
        this.size = size;
        this.buffer = [];
        for (let i = 0; i < size; i++) {
            this.buffer.push(new LoadBufferCell());
        }
        this.memoryModule = memoryModule;
    }

    availableCell(): number | null {
        for (let i = 0; i < this.buffer.length; i++) {
            if (!this.buffer[i].busy) {
                return i;
            }
        }
        return null;
    }



}