"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const TestImplementation_1 = require("./implementation/TestImplementation");
class Tools {
    static findInDataCollection(source, type, cb) {
        let typename;
        if (typeof type === "string") {
            typename = type;
        }
        else {
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
exports.Tools = Tools;
const testCollection = {
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
};
// Tools.testInterface(SomeInterfaceImplementation, (item) => true)
const foo = Tools.findInDataCollection(testCollection, TestImplementation_1.RealImplementation, (item) => item.foo === "1");
const bar = Tools.findInDataCollection(testCollection, TestImplementation_1.TestImplementation, (item) => item.bar === "10");
const bla = Tools.findInDataCollection(testCollection, "blubdd", (item) => item.bla === "1");
console.log(foo, bar, bla);
