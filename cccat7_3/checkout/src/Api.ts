import ExpressAdapter from "./infra/http/ExpressAdapter";
import Router from "./infra/controller/http/OrderController";
import PgPromiseAdapter from "./infra/database/PgPromiseAdapter";
import OrderController from "./infra/controller/http/OrderController";
import GetItemHttpGateway from "./infra/gateway/GetItemHttpGateway";
import PreviewOrder from "./application/PreviewOrder";

const http = new ExpressAdapter();
const connection = new PgPromiseAdapter();
const getItemGateway = new GetItemHttpGateway();
const previewOrder = new PreviewOrder(getItemGateway);
new OrderController(http, previewOrder);
http.listen(3000);
