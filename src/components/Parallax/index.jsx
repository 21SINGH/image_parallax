"use client";

import styles from "./style.module.scss";
import picture1 from "../../../public/images/decimal.jpg";
import picture2 from "../../../public/images/locomotive.png";
import picture3 from "../../../public/images/panda.jpg";
import Image from "next/image";
import { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";

const word = "with framer-motion";

export default function Parallax() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });
  const sms = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const mds = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const lgs = useTransform(scrollYProgress, [0, 1], [0, -250]);

  const images = [
    {
      src: picture1,
      y: 0
    },
    {
      src: picture2,
      y: lgs
    },
    {
      src: picture3,
      y: mds
    }
  ];

  return (
    <div className={styles.container} ref={container}>
      <div className={styles.body}>
        <motion.h1 style={{ y: sms }}>Parallax</motion.h1>
        <h1>Scroll</h1>
        <div className={styles.word}>
          <p>
            {word.split("").map((letter, i) => {
              const y = useTransform(
                scrollYProgress,
                [0, 1],
                [0, Math.floor(Math.random() * -75) - 25]
              );
              return (
                <motion.span style={{ top: y }} key={`l_${i}`}>
                  {letter}
                </motion.span>
              );
            })}
          </p>
        </div>
        <div className={styles.images}>
          {images.map(({ src, y }, i) => (
            <motion.div
              style={{ y }}
              key={`i_${i}`}
              className={styles.imageContainer}
            >
              <Image src={src} placeholder="blur" alt="image" fill />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
