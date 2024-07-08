import { FaRegClock } from "react-icons/fa";
import { FaUser } from "react-icons/fa6";
import { GoHomeFill } from "react-icons/go";
import { HiOutlineSquares2X2 } from "react-icons/hi2";

export function FooterProfile() {
  return (
    <footer
      className="flex justify-between items-center gap-4 mt-12 px-10 py-6 border-t-[1px] border-grey-3 dark:border-light"
    >
      <GoHomeFill className="w-6 h-6 text-grey-3 dark:text-light" />
      <HiOutlineSquares2X2 className="w-6 h-6 text-grey-3 dark:text-light" />
      <FaRegClock className="w-6 h-6 text-grey-3 dark:text-light" />
      <FaUser className="w-6 h-6 text-grey-3 dark:text-light" />
    </footer>
  )
}