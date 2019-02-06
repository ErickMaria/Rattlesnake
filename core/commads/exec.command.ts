import { exec } from "shelljs";


export class ExecCommand {
    public exec(data: string): void {
        exec(data);
    }
}