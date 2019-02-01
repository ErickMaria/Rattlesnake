const http = require('http');

import { EnvConfig } from "../utils/environment";
import { Application } from '../application'

const app = Application.bootstrap();

const PORT = parseInt(EnvConfig.get()['PORT']);
const HOST = EnvConfig.get()['HOST'];

http.createServer(app).listen(PORT, () => {
  console.log(`server listening on port ${PORT}`);
});