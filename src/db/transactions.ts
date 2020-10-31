import faker from "faker";
import {formatEuro} from "../utils";

export interface Transaction {
    id: string;
    amount: number,
    payee: string;
    description: string;
}

faker.seed(1);
function getFakeArray<Item>(fakerFn: (index: number) => Item, limit = 5): Item[] {
    return Array(limit)
        .fill(null)
        .map((item, index) => fakerFn(index));
}

export const transactions: Transaction[] = getFakeArray(() => {
    const amount = faker.random.number({min: 1, max: 100});
    const payee = faker.company.companyName();
    return {
        id: faker.random.uuid(),
        amount,
        payee,
        description: `${formatEuro(amount)} ${payee}`,
    }
}, 40);
