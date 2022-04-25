import Image from "next/image";
import styles from "./page-header.module.scss";

const PageHeader = ({ image, title }: any) => {
  return (
    <div className={styles.ph}>
      <div className={styles.ph_image}>
        <Image
          src={image}
          alt=""
          layout="responsive"
          width={1400}
          height={500}
        />
      </div>
      <div className={styles.ph_title}>
        <div style={{ fontSize: "3vw" }} className={styles.ph_title_text}>
          {title}
        </div>
      </div>
    </div>
  );
};

export default PageHeader;
