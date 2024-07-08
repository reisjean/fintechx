'use client'

import { poppins } from "@/app/fonts";
import Image from "next/image";
import { FooterProfile } from "./FooterProfile";
import { HeaderProfile } from "./HeaderProfile";
import { Menu } from "./Menu";

export function Profile() {
  return (
    <section className="text-center grid items-center">
      <div className="w-full h-dvh bg-white dark:bg-dark grid grid-rows-[120px_minmax(0,1fr)_min-content]">
        <HeaderProfile />

        <section>
          <div className="flex items-center flex-col gap-4">
            <Image
              width={106}
              height={106}
              sizes="106px"
              src="/fx.png"
              alt="Profile user image"
              priority
            />
            <div>
              <h1 className={`${poppins.className} text-neutrals-2 dark:text-white font-semibold text-2xl leading-relaxed`}>
                Frodo Bolseiro
              </h1>
              <p className="text-grey-3">frodo@lotr.net</p>
            </div>
          </div>

          <Menu />
        </section>

        <FooterProfile />
      </div>
    </section>
  )
}