import { Progress } from "@/components/ui/progress";
import Link from "next/link";
import { FaRegQuestionCircle } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa6";
import { MdOutlineLockOpen } from "react-icons/md";
import { TbLogout, TbSettings } from "react-icons/tb";

export function Menu() {
  return (
    <menu className="px-10 mb-8">
      <ul className="flex gap-6 mt-6 flex-col items-start">
        <li className="w-full">
          <Link
            href=""
            className="text-neutrals-2 dark:text-white font-semibold flex items-center gap-6 text-base justify-between"
          >
            <TbSettings className="w-9 h-9 ml-[-2px]" />
            <span className="text-left w-full">Preferencias</span>
            <FaChevronRight />
          </Link>
        </li>
        <li className="w-full">
          <Link
            href=""
            className="text-neutrals-2 dark:text-white font-semibold flex items-center gap-6 text-base justify-between"
          >
            <MdOutlineLockOpen className="w-8 h-8" />
            <span className="text-left w-full">Segurança da conta</span>
            <FaChevronRight />
          </Link>
          <div className="mt-4 ml-12 mr-12 flex flex-col items-start gap-4">
            <Progress value={75} />
            <span className="text-grey-6">Excellent</span>
          </div>
        </li>
        <li className="w-full">
          <Link
            href=""
            className="text-neutrals-2 dark:text-white font-semibold flex items-center gap-6 text-base justify-between"
          >
            <FaRegQuestionCircle className="w-8 h-8" />
            <span className="text-left w-full">Suporte ao cliente</span>
            <FaChevronRight />
          </Link>
        </li>
        <li className="w-full">
          <Link
            href=""
            className="text-neutrals-2 dark:text-white font-semibold flex items-center gap-6 text-base justify-between"
          >
            <TbLogout className="w-8 h-8" />
            <span className="text-left w-full">Sair</span>
            <FaChevronRight />
          </Link>
        </li>
      </ul>
    </menu>
  )
}