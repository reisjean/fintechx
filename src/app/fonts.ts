import { Poppins, Urbanist } from "next/font/google"

export const poppins = Poppins({
  subsets: ["latin"],
  style: "normal",
  weight: ["400", "700"],
})

export const urbanist = Urbanist({
  subsets: ["latin"],
  style: "normal",
  weight: ["400", "900"],
})
