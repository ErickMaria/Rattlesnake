import { Builder } from "../builder";
import { ConfigENV } from "../../utils/configenv";
import { TypeConnection } from "./url.type_connection";

export class UrlBuilder extends Builder {

    builder(connection: string, params?: Params): string{

        let token =  ConfigENV.get()['RANCHER_TOKEN'];
        
        if(connection.toLowerCase() == TypeConnection.WSS){
            return `wscat -n -c '${ConfigENV.get()['RANCHER_KUBENETES_ENDPOINT']}/namespaces/${params.namespace}/pods/${params.pod}/exec?container=${params.container}?command=/bin/bash&stdin=true&stderr=true&stdout=true&tty=true' --auth ${token}`;
        }else if(connection.toLowerCase() == TypeConnection.HTTPS){
            return `curl -k -H "Authorization: Bearer ${token}" ${ConfigENV.get()['RANCHER_ENDPOINT']}${params.uri}`;
        }

        return "Error on Build";

    }

}