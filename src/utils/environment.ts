import * as dotenv from 'dotenv';
import * as fs from 'fs';

export class EnvConfig {
    public static get(){
        console.log(dotenv.parse(fs.readFileSync("../../.env")));
        return dotenv.parse(fs.readFileSync("../../.env"));
    }
}