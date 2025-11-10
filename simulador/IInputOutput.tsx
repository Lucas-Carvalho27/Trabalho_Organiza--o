export default interface IInputOutput {
    receiveData(data: number): boolean;
    sendData(): void;
}