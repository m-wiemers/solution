import styles from "./InfoSection.module.css";

function InfoSection() {
  return (
    <div className={styles.container}>
      <div className={styles.line}></div>
      <div className={styles.adress}>
        <p>TERRITORY EMBRACE GmbH</p>
        <p>Kortumstraße 16</p>
        <p>44787 Bochum</p>
      </div>
      <div className={styles.contact}>
        <a href="tel:+4923441560000">+49 (0) 234 415 600 00</a>
        <a href="mailto:talentplatforms-info@territory.de">
          talentplatforms-info@territory.de
        </a>
        <a href="embrance.territory.de">embrance.territory.de</a>
      </div>
      <div className={styles.map} />
    </div>
  );
}

export default InfoSection;
