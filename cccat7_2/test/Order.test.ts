import Coupon from "../src/Coupon";
import Dimension from "../src/Dimension";
import Item from "../src/Item";
import Order from "../src/Order";

test("Deve criar um pedido vazio", function () {
  const order = new Order("886.634.854-68");
  const total = order.getTotal();
  expect(total).toBe(0);
});

test("Não deve criar um pedido com CPF inválido", function () {
  expect(() => new Order("111.111.111-11")).toThrow(new Error("Cpf Inválido"));
});

test("Deve criar um pedido com 3 itens", function () {
  const order = new Order("886.634.854-68");
  order.addItem(new Item(1, "Guitarra", 1000), 1);
  order.addItem(new Item(2, "Amplificador", 5000), 1);
  order.addItem(new Item(3, "Cabo", 30), 3);
  const total = order.getTotal();
  expect(total).toBe(6090);
});

test("Deve criar um pedido com 3 itens com cupom de desconto", function () {
  const order = new Order("886.634.854-68");
  order.addItem(new Item(1, "Guitarra", 1000), 1);
  order.addItem(new Item(2, "Amplificador", 5000), 1);
  order.addItem(new Item(3, "Cabo", 30), 3);
  order.addCoupon(new Coupon("VALE20", 20, new Date("2023-03-01T10:00:00")));
  const total = order.getTotal();
  expect(total).toBe(4872);
});

test("Deve criar um pedido com 3 itens com cupom de desconto expirado", function () {
  const order = new Order("886.634.854-68", new Date("2022-03-10T10:00:00"));
  order.addItem(new Item(1, "Guitarra", 1000), 1);
  order.addItem(new Item(2, "Amplificador", 5000), 1);
  order.addItem(new Item(3, "Cabo", 30), 3);
  order.addCoupon(new Coupon("VALE20", 20, new Date("2022-03-01T10:00:00")));
  const total = order.getTotal();
  expect(total).toBe(6090);
});

test("Não deve fazer um pedido com quantidade de item negativa", function () {
  const order = new Order("886.634.854-68");
  expect(() => order.addItem(new Item(1, "Guitarra", 1000), -1)).toThrow(
    "Invalid quantity"
  );
});

test("Não deve fazer um pedido com item duplicado", function () {
  const order = new Order("886.634.854-68");
  order.addItem(new Item(1, "Guitarra", 1000), 1);
  expect(() => order.addItem(new Item(1, "Guitarra", 1000), 1)).toThrow(
    "Duplicated items"
  );
});

test("Deve criar um pedido com 3 itens e calcular o frete", function () {
  const order = new Order("886.634.854-68");
  order.addItem(
    new Item(1, "Guitarra", 1000, new Dimension(100, 30, 10, 3)),
    1
  );
  order.addItem(
    new Item(2, "Amplificador", 5000, new Dimension(50, 50, 50, 20)),
    1
  );
  order.addItem(new Item(3, "Cabo", 30, new Dimension(10, 10, 10, 1)), 3);
  const total = order.getTotal();
  expect(total).toBe(6350);
});
