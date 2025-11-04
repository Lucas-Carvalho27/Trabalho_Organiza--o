import { BaseComponent } from "../BaseComponent";

export default class InstructionMemory extends BaseComponent {
    type: string = "InstructionMemory"

    size: number = 128;

    override tick(): void {
        console.log(`${this.name} executando ciclo de clock`);
    }

} 