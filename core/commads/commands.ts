export class Commands{
    
    public static macth(message: string): boolean{
        
        message = message.trim();
        let messageSplited = message.split(' ');
        
        if(messageSplited.length == 2){
            return this.test(message, /^(container)(\s)(list)$/);
        }else if(messageSplited.length == 4){
            return  this.test(message, /^(list)(\s)(volumes|configmap)(\s)(-n|--name)(\s)(\w+)$/);
        }else if(messageSplited.length == 5){
            return  this.test(message, /^(configmap|volumes)(\s)(show|edit)(\s)(.*)([^/]*)(\s)(-n|--name)(\s)(\w+)$/);
        }
        return false;

        // ^(configmap|volumes)(\s)(show|edit)(\s)(.*)([^/]*)(\s)(-n|--name)(\s)(\w+)$
    }

    private static test(message: string, pattern: RegExp): boolean {
        if(new RegExp(pattern).test(message)){
            return true
        }
        return false;
    }

}