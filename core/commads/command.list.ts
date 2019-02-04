import { Commands } from "./command";
import { CommandConatainer } from "./command.container";

export class CommandList extends CommandConatainer {
    
    check(data: string): boolean {
        
        if(this.dataAsArray(data).length == 2){
            if(super.check(data) == true){
                if(this.dataAsArray(data)[1] == 'list'){
                    return true;
                }
                
            }
        }

        return false;

    }
    
    command(data: string): string {
        if(this.check(data) == true){
            return data;
        }
        return 'invalid massage';
    }

}