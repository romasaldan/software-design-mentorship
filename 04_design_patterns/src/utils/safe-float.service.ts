export class SafeFloatService {
  private getDecimalLength(number: number) {
    const [, floatPart] = Math.abs(number).toString().split('.');

    return floatPart?.toString().length || 0;
  }

  private getMaxDecimalLength(a: number, b: number) {
    return Math.max(this.getDecimalLength(a), this.getDecimalLength(b));
  }

  public add(a: number, b: number): number {
    const decimalLength = this.getMaxDecimalLength(a, b);

    return (a * 10 ** decimalLength + b * 10 ** decimalLength) / 10 ** decimalLength;
  }

  public substract(a: number, b: number): number {
    const decimalLength = this.getMaxDecimalLength(a, b);

    return (a * 10 ** decimalLength - b * 10 ** decimalLength) / 10 ** decimalLength;
  }

  public multiply(a: number, b: number): number {
    const decimalLength = this.getMaxDecimalLength(a, b);

    return (a * 10 ** decimalLength * (b * 10 ** decimalLength)) / 10 ** (decimalLength * 2);
  }

  public divide(a: number, b: number): number {
    const decimalLength = this.getMaxDecimalLength(a, b);

    return (a * 10 ** decimalLength) / (b * 10 ** decimalLength);
  }
}
