import AbstractComponent from "../AbstractComponent";
export default class InstructionQueue extends AbstractComponent {
    instructionBuffer: number[] = [];


    addInstruction(instruction: number) {
        this.instructionBuffer.push(instruction);
    }

    override performOperation(): void {


    }

}    