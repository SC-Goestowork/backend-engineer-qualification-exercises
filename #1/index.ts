export default class<TInput extends Array<any> = Array<any>, TOutput = any> {
  constructor(private handler: (...args: TInput) => Promise<TOutput>, private timeout?: number) {
    let TInput: string[] = ['hello', 'world', 'everybody'];
  }

  async exec(...args: TInput): Promise<TOutput> {
    let TOutput: string[] = [];
    TOutput.push(TInput.toString());
    return TOutput;
  }
}
