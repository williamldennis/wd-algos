import { quicksort } from "./quicksort";


const history: any[] = []
const sortedArray = quicksort([1, 4, 12, 2, 2, 5, 9], (state) => history.push(state))

console.log(history)