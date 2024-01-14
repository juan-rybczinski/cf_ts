// Method
class Parent {
  shout(name: string, second?: string) {
    return `${name}야, 안녕!`;
  }
}

class Child extends Parent {
  // 1) 부모 메서드와 반환 타입이 일치해야한다.
  // 2) 부모 메서드에 필수인 파라미터들이 존재해야한다.
  // 3) 부모 메서드에서 존재하지 않는 파라미터들이 자식에서
  //    필수로 지정되면 안된다.
  shout(first: string, second: string, third?: string) {
    if (!third) {
      return super.shout(first, second);
    } else {
      return super.shout(first, second) + ` 내 이름은 ${third}야!`;
    }
  }
}

const child = new Child();
console.log(child.shout('아이유', ''));
console.log(child.shout('아이유', '', '코드팩토리'));

// Property
class PropertyParent {
  name: string | number;

  constructor(name: string) {
    this.name = name;
  }
}

class PropertyChild extends PropertyParent {
  name: string;
  constructor(name: string) {
    super(name);
    this.name = name;
  }
}

const child2 = new PropertyChild('헬로우');
child2.name