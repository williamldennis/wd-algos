



export const quickSort = (array: number[]): number[] => {
    if (array.length <= 1) {
        return array
    }

    const pivot = array.pop()!
    console.log("pivot:", pivot)
    const left: number[] = []
    const right: number[] = []

    array.forEach((item, index, array) => {
        if (item < pivot) {
            left.push(item)
        }
        if (item > pivot) {
            right.push(item)
        }
    })
    const sorted = [...quickSort(left), pivot, ...quickSort(right)]
    console.log("Sorted", sorted);
    return sorted
}