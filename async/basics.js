// javascript is single-threaded and synchronous, but it can handle asynchronous operations

// execution context
// synchronous code runs in the order it is written, while asynchronous code can run in the background and execute later

// blocking code is synchronous and runs in the order it is written, while non-blocking code is asynchronous and can run in the background

// js engine has call stack, heap, and event loop
// call stack is where the synchronous code runs, heap is where the objects are stored, and event loop is what allows asynchronous code to run

// async code like setTimeout, setInterval, promises are sent to the web api, which is a part of the browser, and then the event loop checks the call stack and executes the async code when the call stack is empty 

// async code are kept in task queue, which is a part of the event loop, and when the call stack is empty, the event loop takes the first task from the task queue and pushes it to the call stack for execution
// this is how js handles asynchronous code like setTimeout, setInterval
// promises (fetch api) are sent to high priority queue also called priority/microtask queue, which is a part of the event loop, and when the call stack is empty, the event loop takes the first task from the high priority queue and pushes it to the call stack for execution

// so promises are executed before the task queue, which is why we see the output of promises before the output of setTimeout or setInterval