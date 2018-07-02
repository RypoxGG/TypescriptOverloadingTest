import { ISomeInterface } from "../interface/ISomeInterface";

function enumerable(value: boolean) {
    return function (target: any, propertyKey: string, propertyDescriptor: PropertyDescriptor) {
        propertyDescriptor.enumerable = value;
    }
}

export abstract class AbstractImplementation implements ISomeInterface {
    [attr: string]: string | undefined;

    constructor() {
    }

    get name(): string {
        return this.constructor.name;
    }

    @enumerable(false)
    private get ImplementationCheck(): string {
        return "Implemented";
    };
}
