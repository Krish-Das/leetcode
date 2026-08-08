# JavaScript Quiz Review — Enterprise Banking Project

---

## Question 1 — Static Methods

**Prompt:** You are working on an enterprise project for a bank. You have been assigned with Account Type module that deals with managing account types of customers. Account types can be Normal, Gold or Prefered. Which of the following is the most appropriate for this code block that you wrote in JavaScript?

```js
class BankAccount {
  static changeAccountType(accountType) {
    this.newAccountType = accountType;
    return this.newAccountType;
  }

  constructor({ newAccountType = "Normal" } = {}) {
    this.newAccountType = newAccountType;
  }
}

const customer = new BankAccount({ newAccountType: "Gold" });
console.log(customer.changeAccountType("Prefered"));
```

**Options:**
- A. There is a compile time error in the program and it can be resolved by removing the static keyword from the changeAccount function.
- B. There is a runtime exception in the program and it can be resolved by invoking the changeAccountType function as `customer.__proto__.changeAccountType("Prefered");`
- C. There is a runtime exception in the program and it can be resolved by removing the static keyword from the changeAccount function.
- D. There is no compile time error in the program and it changes the account type and prints "Prefered" in the console.
- E. There is a compile time error in the program and it can be resolved by invoking the changeAccountType function as `customer.__proto__.changeAccountType("Prefered");`

**Answer: C**

---

## Question 2 — Debouncing vs Throttling (statement comparison)

> *Note: the original screenshot for this question showed only the answer options — no separate question stem was captured.*

**Options:**
- A. 1. Throttling delays the function invocation by a specific period of time to avoid unnecessary invocations which may impact the performance of the application. 2. Debouncing performs function invocation at specific intervals as long as the event trigger is active.
- B. 1. Debouncing delays the function invocation unless a specific user action is performed to avoid unnecessary invocations which may impact the performance of the application. 2. Throttling performs function invocation on selected user actions as long as the user does not close the browser tab.
- C. 1. Debouncing calls a copy of the function invocation at a specific period of time to avoid unnecessary invocations which may impact the performance of the application. 2. Throttling performs function invocation at specific intervals as long as the event trigger is active.
- D. 1. Debouncing delays the function invocation by a specific period of time to avoid unnecessary invocations which may impact the performance of the application. 2. Throttling performs function invocation at specific intervals as long as the event trigger is active.
- E. 1. Debouncing delays the function invocation by a specific period of time to avoid unnecessary invocations which may impact the performance of the application. 2. Throttling performs function invocation at specific intervals to the copy of the function as long as the event trigger is active.

**Answer: D**

---

## Question 3 — Code Obfuscation & Minification

**Prompt:** For one of the Bank's enterprise projects, the tech lead has asked you to secure/optimize the JavaScript files by hiding the actual names of variables and functions, making it tough to reverse engineer the functions and reducing code size. Which of the following approach would you choose?

**Options:**
- A. Code Obfuscation and Minification
- B. Code Obfuscation and Encryption
- C. Code encryption
- D. Code obfuscation
- E. Code minification

**Answer: A**

---

## Question 4 — Removing a Key Before an API Call

**Prompt:** You are working on an enterprise project for a bank. You have been assigned to the Customer Account module that deals with managing the bank accounts of customers. The API contract to send customer details allows fields such as accountNumber, customerId, currentBalance, addressLine1, addressLine2, and contactNumber. However, in the frontend, while you were creating the request body you encountered an additional key which is important to maintain the state on the frontend. You need to make a decision to identify the best way to remove the extra field by replacing `??` to create a request body for the API.

```js
let bankAccount = {
  accountNumber: "A458062361",
  customerId: "A10056932036",
  currentBalance: "5806038",
  isSelected: true,
  addressLine1: "Parkway Avenue",
  addressLine2: "United States",
  contactNumber: 90112569145,
};

function sendToApi() {
  fetch("http://example.com/")
    .then((response) => response.json())
    .then((data) => console.log(data));
}

??

sendToApi(newObj);
```

**Options:**
- A. `const newObj = bankAccount; delete newObj.isSelected;`
- B. `const { isSelected: _, newObj } = bankAccount;`
- C. There's no need to remove the additional field since deleting a key "isSelected" will hamper the state on the frontend and the backend will be able to ignore the additional key even if we send it in the request body.
- D. `const { isSelected: _, ...newObj } = bankAccount;`
- E. `const { isSelected: _, { ...newObj }} = bankAccount ;`

**Answer: D**

---

