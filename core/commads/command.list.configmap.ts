import { CommandList } from "./command.list";

export class CommandConfigMap extends CommandList {

    check(data: string): boolean {
        if(this.dataAsArray(data).length == 3){
            
            const newDataSplited = data.split(' ');
            const newData = newDataSplited[0] + ' ' + newDataSplited[1];

            if(super.check(newData) == true){
                if(this.dataAsArray(data)[2] == 'configmap'){
                    return true;
                }
                
            }
        }
        return false;
    }

    command(data?:string): any {
        if(this.check(data)){
            return data;
        }
        return 'invalid massage';
    }
}