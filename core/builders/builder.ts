export abstract class Builder{

    separator(data: Array<string>, pattern: string): Array<string>{
        return data.toString().split(pattern);
    }

    builder(data: any, replace: any, pattern?: string): string{
        return data.toString().replace(pattern, replace);
    }
}