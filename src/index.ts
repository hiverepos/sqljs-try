import * as fs from "fs";
import "reflect-metadata";
import { createConnection } from "typeorm";
import { User } from "./entity/User";

createConnection()
  .then(async (connection) => {
    console.log("Inserting a new user into the database...");
    const user = new User();
    user.firstName = "Timber";
    user.lastName = "Ashraf";
    user.age = 25;
    user.date_created = Date.now();
    await connection.manager.save(user);
    console.log("Saved a new user with id: " + user.id);

    console.log("Loading users from the database...");
    const users = await connection.manager.find(User);
    console.log("Loaded users: ", users);

    console.log("Here you can setup and run express/koa/any other framework.");
    const data = connection.sqljsManager.exportDatabase();

    const buffer = Buffer.from(data);
    fs.writeFileSync("demo.db", buffer);
  })
  .catch((error) => console.log(error));
