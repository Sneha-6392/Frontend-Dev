console.log("start");
setTimeout(() => {
    console.log("macrotask");
}, 0);
Promise.resolve().then(() => {
    console.log("microtask");
});
console.log("synchronous log");
console.log("end"); 
/*
EXPLANATION:
1. JavaScript executes all synchronous code first → "start", "synchronous log", "end".

2. After synchronous code finishes, the Event Loop checks:
   → Microtask Queue (Promises, MutationObserver)
   → Then Macrotask Queue (setTimeout, setInterval, network events)

3. Microtasks ALWAYS have higher priority.
   So Promise.then() runs BEFORE setTimeout(), even if timeout is 0 ms.

4. Only when the Microtask Queue becomes empty, the Event Loop moves to Macrotasks.

Therefore:
Microtasks run before Macrotasks.
*/