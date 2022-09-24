import ItemRepositoryDatabase from "./ItemRepositoryDatabase";
import OrderService from "./OrderService";

process.stdin.on("data", async (chunk) => {
  const command = chunk.toString();
  let cpf: string = "";
  let orderItems: { idItem: number; quantity: number }[] = [];

  if (command.startsWith("cpf")) {
    cpf = command.replace("cpf ", "");
  }
  if (command.startsWith("add-item")) {
    const [idItem, quantity] = command.replace("add-item", "").split(" ");
    orderItems.push({ idItem: parseInt(idItem), quantity: parseInt(quantity) });
  }
  if (command.startsWith("preview")) {
    const itemRepository = new ItemRepositoryDatabase();
    const orderService = new OrderService(itemRepository);
    const output = await orderService.preview({ cpf, orderItems });
    console.log(`Total: ${output.total}`);
  }
});
