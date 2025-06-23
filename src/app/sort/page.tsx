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




    return (
        <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] bg-blue-200">
            <main className="flex flex-col gap-[32px] row-start-2 items-start">
                <h1 className="text-lg font-bold text-blue-950">Sort</h1>
                <div className=" flex items-center">
                    <motion.div>
                        <input className="border-blue-300 border-2 rounded-full text-lg mr-2 p-3 pl-6 h-15 bg-white"></input>
                    </motion.div>
                    <motion.div animate={{ rotate: 360 }} transition={{ duration: 2 }}>
                        <Button className="p-7 text-md h-15 bg-blue-800 rounded-full border-1 border-blue-900">Sort</Button>
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
