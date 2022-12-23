import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Creative Bradley | Video, Marketing & Web Design</title>
        <meta name="description" content="Creative Bradley is a video, marketing & web design" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Coming Soon!
        </h1>

        <p className={styles.description}>
          Hey there! I am currently updating my website, feel free to email me at <a href='mailto:bradley@creativebradley.com'>bradley@creativebradley.com</a> for any inquiries. Much love!
        </p>
      </main>

      <footer className={styles.footer}>
        <a href="mailto:mubengabradley@gmail.com">mubengabradley@gmail.com</a>
      </footer>
    </div>
  )
}
