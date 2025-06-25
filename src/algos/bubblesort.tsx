
///create an array of frames -- each frame is a State of the array

export type animationState = {
    originalArr?: number[],
    sortedArr?: number[],
    stepArr?: number[]

}


export function bubbleSort(oldArr: number[]): { sortedArray: number[], frames: animationState[] } {

    const arr = oldArr.slice()
    const frames: animationState[] = []

    frames.push({
        originalArr: oldArr.slice(),
    })
    let swapped: boolean

    do {

        swapped = false

        for (let i = 0; i < arr.length - 1; i++) {

            if (arr[i] > arr[i + 1]) {
                [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]]
                frames.push({
                    stepArr: arr.slice(),
                })
                swapped = true
            }
        }


    } while (swapped == true)

    frames.push({
        sortedArr: arr.slice(),
    })
    console.log("sorted:", arr)
    console.log("frames:", frames)
    return { sortedArray: arr, frames: frames }
}

bubbleSort([5, 7, 3, 4, 9, 2, 6])





























// export function bubbleSort(array: number[]): number[] {
//     console.log("array to sort:", array)
//     const unsortedArray = array.slice()

//     //for every element in the array, swap it with the element to the right [index+1] if it's greater than that element
//     let swapped: boolean

//     do {
//         swapped = false

//         for (let i = 0; i < unsortedArray.length; i++) {
//             if (unsortedArray[i] > unsortedArray[i + 1]) {
//                 [unsortedArray[i], unsortedArray[i + 1]] = [unsortedArray[i + 1], unsortedArray[i]]
//                 swapped = true
//             }
//         }

//     } while (swapped == true)

//     console.log("sorted:", unsortedArray)
//     return unsortedArray


// }

// bubbleSort([3, 5, 2, 10, 4, 8])