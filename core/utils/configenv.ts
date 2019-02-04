import * as dotenv from 'dotenv';

export class ConfigENV {

    static get(){
        return dotenv.config().parsed;;
     }

}