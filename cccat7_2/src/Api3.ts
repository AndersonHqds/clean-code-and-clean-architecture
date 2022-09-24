import ExpressAdapter from "./ExpressAdapter";
import Router from "./OrderController";

// Framework and Driver (Clean Architecture)
const http = new ExpressAdapter();
// Interface Adapter
const router = new Router(http);
http.listen(3000);
