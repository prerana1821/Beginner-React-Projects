import { createServer, Model, RestSerializer } from "miragejs";
import uuid from "react-uuid";

export default function setupMockServer() {
    createServer({
        serializers: {
            application: RestSerializer
        },

        models: {
            wish: Model
        },

        routes() {
            this.namespace = "api";
            this.timing = 3000;
            this.resource("wishes");
        },

        seeds(server) {
            server.create("wish", { id: uuid(), name: "Learn React" });
            server.create("wish", { id: uuid(), name: "Read Eloquent Javascript" });
        }
    });
}
