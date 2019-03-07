export class Commands{
    
    public static exec(message: string, callback: () => any): any{
        
        message = message.trim();

        if(this.test(message, /^(container)(\s)(list)$/)){
            return callback();
        }else if(this.test(message, /^(list)(\s)(volumes|configmap)(\s)(-n|--name)(\s)(\w+)$/)){
            return  callback();
        }else if(this.test(message, /^(configmap|volumes)(\s)(show|edit)(\s)(.*)([^/]*)(\s)(-n|--name)(\s)(\w+)$/)){
            return  callback();
        }

        return false;
    }

    private static test(message: string, pattern: RegExp): boolean {
        if(new RegExp(pattern).test(message)){
            return true
        }
        return false;
    }

}