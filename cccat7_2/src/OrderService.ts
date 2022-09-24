import Order from "./Order";
import ItemRepository from "./ItemRepository";

export default class OrderService {
  // Porta secuntária (Driven)
  constructor(readonly itemRepository: ItemRepository) {}

  // Porta primária (Driver)
  async preview(input: Input): Promise<Output> {
    // Entity (Clean Architecture)
    const order = new Order(input.cpf);
    for (const orderItem of input.orderItems) {
      const item = await this.itemRepository.getItem(orderItem.idItem);
      order.addItem(item, orderItem.quantity);
    }
    const total = order.getTotal();
    return {
      total,
    };
  }
}

type Input = {
  cpf: string;
  orderItems: { idItem: number; quantity: number }[];
};

type Output = {
  total: number;
};
