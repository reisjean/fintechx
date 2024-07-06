'use client'

import { poppins } from "@/app/fonts";
import { motion } from "framer-motion";

import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useNavigationStore } from "@/store/navigation";
import Image from "next/image";
import { useEffect, useState } from "react";
import { PiRadioButtonFill } from "react-icons/pi";
import { Button } from "../ui/button";

export function CarouselHome() {
  const [api, setApi] = useState<CarouselApi>()
  const [activeItem, setActiveItem] = useState(0)
  const [count, setCount] = useState(0)
  const { update } = useNavigationStore();

  useEffect(() => {
    if (!api) return
    setCount(api.scrollSnapList().length)
    setActiveItem(api.selectedScrollSnap() + 1)

    api.on("select", () => {
      setActiveItem(api.selectedScrollSnap() + 1)
    })
  }, [api])

  return (
    <section className="text-center flex flex-col items-center bg-light dark:bg-dark relative">
      <div className="text-right w-full px-6 pt-2 mb-[-1rem] z-10">
        <Button
          onClick={() => update("chat")}
          variant="link"
          className={`text-grey-2 text-lg ${poppins.className} font-semibold`}
        >
          Skip
        </Button>
      </div>
      <div className="relative w-full">
        <Carousel setApi={setApi}>
          <CarouselContent>
            <CarouselItem>
              <div className="mb-[-1rem] w-full">
                <Image
                  src="/robot.png"
                  alt="Robot"
                  sizes="100vw"
                  style={{
                    width: '100%',
                    height: 'auto',
                  }}
                  width={414}
                  height={554}
                  priority
                />
              </div>
              <div className="space-y-2">
                <h1 className={`${poppins.className} text-neutrals-2 dark:text-white font-bold text-3xl leading-relaxed`}>
                  Unlock the Power<br />
                  Of Future AI
                </h1>
                <p className="text-paragraph leading-relaxed">
                  Chat with the smartest AI Future<br />
                  Experience power of AI with us
                </p>
              </div>
            </CarouselItem>
            <CarouselItem className="relative">
              <div className="mb-[-1rem] w-full">
                <Image
                  src="/robot-smile.webp"
                  alt="Robot Smiling"
                  sizes="100vw"
                  style={{
                    width: '100%',
                    height: 'auto',
                  }}
                  width={414}
                  height={554}
                  priority
                />
              </div>
              <div className="space-y-2 absolute top-3/4 left-1/2 -translate-x-1/2 w-8/12">
                <h1 className={`${poppins.className} text-neutrals-2 dark:text-white font-bold text-3xl leading-relaxed`}>
                  Harness the Innovation of Next-Gen AI
                </h1>
              </div>
            </CarouselItem>
          </CarouselContent>

          <div className="w-full flex items-center justify-center my-6">
            <div className="w-[130px] bg-neutrals-8 dark:bg-boxBgDark rounded-elg flex justify-between py-2 px-2 text-neutrals-2 dark:text-white items-center shadow-2xl">
              <CarouselPrevious />
              <span className="scale-y-150 origin-center">|</span>
              <CarouselNext />
            </div>
          </div>
        </Carousel>

        <div className="flex gap-2 items-center justify-between absolute bottom-0 left-1/2 -translate-x-1/2 mb-[275px]">
          {Array.from({ length: count }).map((_, index) => {
            return (
              <motion.div
                key={Math.round(index)}
                initial={{ opacity: 0 }}
                animate={{ opacity: index === activeItem - 1 ? 1 : 0.3 }}
                transition={{ duration: 0.3 }}
                className={index !== activeItem - 1 ? 'w-[9px] h-[9px] bg-dark dark:bg-white rounded-full' : ''}
              >
                {index === activeItem - 1 && <PiRadioButtonFill className="text-dark dark:text-white" />}
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}