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
import Image from "next/image";
import { useEffect, useState } from "react";
import { PiRadioButtonFill } from "react-icons/pi";

export function CarouselHome() {
  const [api, setApi] = useState<CarouselApi>()
  const [activeItem, setActiveItem] = useState(0)
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!api) return

    setCount(api.scrollSnapList().length)
    setActiveItem(api.selectedScrollSnap() + 1)

    api.on("select", () => {
      setActiveItem(api.selectedScrollSnap() + 1)
    })
  }, [api])

  return (
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
            <div className="mt-[1.5rem] w-full absolute -z-10">
              <Image
                src="/slide-2.webp"
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
            <div className="space-y-2 absolute top-3/4 left-1/2 -translate-x-1/2 w-8/12">
              <h1 className={`${poppins.className} text-neutrals-2 dark:text-white font-bold text-3xl leading-relaxed`}>
                Harness the Innovation of Next-Gen AI
              </h1>
            </div>
          </CarouselItem>
        </CarouselContent>

        <div className="w-full flex items-center justify-center my-6">
          <div className="w-[130px] bg-neutrals-8 dark:bg-boxBgDark rounded-elg flex justify-between py-2 px-2 text-neutrals-2 dark:text-white items-center">
            <CarouselPrevious />
            <span className="scale-y-150 origin-center">|</span>
            <CarouselNext />
          </div>
        </div>
      </Carousel>

      <div className="flex gap-2 items-center justify-between absolute top-0 left-1/2 -translate-x-1/2 mt-[470px]">
        {Array.from({ length: count }).map((_, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: index === activeItem - 1 ? 1 : 0.3 }}
            transition={{ duration: 0.3 }}
            className={index !== activeItem - 1 ? 'w-[9px] h-[9px] bg-white rounded-full' : ''}
          >
            {index === activeItem - 1 && <PiRadioButtonFill className="text-white" />}
          </motion.div>
        ))}
      </div>
    </div>
  )
}