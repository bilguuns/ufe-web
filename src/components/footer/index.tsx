import styles from "../footer/style.module.css";
import Image from "next/image";
import image1 from "../../assets/images/ufe-logo-footer.png";
import AppStore from "../../assets/images/app-store.png";
import PlayStore from "../../assets/images/play-store.png";
import Facebook from "../../assets/images/facebook.png";
import Twitter from "../../assets/images/twitter.png";
import LinkedIn from "../../assets/images/LinkedIn.png";
import Instagram from "../../assets/images/Instagram.png";
import Youtube from "../../assets/images/YouTube.png";
const Footer = () => {
  return (
    <div className={styles.footer}>
      <footer className="container py-5">
        <div className="row">
          <div className="col-12 col-md">
            <Image width={155} height={48} alt="example" src={image1} />

            <p>
              БЗД 1-р хороо, Энхтайваны өргөн чөлөө-5, 13381, Ш/H:
              Улаанбаатар-49
            </p>

            <p>(976) 7000 8082</p>
            <p>info@ufe.edu.mn</p>
            <Image width={36} height={36} alt="example" src={Facebook} />
            <Image width={36} height={36} alt="example" src={Twitter} />
            <Image width={36} height={36} alt="example" src={LinkedIn} />
            <Image width={36} height={36} alt="example" src={Instagram} />
            <Image width={36} height={36} alt="example" src={Youtube} />
          </div>
          <div className="col-6 col-md">
            <p>Нээлттэй ажлын байр</p>
            <p>Холбоо барих</p>
            <p>Анкет авах</p>
          </div>
          <div className="col-6 col-md">Апп татах</div>
        </div>
        <hr />
      </footer>
    </div>
  );
};

export default Footer;
