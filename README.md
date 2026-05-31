## 1. customMap
 let nums = [1, 2, 3];
 let result = customMap(nums, function (num) {
     return num * 2;
 });

 console.log(result);


 ## customFilter
 const users = [
    { name: "Ahmed", age: 22 },
    { name: "Sara", age: 15 }
];

const adults = customFilter(users, function (user) {
    return user.age >= 18
})
console.log(adults)


## 3. customReduce
const total = customReduce([1, 2, 3], function (acc, current) {
    return acc + current
}, 0)

console.log(total)


## groupBy
const users = [
    { name: "Ahmed", role: "developer" },
    { name: "Sara", role: "designer" },
    { name: "Ali", role: "developer" }
];

const result = customGroupBy(users, (user) => user.role);

console.log(result);


## 5.deepClone --> there is more than one solution to solve this
## 1 --> have problem in date types
const copy=JSON.parse(JSON.stringify(original))

## 2 
const copy= structuredClone(original);

## 3
const original = {
    name: "Esraa",
    address: {
        city: "Bani Suef"
    },
    skills: ["Html", "JS", "Angular"]
};

const copy = deepClone(original);

copy.address.city = "Giza";
copy.skills[0] = "Node.js";

console.log(original);
console.log(copy);


## 6. once
function initialize() {
    console.log('initialized');
}

const init = once(initialize);
init();
init();


## 7. memoize
const fib = memoize(function (n) {
    if (n < 2) {
        return n
    }
    return fib(n - 1) + fib(n - 2);

})

console.log(fib(6))
console.log(fib(6))


## 8. compose
function addOne(num) {
    return num + 1
}

function double(num) {
    return num * 2
}

function square(num) {
    return num * num
}

const result = compose(square, double, addOne);
console.log(result(2))


## 9. flattenArray
console.log(flattenArray([1,[2,[3,[4]]]]))


## 10. createCounter
const counter=createCounter(10);
console.log(counter.getValue())
console.log(counter.increment())
console.log(counter.decrement())


## 11. createSecretHolder
const secret=createSecretHolder("123");
console.log(secret.getSecret());
secret.setSecret("esraa");
console.log(secret.getSecret());


## 12.  pipeAsync
function addOne(num) {
    return num + 1
}

function double(num) {
    return num * 2
}

function square(num) {
    return num * num
}

const pipeline = pipeAsync(addOne, double, square);
pipeline(2).then(console.log)


## 13. Weird JavaScript
## this --> 1- function --> in global --> return window or undefined if use "use strict"
                     --> in object --> return object if  object.getName() or window or undefined if use "use strict" if const fn = object.getName() 
                     because this depends on how function is called not where written 
         2- arrow function --> not make this for itself, work this of parent 
## hoisting --> problem --> global var in block scope
             solve --> let or const but there need intial value so error appear in hoisting
## closures in loops--> problem with var --> 
                                     for (var i = 0; i < 3; i++) {
                                               setTimeout(() => {
                                               console.log(i);
                                          }, 100);
                                          }
                            output -->  3  3  3   because only one i exits by timeout run
                        solve --> using let or const create new block scope per loop 


##  call-->immediate execution
 function greet(){
     console.log(this.name)
 }
 let user={name:'esraa'};
 greet.call(user)


## apply--> same as call but array args
 function sum(a,b){
     return a+b
 }
 console.log(sum.apply(null,[10,20]));


## bind--> returns new function
 function greet(){
     console.log(this.name)
 }
 let user={name:'esraa'};
 let bound=greet.bind(user)
 bound()


 ## 14. Final Boss - Event Emitter
 const emitter=createEmitter();
emitter.on("login",(data)=>{
    console.log("user logged in :" , data)
})

emitter.on("login",(data)=>{
    console.log("user id:" , data.id)
})

emitter.emit("login",{id:1,name :'esraa'})


