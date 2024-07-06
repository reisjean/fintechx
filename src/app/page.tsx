import { Navigation } from "@/components/Navigation";

export default function Home() {
  return (
    <main className="flex justify-end h-dvh bg-light dark:bg-dark sm:bg-gray-200 sm:dark:bg-gray-700">
      <div className="w-[100%] sm:w-[400px]">
        <Navigation />
      </div>
    </main>
  );
}
