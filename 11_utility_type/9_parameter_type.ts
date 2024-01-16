const sampleFunction = (x: number, y: string, z: boolean) => null;

type Params = Parameters<typeof sampleFunction>;
type Params2 = Parameters<(one: number) => void>;