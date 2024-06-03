import Image from "next/image";
import { fraunces, azeret } from "./ui/fonts";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">

      {/* Hero Image */}
      <div className="relative flex gap-12 w-full bg-[#130060] mb-20 p-8">
        <div className="h-[450px] bg-hero">
            <Image
              src="/LandingPage/hero.png"
              alt="warriors fighting demons"
              fill
              className="object-cover mix-blend-luminosity"
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
      </div>

      {/* Cards row 1*/}
      <div className="pb-6 flex gap-6 w-[1200px] h-[384px]">
        <div className="bg-[#140161] border-4 border-[#2A07B4] rounded-lg w-1/3 overflow-hidden">
          <div className="h-full flex">
            <div className="relative bg-[#130060] w-full translate-x-1/4">
              <Image
                src="/LandingPage/builder.png"
                alt="guy holding sword"
                className="mix-blend-luminosity"
                fill
                objectFit="cover"
              />
              <div className="absolute inset-0 bg-character-builder" />
            </div>
            <div className="absolute p-5">
              <h1 className="text-[36px] font-thin">Character Builder</h1>
              <p className="max-w-[175px] font-light leading-6 mt-6 text-[18px]">
                <span>
                Craft your heroes with ease, just like the scribes of ancient tomes
                </span>
              </p>
            </div>
          </div>
        </div>

        <div className="bg-[#6250AF] border-4 border-[#9077FC] rounded-lg relative w-2/3 overflow-hidden">
          <div className="h-full flex">
            <div className="relative bg-[#6250AF] w-full translate-x-10">
              <Image
                src="/LandingPage/sheet.png"
                alt="mage casting spell"
                fill
                objectFit="cover"
                className="mix-blend-luminosity"
              />
              <div className="absolute inset-0 bg-character-sheet" />
            </div>
            <div className="absolute w-full p-5">
              <h1 className="text-[36px] font-thin">Character Sheet</h1>
              <p className="max-w-[300px] font-light leading-6 mt-6 text-[18px]">
                <span>
                Keep track of abilities, items, stats, and experience, like a wizard with a spellbook.
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Cards row 2 */}
      <div className="pb-6 flex gap-6 w-[1200px] h-[384px]">
        <div className="bg-[#14016180] border-4 border-[#2A07B480] rounded-lg relative w-2/3 overflow-hidden">
          <div className="h-full flex">
            <div className="relative w-full bg-[#0A0030] translate-x-1/3">
              <Image
                src="/LandingPage/chat-bot.png"
                alt="sorcerer casting spell"
                fill
                objectFit="cover"
                className="mix-blend-luminosity"
              />
            <div className="absolute inset-0 bg-mystical-chatbot" />
            </div>
            <div className="absolute w-full p-5">
              <p className=" flex justify-center p-1 bg-[#FFFFFF26] rounded-[8px] w-[135px] border-2 border-[#FFFFFF26]">
                <span>Coming soon</span>
              </p>
              <h1 className="text-[36px] font-thin mt-6">Mystical Chatbot</h1>
              <p className="max-w-[238px] font-light leading-6 mt-6 text-[18px]">
                <span>
                Unleash your creativity and conjure character concepts as magical as Merlin's incantations.
                </span>
              </p>
            </div>
          </div>
        </div>

        <div className="bg-[#6250AF80] border-4 border-[#9077FC80] rounded-lg w-1/3 overflow-hidden">
          <div className="h-full flex">
            <div className="relative bg-[#312857] w-full translate-x-12">
              <Image
                src="/LandingPage/party-finder.png"
                alt="guy holding sword"
                className="mix-blend-luminosity"
                fill
                objectFit="cover"
              />
              <div className="absolute inset-0 bg-party-finder" />
            </div>
            <div className="absolute w-full p-5">
              <p className=" flex justify-center p-1 bg-[#FFFFFF26] rounded-[8px] w-[135px] border-2 border-[#FFFFFF26]">
                <span>Coming soon</span>
              </p>
              <h1 className="text-[36px] font-thin mt-6">Party Finder</h1>
              <p className="max-w-[238px] font-light leading-6 mt-6 text-[18px]">
                <span>
                Connect with fellow adventurers,
                whether they dwell in distant lands or nearby taverns,
                and embark on legendary quests together.
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>


      {/* Cards row 3 */}
      <div className="pb-6 flex gap-6 w-[1200px] h-[384px]">

      </div>
    </main>
  );
}
