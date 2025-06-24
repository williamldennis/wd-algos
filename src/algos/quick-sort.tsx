import { log } from "console"

export interface QuickSortState {
    originalArray: number[],
    sortedArray?: number[],
    left?: number[],
    right?: number[],
    pivot?: number,
    discriminationIndex?: number,
    depth?: number,
}

//sort algo
export function quickSortHistory(input: number[]): {
    sortedArray: number[],
    history: QuickSortState[]
} {

    const history: QuickSortState[] = []

    function sort(arr: number[], depth = 0): number[] {
        history.push({
            originalArray: [...arr],
            depth,
        })

        if (arr.length <= 1) return arr

        const pivot = arr[arr.length - 1]
        const rest = arr.slice(0, -1)

        const left: number[] = []
        const right: number[] = []

        rest.forEach((num, index) => {
            // history.push({
            //     originalArray: [...arr],
            //     pivot,
            //     discriminationIndex: index,
            //     left: [...left],
            //     right: [...right],
            //     depth
            // })

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
                right: [...right],
                depth
            })
        })

        const sortedLeft = sort(left, depth + 1)
        const sortedRight = sort(right, depth + 1)

        const merged = [...sortedLeft, pivot, ...sortedRight]

        history.push({
            originalArray: [...arr],
            pivot,
            left: sortedLeft,
            right: sortedRight,
            sortedArray: [...merged],
            depth
        })

        return merged

    }

    const sortedArray = sort([...input])
    return { sortedArray, history }
}