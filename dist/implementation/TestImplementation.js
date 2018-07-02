"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const AbstractImplementation_1 = require("../base/AbstractImplementation");
class RealImplementation extends AbstractImplementation_1.AbstractImplementation {
    constructor(a, b) {
        super();
        this.foo = a.name;
        this.bar = b;
    }
}
exports.RealImplementation = RealImplementation;
class SomeInterfaceImplementation {
    constructor(a, b) {
        this.name = a.key;
    }
}
exports.SomeInterfaceImplementation = SomeInterfaceImplementation;
class TestImplementation extends AbstractImplementation_1.AbstractImplementation {
}
exports.TestImplementation = TestImplementation;
