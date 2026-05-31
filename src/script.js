// 1. customMap
function customMap(arr, callback) {
    let res = [];
    for (let i = 0, len = arr.length; i < len; i++) {
        res.push(callback(arr[i]));
    }
    return res;
}



// 2.customFilter
function customFilter(arr, callback) {
    let filteredItems = [];
    for (let i = 0, len = arr.length; i < len; i++) {
        if (callback(arr[i])) {
            filteredItems.push(arr[i])
        }
    }

    return filteredItems
}


//3. customReduce
function customReduce(arr, callback, initialValue) {
    let accumulator ;
    let startIndex=0;
    if(initialValue !== undefined){
        accumulator=initialValue
    }else{
        accumulator=arr[0];
        startIndex=1;
    }
    for (let i = startIndex, len = arr.length; i < len; i++) {
        accumulator = callback(accumulator, arr[i])
    }

    return accumulator
}



//4. groupBy
function customGroupBy(arr, callback) {
    let groubed = {};
    for (let i = 0, len = arr.length; i < len; i++) {
        const item = arr[i];
        const key=callback(item);
        if(!groubed[key]){
            groubed[key]=[]
        }

        groubed[key].push(item)
    }
    return groubed
}


//5.deepClone
 function deepClone(value) {
    // check if value is primitive type
    if (value === null || typeof value != "object") {
        return value
    }

    //check if value is  Array
    if (Array.isArray(value)) {
        const clonedArray = [];
        for (let i = 0, len = value.length; i < len; i++) {
            clonedArray[i] = deepClone(value[i])
        }
        return clonedArray
    }

    // check if value is Object
    const clonedObject = {}
    for (let key of Object.keys(value)) {
        clonedObject[key] = deepClone(value[key])
    }
    return clonedObject

}


//6. once
function once(fn) {
    let hasExecuted = false;
    let result;
    return function (...args) {
        if (!hasExecuted) {
            hasExecuted = true;
            result = fn(...args)
        }
        return result
    }
}


//7. memoize
function memoize(fn) {
    const cache = {};

    return function (...args) {
        const key = JSON.stringify(args);
        if (key in cache) {
            return cache[key];
        }
        const result = fn(...args);
        cache[key] = result;
        return result;
    }
}


//8. compose
function compose(...functions) {
    return function (value) {
        let result = value;
        for (let i = functions.length - 1; i >= 0; i--) {
            result = functions[i](result)
        }
        return result;
    }
}


//9. flattenArray
function flattenArray(arr) {
    let result = [];
    for (let i = 0, len = arr.length; i < len; i++) {
        if (Array.isArray(arr[i])) {
            result = result.concat(flattenArray(arr[i]))
        } else {
            result.push(arr[i])
        }
    }
    return result
}


//10. createCounter
function createCounter(initalValue) {
    let count = initalValue;
    return {
        increment() {
            return ++count;
        },
        decrement() {
            return --count;
        },
        getValue() {
            return count
        }
    }
}


//11. createSecretHolder
function  createSecretHolder(secret){
    let value=secret;
    return {
        getSecret(){
            return value;
        },
        setSecret(newSecret){
            value=newSecret;
        }
    }
}


//12.  pipeAsync
function pipeAsync(...functions) {
    return async function (value) {
        let result = value;
        for (let fn of functions) {
            result = await fn(result)
        }
        return result
    }
}


//14. Final Boss - Event Emitter
function createEmitter(){
    events={};
    return {
        on(eventName,callback){
            if(!events[eventName]){
                events[eventName]=[]
            }
            events[eventName].push(callback)

        },
        emit(eventName,data){
            if(!events[eventName]) return;
            for(let fn of events[eventName]){
                fn(data)
            }

        }
    }
}

