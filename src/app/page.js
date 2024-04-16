'use client'

import styles from './page.module.scss'
import Lenis from '@studio-freight/lenis'
import { useEffect } from 'react'
import Parallax from '@/components/Parallax'

export default function Home() {

  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
  }, [])
  return (
    <div>
      <div className={styles.top}><h1>Scroll Down</h1></div>
      <Parallax />
    </div>
  )
}
