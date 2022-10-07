import Connection from "./Connection";
import pgp from "pg-promise";

// Adapter, Wrapper = Design Pattern de comportamento
export default class PgPromiseAdapter implements Connection {
  connection: any;

  constructor() {
    this.connection = pgp()("postgress://postgres:123456@localhost:5432/app");
  }
  query(statement: string, params: any): Promise<any> {
    return this.connection.query(statement, params);
  }
  close(): Promise<void> {
    return this.connection.$pool.end();
  }
}
