import Image from "next/image";
import image1 from "../../assets/images/ufe-logo-footer.png";
import AppStore from "../../assets/images/app-store.png";
import PlayStore from "../../assets/images/play-store.png";
import Facebook from "../../assets/images/facebook.png";
import Twitter from "../../assets/images/twitter.png";
import LinkedIn from "../../assets/images/LinkedIn.png";
import Instagram from "../../assets/images/Instagram.png";
import Youtube from "../../assets/images/YouTube.png";
import { FooterStyle } from "./style";
const Footer = () => {
  return (
    <FooterStyle>
      <footer>
        <div className="footer-content">
          <div className="container">
            <div className="row">
              <div className="col-md-3 col-sm-6">
                <Image width={155} height={48} alt="example" src={image1} />
                <ul>
                  <li>
                    БЗД 1-р хороо, Энхтайваны өргөн чөлөө-5, 13381, Ш/H:
                    Улаанбаатар-49
                  </li>
                  <li>(976) 7000 8082</li>
                  <li>info@ufe.edu.mn</li>
                </ul>
                <div className="img">
                  <Image width={36} height={36} alt="example" src={Facebook} />
                  <Image width={36} height={36} alt="example" src={Twitter} />
                  <Image width={36} height={36} alt="example" src={LinkedIn} />
                  <Image width={36} height={36} alt="example" src={Instagram} />
                  <Image width={36} height={36} alt="example" src={Youtube} />
                </div>
              </div>
              <div className="col-md">
                Нээлттэй ажлын байр
                <p>Холбоо барих</p>
                <p>Анкет авах</p>
              </div>
              <div className="col-md">
                <div>
                  <p>Апп татах</p>
                  <br />
                  <Image width={155} height={48} alt="example" src={AppStore} />
                  <br />
                  <Image
                    width={155}
                    height={48}
                    alt="example"
                    src={PlayStore}
                  />
                </div>
              </div>

              <hr />
              <p className="footer-p">© 2022 UFE. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </FooterStyle>
  );
};

export default Footer;
