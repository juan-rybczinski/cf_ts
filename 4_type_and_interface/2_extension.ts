interface IName {
  name: string;
}

interface IIdol extends IName {
  age: number;
}

const idol: IIdol = {
  name: '안유진',
  age: 23,
};

type TName = {
  name: string;
}

type TIdol = TName & {
  age: number;
}

const idol2: TIdol = {
  name: '장원영',
  age: 22,
};

interface IIdol2 extends TName {
  age: number;
}

const idol3: IIdol2 = {
  name: '제니',
  age: 29,
};

type TIdol2 = IName & {
  age: number;
}

const idol4: TIdol2 = {
  name: '지수',
  age: 31,
};

// Extending Multiple
type DogName = {
  name: string;
}

type DogAge = {
  age: number;
}

type DogBreed = {
  breed: string;
}

type Dog = DogName & DogAge & DogBreed;

const dog: Dog = {
  name: '코드팩토리',
  age: 32,
  breed: 'Poodle',
};

interface CatName {
  name: string;
}

interface CatAge {
  age: number;
}

interface Cat extends CatName, CatAge {
  breed: string;
}

const cat: Cat = {
  name: '오리',
  age: 7,
  breed: '코리안 냥냥이',
};

// Overriding
type THeight = {
  height: number;
}

type TRectangle = THeight & {
  height: string;
  width: number;
}

// const rectangle: TRectangle = {
//   height:,
//   width: 100,
// };

type TWidth = {
  width: string | number;
}

type TRectangle2 = TWidth & {
  width: number;
  height: number;
}

const rectangle: TRectangle2 = {
  width: 100,
  height: 200,
};

interface IHeight {
  height: number;
}

// interface IRectangle extends IHeight {
//   height: string;
//   width: number;
// }

interface IWidth {
  width: number | string;
}

interface IRectangle extends IWidth {
  width: number;
  height: number;
}