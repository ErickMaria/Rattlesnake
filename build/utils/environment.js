"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv = require("dotenv");
const fs = require("fs");
class EnvConfig {
    static get() {
        console.log(dotenv.parse(fs.readFileSync("../../.env")));
        return dotenv.parse(fs.readFileSync("../../.env"));
    }
}
exports.EnvConfig = EnvConfig;
