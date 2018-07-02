import { ISomeInterface } from "../interface/ISomeInterface";
import { AbstractImplementation } from "../base/AbstractImplementation";

export class RealImplementation extends AbstractImplementation {
    constructor(a: ISomeInterface, b: string) {
        super();
        this.foo = a.name;
        this.bar = b;
    }
    [attr: string]: string | undefined;
    foo: string;
    bar: string;
}

export class SomeInterfaceImplementation implements ISomeInterface {
    name: string;
    constructor(a: { key: string }, b: string) {
        this.name = a.key;
    }
    [attr: string]: string;
}

export class TestImplementation extends AbstractImplementation {

}
