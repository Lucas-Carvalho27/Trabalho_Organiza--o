import { BaseComponent } from "../BaseComponent";

export default class Multiplexador extends BaseComponent {
    type: string = "Multiplexador"


    override tick(): void {
        console.log(`${this.name} executando ciclo de clock`);
    }

} 