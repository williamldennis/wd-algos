'use client'

import Image from "next/image";
import { Button } from "@/components/ui/button"
import * as motion from "motion/react-client"
import { useEffect, useState } from "react";
import { log } from "console";
import { splitSort } from "@/sorting-logic";

type NumArray = number[]

export default function Home() {

    useEffect(() => {
        splitSort([1, 14, 3, 9, 4])
    })

    const [sortNumbers, setSortNumbers] = useState<number[]>([])
    const generateNumbers = () => {
        const newNumbers: number[] = Array.from({ length: 8 }, () => Math.floor(Math.random() * 100))
        setSortNumbers(newNumbers)
    }



    return (
        <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] bg-blue-200">
            <main className="flex flex-col gap-[32px] row-start-2 items-start">
                <h1 className="text-lg font-bold text-blue-950"> Merge Sort</h1>
                <div className="flex flex-col items-center">
                    <motion.div className="p-4 font-bold bg-white rounded-full mb-4 w-full">
                        {sortNumbers.join(", ")}
                    </motion.div>
                    <motion.div animate={{ rotate: 360 }} transition={{ duration: 2 }}>
                        <Button
                            className="p-7 text-md h-15 bg-blue-800 rounded-full border-1 border-blue-900"
                            onClick={() => generateNumbers()}
                        >Generate Numbers</Button>
                        <Button
                            className="p-7 text-md h-15 bg-green-800 rounded-full border-1 border-green-900 ml-4"
                            onClick={() => splitSort(sortNumbers)}
                        >Sort Numbers</Button>
                    </motion.div>
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
