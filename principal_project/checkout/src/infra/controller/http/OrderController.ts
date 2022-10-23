import Checkout from "../../../application/Checkout";
import Checkout2 from "../../../application/Checkout2";
import PreviewOrder from "../../../application/PreviewOrder";
import Connection from "../../database/Connection";
import Http from "../../http/Http";

export default class OrderController {
  constructor(
    readonly http: Http,
    readonly previewOrder: PreviewOrder,
    readonly checkout: Checkout2
  ) {
    http.on("post", "/orderPreview", function (params: any, body: any) {
      // Application / Use cases (Clean Architecture)
      // const itemRepository = new ItemRepositoryMemory();
      const output = previewOrder.execute(body);
      return output;
    });

    http.on("post", "/checkout", function (params: any, body: any) {
      // Application / Use cases (Clean Architecture)
      // const itemRepository = new ItemRepositoryMemory();
      const output = checkout.execute(body);
      return output;
    });
  }
}
