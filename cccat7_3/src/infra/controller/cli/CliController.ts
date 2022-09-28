import CLIManager from "../../cli/CLIManager";
import Connection from "../../database/Connection";
import ItemRepositoryMemory from "../../../infra/repository/memory/itemRepositoryMemory";
import PreviewOrder from "../../../application/PreviewOrder";

// Interface Adapter
export default class CliController {
  constructor(cliManager: CLIManager, readonly connection: Connection) {
    let cpf: string = "";
    let orderItems: { idItem: number; quantity: number }[] = [];

    cliManager.addCommand("cpf", (params: string) => {
      cpf = params;
    });

    cliManager.addCommand("add-item", (params: string) => {
      const [idItem, quantity] = params.split(" ");
      orderItems.push({
        idItem: parseInt(idItem),
        quantity: parseInt(quantity),
      });
    });

    cliManager.addCommand("preview", async () => {
      // const itemRepository = new ItemRepositoryDatabase(connection);
      const itemRepository = new ItemRepositoryMemory();
      const previewOrder = new PreviewOrder(itemRepository);
      const input = { cpf, orderItems };
      const output = await previewOrder.execute(input);
      return `total: ${output.total}`;
    });
  }
}
