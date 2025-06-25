'use client'
import { bubbleSort } from "@/algos/bubblesort"
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { use, useState } from "react"
import type { animationState } from "@/algos/bubblesort"

export default function BubbleSort() {

    //generate numbers to sort
    const [sortNumbers, setSortNumbers] = useState<number[]>([])
    const [sortedArray, setSortedArray] = useState<number[]>([])
    const [visibleFrameCount, setVisibleFrameCount] = useState(0)


    const generateNumbers = () => {
        const newNumbers: number[] = Array.from({ length: 4 }, () => Math.floor(Math.random() * 100))
        setSortNumbers(newNumbers)
        const result = bubbleSort(newNumbers)
        setSortedArray(result.sortedArray)
        setFrames(result.frames)
        setCurrentFrame(0)
        setVisibleFrameCount(1)
    }

    //handle sort
    // const handleSort = () => {
    //     const result = bubbleSort(sortNumbers)
    //     setSortedArray(result.sortedArray)
    //     setFrames(result.frames)
    //     setCurrentFrame(0);
    // }


    //animation controls
    const [frames, setFrames] = useState<animationState[]>([])
    const [currentFrame, setCurrentFrame] = useState(0)

    return (
        <div className="flex mt-10">
            <Card className="w-full max-w-sm m-auto">
                <CardHeader>
                    <CardTitle className="text-2xl">Bubble Sort</CardTitle>
                    <CardDescription className="text-md">
                        An algorithm that sorts an array by comparing neighboring items.</CardDescription>
                </CardHeader>
                <CardContent>
                    <Button
                        onClick={() => generateNumbers()}
                        className="w-full mb-2">
                        Generate Random Numbers
                    </Button>
                    <div className="bg-white rounded p-4 text-center my-2 font-bold flex gap-2 justify-center">
                        {sortNumbers.map(num => (
                            <div className="bg-blue-300 rounded w-15 py-1 text-center">{num}</div>
                        ))}
                    </div>
                    {/* <Button
                        onClick={() => handleSort()}
                        className="w-full mb-2">
                        Sort Numbers
                    </Button> */}
                    <div className="my-4 font-bold">
                        Show Step-by-Step Sorting
                    </div>
                    <Button
                        onClick={() => {
                            if (visibleFrameCount < frames.length) {
                                setVisibleFrameCount(prev => prev + 1)
                            }
                        }}
                        className="w-full mb-4">
                        Next Step
                    </Button>
                    <div className="bg-white h-full p-4 rounded">
                        <div>
                            {frames &&
                                <div className="text-center font-bold">
                                    {frames.slice(0, visibleFrameCount).map((frame, index) => (
                                        <div className="flex justify-center gap-2 mb-2">
                                            {(frame.stepArr || frame.originalArr)?.map((num, i) => {

                                                const isCurrent = i === frame.currentIndex
                                                const isNeighbor = i === frame.neighborIndex

                                                return (
                                                    <div
                                                        key={i}
                                                        className={`rounded w-15 py-1 text-center transition-all duration-200
                                                        ${isCurrent || isNeighbor ? "bg-yellow-400 font-bold" : "bg-red-300"}`}
                                                    >
                                                        {num}
                                                    </div>
                                                );
                                            })}
                                        </div>
                                    ))}
                                </div>
                            }
                        </div>
                    </div>



                    <div className="my-2">Completed Sort</div>
                    <div className="bg-white rounded p-4 text-center my-2 font-bold">
                        <div className="flex justify-center gap-2">

                            {visibleFrameCount == frames.length
                                ? sortedArray.map(num =>
                                    <div className="bg-green-300 rounded w-15 py-1 text-center">{num}</div>)
                                : ""
                            }
                        </div>
                    </div>

                </CardContent>
                <CardFooter className="flex-col gap-2">

                </CardFooter>
            </Card>

        </div>


    )

}
