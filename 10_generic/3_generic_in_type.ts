type GenericSimpleType<T> = T;
const genericString1: GenericSimpleType<string> = '코드팩토리';

// const genericString2: GenericSimpleType = '코드팩토리';

interface DoneState<T> {
  data: T[];
}

interface LoadingState {
  requestedAt: Date;
}

interface ErrorState {
  error: string;
}

type State<T = number> = DoneState<T> | LoadingState | ErrorState;

let state1: State<string> = {
  data: ['123', '456'],
};
state1 = {
  requestedAt: new Date(),
};
state1 = {
  error: 'error',
};

let state2: State = {
  data: [123, 456],
};