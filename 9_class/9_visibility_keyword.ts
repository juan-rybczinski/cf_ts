/**
 * Visibility Keyword
 *
 * 1) public (기본값) - 어디서든 접근이 가능하다
 * 2) protected - 현재 클래스 및 하위 (자식) 클래스에서 접근 가능하다.
 * 3) private - 현재 클래스 내부에서만 접근 가능하다.
 */
class Parent {
  public publicProperty = 'publicProperty';
  protected protectedProperty = 'protectedProperty';
  private privateProperty = 'privateProperty';
  #jsPrivateProperty = 'jsPrivateProperty';

  test() {
    this.publicProperty;
    this.protectedProperty;
    this.privateProperty;
    this.#jsPrivateProperty;
  }
}

class Child extends Parent {
  test() {
    this.publicProperty;
    this.protectedProperty;
    // this.privateProperty;
    // this.#jsPrivateProperty;
  }
}

const child = new Child();
child.publicProperty;
// child.protectedProperty;
// child.privateProperty;
// child.#jsPrivateProperty;