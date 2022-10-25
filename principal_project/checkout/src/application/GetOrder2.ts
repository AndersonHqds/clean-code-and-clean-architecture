import OrderQuery from "../infra/query/OrderQuery"


export default class GetOrder2 {

	constructor (readonly orderQuery: OrderQuery) {
	}

	async execute (guid: string): Promise<any> {
		return this.orderQuery.getByGuid(guid);
	}
}