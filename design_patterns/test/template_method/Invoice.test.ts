import { isTemplateExpression } from "typescript";
import Beer from "../../src/template_method/Beer";
import Gin from "../../src/template_method/Gin";
import Invoice from "../../src/template_method/Invoice";
import Item from "../../src/template_method/Item";
import Juice from "../../src/template_method/Juice";
import Water from "../../src/template_method/Water";
import Whisky from "../../src/template_method/Whisky";
import Wine from "../../src/template_method/Wine";

test("Deve criar uma fatura de compra", () => {
  const invoice = new Invoice();
  invoice.addItem(new Beer("Colorado 600ml", 10)); // 10% = 1
  invoice.addItem(new Whisky("Jack Daniels", 100)); // 20% = 20
  invoice.addItem(new Water("VOSS", 5)); // 0% = 0
  // invoice.addItem(new Wine("Campolargo", 10)); // 0.5%
  // invoice.addItem(new Juice("Laranja", 10)); // 0% = 0
  invoice.addItem(new Gin("Shapire", 100)); // 0% = 0
  const taxes = invoice.calculateTaxes();
  expect(taxes).toBe(21.5);
});
