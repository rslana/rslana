import Head from "next/head";
import Link from "next/link";
import { Button } from "../src/components/Button";
import { Title } from "../src/components/Title";
import ExternalLink from "../src/components/ExternalLink";
import styles from "../styles/Home.module.scss";
import { FaGithub, FaLink } from "react-icons/fa";
import Wave from "../src/components/svgs/Wave";

export default function Home() {
  return (
    <div className={styles.container} id="home">
      <Head>
        <title>rslana.dev</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Title gradient="primary">rslana.dev</Title>
        <div className={styles.info}>
          <div>
            <h1>Hello, I&apos;m Rafael</h1>
            <h2>A Software Developer from Brazil.</h2>
            <h2>
              I&apos;m passionate about{" "}
              <span className={[styles.specialFont, styles.emphasis].join(" ")}>
                Front-end
              </span>{" "}
              development.
            </h2>
          </div>
          <div className={`${styles.portfolioTechs} ${styles.fluid}`}>
            <ExternalLink
              href="https://www.linkedin.com/in/rafael-lana/"
              style={{ margin: "auto" }}
            >
              <img src={"/social/linkedin.svg"} alt="LinkedIn" />{" "}
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
        <Wave />
      </main>

      <div className={styles.infoCardList}>
        <div className={styles.infoCard}>
          <h2>About me</h2>
          <div>
            <h3>Experience</h3>
            <p>
              Front-end Developer at{" "}
              <ExternalLink
                href="https://www.jobsity.com"
                className={styles.link}
              >
                Jobsity
              </ExternalLink>{" "}
              <span className={styles.metaInfo}>MAY/2021 - NOW</span>
            </p>
            <p>
              Full-stack Developer{" "}
              <Link href="/" passHref>
                <span className={styles.link}>Freelance part-time</span>
              </Link>{" "}
              <span className={styles.metaInfo}>JUN/2020 - NOW</span>
            </p>
            <p>
              Software Engineer Trainee at{" "}
              <ExternalLink href="https://levty.com/br" className={styles.link}>
                LEVTY
              </ExternalLink>{" "}
              <span className={styles.metaInfo}>JAN/2020 - MAY/2021</span>
            </p>
          </div>
          <div>
            <h3>Education</h3>
            <p>
              BS in Information Systems &bull;{" "}
              <ExternalLink
                href="https://www.ifsudestemg.edu.br/juizdefora"
                className={styles.link}
              >
                IF Sudeste MG
              </ExternalLink>{" "}
              <span className={styles.metaInfo}>2016 - 2021</span>
            </p>
          </div>
        </div>
        <div className={styles.infoCard}>
          <h2>
            Stack of{" "}
            <span className={styles.emphasis}>languages/technologies</span>
          </h2>
          <h3>Currently working with</h3>
          <div className={`${styles.portfolioTechs} ${styles.fluid}`}>
            <ExternalLink href="https://www.typescriptlang.org/">
              <img src={"/icons/tech/typescript.svg"} alt="Typescript" />{" "}
              <span>Typescript</span>
            </ExternalLink>
            <ExternalLink href="https://reactjs.org/">
              <img src={"/icons/tech/react.svg"} alt="React" />{" "}
              <span>React</span>
            </ExternalLink>
            <ExternalLink href="https://react-query.tanstack.com/">
              <img src={"/icons/tech/react-query.svg"} alt="React Query" />{" "}
              <span>React Query</span>
            </ExternalLink>

            <ExternalLink href="https://nodejs.org">
              <img src={"/icons/tech/nodejs.svg"} alt="Node.js" />{" "}
              <span>Node.js</span>
            </ExternalLink>
            <ExternalLink href="https://nextjs.org/">
              <img src={"/icons/tech/nextjs.svg"} alt="Next.js" />{" "}
              <span>Next.js</span>
            </ExternalLink>
            <ExternalLink href="https://styled-components.com/">
              <img
                src={"/icons/tech/styled-components.png"}
                alt="styled components"
              />{" "}
              <span>styled components</span>
            </ExternalLink>
            <ExternalLink href="https://storybook.js.org/">
              <img src={"/icons/tech/storybook.png"} alt="Storybook" />{" "}
              <span>Storybook</span>
            </ExternalLink>
          </div>
          <h3>Already worked with</h3>
          <div className={`${styles.portfolioTechs} ${styles.fluid}`}>
            <ExternalLink href="https://redux.js.org/">
              <img src={"/icons/tech/redux.png"} alt="Redux" />{" "}
              <span>Redux</span>
            </ExternalLink>
            <ExternalLink href="https://sass-lang.com/">
              <img src={"/icons/tech/sass.png"} alt="Sass" />
              <span>Sass</span>
            </ExternalLink>
            <ExternalLink href="https://www.gatsbyjs.com/">
              <img src={"/icons/tech/gatsby.png"} alt="Gatsby" />{" "}
              <span>Gatsby</span>
            </ExternalLink>
          </div>
        </div>
      </div>

      <div className={styles.portfolio}>
        <h1 className={styles.title}>
          Projects as a <span className={styles.specialFont}>freelancer</span>
        </h1>
        {/* Cartesi.io */}
        <div className={styles.boxContainer}>
          <div className={styles.boxItem}>
            <img
              src={"/potfolio/cartesi/cartesi.png"}
              alt="Website Cartesi.io"
              className={styles.portfolioImage}
              loading="lazy"
              data-animation="fade-up"
            />
          </div>
          <div className={styles.boxItem}>
            <h1 data-animation="fade-left">Website cartesi.io</h1>
            <p data-animation="fade-up">
              I developed and maintained some specific pages of the website
              using Gatsby.js and sass. This is a private project.
            </p>
            <p className={styles.metaInfo}>JUN/2020 - JAN/2021</p>
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
              <ExternalLink href="https://cartesi.io/">
                <Button>
                  <FaLink />
                  &nbsp; Live Demo
                </Button>
              </ExternalLink>
              <ExternalLink href="https://github.com/cartesi">
                <Button>
                  <FaGithub />
                  &nbsp; Github
                </Button>
              </ExternalLink>
            </div>
          </div>
        </div>

        <h1 className={styles.title}>
          <span className={styles.specialFont}>Personal</span> Projects
        </h1>

        {/* Spotify Clone */}
        <div className={styles.boxContainer}>
          <div className={styles.boxItem}>
            <img
              src={"/potfolio/spotify-clone/screen-02.jpg"}
              alt="Spotify Clone - by rslana.dev"
              className={styles.portfolioImage}
              loading="lazy"
              data-animation="fade-up"
            />
          </div>
          <div className={styles.boxItem}>
            <h1 data-animation="fade-left">Spotify Clone</h1>
            <p data-animation="fade-up">
              A UI clone from Spotify Web. This is a project focused on the main
              UI functionalities, the player starts with a fixed amount of songs
              and playlists, the images and the name of the albums, songs,
              descriptions and authors are randomly generated.
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
              <ExternalLink href="https://spotify.rslana.dev/">
                <Button>
                  <FaLink />
                  &nbsp; Live Demo
                </Button>
              </ExternalLink>
              <ExternalLink href="https://github.com/rslana/spotify-clone">
                <Button>
                  <FaGithub />
                  &nbsp; Source
                </Button>
              </ExternalLink>
            </div>
          </div>
        </div>

        {/* JF Bus */}
        <div className={[styles.boxContainer, styles.flexReverse].join(" ")}>
          <div className={styles.boxItem}>
            <h1 data-animation="fade-right">JF Bus</h1>
            <p data-animation="fade-up">
              I developed a mobile App with bus schedules from Juiz de Fora -
              MG, Brasil and a crawler to get the bus schedules from city hall
              website.
            </p>
            <div className={styles.portfolioTechs}>
              <ExternalLink href="https://reactnative.dev/">
                <img src={"/icons/tech/react.svg"} alt="React Native" />{" "}
                <span>React Native</span>
              </ExternalLink>
              <ExternalLink href="https://www.javascript.com/">
                <img src={"/icons/tech/javascript.svg"} alt="JavaScript" />{" "}
                <span>JavaScript</span>
              </ExternalLink>
              <ExternalLink href="https://nodejs.org">
                <img src={"/icons/tech/nodejs.svg"} alt="Node.js" />{" "}
                <span>Node.js</span>
              </ExternalLink>
            </div>
            <div className={styles.btnList}>
              <ExternalLink href="https://github.com/rslana/app-aeoz">
                <Button>
                  <FaGithub />
                  &nbsp; App Source
                </Button>
              </ExternalLink>
              <ExternalLink href="https://github.com/rslana/api-jfbus">
                <Button>
                  <FaGithub />
                  &nbsp; Api Source
                </Button>
              </ExternalLink>
            </div>
          </div>
          <div className={styles.boxItem}>
            <video
              controls
              preload="metadata"
              muted
              loop
              className={styles.portfolioAppVideo}
              data-animation="fade-up"
            >
              <source src="/potfolio/busjf/busjf-01.mp4" type="video/mp4" />
              <source src="/potfolio/busjf/busjf-01.mp4" type="video/ogg" />
              Your browser does not support HTML video.
            </video>
          </div>
        </div>
      </div>

      <a className={styles.infinite} href="#home">
        <h2>rslana.dev</h2>
        <p className={styles.specialFont}>We are infinite</p>
      </a>

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
        <span className={styles.specialFont}>
          Start before you think you&apos;re ready
        </span>
      </footer>
    </div>
  );
}
