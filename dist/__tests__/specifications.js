"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const tape_1 = __importDefault(require("tape"));
const spok_1 = __importDefault(require("../spok"));
tape_1.default('\nspecifications in isolation', (t) => {
    // ranges and comparisons
    t.ok(spok_1.default.range(0, 2)(1), 'range 0, 2, 1');
    t.ok(spok_1.default.range(0, 2)(0), 'range 0, 2, 0');
    t.ok(spok_1.default.range(0, 2)(2), 'range 0, 2, 2');
    t.ok(!spok_1.default.range(0, 2)(-1), 'not range 0, 2, -1');
    t.ok(!spok_1.default.range(0, 2)(3), 'not range 0, 2, 3');
    // @ts-ignore passing undefined
    t.ok(!spok_1.default.range(0, 2)(undefined), 'not range 0, 2, undefined');
    // @ts-ignore passing null
    t.ok(!spok_1.default.range(0, 2)(null), 'range 0, 2, null');
    t.ok(spok_1.default.ge(0)(1), 'ge 0, 1');
    t.ok(spok_1.default.ge(1)(2), 'ge 1, 2');
    t.ok(spok_1.default.ge(1)(1), 'ge 1, 1');
    t.ok(!spok_1.default.ge(1)(0), 'not ge 1, 0');
    // @ts-ignore passing null
    t.ok(!spok_1.default.ge(1)(null), 'not ge 1, null');
    // @ts-ignore passing undefined
    t.ok(!spok_1.default.ge(1)(undefined), 'not ge 1, undefined');
    t.ok(spok_1.default.gt(0)(1), 'gt 0, 1');
    t.ok(spok_1.default.gt(1)(2), 'gt 1, 2');
    t.ok(!spok_1.default.gt(1)(1), 'not gt 1, 1');
    t.ok(!spok_1.default.gt(1)(0), 'not gt 1, 0');
    // @ts-ignore passing null
    t.ok(!spok_1.default.gt(1)(null), 'not gt 1, null');
    // @ts-ignore passing undefined
    t.ok(!spok_1.default.gt(1)(undefined), 'not gt 1, undefined');
    t.ok(spok_1.default.le(1)(0), 'le 1, 0');
    t.ok(spok_1.default.le(2)(1), 'le 2, 1');
    t.ok(spok_1.default.le(1)(1), 'le 1, 1');
    t.ok(!spok_1.default.le(0)(1), 'not le 0, 1');
    // @ts-ignore passing null
    t.ok(!spok_1.default.le(1)(null), 'not le 1, null');
    // @ts-ignore passing undefined
    t.ok(!spok_1.default.le(1)(undefined), 'not le 1, undefined');
    t.ok(spok_1.default.lt(1)(0), 'lt 1, 0');
    t.ok(spok_1.default.lt(2)(1), 'lt 2, 1');
    t.ok(!spok_1.default.lt(1)(1), 'not lt 1, 1');
    t.ok(!spok_1.default.lt(0)(1), 'not lt 0, 1');
    // @ts-ignore passing null
    t.ok(!spok_1.default.lt(1)(null), 'not lt 1, null');
    // @ts-ignore passing undefined
    t.ok(!spok_1.default.lt(1)(undefined), 'not lt 1, undefined');
    t.ok(spok_1.default.ne(1)(0), 'ne 1, 0');
    // @ts-ignore expected number
    t.ok(spok_1.default.ne(1)('1'), "ne 1, '1'");
    t.ok(!spok_1.default.ne(1)(1), 'not ne 1, 1');
    // @ts-ignore passing undefined
    t.ok(spok_1.default.ne(1)(undefined), 'ne 1, undefined');
    // @ts-ignore passing undefined
    t.ok(spok_1.default.ne(undefined)(1), 'ne undefined, 1');
    // @ts-ignore passing undefined
    t.ok(!spok_1.default.ne(undefined)(undefined), 'not ne undefined, undefined');
    t.ok(spok_1.default.gez(1), 'gez 1');
    t.ok(spok_1.default.gez(0), 'gez 0');
    t.ok(!spok_1.default.gez(-1), 'not gez -1');
    // @ts-ignore passing null
    t.ok(!spok_1.default.gez(null), 'not gez null');
    // @ts-ignore passing undefined
    t.ok(!spok_1.default.gez(undefined), 'not gez undefined');
    t.ok(spok_1.default.gtz(1), 'gtz 1');
    t.ok(!spok_1.default.gtz(0), 'not gtz 0');
    t.ok(!spok_1.default.gtz(-1), 'not gtz -1');
    // @ts-ignore passing null
    t.ok(!spok_1.default.gtz(null), 'not gtz null');
    // @ts-ignore passing undefined
    t.ok(!spok_1.default.gtz(undefined), 'not gtz undefined');
    t.ok(spok_1.default.lez(-1), 'lez -1');
    t.ok(spok_1.default.lez(0), 'lez 0');
    t.ok(!spok_1.default.lez(1), 'not lez 1');
    // @ts-ignore passing null
    t.ok(!spok_1.default.lez(null), 'not lez null');
    // @ts-ignore passing undefined
    t.ok(!spok_1.default.lez(undefined), 'not lez undefined');
    t.ok(spok_1.default.ltz(-1), 'ltz -1');
    t.ok(!spok_1.default.ltz(0), 'not ltz 0');
    t.ok(!spok_1.default.ltz(1), 'not ltz 1');
    // @ts-ignore passing null
    t.ok(!spok_1.default.ltz(null), 'not ltz null');
    // @ts-ignore passing undefined
    t.ok(!spok_1.default.ltz(undefined), 'not ltz undefined');
    // types
    t.ok(spok_1.default.type('object')({}), 'type object, {}');
    t.ok(!spok_1.default.type('object')(1), 'not type object, 1');
    // @ts-ignore passing null
    t.ok(spok_1.default.type('object')(null), 'type object, null');
    t.ok(!spok_1.default.type('object')(undefined), 'not type object, undefined');
    t.ok(spok_1.default.number(1), 'number 1');
    t.ok(!spok_1.default.number('1'), "not number '1'");
    t.ok(!spok_1.default.number({}), 'not number {}');
    t.ok(!spok_1.default.number([]), 'not number []');
    // @ts-ignore passing null
    t.ok(!spok_1.default.number(null), 'not number null');
    t.ok(!spok_1.default.number(undefined), 'not number undefined');
    t.ok(spok_1.default.string('hi'), "string 'hi'");
    t.ok(!spok_1.default.string(1), 'not string 1');
    t.ok(!spok_1.default.string({}), 'not string {}');
    t.ok(!spok_1.default.string([]), 'not string []');
    t.ok(!spok_1.default.string(null), 'not string null');
    t.ok(!spok_1.default.string(undefined), 'not string undefined');
    t.ok(spok_1.default.array([]), 'array []');
    t.ok(!spok_1.default.array({}), 'not array {}');
    t.ok(!spok_1.default.array(undefined), 'not array undefined');
    t.ok(spok_1.default.arrayElements(0)([]), 'arrayElements [] is 0');
    // @ts-ignore should be array
    t.ok(!spok_1.default.arrayElements(0)({}), 'not array {}');
    t.ok(spok_1.default.arrayElements(1)([1]), 'arrayElements [ 1 ] is 1');
    t.ok(spok_1.default.arrayElements(2)([1, 2]), 'arrayElements [ 1, 2 ] is 2');
    t.ok(!spok_1.default.arrayElements(3)([1, 2]), 'arrayElements [ 1, 2 ] is not 3');
    t.ok(spok_1.default.arrayElementsRange(0, 1)([]), 'arrayElementsRange [] is between 0 and 1');
    // @ts-ignore should be array
    t.ok(!spok_1.default.arrayElementsRange(0, 1)({}), 'not array range {}');
    t.ok(spok_1.default.arrayElementsRange(0, 1)([1]), 'arrayElementsRange [ 1 ] is between 0 and 1');
    t.ok(!spok_1.default.arrayElementsRange(2, 3)([1]), 'arrayElementsRange [ 1 ] is not between 2 and 3');
    t.ok(spok_1.default.type('function')(() => { }), 'type function, function () {}');
    t.ok(!spok_1.default.type('function')(1), 'not type function, 1');
    t.ok(!spok_1.default.type('function')(null), 'not type function, null');
    t.ok(!spok_1.default.type('function')(undefined), 'not type function, undefined');
    t.ok(spok_1.default.definedObject({}), 'definedObject {}');
    t.ok(!spok_1.default.definedObject(1), 'not definedObject 1');
    t.ok(!spok_1.default.definedObject(null), 'not definedObject null');
    t.ok(!spok_1.default.definedObject(undefined), 'not definedObject undefined');
    // strings
    if (typeof ''.startsWith === 'function') {
        t.ok(spok_1.default.startsWith('hello')('hello world'), 'startsWith hello, helloWorld');
        t.ok(!spok_1.default.startsWith('hallo')('hello world'), 'startsWith hallo, helloWorld');
        // @ts-ignore passing null
        t.ok(!spok_1.default.startsWith('hello')(null), 'startsWith hello, null');
        // @ts-ignore passing undefined
        t.ok(!spok_1.default.startsWith('hello')(undefined), 'startsWith hello, undefined');
    }
    if (typeof ''.endsWith === 'function') {
        t.ok(spok_1.default.endsWith('world')('hello world'), 'endsWith world, helloWorld');
        t.ok(spok_1.default.endsWith('welt')('hello welt'), 'endsWith welt, helloWelt');
        // @ts-ignore passing null
        t.ok(!spok_1.default.endsWith('hello')(null), 'not endsWith hello, null');
        // @ts-ignore passing undefined
        t.ok(!spok_1.default.endsWith('hello')(undefined), 'not endsWith hello, undefined');
    }
    t.ok(spok_1.default.test(/hello$/)('world hello'), 'test /hello$/, "world hello"');
    t.ok(!spok_1.default.test(/hello$/)('hello world'), 'test /hello$/, "hello world"');
    t.ok(!spok_1.default.test(/hello$/)('world hello '), 'test /hello$/, "world hello "');
    t.ok(spok_1.default.defined(1), '1 is defined');
    t.ok(!spok_1.default.defined(null), 'null is not defined');
    t.ok(!spok_1.default.defined(undefined), 'undefined is not defined');
    t.ok(!spok_1.default.notDefined(1), '1 is not notDefined');
    t.ok(spok_1.default.notDefined(null), 'null is notDefined');
    t.ok(spok_1.default.notDefined(undefined), 'undefined is notDefined');
    t.end();
});
//# sourceMappingURL=specifications.js.map