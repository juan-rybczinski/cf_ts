interface Idol {
  name: string;
  age: number;
  groupName: string;
}

const yuJin: Idol = {
  name: '안유진',
  age: 23,
  groupName: '아이브',
};

const updateIdol = (original: Idol, updates: Partial<Idol>) => ({
  ...original,
  ...updates,
});

console.log(updateIdol(yuJin, {
  age: 32,
}));