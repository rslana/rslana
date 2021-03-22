import Head from "next/head";
import Button from "../src/components/layout/Button";
import ExternalLink from "../src/components/layout/ExternalLink";
import styles from "../styles/Home.module.scss";
import { FaGithub, FaLink } from "react-icons/fa";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>rslana.dev</h1>
        <div className={styles.info}>
          <p>
            Hello, I'm <span className={styles.emphasis}>Rafael</span>
          </p>
          <p>A Front-end developer, from Brazil</p>
          <div
            className={styles.portfolioTechs}
            style={{ justifyItems: "center" }}
          >
            <ExternalLink
              href="https://www.linkedin.com/in/rafael-lana/"
              style={{ margin: "auto" }}
            >
              <img src={"/social/linkedin.svg"} alt="React" />{" "}
              <span>LinkedIn</span>
            </ExternalLink>
          </div>
        </div>
        <div className={styles.grid}>
          <img
            className={styles.arrowDown}
            src={"/icons/arrow-down.svg"}
            alt="Arrow down"
          />
        </div>
        <div className={styles.portfolio}>
          <h1 className={styles.title}>Projects as a freelancer</h1>
          {/* Cartesi.io */}
          <div className={styles.boxContainer}>
            <div className={styles.boxItem}>
              <img
                src={"/potfolio/cartesi/cartesi.png"}
                alt="Website Cartesi.io"
                className={styles.portfolioImage}
              />
            </div>
            <div className={styles.boxItem}>
              <h1>Website cartesi.io</h1>
              <p>
                I developed and maintained some specific pages of the website
                using Gatsby.js and sass. This is a private project.
              </p>
              <div className={styles.portfolioTechs}>
                <ExternalLink href="https://reactjs.org/">
                  <img src={"/icons/tech/react.svg"} alt="React" />{" "}
                  <span>React</span>
                </ExternalLink>
                <ExternalLink href="https://www.gatsbyjs.com/">
                  <img src={"/icons/tech/gatsby.png"} alt="Gatsby" />{" "}
                  <span>Gatsby</span>
                </ExternalLink>
                <ExternalLink href="https://sass-lang.com/">
                  <img src={"/icons/tech/sass.png"} alt="Sass" />{" "}
                  <span>Sass</span>
                </ExternalLink>
              </div>
              <div className={styles.btnList}>
                <Button>
                  <ExternalLink href="https://cartesi.io/">
                    <FaLink />
                    &nbsp; Live Demo
                  </ExternalLink>
                </Button>
                <Button>
                  <ExternalLink href="https://github.com/cartesi">
                    <FaGithub />
                    &nbsp; Github
                  </ExternalLink>
                </Button>
              </div>
            </div>
          </div>

          <h1 className={styles.title}>Personal Projects</h1>

          {/* Spotify Clone */}
          <div className={styles.boxContainer}>
            <div className={styles.boxItem}>
              <img
                src={"/potfolio/spotify-clone/screen-01.png"}
                alt="Spotify Clone - by rslana.dev"
                className={styles.portfolioImage}
              />
            </div>
            <div className={styles.boxItem}>
              <h1>Spotify Clone</h1>
              <p>
                A UI clone from Spotify Web. This is a project focused on the
                main UI functionalities, the player starts with a fixed amount
                of songs and playlists, the images and the name of the albums,
                songs, descriptions and authors are randomly generated.
              </p>
              <div className={styles.portfolioTechs}>
                <ExternalLink href="https://reactjs.org/">
                  <img src={"/icons/tech/react.svg"} alt="React" />{" "}
                  <span>React</span>
                </ExternalLink>
                <ExternalLink href="https://www.typescriptlang.org/">
                  <img src={"/icons/tech/typescript.svg"} alt="Typescript" />{" "}
                  <span>Typescript</span>
                </ExternalLink>
                <ExternalLink href="https://source.unsplash.com/">
                  <img src={"/icons/tech/unsplash.svg"} alt="Unsplash" />{" "}
                  <span>Unsplash</span>
                </ExternalLink>
              </div>
              <div className={styles.btnList}>
                <Button>
                  <ExternalLink href="https://spotify.rslana.dev/">
                    <FaLink />
                    &nbsp; Live Demo
                  </ExternalLink>
                </Button>
                <Button>
                  <ExternalLink href="https://github.com/rslana/spotify-clone">
                    <FaGithub />
                    &nbsp; Source
                  </ExternalLink>
                </Button>
              </div>
            </div>
          </div>

          {/* JF Bus */}
          <div className={styles.boxContainer}>
            <div className={styles.boxItem}>
              <h1>JF Bus</h1>
              <p>
                A mobile App with bus schedules from Juiz de Fora - MG, Brasil.
                I developed a crawler to get the bus schedules from city hall
                website.
              </p>
              <div className={styles.portfolioTechs}>
                <ExternalLink href="https://reactjs.org/">
                  <img src={"/icons/tech/react.svg"} alt="React" />{" "}
                  <span>React Native</span>
                </ExternalLink>
                <ExternalLink href="https://www.typescriptlang.org/">
                  <img src={"/icons/tech/javascript.svg"} alt="Javascript" />{" "}
                  <span>Javascript</span>
                </ExternalLink>
                <ExternalLink href="https://nodejs.org">
                  <img src={"/icons/tech/nodejs.svg"} alt="Node.js" />{" "}
                  <span>Node.js</span>
                </ExternalLink>
              </div>
              <div className={styles.btnList}>
                <Button>
                  <ExternalLink href="https://github.com/rslana/app-aeoz">
                    <FaGithub />
                    &nbsp; App Source
                  </ExternalLink>
                </Button>
                <Button>
                  <ExternalLink href="https://github.com/rslana/api-jfbus">
                    <FaGithub />
                    &nbsp; Api Source
                  </ExternalLink>
                </Button>
              </div>
            </div>
            <div className={styles.boxItem}>
              <video autoPlay muted loop className={styles.portfolioAppVideo}>
                <source src="/potfolio/busjf/busjf-01.mp4" type="video/mp4" />
                <source src="/potfolio/busjf/busjf-01.mp4" type="video/ogg" />
                Your browser does not support HTML video.
              </video>
            </div>
          </div>
        </div>
      </main>

      <div style={{ marginBottom: "150px", textAlign: "center" }}>
        <h2 style={{ margin: 0 }}>rslana.dev</h2>
        <p style={{ margin: 0 }}>We are infinite</p>
      </div>

      <footer className={styles.footer}>
        <h3>Contact</h3>
        <div className={styles.socialLinks}>
          <ExternalLink href="https://github.com/rslana">
            <img src={"/social/github.svg"} alt="Github" />
          </ExternalLink>
          <ExternalLink href="https://instagram.com/rslana.dev">
            <img src={"/social/instagram.svg"} alt="Instagram" />
          </ExternalLink>
          <ExternalLink href="https://br.linkedin.com/in/rafael-lana">
            <img src={"/social/linkedin.svg"} alt="LinkedIn" />
          </ExternalLink>
        </div>
        <p>Copyright &copy; {new Date().getUTCFullYear()}, Rafael</p>
      </footer>
    </div>
  );
}
