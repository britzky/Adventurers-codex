import Image from "next/image";
import { fraunces, azeret } from "./ui/fonts";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div className="relative flex w-full bg-[#130060] bg-blend-color mb-20">
        <div className="w-1/2 relative h-[450px]">
          <Image
            src="/LandingPage/hero-left.png"
            alt="sorcerer casting a spell"
            fill
            className="object-cover opacity-15"
          />
        </div>
        <div className="flex flex-col z-10 items-center inset-0 justify-center absolute">
          <div className="max-w-[688px] text-center">
            <p className="text-6xl">
              <span className={`${fraunces.className} font-normal`}>Lost in the</span>
            </p>
            <span className="text-6xl">Labyrinth of Stats?</span>
            <p className={`${azeret.className} text-2xl font-normal mt-10`}>Build  your legendary D&D Character!</p>
            <p className={`${azeret.className} text-2xl font-normal`}>We bring order to your chaos!</p>
          </div>
        </div>
        <div className="w-1/2 relative ">
          <Image
            src="/LandingPage/hero-right.png"
            alt="warriors fighting a demon"
            fill
            className="object-cover opacity-20"
          />
        </div>
      </div>

      <div>
        
      </div>
    </main>
  );
}
