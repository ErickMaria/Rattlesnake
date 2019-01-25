"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const bodyParser = require("body-parser");
class Server {
    constructor() {
        this.app = express();
        this.config();
    }
    static bootstrap() {
        return new Server();
    }
    config() {
        this.app.use(bodyParser.urlencoded({ extended: false }));
        this.app.use(bodyParser.json());
    }
}
exports.Server = Server;
