import Image from 'next/image'
import styles from './page.module.css'
import Header from './components/header'

export default function Home() {
  return (
    <>
    <Header/>

    <main className={styles.main}>
      <div
        className={styles.container}
      >
        <Image
          className={styles.starPaint}
          src="/stars.svg"
          width={1205}
          height={278}
          alt="stars"
        />


      </div>
    </main>
    </>
  )
}
