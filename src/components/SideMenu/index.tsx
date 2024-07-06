'use client'

import {
  Sheet,
  SheetContent,
  SheetTrigger
} from "@/components/ui/sheet";
import Link from "next/link";
import { BsThreeDots } from "react-icons/bs";
import { Button } from "../ui/button";

export const SideMenu = () => {
  return (
    <Sheet>
      <SheetTrigger>
        <Button variant="ghost" className="bg-none rounded-xl h-12 text-grey-1 dark:text-grey-3">
          <BsThreeDots className="h-8 w-5" />
        </Button>
      </SheetTrigger>
      <SheetContent className="w-[250px] p-0 py-12">
        <nav className="grid items-start px-4 text-sm font-medium">
          <Link
            href="#"
            className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
            prefetch={false}
          >
            Home
          </Link>
          <Link
            href="#"
            className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
            prefetch={false}
          >
            Menu
          </Link>
          <Link
            href="#"
            className="flex items-center gap-3 rounded-lg bg-gray-100 px-3 py-2 text-gray-900 transition-all hover:text-gray-900 dark:bg-gray-800 dark:text-gray-50 dark:hover:text-gray-50"
            prefetch={false}
          >
            Histórico
          </Link>
          <Link
            href="#"
            className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
            prefetch={false}
          >
            Minha Conta
          </Link>


        </nav>
      </SheetContent>
    </Sheet >
  )
}