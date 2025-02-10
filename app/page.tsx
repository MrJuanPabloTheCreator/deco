import Image from "next/image";
import styles from "./page.module.css";
import SolutionWizard from "./_components/solutionWizard";

export default function Home() {
  return (
    <div className={styles.page}>
      <SolutionWizard/>
    </div>
  );
}
