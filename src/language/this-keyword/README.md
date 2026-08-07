## `this` Keyword — Interview Reference

**Core rule:** `this` = the object executing the current function.

- Method call (`obj.fn()`) → `this` = `obj`
- Standalone function call (`fn()`) → `this` = global object (`window` in browser, `global` in Node), or `undefined` in strict mode
- Class bodies run in strict mode by default → `this` is `undefined` for detached method calls
- `new Fn()` → engine creates empty object, binds `this` to it
- Arrow functions → no own `this`; inherit `this` lexically from enclosing scope (not rebindable)

**Common gotcha:** a regular `function` passed as a callback (e.g. `array.forEach(function(){...})`) loses the outer `this` — it becomes a standalone call, so `this` → global/undefined, even though it's written inside a method.

**Fixes for the callback `this` problem:**

1. `const self = this;` before the callback, reference `self` inside — old/common but discouraged.
2. `thisArg` param — some methods (`forEach`, `map`, etc.) accept a second arg to set `this` for the callback.
3. `Function.prototype.bind(obj)` — returns a new function with `this` permanently bound; doesn't invoke immediately.
4. Arrow function — inherits `this` from surrounding scope; modern preferred solution.

**`call` / `apply` / `bind`** (all exist because functions are objects in JS):

| Method                   | Invokes immediately? | Args format     | Returns                         |
| ------------------------ | -------------------- | --------------- | ------------------------------- |
| `call(thisArg, a, b)`    | Yes                  | comma-separated | return value of fn              |
| `apply(thisArg, [a, b])` | Yes                  | array           | return value of fn              |
| `bind(thisArg)`          | No                   | —               | new function, permanently bound |

**Likely interview questions this covers:**

- What does `this` refer to in JS, and how is it determined?
- Difference between method call vs function call semantics.
- Why does `this` become `undefined`/`window` inside a `forEach` callback?
- Difference between `call`, `apply`, `bind`.
- Why do arrow functions not have their own `this`?
- How does strict mode affect default `this` binding?
