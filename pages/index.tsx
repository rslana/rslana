import Head from "next/head";
import Link from "next/link";
import { Button } from "../src/components/Button";
import { Title } from "../src/components/Title";
import ExternalLink from "../src/components/ExternalLink";
import styles from "../styles/Home.module.scss";
import { FaGithub, FaLink, FaLinkedin } from "react-icons/fa";
import Wave from "../src/components/svgs/Wave";
import { useTypeWriter } from "../src/hooks/use-type-writer";
import { useRef } from "react";

export default function Home() {
  const titleRef = useRef<HTMLHeadingElement>(null);

  useTypeWriter({
    ref: titleRef,
    word: "rslana.dev",
    speed: 150,
  });

  return (
    <div className={styles.container} id="home">
      <Head>
        <title>rslana.dev</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Title
          gradient="primary"
          ref={titleRef}
          data-name="rslana.dev"
          className="_animate"
          data-animation="fade-right-x2"
        />
        <div className={styles.info}>
          <div>
            <h1>
              Hi{" "}
              <span
                className="_animate"
                data-animation="fade-right-x1"
                style={{ display: "inline-block" }}
              >
                👋
              </span>
              , I&apos;m Rafael
            </h1>
            <h2>
              A Software Engineer from Brazil who loves{" "}
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
            <p>
              Full-stack Developer (Internship) at{" "}
              <ExternalLink
                href="https://app4all.com.br/"
                className={styles.link}
              >
                App4All
              </ExternalLink>{" "}
              <span className={styles.metaInfo}>NOV/2017 - OCT/2019</span>
            </p>
          </div>
          <div>
            <h3>Education</h3>
            <p>
              Studied BS in Information Systems &bull;{" "}
              <ExternalLink
                href="https://www.ifsudestemg.edu.br/juizdefora"
                className={styles.link}
              >
                IF Sudeste MG
              </ExternalLink>{" "}
              <span className={styles.metaInfo}>2016 - 2021</span>
            </p>
            <p>
              Computer Technician &bull;{" "}
              <ExternalLink
                href="https://sig.ifsudestemg.edu.br/sigaa/public/curso/portal.jsf?id=1259922&lc=pt_BR&nivel=T"
                className={styles.link}
              >
                IF Sudeste MG
              </ExternalLink>{" "}
              <span className={styles.metaInfo}>2015 - 2017</span>
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
            <ExternalLink href="https://reactnative.dev/">
              <img src={"/icons/tech/react.svg"} alt="React" />{" "}
              <span>React Native</span>
            </ExternalLink>
            <ExternalLink href="https://react-query.tanstack.com/">
              <img src={"/icons/tech/react-query.svg"} alt="React Query" />{" "}
              <span>React Query</span>
            </ExternalLink>
            <ExternalLink href="https://nodejs.org">
              <img src={"/icons/tech/nodejs.svg"} alt="Node.js" />{" "}
              <span>Node.js</span>
            </ExternalLink>
            <ExternalLink href="https://jestjs.io">
              <img src={"/icons/tech/jest.svg"} alt="Jest.js" />{" "}
              <span>Jest</span>
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
            <ExternalLink href="https://www.postgresql.org/">
              <img src={"/icons/tech/postgresql.svg"} alt="PostgreSQL" />{" "}
              <span>PostgreSQL</span>
            </ExternalLink>
            <ExternalLink href="https://aws.amazon.com/">
              <img src={"/icons/tech/aws.svg"} alt="AWS" /> <span>AWS</span>
            </ExternalLink>
          </div>
          <h3>Already worked with</h3>
          <div className={`${styles.portfolioTechs} ${styles.fluid}`}>
            <ExternalLink href="https://reactnative.dev/">
              <img src={"/icons/tech/react.svg"} alt="React Native" />{" "}
              <span>React Native</span>
            </ExternalLink>
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
            <ExternalLink href="https://www.mongodb.com/">
              <img src={"/icons/tech/mongodb.svg"} alt="MongoDB" />{" "}
              <span>MongoDB</span>
            </ExternalLink>
          </div>
        </div>
      </div>

      <div className={styles.portfolio}>
        <h1 className={styles.title}>
          Projects working for{" "}
          <span className={styles.specialFont}>private</span> companies
        </h1>
        {/* Smarti9 */}
        <div className={styles.boxContainer}>
          <div className={styles.boxItem}>
            <div className={styles.techGroupContainer}>
              <img src={"/icons/tech/typescript.svg"} alt="Typescript" />
              <img src={"/icons/tech/nodejs.svg"} alt="Node.js" />
              <img src={"/icons/tech/express.svg"} alt="Express.js" />
              <img src={"/icons/tech/postgresql.svg"} alt="Postgresql" />
              <img src={"/icons/tech/aws.svg"} alt="AWS" />
              <img src={"/icons/tech/docker.svg"} alt="Docker" />
            </div>
          </div>
          <div className={styles.boxItem}>
            <h1 data-animation="fade-left">
              Backend application for{" "}
              <ExternalLink
                href="https://www.smarti9.com.br/"
                className={styles.emphasis}
              >
                Smarti9
              </ExternalLink>
            </h1>
            <p data-animation="fade-up" className={styles.boxItemDescription}>
              I created an API that allows campaign organizers to manage their
              campaigns so people can win prizes from it. Any person with a
              campaign link can purchase tickets (lucky numbers), then wait
              until the results date. A payment module was created, allowing the
              clients to pay via credit card and{" "}
              <ExternalLink href="https://www.bcb.gov.br/estabilidadefinanceira/pix">
                PIX
              </ExternalLink>
              . There is also a dashboard module for the admins to manage the
              purchases, organizers, campaings and also generate some basic
              reports.
            </p>
            <p className={styles.metaInfo}>
              OCT/2021 - DEC/2021 &nbsp;&nbsp;&bull;&nbsp;&nbsp; SEP/2022 -
              OCT/2022
            </p>
            <div className={styles.portfolioTechs}>
              <ExternalLink href="https://www.typescriptlang.org/">
                <img src={"/icons/tech/typescript.svg"} alt="Typescript" />{" "}
                <span>Typescript</span>
              </ExternalLink>
              <ExternalLink href="https://nodejs.org">
                <img src={"/icons/tech/nodejs.svg"} alt="Node.js" />{" "}
                <span>Node.js</span>
              </ExternalLink>
              <ExternalLink href="https://expressjs.com/">
                <img src={"/icons/tech/express.svg"} alt="Express.js" />{" "}
                <span>Express</span>
              </ExternalLink>
              <ExternalLink href="https://www.postgresql.org/">
                <img src={"/icons/tech/postgresql.svg"} alt="PostgreSQL" />{" "}
                <span>PostgreSQL</span>
              </ExternalLink>
              <ExternalLink href="https://aws.amazon.com/">
                <img src={"/icons/tech/aws.svg"} alt="AWS" /> <span>AWS</span>
              </ExternalLink>
              <ExternalLink href="https://www.docker.com/">
                <img src={"/icons/tech/docker.svg"} alt="Docker" />{" "}
                <span>Docker</span>
              </ExternalLink>
            </div>
          </div>
        </div>

        {/* Cartesi.io */}
        <div className={styles.boxContainer}>
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
          <div className={styles.boxItem}>
            <img
              src={"/potfolio/cartesi/cartesi.png"}
              alt="Website Cartesi.io"
              className={styles.portfolioImage}
              loading="lazy"
              data-animation="fade-up"
            />
          </div>
        </div>

        {/* App4All */}
        <div className={styles.boxContainer}>
          <div className={styles.boxItem}>
            <img
              src={"/potfolio/app4all/vote-condominio.png"}
              alt="Website Cartesi.io"
              className={styles.portfolioImage}
              loading="lazy"
              data-animation="fade-up"
            />
          </div>
          <div className={styles.boxItem}>
            <h1 data-animation="fade-left">Vote Condomínio</h1>
            <p data-animation="fade-up">
              Last project that I worked at App4All. I was responsible to
              develop and maintain the frontend Web App, colaborate in the
              development of the API and deploy the applications on AWS.
            </p>
            <p className={styles.metaInfo}>JUN/2019 - OCT/2019</p>
            <div className={styles.portfolioTechs}>
              <ExternalLink href="https://reactjs.org/">
                <img src={"/icons/tech/react.svg"} alt="React" />{" "}
                <span>React</span>
              </ExternalLink>
              <ExternalLink href="https://expressjs.com/">
                <img src={"/icons/tech/express.svg"} alt="Express.js" />{" "}
                <span>Express</span>
              </ExternalLink>
              <ExternalLink href="https://www.mongodb.com/">
                <img src={"/icons/tech/mongodb.svg"} alt="MongoDB" />{" "}
                <span>MongoDB</span>
              </ExternalLink>
              <ExternalLink href="https://aws.amazon.com/">
                <img src={"/icons/tech/aws.svg"} alt="AWS" /> <span>AWS</span>
              </ExternalLink>
              <ExternalLink href="https://www.docker.com/">
                <img src={"/icons/tech/docker.svg"} alt="Docker" />{" "}
                <span>Docker</span>
              </ExternalLink>
            </div>
            <div className={styles.btnList}>
              <ExternalLink href="https://votecondominio.com.br/">
                <Button>
                  <FaLink />
                  &nbsp; Live Demo
                </Button>
              </ExternalLink>
              <ExternalLink href="https://br.linkedin.com/company/votecondominio">
                <Button>
                  <FaLinkedin />
                  &nbsp; LinkedIn
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
