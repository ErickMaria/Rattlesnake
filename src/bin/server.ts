import { Application } from "../app";
import { EnvConfig } from "../utils/environment";

const app = Application.bootstrap().app;
const PORT = parseInt(EnvConfig.get()['PORT']);
const HOST = EnvConfig.get()['HOST'];

app.listen(PORT, HOST, () =>{
    console.log(`Server runnig on http://${HOST}:${PORT}`);
});