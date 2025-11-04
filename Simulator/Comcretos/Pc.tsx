import { BaseComponent } from "../BaseComponent";

export class Pc extends BaseComponent {
    type: string = "PC"

    override tick(): void {
        console.log(`${this.name} executando ciclo de clock`);
    }

}