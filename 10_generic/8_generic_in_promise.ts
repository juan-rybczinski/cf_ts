const afterOneSecond = (): Promise<string> => new Promise(resolve => setTimeout(() => resolve('done'), 1000));
const runner = async () => {
  console.log(await afterOneSecond());
}

runner();

const runner2 = async () => 'string return';