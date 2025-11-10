import AbstractComponent from "../AbstractComponent";
export default class InstructionQueue extends AbstractComponent {
    instructionBuffer: number[] = [];
    //out[0] é o load/store bus
    //out[1] é o barramento de instruções

    addInstruction(instruction: number) {
        this.instructionBuffer.push(instruction);
    }


    //verifica o opcode e encaminha a instrução para o barramento correto
    //caso o barramento esteja ocupado, a instrução permanece na fila
    //caso o barramento esteja livre, a instrução é removida da fila
    override sendData(): void {
        let opCode = this.instructionBuffer[0];
        let result = false;
        if (opCode == 35) {
            result = this.out[0].receiveData(opCode);
        }
        else {
            result = this.out[1].receiveData(opCode);
        }
        if (result) {
            this.instructionBuffer.shift();
        }
    }

    override performOperation(): void {
        this.sendData();
    }

}    