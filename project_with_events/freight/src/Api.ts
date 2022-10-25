import FreightController from "./infra/controller/FreightController";
import PgPromiseAdapter from "./infra/database/PgPromiseAdapter";
import ExpressAdapter from "./infra/http/ExpressAdapter";

const http = new ExpressAdapter();
const connection = new PgPromiseAdapter();
new FreightController(http, connection);
http.listen(3002);
