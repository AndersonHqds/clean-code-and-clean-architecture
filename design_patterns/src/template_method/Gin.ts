import TaxItem from "./TaxItem";

export default class Gin extends TaxItem {
  constructor(description: string, price: number) {
    super("Gin", description, price);
  }

  getTax(): number {
    return 1.2;
  }
}
