abstract class ModelWithId {
  id: number;

  constructor(id: number) {
    this.id = id;
  }
}

class Product extends ModelWithId {

}

const product = new Product(123);
product.id;

abstract class ModelWithAbstractMethod {
  abstract shout(name: string): string;
}

class Person extends ModelWithAbstractMethod {
  shout(name: string): string {
    return '소리질러!';
  }
}