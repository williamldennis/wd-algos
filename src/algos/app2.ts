import { quicksort } from "./quicksort"




const sortedArray = quicksort([1, 4, 12, 2, 2, 5, 9], (state) => console.log(state))

console.log(sortedArray)