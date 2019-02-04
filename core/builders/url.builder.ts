import { Builder } from "./builder";
import { ConfigENV } from "../utils/configenv";

enum TypeConnection {
    WSS = "wss",
    HTTPS = "https"
}

export class UrlBuilder extends Builder {

    builder(data: Array<string>): string{

        let typeConnection = super.builder(data).split(":");
        let token =  ConfigENV.get()['RANCHER_TOKEN'];
        
        if(typeConnection[0] == TypeConnection.WSS){
            return "wscat -n -c " + "'" + super.builder(data) + "'" + ' --auth ' + token;
        }else if(typeConnection[0] == TypeConnection.HTTPS){
            return `curl -k -H "Authorization: Bearer ${token}" ${super.builder(data)}`;
        }

        return "Error on Build";

    }
}