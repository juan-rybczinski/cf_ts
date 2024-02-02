class UserModel {
  @PropertyLogger
  id: string;
  name: string;

  constructor(id: string, name: string) {
    this.id = id;
    this.name = name;
  }
}

function PropertyLogger(target: any, propertyNane: string) {
  console.log(`${propertyNane} 값이 정의됐습니다!`);
}