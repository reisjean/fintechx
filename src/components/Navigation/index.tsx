'use client'

import { useNavigationStore } from "@/store/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { CarouselHome } from "../CarouselHome";
import { Chat } from "../Chat";

export function Navigation() {
  const { current } = useNavigationStore();

  return (
    <AnimatePresence mode="wait">
      {current === 'carousel' && (
        <motion.div
          key="carousel"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -100, opacity: 0 }}
          transition={{ duration: 0.15 }}
          className="h-full"
        >
          <CarouselHome />
        </motion.div>
      )}
      {current === 'chat' && (
        <motion.div
          key="chat"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: 100, opacity: 0 }}
          transition={{ duration: 0.15 }}
          className="h-full"
        >
          <Chat />
        </motion.div>
      )}
    </AnimatePresence>
  );
}