## Question 5 — Deep Clone via JSON.stringify/parse

**Prompt:** You are working on an enterprise project for a ride-sharing application. You have been assigned to the Customer Ride module that deals with managing customer payments for rides. Which of the following option is correct for the following code block?

```js
const customerRide = {
  riderId: "XC1452",
  walletBalance: 58960,
  totalDistanceInKm: 5.658,
  dateOfTravel: new Date("02-02-2023"),
  lastTravelledOn: undefined,
  previousDues: Infinity,
  uniqueRegex: /.*/,
};

function calculateFare() {
  const clone = JSON.parse(JSON.stringify(this));
  clone.walletBalance -= 5.5;
  console.log(
    `The rider traveled on date ${clone.dateOfTravel} and has wallet balance of ${clone.walletBalance} and has last traveled on ${clone.lastTravelledOn}`
  );
}

const bindedCalculateFare = calculateFare.bind(customerRide);
bindedCalculateFare();
```

**Options:**
- A. 1. The console will print "The rider traveled on date 2023-02-01T18:30:00.000Z and has wallet balance of 58954.5 and has last traveled on undefined" 2. The loss of value for dateOfTravel and lastTraveledOn keys can be prevented if `Object.assign(this);` is used instead of `JSON.parse(JSON.stringify(this));`
- B. 1. The console will print "The rider traveled on date 2023-02-01T18:30:00.000Z and has wallet balance of 58954.5 and has last traveled on undefined" 2. There is no loss of value as the dateOfTravel and lastTraveledOn are printed correctly.
- C. 1. The console will print "The rider traveled on date Thu Feb 02 2023 00:00:00 GMT+0530 (India Standard Time) and has wallet balance of 58954.5 and has last traveled on undefined" 2. The loss of value for dateOfTravel and lastTraveledOn keys can be prevented if `Object.assign(this);` is used instead of `JSON.parse(JSON.stringify(this));`
- D. The program will result in a compile time error as it tries to stringify Infinity and the uniqueRegx.
- E. 1. The console will print "The rider traveled on date Thu Feb 02 2023 00:00:00 GMT+0530 (India Standard Time) and has wallet balance of 58954.5 and has last traveled on undefined" 2. There is no loss of value as the dateOfTravel and lastTraveledOn are printed correctly.

**Answer: A**

---

## Question 6 — try/catch without a bound error parameter

**Prompt:** You are reviewing the code of a banking project. What will be your opinion on the following block of code?

```js
function calculateInterest(currentBalance, customerAge) {
  try {
    if (customerAge > 150) {
      throw new Error();
    }
    if (currentBalance > 0) {
      let interest = (currentBalance * 2.5) / 100;
      if (customerAge > 60) {
        interest += 50;
      }
      return interest;
    }
    throw new Error();
  } catch {
    console.error(
      "Interest cannot be calculated on zero balance or the age cannot be greater than 150"
    );
  }
}

calculateInterest(0, 60);
```

**Options:**
- A. There's a run time error and it can be corrected by replacing catch with catch(e)
- B. There's a compile time error as the catch should have parameters.
- C. The program will print "Interest cannot be calculated on zero balance or the age cannot be greater than 150".
- D. There's a compile-time error and it can be resolved by replacing catch with catch()
- E. There's a compile-time error and it can be resolved by replacing catch with catch(e)

**Answer: C**

---

## Question 7 — call / bind / apply statement comparison

> *Note: the original screenshot for this question showed only the answer options — no separate question stem was captured.*

**Options:**
- A. 1. The call method invokes a function with a provided value and arguments individually. 2. The bind method does not execute the function right away, rather it generates a new function that, when called, has its "this" set to the provided value while binding. 3. The apply method invokes a function with a provided value and arguments individually.
- B. 1. The call method generates a function with a provided value and arguments individually. 2. The bind method does not execute the function right away, rather it generates a new function that, when called, has its "this" set to the provided value while binding. 3. The apply method invokes a function with a provided value and arguments as an array.
- C. 1. The call method invokes a function with a provided value and arguments as an array. 2. The bind method does not execute the function right away, rather it generates a new function that, when called, has it's "this" set to the provided value while binding. 3. The apply method invokes a function with a provided value and arguments as an array.
- D. 1. The call method invokes a function with a provided value and arguments individually. 2. The bind method executes a function right away when called. It has its "this" and the other arguments set to the provided value while binding. 3. The apply method invokes a function with a provided value and arguments as an array.
- E. 1. The call method invokes a function with a provided value and arguments individually. 2. The bind method does not execute the function right away, rather it generates a new function that, when called, has its "this" set to the provided value while binding. 3. The apply method invokes a function with a provided value and arguments as an array.

