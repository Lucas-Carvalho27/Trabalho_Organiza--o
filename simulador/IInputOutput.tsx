export default interface IInputOutput {
    receiveData(data: number): void;
    sendData(): void;
}