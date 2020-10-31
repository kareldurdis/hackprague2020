export const formatEuro = (amount: number) => new Intl.NumberFormat('en', {style: 'currency', currency: 'EUR'}).format(amount);
