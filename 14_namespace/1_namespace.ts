namespace Home {
  class Idol {
    name: string;
    age: number;

    constructor(name: string, age: number) {
      this.name = name;
      this.age = age;
    }
  }

  export const yuJin = new Idol('안유진', 23);
}

namespace Post {
  class User {
    email: string;
    name: string;

    constructor(name: string, email: string) {
      this.name = name;
      this.email = email;
    }
  }

  const admin = new User('admin@codefactory.ai', Home.yuJin.name);
  console.log(admin);
}

namespace Comment {
  const name = 'comment';

  namespace Detail {
    const page = 'detail';

    console.log(name);
    console.log(page);
  }

  console.log('----------');
  console.log(name);
  // console.log(page);
}