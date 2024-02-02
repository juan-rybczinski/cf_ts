class Rectangle {
  #width: number;
  #height: number;

  constructor(width: number, height: number) {
    this.#width = width;
    this.#height = height;
  }

  @Configurable(false)
  get height() {
    return this.#height;
  }

  @Configurable(true)
  get width() {
    return this.#width;
  }
}

function Configurable(configurable: boolean) {
  return function (target: any, key: string, descriptor: PropertyDescriptor) {
    descriptor.configurable = configurable;
  }
}

console.log(Object.getOwnPropertyDescriptors(Rectangle.prototype));