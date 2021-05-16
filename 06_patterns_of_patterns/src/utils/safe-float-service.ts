class SafeFloatService {
    private getDecimalLength(number: number) {
        const [, floatPart] = Math.abs(number).toString().split('.');

        return floatPart?.toString().length || 0;
    }

    private getMaxDecimalLength(a: number, b: number) {
        return Math.max(this.getDecimalLength(a), this.getDecimalLength(b));
    }

    add(a: number, b: number): number {
        const decimalLength = this.getMaxDecimalLength(a, b);

        return (a * 10 ** decimalLength + b * 10 ** decimalLength) / 10 ** decimalLength;
    }

    substract(a: number, b: number): number {
        const decimalLength = this.getMaxDecimalLength(a, b);

        return (a * 10 ** decimalLength - b * 10 ** decimalLength) / 10 ** decimalLength;
    }

    multiply(a: number, b: number): number {
        const decimalLength = this.getMaxDecimalLength(a, b);

        return (a * 10 ** decimalLength * (b * 10 ** decimalLength)) / 10 ** (decimalLength * 2);
    }

    divide(a: number, b: number): number {
        const decimalLength = this.getMaxDecimalLength(a, b);

        return (a * 10 ** decimalLength) / (b * 10 ** decimalLength);
    }

    round(a: number, precision: number): number {
        return Math.round(a * 10 ** precision) / 10 ** precision;
    }
}

export {SafeFloatService};
