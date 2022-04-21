import Image from "next/image";
import Image1 from "../../assets/images/new_logo_footer.png";
import AppStore from "../../assets/images/app-store.png";
import PlayStore from "../../assets/images/play-store.png";
import Facebook from "../../assets/images/facebook.png";
import Twitter from "../../assets/images/twitter.png";
import LinkedIn from "../../assets/images/LinkedIn.png";
import Instagram from "../../assets/images/Instagram.png";
import Youtube from "../../assets/images/YouTube.png";
import { FooterStyle } from "./style";
import Link from "next/link";
const Footer = () => {
  return (
    <FooterStyle>
      <footer>
        <div className="footer-content">
          <div className="container">
            <Link href="/">
              <div className="img">
                <Image width={155} height={32} alt="example" src={Image1} />
              </div>
            </Link>

            <div className="row justify-content-between">
              <div className="col-lg-4 col-md-12">
                <div className="m">
                  <ul>
                    <li>
                      БЗД 1-р хороо, Энхтайваны өргөн чөлөө-5, 13381, Ш/H:
                      Улаанбаатар-49
                    </li>
                    <li>(976) 7000 8082</li>
                    <li>info@ufe.edu.mn</li>
                  </ul>
                  <div className="img">
                    <div className="icon">
                      <Image
                        width={36}
                        height={36}
                        alt="example"
                        src={Facebook}
                      />
                    </div>
                    <div className="icon">
                      <Image
                        width={36}
                        className="icon"
                        height={36}
                        alt="example"
                        src={Twitter}
                      />
                    </div>

                    <div className="icon">
                      <Image
                        width={36}
                        className="icon"
                        height={36}
                        alt="example"
                        src={LinkedIn}
                      />
                    </div>
                    <div className="icon">
                      <Image
                        width={36}
                        className="icon"
                        height={36}
                        alt="example"
                        src={Instagram}
                      />
                    </div>
                    <div className="icon">
                      <Image
                        width={36}
                        className="icon"
                        height={36}
                        alt="example"
                        src={Youtube}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-12 ">
                Нээлттэй ажлын байр
                <div className="m1">
                  <ul>
                    <li>Холбоо барих</li>
                    <li>Анкет авах</li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-2 col-md-12">
                Апп татах
                <div className="m2">
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
