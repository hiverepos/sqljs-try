import * as fs from "fs";
import { Database } from "sql.js";
import initSqlJs from "./sql-wasm";

initSqlJs().then(function (SQL: any) {
  var db: Database = new SQL.Database();
  // Run a query without reading the results

  db.run("CREATE TABLE test (col1, col2);");
  // Insert two rows: (1,111) and (2,444)
  db.run("INSERT INTO test VALUES (?,?), (?,?)", [1, 11, 2, 22]);

  var data = db.export();
  var buffer = Buffer.from(data);
  fs.writeFileSync("demo.sqlite", buffer);
});
