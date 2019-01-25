"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = require("./bin/server");
const environment_1 = require("./utils/environment");
const app = server_1.Server.bootstrap().app;
const PORT = parseInt(environment_1.EnvConfig.get()['PORT']);
const HOST = environment_1.EnvConfig.get()['HOST'];
app.listen(PORT, HOST, () => {
    console.log(`Server runnig on http://${HOST}:${PORT}`);
});
