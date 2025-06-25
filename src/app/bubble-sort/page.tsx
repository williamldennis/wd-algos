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
    const generateNumbers = () => {
        const newNumbers: number[] = Array.from({ length: 8 }, () => Math.floor(Math.random() * 100))
        setSortNumbers(newNumbers)
    }

    //create a history array to cycle through 
    const [history, setHistory] = useState([])

    //handle sort
    const [sortedArray, setSortedArray] = useState<number[]>([])
    const [frames, setFrames] = useState<animationState[]>([])
    const handleSort = () => {
        const result = bubbleSort(sortNumbers)
        setSortedArray(result.sortedArray)
        setFrames(result.frames)
    }

    return (
        <div className="flex h-screen">
            <Card className="w-full max-w-sm m-auto">
                <CardHeader>
                    <CardTitle>Bubble Sort</CardTitle>
                    <CardDescription>
                        An algorithm that uses a do...while loop to sort an array by comparing neighboring items.                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <Button
                        onClick={() => generateNumbers()}
                        className="w-full mb-2">
                        Generate Numbers
                    </Button>
                    <div className="bg-white rounded p-4 text-center my-2 font-bold">
                        {sortNumbers.join(", ")}
                    </div>

                    <Button
                        onClick={() => handleSort()}
                        className="w-full mb-2">
                        Sort Numbers
                    </Button>
                    <div className="bg-white rounded p-4 text-center my-2 font-bold">
                        {sortedArray.join(", ")}
                    </div>
                </CardContent>
                <CardFooter className="flex-col gap-2">

                </CardFooter>
            </Card>

        </div>


    )

}
