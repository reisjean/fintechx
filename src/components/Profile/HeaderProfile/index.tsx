'use client'

import { Button } from "@/components/ui/button";
import { useNavigationStore } from "@/store/navigation";
import { FaChevronLeft } from "react-icons/fa";

export function HeaderProfile() {
  const { update } = useNavigationStore();

  return (
    <header className="grid grid-cols-[50px_auto_54px] w-full items-center px-8">
      <Button
        variant="ghost"
        className="bg-grey-4 dark:bg-boxBgDark text-grey-6 rounded-xl h-12"
        onClick={() => update("chat")}
      >
        <FaChevronLeft />
      </Button>
      <h3 className="text-lg text-dark dark:text-white">Profile</h3>
      <span></span>
    </header>
  )
}