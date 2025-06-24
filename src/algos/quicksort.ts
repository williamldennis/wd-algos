


export interface QuickSortState {
    originalArray: number[],
    sortedArray?: number[],
    left?: number[] | undefined,
    right?: number[] | undefined,
    pivot?: number | undefined,
    discriminationIndex?: number | undefined // this is the index that we are currently on deciding what should go left and right

}

export function quicksort(arr: number[], onStateChange?: (quickSortState: QuickSortState) => void): number[] {
    if (onStateChange) onStateChange({ originalArray: arr })
    if (arr.length <= 1) return arr

    const pivot = arr.pop()
    if (!pivot) return arr // unnecessary, just for typescript

    if (onStateChange) onStateChange({ originalArray: arr, pivot })

    const left: number[] = []
    const right: number[] = []

    arr.forEach((num, index) => {
        if (num < pivot) left.push(num)
        else right.push(num)
    })

    if (onStateChange) onStateChange({ originalArray: arr, pivot, left, right })

    const sortedArray = [...quicksort(left, onStateChange), pivot, ...quicksort(right, onStateChange)]

    if (onStateChange) onStateChange({ originalArray: arr, pivot, left, right, sortedArray })

    return sortedArray
}


const sortHistory: QuickSortState[] = []
const sortedArray = quicksort([1, 4, 12, 2, 2, 5, 9], (quickSortState) => {
    sortHistory.push(quickSortState)
})


console.log("sortedArray: ", sortedArray)
console.log("History: ", sortHistory)