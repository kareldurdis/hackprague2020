import faker from 'faker';

export interface Transaction {
    id: string;
    date: Date;
    amount: number,
    payee: string;
    description: string;
}

faker.seed(1);

const transactions: Transaction[] = [
    {
        id: faker.random.uuid(),
        date: new Date("2020-10-01"),
        amount: 2000,
        payee: 'The Company',
        description: 'Salary',
    },
    {
        id: faker.random.uuid(),
        date: new Date("2020-10-15"),
        amount: -560,
        payee: 'Landlord',
        description: 'Rent',
    },
    {
        id: faker.random.uuid(),
        date: new Date("2020-10-04"),
        amount: -80,
        payee: 'Tesco',
        description: 'Groceries',
    },
    {
        id: faker.random.uuid(),
        date: new Date("2020-10-11"),
        amount: -60,
        payee: 'Lidl',
        description: 'Groceries',
    },
    {
        id: faker.random.uuid(),
        date: new Date("2020-10-15"),
        amount: -50,
        payee: 'PRE',
        description: 'Electricity',
    },
    {
        id: faker.random.uuid(),
        date: new Date("2020-10-15"),
        amount: -30,
        payee: 'O2',
        description: 'Phone + Internet',
    },
    {
        id: faker.random.uuid(),
        date: new Date("2020-10-15"),

        amount: -30,
        payee: 'The restaurant',
        description: 'Restaurant',
    },
    {
        id: faker.random.uuid(),
        date: new Date("2020-10-12"),

        amount: -20,
        payee: 'McDonalds',
        description: 'Fastfood',
    },
    {
        id: faker.random.uuid(),
        date: new Date("2020-10-15"),

        amount: -100,
        payee: 'NN',
        description: 'Life insurance',
    },
    {
        id: faker.random.uuid(),
        date: new Date("2020-10-15"),

        amount: -20,
        payee: 'Allianz',
        description: 'Pension fund',
    },
    {
        id: faker.random.uuid(),
        date: new Date("2020-10-12"),

        amount: -100,
        payee: 'Clothing store',
        description: 'Clothing',
    },
    {
        id: faker.random.uuid(),
        date: new Date("2020-10-23"),

        amount: -20,
        payee: 'McDonalds',
        description: 'Fastfood',
    },
    {
        id: faker.random.uuid(),
        date: new Date("2020-10-23"),

        amount: -20,
        payee: 'MOL',
        description: 'Petrol',
    },
];

export default transactions;
