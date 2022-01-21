import { ConnectionOptions, createConnection } from "typeorm";
import { Photo } from "./entity/Photo";

const options: ConnectionOptions = {
  type: "sqljs",
  location: "testing.sqlite",
  entities: [Photo],
  logging: true,
};
createConnection(options).then(async (connection) => {
  let photo = new Photo();
  photo.name = "Holla";

  await connection.manager.save(photo);
});
