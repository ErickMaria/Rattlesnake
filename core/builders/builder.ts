export abstract class Builder{

    builder(data: Array<string>): string{
        return data.toString().replace(",", "/");
    }

}