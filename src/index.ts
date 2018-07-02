import { ISomeInterface } from "./interface/ISomeInterface";
import { TestImplementation, RealImplementation, SomeInterfaceImplementation } from "./implementation/TestImplementation";
import { AbstractImplementation } from "./base/AbstractImplementation";
import { IExampleDataCollection } from "./interface/IExampleDataCollection";

export class Tools {
    public static findInDataCollection(source: IExampleDataCollection, type: string, cb: (item: ISomeInterface) => boolean): ISomeInterface | undefined;
    public static findInDataCollection<T extends AbstractImplementation>(source: IExampleDataCollection, type: (new (...params: any[]) => T), cb: (item: T) => boolean): T | undefined;
    public static findInDataCollection<T extends AbstractImplementation>(
        source: IExampleDataCollection,
        type: (new (...params: any[]) => T) | string,
        cb: (item: T | ISomeInterface) => boolean
    ): T | ISomeInterface | undefined {
        let typename: string;
        if (typeof type === "string") {
            typename = type;
        } else {
            typename = type.prototype.name;
        }
        const sourceItem = source[typename];
        if (sourceItem) {
            const item = sourceItem.find((item) => cb({ name: typename, ...item["@"] }));
            return item && { name: typename, ...item["@"] };
        }
        return undefined;
    }
}

const testCollection: IExampleDataCollection = {
    RealImplementation: [
        {
            "@": {
                foo: "1",
                bar: "2",
            }
        },
        {
            "@": {
                foo: "3",
                bar: "4",
            }
        },
        {
            "@": {
                foo: "5",
                bar: "6",
            }
        }
    ],
    TestImplementation: [
        {
            "@": {
                foo: "7",
                bar: "8",
            }
        },
        {
            "@": {
                foo: "9",
                bar: "10",
            }
        },
        {
            "@": {
                foo: "11",
                bar: "12",
            }
        }
    ],
    blub: [
        {
            "@": {
                bla: "1",
            }
        },
        {
            "@": {
                blub: "2",
            }
        },
    ]
}

// Tools.testInterface(SomeInterfaceImplementation, (item) => true)
const foo = Tools.findInDataCollection(testCollection, RealImplementation, (item: RealImplementation) => item.foo === "1");
const bar = Tools.findInDataCollection(testCollection, TestImplementation, (item: TestImplementation) => item.bar === "10");
const bla = Tools.findInDataCollection(testCollection, "blubdd", (item) => item.bla === "1");

console.log(foo, bar, bla);