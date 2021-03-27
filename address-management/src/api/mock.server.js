import { createServer, Model, RestSerializer } from "miragejs";
import uuid from "react-uuid";

export default function setupMockServer() {
  createServer({
    serializers: {
      application: RestSerializer,
    },

    models: {
      address: Model,
    },

    routes() {
      this.namespace = "api";
      this.timing = 3000;
      this.resource("addresses");
    },

    seeds(server) {
      server.create("address", {
        id: uuid(),
        name: "Prerana Nawar",
        phonenumber: 9656767876,
        zipcode: 400014,
        address: "2665, Lake Forest Drive",
        city: "Mumbai",
        state: "Maharashtra",
        country: "India",
        addresstype: "Home",
      });
      server.create("address", {
        id: uuid(),
        name: "Siddhi Mejari",
        phonenumber: 9145676565,
        zipcode: 400080,
        address: "3458, Hershell Hollow Road",
        city: "Worli",
        state: "Maharashtra",
        country: "India",
        addresstype: "Home",
      });
    },
  });
}
