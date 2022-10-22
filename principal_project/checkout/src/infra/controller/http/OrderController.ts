import PreviewOrder from "../../../application/PreviewOrder";
import Connection from "../../database/Connection";
import Http from "../../http/Http";

export default class OrderController {
  constructor(readonly http: Http, readonly previewOrder: PreviewOrder) {
    http.on("post", "/orderPreview", function (params: any, body: any) {
      // Application / Use cases (Clean Architecture)
      // const itemRepository = new ItemRepositoryMemory();
      const output = previewOrder.execute(body);
      return output;
    });
  }
}
