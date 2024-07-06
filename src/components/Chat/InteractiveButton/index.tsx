import { Button } from "@/components/ui/button"

interface InteractiveButtonProps {
  text: string
  onClick: () => void
}

export const InteractiveButton = ({ text, onClick }: InteractiveButtonProps) => {
  return (
    <Button
      variant="ghost"
      className="bg-grey-4 dark:bg-boxBgDark rounded-2xl w-100 box-border p-10"
      onClick={onClick}
    >
      <p className="text-grey-6 whitespace-break-spaces">
        {text}
      </p>
    </Button>
  )
}