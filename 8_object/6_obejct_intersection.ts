type PersonType = {
  name: string;
  age: number;
}

type CompanyType = {
  company: string;
  companyRegistrationNumber: string;
}

type PersonAndCompanyType = PersonType & CompanyType

const jisoo: PersonAndCompanyType = {
  name: '지수',
  age: 32,
  company: 'YG',
  companyRegistrationNumber: 'xxxyyyzzz',
};

type PetType = {
  petName: string;
  petAge: number;
}

type CompanyOrPetType = PersonType & (CompanyType | PetType);

const companyOrPet: CompanyOrPetType = {
  name: '코드팩토리',
  age: 32,

  company: '코드팩토리 주식회사',
  companyRegistrationNumber: 'xxxxxxxxxx',

  petName: '오리',
  petAge: 8,
};