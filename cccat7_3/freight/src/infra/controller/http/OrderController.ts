import PreviewOrder from "../../../application/PreviewOrder";
import Connection from "../../database/Connection";
import Http from "../../http/Http";
import ItemRepositoryMemory from "../../../infra/repository/memory/itemRepositoryMemory";
import ItemRepositoryDatabase from "../../repository/database/ItemRepositoryDatabase";

export default class OrderController {
  constructor(readonly http: Http, readonly connection: Connection) {
    http.on("post", "/orderPreview", function (params: any, body: any) {
      // Application / Use cases (Clean Architecture)
      const itemRepository = new ItemRepositoryDatabase(connection);
      // const itemRepository = new ItemRepositoryMemory();
      const previewOrder = new PreviewOrder(itemRepository);
      const output = previewOrder.execute(body);
      return output;
    });
  }
}
