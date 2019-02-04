export abstract class Builder{

    separator(data: Array<string>, pattern: string): Array<string>{
        return data.toString().split(pattern);
    }

    builder(data: Array<string>, replace: string, pattern?: string): string{
        return data.toString().replace(pattern, replace);
    }
}