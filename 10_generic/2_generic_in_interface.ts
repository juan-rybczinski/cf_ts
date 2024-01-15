interface Cache<T> {
  data: T[];
  lastUpdated: Date;
}

const cache1: Cache<String> = {
  data: ['data1', 'data2'],
  lastUpdated: new Date(),
};

interface DefaultGeneric<T = String> {
  data: T[],
}

const cache2: DefaultGeneric = {
  data: ['123', '456'],
};