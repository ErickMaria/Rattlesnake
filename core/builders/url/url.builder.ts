import { Builder } from "../builder";
import { ConfigENV } from "../../utils/configenv";
import { TypeConnection } from "./url.type_connection";

export class UrlBuilder extends Builder {

    builder(url: string, params: Params): string{

        let getUrl = super.builder(url, ',');
        
        let typeConnection = getUrl.split(":");
        let token =  ConfigENV.get()['RANCHER_TOKEN'];
        
        if(typeConnection[0] == TypeConnection.WSS){
            return `wscat -n -c '${getUrl}/namespaces/${params.namespace}/pods/${params.pod}/exec?container=${params.container}?command=/bin/bash&stdin=true&stderr=true&stdout=true&tty=true' --auth ${token}`;
        }else if(typeConnection[0] == TypeConnection.HTTPS){
            return `curl -k -H "Authorization: Bearer ${token}" ${getUrl}`;
        }

        return "Error on Build";

    }
}