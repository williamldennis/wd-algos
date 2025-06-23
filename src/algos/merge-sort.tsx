

export function splitSort(array: number[]): number[] {
    console.log("Sorting:", array);
    if (array.length <= 1) {
        return array
    }
    //split the array
    const middle = Math.ceil(array.length / 2)
    const firstHalf = array.slice(0, middle)
    const secondHalf = array.slice(middle, array.length)

    console.log("Split into:", firstHalf, "and", secondHalf);

    //split the array again
    const sortedFirst = splitSort(firstHalf)
    const sortedSecond = splitSort(secondHalf)
    //once this finishes, then move on
    //
    const merged = compareCombine(sortedFirst, sortedSecond)

    console.log("Merged", merged);

    return merged
}

function compareCombine(sortedFirst: number[], sortedSecond: number[]): number[] {
    // ????
    const combinedArray: number[] = []
    let i = 0
    let j = 0

    while (i < sortedFirst.length && j < sortedSecond.length) {
        if (sortedFirst[i] < sortedSecond[j]) {
            combinedArray.push(sortedFirst[i])
            i++
        } else {
            combinedArray.push(sortedSecond[j])
            j++
        }
    }

    return combinedArray.concat(sortedFirst.slice(i)).concat(sortedSecond.slice(j))

}
