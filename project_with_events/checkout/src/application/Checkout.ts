import CheckoutCommand from "../domain/event/CheckoutCommand";
import OrderPlaced from "../domain/event/OrderPlaced";
import Queue from "../infra/queue/Queue";

// usecase
export default class Checkout {
  constructor(readonly queue: Queue) {}

  async execute(input: Input): Promise<void> {
    await this.queue.publish(new CheckoutCommand(input));
  }
}

type Input = {
  from: string;
  to: string;
  cpf: string;
  date: Date;
  orderItems: { idItem: number; quantity: number }[];
};
