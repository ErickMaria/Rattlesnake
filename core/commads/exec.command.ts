import { exec } from "shelljs";


export class ExecCommand {
    public static exec(data: string): void {
        exec(data);
    }
}