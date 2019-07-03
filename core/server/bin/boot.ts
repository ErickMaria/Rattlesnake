import { Loader } from "./loader";

import { Server } from "../server";

const load  = new Loader();

const server: Server = load.loadServerAs();

server.load();