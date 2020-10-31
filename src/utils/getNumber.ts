const getNumber = (rawNumber: string | number): number => parseInt(`${rawNumber}`, 10) || 0;

export default getNumber;
