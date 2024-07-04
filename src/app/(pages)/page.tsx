import { Button } from "@/components/ui/button";
import { poppins, urbanist } from "../fonts";

export default function Home() {
  return (
    <header>
      <h1 className={poppins.className}>Hello FinTechX!</h1>
      <h2 className={urbanist.className}>vai!!</h2>

      <div>
        <Button>Click me</Button>
      </div>
    </header>
  );
}
