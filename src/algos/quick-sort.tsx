import { log } from "console"

interface quickObject {
    currentArray: number[],
    pivot: number,
    pivotIndex: number,
    indexComparedtoPivot: number,
    leftOrRight: string,
    fullArray: number[]
}

export const quickObjectArray: quickObject[] = []
export const fullArray: number[] = []

//sort algo
export const quickSort = (array: number[], quickObjectArray: quickObject[], fullArray: number[]): number[] => {

    if (array.length <= 1) {
        return array
    }
    const pivotIndex = array.length
    const pivot = array.pop()!
    console.log("pivot:", pivot)
    const left: number[] = []
    const right: number[] = []

    array.forEach((item, index, array) => {
        quickObjectArray.push({
            currentArray: array.slice(),
            pivot: pivot,
            pivotIndex: pivotIndex,
            indexComparedtoPivot: index,
            leftOrRight: item < pivot ? "left" : "right",
            fullArray: fullArray.slice()
        })
        console.log("for each:", quickObjectArray)
        if (item < pivot) {

            left.push(item)

            console.log("after push left:", quickObjectArray)

        }
        if (item > pivot) {
            right.push(item)

            console.log("after push right:", quickObjectArray)

        }
    })
    const sorted = [...quickSort(left, quickObjectArray, fullArray), pivot, ...quickSort(right, quickObjectArray, fullArray)]
    console.log("Sorted", sorted);
    return sorted
}