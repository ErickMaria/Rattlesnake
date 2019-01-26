import * as dotenv from 'dotenv';
import * as path from 'path';
import * as fs from 'fs';

export class EnvConfig {
    public static get(){
        return dotenv.parse(fs.readFileSync(path.join(__dirname, "../../.env") ) );
    }
}