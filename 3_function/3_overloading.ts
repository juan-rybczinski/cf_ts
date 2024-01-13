function stringOrStrings(members: string): string;
function stringOrStrings(member1: string, member2: string, member3: string): string;
// function stringOrStrings(): string;

function stringOrStrings(memberOrMembers: string, member2?: string, member3?: string): string {
  if (member2 && member3) {
    return `아이브: ${memberOrMembers}, ${member2}, ${member3}`;
  } else {
    return `아이브: ${memberOrMembers}`;
  }
}

console.log(stringOrStrings('안유진, 장원영, 레이'));
console.log(stringOrStrings('안유진', '장원영', '레이'));
// console.log(stringOrStrings('안유진', '장원영'));