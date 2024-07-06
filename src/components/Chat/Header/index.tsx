'use client'

import { Button } from "@/components/ui/button";
import { useNavigationStore } from "@/store/navigation";
import { BsThreeDots } from "react-icons/bs";
import { FaChevronLeft } from "react-icons/fa";

export const Header = () => {
  const { update } = useNavigationStore();

  return (
    <header className="grid grid-cols-[50px_auto_54px] w-full items-center px-8">
      <Button
        variant="ghost"
        className="bg-grey-4 dark:bg-boxBgDark text-grey-6 rounded-xl h-12"
        onClick={() => update("carousel")}
      >
        <FaChevronLeft />
      </Button>
      <h3 className="text-lg text-dark dark:text-white">Assuntos Gerais</h3>
      {/* <SideMenu /> */}

      <Button variant="ghost" className="bg-none rounded-xl h-12 text-grey-1 dark:text-grey-3">
        <BsThreeDots className="h-8 w-5" />
      </Button>
    </header>
  )
}