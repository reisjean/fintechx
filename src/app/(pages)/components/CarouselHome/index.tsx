import { poppins } from "@/app/fonts";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

export function CarouselHome() {
  return (
    <Carousel className="w-full">
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

      <div className="w-full flex items-center justify-center mt-6">
        <div className="w-[130px] bg-neutrals-8 dark:bg-boxBgDark rounded-elg flex justify-between py-2 px-2 text-neutrals-2 dark:text-white items-center">
          <CarouselPrevious />
          <span className="scale-y-150 origin-center">|</span>
          <CarouselNext />
        </div>
      </div>
    </Carousel>
  )
}