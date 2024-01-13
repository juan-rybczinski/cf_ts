// Object
interface IObject {
  x: number;
  y: number;
}

type TObject = {
  x: number;
  y: number;
}

// Function
interface IFunction {
  (x: number, y: number): number;
}

type TFunction = (x: number, y: number) => number;

const iFunction: IFunction = (x, y) => x + y;
const tFunction: TFunction = (x, y) => x + y;

// Type만 가능한 것
// (1) primitive 선언
type Name = string;

// (2) union 선언
type UnionType = string | number;

// (3) primitive list
type ListType = string[];

// (4) tuple
type TupleType = [string, number];

// Interface만 가능한 것
// Interface Merging
interface IRectangle {
  height: number;
}

interface IRectangle {
  width: number;
}

const rectangle: IRectangle = {
  height: 200,
  width: 100,
};

class Review {
  // Property
  getX = (x: number) => {
    return x;
  };

  // Method
  getY(x: number) {
    return x * 2;
  }
}

interface GetXnY {
  getX: (x: number) => number;
  getY: (y: number) => number;
}

interface GetXnY {
  getX: (x: number) => number;
  // getY: (y: string) => number;
}

interface GetXnY2 {
  getX(x: number): number;

  getY(y: number): number;
}

interface GetXnY2 {
  getX(x: number): number;

  getY(y: string): number;
}

const getXnY: GetXnY2 = {
  getX(x: number): number {
    return x;
  },
  getY(x) {
    return 0;
  },
};