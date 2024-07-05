// import { CarouselHome } from "@/components/CarouselHome";
import { Chat } from "@/components/Chat";

export default function Home() {
  return (
    <section className="flex justify-end bg-slate-200 h-screen">
      <div className="w-[100%] sm:w-[400px] h-full">
        {/* <CarouselHome /> */}
        <Chat />
      </div>
    </section>
  );
}
