interface CurrencyRate {
    name: string;
    rate: number;
    fullName: string;
}

export const UAHRates: CurrencyRate[] = [
    {
        name: 'EUR',
        fullName: 'Euro',
        rate: 33.67,
    },
    {
        name: 'USD',
        rate: 27.67,
        fullName: 'US Dollar',
    },
    {
        name: 'GBR',
        rate: 39.15,
        fullName: 'Pound Sterling',
    },
    {
        name: 'CAD',
        rate: 22.68,
        fullName: 'Canadian Dollar',
    },
];