**Answer: E**

---

## Question 8 — Object.freeze and Strict Mode

**Prompt:** You are the backend developer for an enterprise bank project. Within this, you are assigned the task to sort the bank accounts by their balances. However, during the program execution flow you want to ensure that the code does not modify the customer details. You tried `Object.freeze` but it is not throwing an error when a developer is modifying the bank account details such as balance. What is missing here?

```js
const bankAccount = [
  {
    customerId: "A10120123",
    accountNumber: "502362145",
    balance: 5000,
    addressLine1: "Parkway Avenue",
    addressLine2: "United States",
  },
  {
    customerId: "A101201231",
    accountNumber: "5023621451",
    balance: 10000,
    addressLine1: "CA Avenue",
    addressLine2: "United States",
  },
];

for (let index = 0; index < bankAccount.length; index++) {
  Object.freeze(bankAccount[index]);
}

bankAccount[1].balance = 200;

console.log(bankAccount[1].balance);
```

**Options:**
- A. The V8 engine used by the browser and NodeJS is different hence if the same code is executed in a browser runtime it will throw an error. It is not throwing an error right now because it is executed in NodeJS runtime.
- B. The freeze method freezes the object but does not throw an error, rather freezeWithError should be used to ensure that an error is thrown when a frozen object is being modified.
- C. "use strict" should be added at the top of the file to ensure that an error is thrown whenever the developer tries to reassign a value to a frozen object.
- D. Objects which are frozen inside the array will never throw an error if modified because the freeze function does not return a new object rather it freezes the object at the same reference.
- E. None of the options are correct.

**Answer: C**

---

## Question 9 — Negative Array Indices

**Prompt:** What should be the output of the following program?

```js
const customerRide = [
  {
    riderId: "XC1452",
    walletBalance: 58960,
    totalDistanceInKm: 5.658,
    dateOfTravel: new Date("02-02-2023"),
  },
];

customerRide[-1] = {
  riderId: "XC1451",
  walletBalance: 8569,
  totalDistanceInKm: 14785,
  dateOfTravel: new Date("03-02-2023"),
};

customerRide[1] = {
  riderId: "XC145158",
  walletBalance: 78512,
  totalDistanceInKm: 6931,
  dateOfTravel: new Date("04-02-2023"),
};

function printCustomerRides() {
  let distance = 0;
  for (let index = 0; index < customerRide.length; index++) {
    distance += customerRide[index].totalDistanceInKm;
  }
  console.log(`The distance travelled by all customers is ${distance}`);

  distance = 0;
  for (let value of customerRide) {
    distance += value.totalDistanceInKm;
  }

  console.log(`The distance travelled by all customers is ${distance}`);
}
const bindedCustomerRides = printCustomerRides.bind(customerRide);
bindedCustomerRides();
```

**Options:**
- A. It will print "The distance traveled by all customers is 6936.658" / "The distance traveled by all customers is 6936.658"
- B. It will print "The distance traveled by all customers is 21721.658" / "The distance traveled by all customers is 6936.658"
- C. It will print "The distance traveled by all customers is 21721.658" / "The distance traveled by all customers is 21721.658"
- D. It will print "The distance traveled by all customers is 6936.658" / "The distance traveled by all customers is 21721.658"
- E. It will result in a run time error.

**Answer: A**

---

## Question 10 — Arrow Functions and `this`

**Prompt:** What should be the output of the following program and how would you ensure that you get the right results?

```js
const bank = {
  customer: {
    currentBalance: 1000,
    deductCharges(charges, customerType) {
      if (customerType === "Gold") {
        return this.currentBalance - (charges - (charges * 10) / 100);
      } else if (customerType === "Preferred") {
        return this.currentBalance - (charges - (charges * 5) / 100);
      } else {
        return this.currentBalance - charges;
      }
    },
    addQuaterlyInterest: (customerType) => {
      if (customerType === "Gold") {
        return this.currentBalance + (this.currentBalance * 3.5) / 100;
      } else if (customerType === "Preferred") {
        return this.currentBalance + (this.currentBalance * 2.5) / 100;
      } else {
        return this.currentBalance + (this.currentBalance * 1.5) / 100;
      }
    },
  },
};

console.log(bank.customer.deductCharges(25, "Preferred"));
console.log(bank.customer.addQuaterlyInterest("Gold"));
```

