/**
 * 
 * @param {Given an asynchronous function f(data,callback), 
 * implement a function p(n,f) which executes function f , if it gets result return it, 
 * else retry function f n-times and if fails(after n-tries) return error.
} retries
 * @param {*} fn 
 */
// One-liner with Promise chaining
const callWithRetry = (retries, fn) => 
    fn().catch((err) => 
        (retries <= 0) ? err : callWithRetry(retries - 1, fn))

// Using async/await
const callWithRetry = async (retries, fn) => {
    while (true) {
        try {
            return await fn()    // Terminate on a successful call.
        } catch (err) {
            if (retries <= 0) return err    // Terminate on failure when out of retries.
            retries -= 1
        }
    }
}