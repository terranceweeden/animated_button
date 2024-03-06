// import Image from "next/image";
"use client";
import Button from "./Button";
import { motion } from "framer-motion";

export default function Home() {
  const text = "Click Me";

  console.log(text);
  return (
    <div>
      <Button>
        {text.split("").map((letter, index) => (
          <motion.span
            key={index}
            initial={{ opacity: 1 }}
            animate={{ opacity: 0 }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: index * 0.1,
            }}
          >
            {letter}
          </motion.span>
        ))}
      </Button>
    </div>
  );
}
