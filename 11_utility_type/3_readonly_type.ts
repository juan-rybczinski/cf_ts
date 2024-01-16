interface Cat {
  name: string;
  age: number;
}

const bori: Readonly<Cat> = {
  name: '보리',
  age: 7,
};
// bori.name = '아이유';

Object.freeze(bori);
// bori.name = '아이유';