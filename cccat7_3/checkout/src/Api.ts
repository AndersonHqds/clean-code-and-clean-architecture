import ExpressAdapter from "./infra/http/ExpressAdapter";
import Router from "./infra/controller/http/OrderController";
import PgPromiseAdapter from "./infra/database/PgPromiseAdapter";
import OrderController from "./infra/controller/http/OrderController";

const http = new ExpressAdapter();
const connection = new PgPromiseAdapter();
new OrderController(http, connection);
http.listen(3000);
