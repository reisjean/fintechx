import { Poppins, Urbanist } from "next/font/google"

export const poppins = Poppins({
  subsets: ["latin"],
  style: "normal",
  weight: ["400", "600", "700"],
})

export const urbanist = Urbanist({
  subsets: ["latin"],
  style: "normal",
  weight: ["400", "600", "900"],
})
