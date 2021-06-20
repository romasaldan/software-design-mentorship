export type ModelType = 'single' | 'multiple';

export interface CurrencyRate {
    name: string;
    rate: number;
    fullName: string;
}

export interface ModelItem extends CurrencyRate {
    amount: number;
    price: number;
}
