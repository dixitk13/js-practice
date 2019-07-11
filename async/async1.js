console.log("Sync 1")

setTimeout(_ => console.log("timeout 2"), 0)

Promise.resolve().then(_ => console.log("Promise 3"))

console.log("Sync 4")