'use client'

import { QuickSortState } from "@/algos/quicksort";
import { useEffect, useState } from "react";
import { sortHistory } from "@/algos/quicksort";

export default function Home() {

    const [currentFrame, setCurrentFrame] = useState(0)
    const [isPlaying, setIsPlaying] = useState(false)
    const [animationSpeed, setAnimationSpeed] = useState(100)


    useEffect(() => {
        if (!isPlaying || currentFrame >= sortHistory.length - 1) {
            console.log("infinite??")
            setIsPlaying(false)
            return
        }

        const timer = setTimeout(() => {
            setCurrentFrame(prev => prev + 1)
        }, animationSpeed)

        return () => clearTimeout(timer)
    }, [animationSpeed, isPlaying, currentFrame])

    const frame = sortHistory[currentFrame]
    // render the currentFrame
    return (
        <div>
            <div>Original Array: {frame.originalArray}</div>
            <div>Sorted Array: {frame.sortedArray}</div>
            <div>Pivot: {frame.pivot}</div>
            <button onClick={() => setIsPlaying(prev => !prev)}>
                Pause/Play
            </button>
            <input type="range" min={0} max={1000} step={10} value={animationSpeed} onChange={(e) => setAnimationSpeed(parseInt(e.target.value))} />
        </div>
    );
}
