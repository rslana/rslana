import { Title } from "../src/components/Title";
import styles from "../styles/Home.module.scss";
import { useTypeWriter } from "../src/hooks/use-type-writer";
import { useCallback, useRef, useState } from "react";

export default function Home() {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const [answer, setAnswer] = useState("");
  const [error, setError] = useState<string>("");
  const [isCorrect, setIsCorrect] = useState(false);

  useTypeWriter({
    ref: titleRef,
    word: "Digite a palavra chave para descobrir o próximo número da senha:",
    speed: 120,
  });

  const handleClick = useCallback(() => {
    if (answer === "MEMENTO MORI") {
      setIsCorrect(true);
      setError("");
      return;
    }

    setError("Palavra chave incorreta!");
  }, [answer]);

  return (
    <div className={styles.container} id="home" style={{ padding: "2rem" }}>
      {isCorrect ? (
        <div
          className={styles.portfolio}
          style={{ marginTop: "1rem", padding: "1rem" }}
        >
          <h1 className={styles.title} style={{ color: "green" }}>
            Você acertou!!!
          </h1>
          <h1 className={styles.title}>O último número:</h1>

          <h1 className={styles.title}>5</h1>
          <p style={{ textAlign: "center" }}>
            Com os 3 números em mãos, agora você deve junta-los para formar a
            senha secreta para abrir a mala (a ordem pode ser diferente).
          </p>
        </div>
      ) : (
        <div
          className={styles.portfolio}
          style={{ marginTop: "1rem", textAlign: "center" }}
        >
          <Title
            gradient="primary"
            ref={titleRef}
            data-name="title"
            className="_animate"
            data-animation="fade-right-x2"
            style={{ fontSize: "42px", textAlign: "center" }}
          />
          <input
            value={answer}
            onChange={(e) => {
              setAnswer(e.target.value.toUpperCase());
              if (error) setError("");
            }}
            style={{
              padding: "2rem 0 1rem 0",
              fontSize: "14px",
              border: "none",
              letterSpacing: "0.8rem",
              width: "100%",
              marginBottom: "4rem",
              borderBottom: "solid 1px black",
              outline: "none",
              textAlign: "center",
            }}
          />

          <button
            style={{
              border: "none",
              background: "green",
              padding: "1.5rem 2rem",
              borderRadius: "4px",
              width: "80%",
              fontSize: "24px",
            }}
            type="button"
            onClick={() => handleClick()}
          >
            ENVIAR
          </button>

          <p
            style={{
              fontSize: "16px",
              color: "red",
              marginTop: "1rem",
              textAlign: "center",
            }}
          >
            {error}
          </p>
        </div>
      )}
    </div>
  );
}
