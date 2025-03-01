const object1: Record<string, string | number> = {
  name: 'Luciano',
  lastname: 'Machado',
  age: 24,
};
console.log(object1);

type PersonProtocol = {
  name?: string;
  lastname?: string;
  age?: number;
};

// Required
type PersonRequired = Required<PersonProtocol>;
// Partial
type PersonPartial = Partial<PersonProtocol>;
// Readonly
type PersonReadonly = Readonly<PersonProtocol>;
// Pick
type PersonPick = Pick<PersonProtocol, 'name' | 'lastname'>;
// Omit
type PersonOmit = Omit<PersonProtocol, 'age'>;

const object2: PersonRequired = {
  name: 'Luciano',
  lastname: 'Machado',
  age: 24,
};
console.log(object2);

// Extract e Exclude
type ABC = 'A' | 'B' | 'C';
type CDE = 'C' | 'D' | 'E';
type TypeExclude = Exclude<ABC, CDE>; // Computa todos os tipos em ABC que não estão em CDE
type TypeExtract = Extract<ABC, CDE>; // Computa todos os tipos em ABC que também estão em CDE

type AccountMongo = {
  _id: string;
  name: string;
  age: number;
};

// type AccountApi = {
//   id: string;
//   name: string;
//   age: number;
// };

type AccountApi = Pick<AccountMongo, Exclude<keyof AccountMongo, '_id'>> & {
  id: string;
};

const accountMongo: AccountMongo = {
  _id: 'fhjwkehcdkehdwhdiuahd',
  name: 'Luciano',
  age: 24,
};

function mapAccountData(accountMongo: AccountMongo): AccountApi {
  const { _id, ...accountData } = accountMongo;
  return { ...accountData, id: _id };
}

const accountApi = mapAccountData(accountMongo);
console.log('API: ');
console.log(accountApi);

export default 1;
