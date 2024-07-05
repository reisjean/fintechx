import { Button } from "@/components/ui/button";

import { CarouselHome } from "@/components/CarouselHome";
import { poppins } from "./fonts";

export default function Home() {
  return (
    <main className="text-center  flex flex-col items-center">
      <div className="text-right w-full px-6 pt-2 mb-[-1rem]">
        <Button variant="link" className={`text-grey-2 text-lg ${poppins.className} font-semibold`}>
          Skip
        </Button>
      </div>

      <CarouselHome />

    </main>
  );
}
