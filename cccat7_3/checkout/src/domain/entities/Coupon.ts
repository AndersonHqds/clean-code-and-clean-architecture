export default class Coupon {
  constructor(
    readonly code: string,
    readonly percentage: number,
    readonly expiredDate: Date
  ) {}

  isExpired(date: Date) {
    return this.expiredDate.getTime() < date.getTime();
  }

  getDiscount(total: number) {
    return (total * this.percentage) / 100;
  }
}
