const dogOrCat1 = Math.random() > 0.5 ? {
  name: '별이',
  age: 12,
} : {
  name: '오리',
  breed: '코리안 길냥이',
};

dogOrCat1.name;
dogOrCat1.age;
dogOrCat1.breed;

interface Dog {
  name: string;
  age: number;
}

interface Cat {
  name: string;
  breed: string;
}

type DogOrCat = Dog | Cat;

const dogOrCat2: DogOrCat = Math.random() > 0.5 ? {
  name: '별이',
  age: 12,
} : {
  name: '오리',
  breed: '코리안 길냥이',
};

if ('age' in dogOrCat2) {
  dogOrCat2;
  dogOrCat2.name;
  dogOrCat2.age;
} else {
  dogOrCat2;
  dogOrCat2.name;
  dogOrCat2.breed;
}