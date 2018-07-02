import { ISomeInterface } from "./interface/ISomeInterface";
import { TestImplementation, RealImplementation, SomeInterfaceImplementation } from "./implementation/TestImplementation";
import { AbstractImplementation } from "./base/AbstractImplementation";

export class Tools {
    public static testInterface(param1: string, param2: (item: ISomeInterface) => boolean): ISomeInterface | undefined;
    public static testInterface<T extends AbstractImplementation>(param1: (new (...params: any[]) => T), param2: (item: T) => boolean): T | undefined;
    public static testInterface<T extends AbstractImplementation>(
        param1: (new (...params: any[]) => T) | string,
        param2: (item: T | ISomeInterface) => boolean
    ): T | ISomeInterface | undefined {
        const type = typeof param1;
        if (typeof param1 === "string") {
            console.log("oh ein string");
        } else {
            console.log("oh ein " + param1.prototype.name);
        }
        return undefined;
    }
}

const real = new RealImplementation({ name: "JA" }, "nein");
const keys = Object.keys(real);
keys.forEach((key) => console.log(`${key}: ${real[key]}`));

// Tools.testInterface(SomeInterfaceImplementation, (item) => true)
Tools.testInterface(RealImplementation, (item) => true);
Tools.testInterface(TestImplementation, (item: TestImplementation) => true);
Tools.testInterface("blub", (item) => true);