import { Commands } from "./command";

export class CommandConatainer implements Commands{
    check(data: string): boolean {

        if(this.dataAsArray(data)[0] == 'container'){
            return true;
        }

        return false;
    }

    dataAsArray(data: string): Array<string>{
        return data.split(' ');
    }

    command(data: string): any {
        return;
    }

}