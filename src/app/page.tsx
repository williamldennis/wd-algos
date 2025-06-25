'use client'
import Image from "next/image";
import { Button } from "@/components/ui/button"
import { useRouter } from 'next/navigation'

export default function Home() {
  const router = useRouter();

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <h1 className="text-lg font-bold">Algo Visualizations</h1>
        <ol className="flex gap-4">
          <li>
            <Button
              onClick={() => router.push('/search')}
            >Search</Button>
          </li>
          <li>
            <Button
              onClick={() => router.push('/merge-sort')}
            >Merge Sort</Button>
          </li>
          <li>
            <Button
              onClick={() => router.push('/quick-sort')}
            >Quick Sort</Button>
          </li>
          <li>
            <Button
              onClick={() => router.push('/bubble-sort')}
            >Bubble Sort</Button>
          </li>
          <li>
            <Button>Path Planning</Button>
          </li>
        </ol>
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
