import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>rslana.dev</h1>
        <p>Rafael Souza de Lana &nbsp;&bull;&nbsp; Web Developer</p>

        <div className={styles.grid}>
          <span className={styles.mainEmoji}>🛠️</span>
        </div>
        <div className={styles.grid}>
          <h3>Under construction...</h3>
        </div>
      </main>

      <footer className={styles.footer}>
        <h3>Contact</h3>
        <div className={styles.socialLinks}>
          <a href="https://github.com/rslana">
            <img src={"/social/github.svg"} alt="Github" />
          </a>
        </div>
        <p>Copright &copy; {new Date().getUTCFullYear()}, Rafael</p>
      </footer>
    </div>
  );
}
