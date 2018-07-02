"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const TestImplementation_1 = require("./implementation/TestImplementation");
class Tools {
    static testInterface(param1, param2) {
        const type = typeof param1;
        if (typeof param1 === "string") {
            console.log("oh ein string");
        }
        else {
            console.log("oh ein " + param1.prototype.name);
        }
        return undefined;
    }
}
exports.Tools = Tools;
const real = new TestImplementation_1.RealImplementation({ name: "JA" }, "nein");
const keys = Object.keys(real);
keys.forEach((key) => console.log(`${key}: ${real[key]}`));
// Tools.testInterface(SomeInterfaceImplementation, (item) => true)
Tools.testInterface(TestImplementation_1.RealImplementation, (item) => true);
Tools.testInterface(TestImplementation_1.TestImplementation, (item) => true);
Tools.testInterface("blub", (item) => true);
