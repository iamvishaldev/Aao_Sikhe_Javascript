// Checking sum zero - problem 1
// remove first pair whoes sum is zero
// [-5,-4,-3,-2,0,2,4,6,8] ---> input
// [-4,4] --> output

const getSumPair = (array) => {
    for (let number of array) {
        console.log("Outer Loop")
        for (let j = 1; j < array.length; j++) {
            console.log("Inner Loop")
            if (number + array[j] === 0) {
                return [number, array[j]]
            }
        }
    }
}
const result = getSumPair([-5, -4, -3, -2, 0, 2, 4, 6, 8])
console.log(result)