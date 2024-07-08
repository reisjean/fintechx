import { AxiosError } from "axios"
import useSWR from "swr"

const fetcher = (url: string) => fetch(url).then((res) => res.json())

export type PreMessages = {
  id: string
  text: string
}[]

export const usePreMessages = () => {
  const { data, error, isLoading } = useSWR<PreMessages, AxiosError>(
    "/api/messages",
    fetcher
  )

  return {
    preMessages: data,
    isLoading: isLoading,
    isError: error,
  }
}
