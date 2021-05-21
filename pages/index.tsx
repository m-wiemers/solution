import Head from "next/head";
import Form from "../components/form/Form";
import InfoSection from "../components/infoSection/InfoSection";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>Probetach</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>
      </Head>

      <div className={styles.background}>
        <main className={styles.container}>
          <p>Kontakt</p>
          <h1>Kontakt aufnehmen</h1>
          <div className={styles.formContainer}>
            <img className={styles.patternLeft} src="./pattern_left.png" />
            <div className={styles.form}>
              <Form onSubmit={() => console.log("!")} />
            </div>
            <img className={styles.patternRight} src="./pattern_right.png" />
          </div>
        </main>
        <aside className={styles.infoArea}>
          <InfoSection />
        </aside>
      </div>
    </>
  );
}
