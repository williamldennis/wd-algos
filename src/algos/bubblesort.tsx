

export function bubbleSort(array: number[]): number[] {

    const unsortedArray = array.slice()

    //for every element in the array, swap it with the element to the right [index+1] if it's greater than that element
    let swapped

    for (let i = 0; i < unsortedArray.length; i++) {
        if (unsortedArray[i] > unsortedArray[i + 1]) {
            [unsortedArray[i], unsortedArray[i + 1]] = [unsortedArray[i + 1], unsortedArray[i]]
            swapped = true
        } else {
            return unsortedArray
            swapped = false
        }
    }



    if (swapped === false) {
        const sortedArray = unsortedArray
        return sortedArray
    }
}

bubbleSort([3, 5, 2, 10, 4, 8])