**Options:**
- A. Current Output: 976.25 / 1035. The code works perfectly fine and there's no need to change it.
- B. Current Output: 976.25 / NaN. Change the addQuaterlyInterest to the normal function.
- C. NaN / NaN. Change the call to addQuaterlyInterest as `bank.customer.addQuaterlyInterest.bind(bank.customer, "Gold")`
- D. Current Output: NaN / 1035. Change the deductCharges to an arrow function.
- E. NaN / NaN. Change the call to addQuaterlyInterest as `bank.customer.addQuaterlyInterest.call(bank.customer, "Gold")`

**Answer: B**

---

## Question 11 — findIndex, ===, splice

**Prompt:** Which operator and array functions would you use to complete the method of deleting customers by id? You can assume that all the customers have a unique id that can be a string or a number. The code should delete the customer by using case-sensitive id matching. Select the correct operator and array functions to replace `??` in the code block.

```js
function deleteCustomerById(customers, value) {
  var index = customers.??((customer) => customer.id ?? value);
  if (index > -1) {
    customers.??(index, 1);
  }
  return customers;
}

const customers = [
  { id: 1, name: "Jhon" },
  { id: "2", name: "Jack" },
  { id: 2, name: "Jim" },
  { id: 3, name: "Jhonny" },
  { id: '3', name: "Julia" },
];

deleteCustomerById(customers, '3');
```

**Options:**
- A. find, ===, slice
- B. findIndex, ===, splice
- C. findIndex, ==, splice
- D. findIndex, ===, slice
- E. find, ===, splice

**Answer: B**

---

## Question 12 — Array.prototype.flat()

**Prompt:** You are getting sensor readings from a temperature sensor in degree celsius and you need to convert them to Fahrenheit. How would you parse those readings in JS replacing `??` so that the line below it will be able to convert those values to Fahrenheit?

**Assumption:** *Fahrenheit = Temperature in degree celsius * 2*

```js
const sensorReading = [1, 2, 3, [null, 5, [4, 10], 89, "20", , [[[, "96"]]]]];

function convert() {
  ??
  const mapped = flatArray.map((temperature) => temperature * 2);
  console.log(mapped);
}

convert();
```

**Options:**
- A. `const flatArray = sensorReading.flattenArray(5);`
- B. `const flatArray = sensorReading.flat(3);`
- C. `const flatArray = sensorReading.flat(5);`
- D. `const flatArray = sensorReading.flat();`
- E. Write a custom array flattening function using recursion because the flattening function in JavaScript does not support sparse arrays. And use it as `const flatArray = customArrayFflattening(sensorReading);`

**Answer: C**

---

## Question 13 (Bonus) — slice vs splice

**Prompt:** What is the output of the following program, and what does it demonstrate about the difference between `Array.prototype.slice()` and `Array.prototype.splice()`?

```js
const arr = [10, 20, 30, 40, 50];
const a = arr.slice(1, 3);
const b = arr.splice(1, 3);

console.log(arr);
console.log(a);
console.log(b);
```

**Options:**
- A. `arr: [10,20,30,40,50]`, `a: [20,30]`, `b: [20,30,40]` — slice mutates, splice doesn't.
- B. `arr: [10,50]`, `a: [20,30]`, `b: [20,30,40]` — `slice` returns a shallow copy of the specified range without mutating the original array; `splice` mutates the original array by removing (and optionally inserting) elements, and returns the removed elements as an array.
- C. `arr: [10,20,30,40,50]`, `a: [10,20,30,40,50]`, `b: [10,20,30,40,50]` — both methods are non-mutating.
- D. `arr: [10,50]`, `a: [10,20,30,40,50]`, `b: [20,30,40]` — splice replaces values without removing them.
- E. Compile-time error since splice cannot be called on an array after slice has been used on it.

**Answer: B**

**Explanation:**
- `slice(start, end)` — **non-mutating**. Returns a new array containing a shallow copy of elements from `start` up to (not including) `end`. The original array is untouched.
- `splice(start, deleteCount, ...itemsToInsert)` — **mutating**. Removes `deleteCount` elements starting at `start` (and can insert new elements in their place), directly modifying the original array. Returns an array of the removed elements.

Trace: `a = arr.slice(1, 3)` runs first, against the still-untouched array → `a = [20, 30]`. Then `b = arr.splice(1, 3)` removes 3 elements starting at index 1 (`20, 30, 40`) from `arr` in place, leaving `arr = [10, 50]`, and returns the removed elements as `b = [20, 30, 40]`.
