import { log } from "console"

export interface QuickSortState {
    originalArray: number[],
    sortedArray?: number[],
    left?: number[],
    right?: number[],
    pivot?: number,
    discriminationIndex?: number,
}

//sort algo
export const quickSortHistory = (input: number[]): {
    sortedArray: number[],
    history: QuickSortState[]
} { 

    const history: QuickSortState[] = []

    function sort(arr: number[]): number[] {
        history.push({
            originalArray: [...arr]
        })

        if (arr.length <= 1) return arr

        const pivot = arr[arr.length - 1]
        const rest = arr.slice(0, -1)

        const left: number[] = []
        const right: number[] = []

        rest.forEach((num, index) => {
            history.push({
                originalArray: [...arr],
                pivot, 
                discriminationIndex: index,
                left: [...left],
                right: [...right]
            })

            if (num < pivot) {
                left.push(num)
            } else {
                right.push(num)
            }

            history.push({
                originalArray: [...arr],
                pivot,
                discriminationIndex: index,
                left: [...left],
                right: [...right]
            })
        })

        const sortedLeft = sort(left)
        const sortedRight = sort(right)

        const merged = [...sortedLeft, pivot, ...sortedRight]

        history.push({
            originalArray: [...arr],
            pivot, 
            left: sortedLeft,
            right: sortedRight,
            sortedArray: [...merged]
        })

        return merged
    
    }

    const sortedArray = sort([...input])
    return { sortedArray, history }
}