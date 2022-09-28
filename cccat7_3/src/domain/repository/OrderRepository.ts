import Order from "../entities/Order";

export default interface OrdersRepository {
  save(order: Order): Promise<void>;
}
