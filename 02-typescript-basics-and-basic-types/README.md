# Session 2 Notes

## Core Types

* number 
    * 1, 5.3, -10 
    * All numbers, no difference between integers or floats

* string
    * 'Hi', "Hi", `Hi`
    * All text values

* boolean
    * true, false
    * Just these two, no "truthy" or "falsy" values

* object
    * {age: 30}
    * Any JavaScript object, more specific types(type of object) are possible

* Array 
    * [1, 2, 3]
    * Any JavaScript array, type can be flexible or strict(regarding the element types)

* Tuple 
    * [1, 2]
    * Added by TypeScript: Fixed-length array
    * Pushing is an exception 
    * Situational when you use over an object, if you want to be even clearer

* Enum
    * enum { NEW, OLD }
    * Added by TypeScript: Automatically enumerated global constant identifiers

* Any
    * *
    * Any kind of value, no specific type assignment
    * TypeScript well never yell at you when you use this type
    * Basically vanilla
    * Avoid when possible, use as a last resort 

## Key Points

* JavaScript uses "dynamic types" (resolved at runtime), TypeScript uses "static types" (set during development).

* Having errors thrown during development instead of runtime is a huge advantage in spotting bugs early

* Core Primitive Types in TypeScript are all lowercase.

## Miscellaneous Notes

* In JavaScript and TypeScript, all numbers are floats by default.
    * No difference between 5 || 5.0

* TypeScript has a built-in feature named Type Inference 
    * Infers which type you have in a variable or constant

* Core task of TypeScript is to check types and yell at us if we're using it incorrectly

* Object types can also be created for nested objects. 
```javascript
const product = {
  id: 'abc1',
  price: 12.99,
  tags: ['great-offer', 'hot-and-new'],
  details: {
    title: 'Red Carpet',
    description: 'A great carpet - almost brand-new!'
  }
}

//This is the type of object 

{
  id: string;
  price: number;
  tags: string[];
  details: {
    title: string;
    description: string;
  }
}
```

