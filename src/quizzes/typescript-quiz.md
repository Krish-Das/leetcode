# TypeScript Quiz

## Question 1

What would be the output of the following code?

```ts
let index1: number = 1;

function turingTest() {
  let index2: number = 2;

  if (index2 > index1) {
    let index3: number = 3;
    index3++;
  }

  while (index1 < index2) {
    let index4: number = 4;
    index1++;
  }

  console.log(index1);
  console.log(index2);
  console.log(index3);
  console.log(index4);
}
```

*(Open question — no options provided)*

---

## Question 2

What would be the output of the following code?

```ts
class TuringQueue<T> {
  private data = [];
  push = (item: T) => this.data.push(item);
  pop = (): T => this.data.shift();
}

const turingQueue = new TuringQueue<number>();
turingQueue.push(0);
turingQueue.push("1");
console.log(turingQueue);
```

- A. `0 1`
- B. Error
- C. `{0, 1}`
- D. `{0, "1"}`

---

## Question 3

What is the role of the `constructor` keyword in TypeScript?

- A. None of the options.
- B. It is used to call constructor of an instance.
- C. No such keyword exists in Typescript.
- D. It is used to define constructor for a class.

---

## Question 4

What would be the output of the following code?

```ts
function helloTuring(turing: string): string {
  console.log(turing);
}

console.log('Hi ' + helloTuring('John'));
```

- A. `"John"` / `"Hi undefined"`
- B. `""`
- C. None of the options
- D. `Null`

---

## Question 5

Which of the following is the CORRECT syntax for creating a static variable in TypeScript?

- A. None of the options
- B. `turing: string: static;`
- C. `static turing: string;`
- D. `static(turing: string);`

---

## Question 6

What are the differences between **"unknown"** and **"any"** in Typescript?

- A. **Unknown**: Used when types are not known
- B. **Unknown**: Applies itself enthusiastically to equality operation, asserts and checks, but not for any other operations
- C. **Any**: Used when the exact types are not known
- D. **Any**: Checks and asserts operations

---

## Question 7

What would be the output of the following code?

```ts
const x = [1, 2, 3];
x[-1] = -1;
console.log(x[x.indexOf(10000)]);
```

*(Open question — no options provided)*

---

## Question 8

Which of the following decorators can be applied to?

- A. Classes
- B. Method arguments
- C. Properties
- D. All of the options
- E. Methods

---

## Question 9

What would be the output of the following code?

```ts
class TuringClass {
  readonly myReadonlyProperty = 1;

  turingMethod() {
    console.log(this.myReadonlyProperty);
  }
}

new TuringClass().myReadonlyProperty = 5;
```

*(Open question — no options provided)*

---

## Question 10

Which of the following is the CORRECT syntax for implementing inheritance in TypeScript?

- A. `class TuringEmployer: class Turing{}`
- B. `class TuringEmployer extends class Turing{}`
- C. `class TuringEmployer: Turing{}`
- D. `class TuringEmployer extends Turing{}`

---

## Question 11

What would be the output of the following code?

```js
function Foo() {
  this.bar = 10;
}

Foo.prototype.bar = 42;

var foo = new Foo();
console.log("1:", foo.bar);

delete foo.bar;
console.log("2:", foo.bar);
```

*(Open question — no options provided)*

---

## Question 12

Which of the following are CORRECT statements about decorators in Typescript? *(Select all that apply.)*

- A. Decorators can only be applied to a property.
- B. None of the options
- C. Decorator is a type variable.
- D. Decorators serve the purpose of adding both annotations and metadata to the existing code in a declarative way.
- E. Decorators are functions that are prefixed @expression symbol, where expression must evaluate to a function that will be called at runtime with information about the decorated declaration.

---

## Question 13

What would be the output of the following code?

```ts
var languages = ['Java', 'php', 'TypeScript'];
languages.length = 0;
languages.push('Golang');
console.log(languages);
```

*(Open question — no options provided)*

---

## Question 14

Which of the following data types are supported by TypeScript?

- A. All of the options
- B. **Number** `var age: number = 19`
- C. **String** `var company: string = "Turing"`
- D. **Boolean** `var bTuring: boolean = false`

---

## Question 15

What would be the output of the following code?

```ts
var t = 99;
t = "Turing";
console.log(t);
```

*(Open question — no options provided)*

---

## Question 16

What is the difference between `splice()` and `slice()` in JavaScript/TypeScript?

- A. `splice()` returns a shallow copy of a portion of an array without modifying the original; `slice()` removes or replaces elements in the original array.
- B. `slice()` returns a shallow copy of a portion of an array without modifying the original; `splice()` removes, replaces, or inserts elements and mutates the original array.
- C. Both `slice()` and `splice()` mutate the original array; they only differ in the number of arguments they accept.
- D. Both `slice()` and `splice()` return a new array without modifying the original.

---

## Answer Key

| Q# | Answer |
|----|--------|
| 1 | ReferenceError — `index3` and `index4` are block-scoped (`let`) to the `if`/`while` blocks and don't exist at the `console.log` calls. (Also, `turingTest()` is never called.) |
| 2 | B — Error. `push` expects a `number`; passing `"1"` (string) is a type error. |
| 3 | D |
| 4 | C — None of the options. `helloTuring` is typed to return `string` but has no `return` statement, causing a compile error. |
| 5 | C |
| 6 | B — `unknown` only allows equality checks/type-narrowing before use; `any` allows any operation unchecked. |
| 7 | `-1` — `x[-1] = -1` sets a non-index property; `indexOf(10000)` returns `-1`; `x[-1]` returns `-1`. |
| 8 | D — All of the options |
| 9 | Error — `readonly` properties can't be assigned outside the constructor. |
| 10 | D |
| 11 | `1: 10` then `2: 42` — the own property `bar` (10) shadows the prototype's `bar` (42) until deleted. |
| 12 | D and E |
| 13 | `['Golang']` — setting `length = 0` clears the array, then `push` adds one element. |
| 14 | A — All of the options |
| 15 | `Turing` — TypeScript type error is compile-time only; if run as plain JS, it prints the reassigned string. |
| 16 | B |
