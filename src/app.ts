import { Server } from './bin/server';
import { EnvConfig } from './utils/environment';
const app = Server.bootstrap().app;

const PORT = parseInt(EnvConfig.get()['PORT']);
const HOST = EnvConfig.get()['HOST'];

app.listen(PORT, HOST, () =>{
    console.log(`Server runnig on http://${HOST}:${PORT}`);
});