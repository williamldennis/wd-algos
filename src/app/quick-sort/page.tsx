'use client'

import Image from "next/image";
import { Button } from "@/components/ui/button"
import * as motion from "motion/react-client"
import { useState } from "react";
import { log } from "console";
import { fullArray, quickObjectArray, quickSort } from "@/algos/quick-sort";

type NumArray = number[]

export default function QuickSort() {

    const [sortNumbers, setSortNumbers] = useState<number[]>([])
    const generateNumbers = () => {
        const newNumbers: number[] = Array.from({ length: 8 }, () => Math.floor(Math.random() * 100))
        setSortNumbers(newNumbers)
    }


    return (
        <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] bg-purple-200">
            <main className="flex flex-col gap-[20px]">
                <h1 className="text-lg font-bold text-purple-950 mt-40"> Quick Sort</h1>
                <div className="flex flex-col items-center">
                    <div className="mb-4">
                        <motion.div animate={{ rotate: 360 }} transition={{ duration: 2 }}>
                            <Button
                                className="p-7 text-md h-15 bg-purple-800 rounded-full border-1 border-purple-900"
                                onClick={() => generateNumbers()}
                            >Generate Numbers</Button>
                            <Button
                                className="p-7 text-md h-15 bg-green-800 rounded-full border-1 border-green-900 ml-4"
                                onClick={() => quickSort(sortNumbers, quickObjectArray, fullArray)}
                            >Sort Numbers</Button>
                        </motion.div>
                    </div>
                    <div className="flex flex-col w-full items-center">
                        <motion.div className="p-6 font-bold bg-white rounded-full mb-4 w-full text-center">
                            {sortNumbers.join(", ")}
                        </motion.div>
                    </div>
                </div>

                <div>
                    {/* <AlgoViz state={undefined} /> */}
                </div>

            </main>
            <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
                <a
                    className="flex items-center gap-2 hover:underline hover:underline-offset-4"
                    href="https://willdennis.com"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <Image
                        aria-hidden
                        src="/globe.svg"
                        alt="Globe icon"
                        width={16}
                        height={16}
                    />
                    cobbled by will dennis
                </a>
            </footer>
        </div>
    );
}
