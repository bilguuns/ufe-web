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
                      <a
                        target="https://www.facebook.com/ufe.edu.mn"
                        href="https://www.facebook.com/ufe.edu.mn"
                      >
                        <Image
                          width={36}
                          height={36}
                          alt="example"
                          src={Facebook}
                        />
                      </a>
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
                      <a
                        href="https://www.linkedin.com/school/ufemongolia/?challengeId=AQFJ9qqEC_2eIwAAAYBVHMh5KZJgxtfjCP7jIWerdXlrB1ZzLkDsRQQ7ABz19NW92EmLwKx8NOhTUxI6ujYL8D5JDTtNgVb8wg&submissionId=93b49963-b672-e816-c197-c8766d5cad1e"
                        target="https://www.linkedin.com/school/ufemongolia/?challengeId=AQFJ9qqEC_2eIwAAAYBVHMh5KZJgxtfjCP7jIWerdXlrB1ZzLkDsRQQ7ABz19NW92EmLwKx8NOhTUxI6ujYL8D5JDTtNgVb8wg&submissionId=93b49963-b672-e816-c197-c8766d5cad1e"
                      >
                        <Image
                          width={36}
                          className="icon"
                          height={36}
                          alt="example"
                          src={LinkedIn}
                        />
                      </a>
                    </div>
                    <div className="icon">
                      <a
                        target="https://www.instagram.com/ufe.edu.mn/"
                        href="https://www.instagram.com/ufe.edu.mn/"
                      >
                        <Image
                          width={36}
                          className="icon"
                          height={36}
                          alt="example"
                          src={Instagram}
                        />
                      </a>
                    </div>
                    <div className="icon">
                      <a
                        target="https://www.youtube.com/c/UFEMedia"
                        href="https://www.youtube.com/c/UFEMedia"
                      >
                        <Image
                          width={36}
                          className="icon"
                          height={36}
                          alt="example"
                          src={Youtube}
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              {/* <div className="col-lg-4 col-md-12 ">
                Нээлттэй ажлын байр
                <div className="m1">
                  <ul>
                    <li>Холбоо барих</li>
                    <li>Анкет авах</li>
                  </ul>
                </div>
              </div> */}
              <div className="col-lg-2 col-md-12">
                <p
                  style={{
                    fontWeight: "700",
                    fontSize: "16px",
                    lineHeight: "24px",
                    marginTop: "-40px",
                  }}
                >
                  Апп татах
                </p>
                <div className="m2" style={{ marginTop: "40px" }}>
                  <a
                    href="https://apps.apple.com/mn/app/ufe/id1460577287"
                    target="https://apps.apple.com/mn/app/ufe/id1460577287"
                  >
                    <Image
                      width={155}
                      height={48}
                      alt="example"
                      src={AppStore}
                    />
                  </a>

                  <a
                    href="https://play.google.com/store/apps/details?id=mn.ufe.brand_app"
                    target="https://play.google.com/store/apps/details?id=mn.ufe.brand_app"
                  >
                    <Image
                      width={155}
                      height={48}
                      alt="example"
                      src={PlayStore}
                    />
                  </a>
                </div>
                <br />
              </div>
              <div className="col-lg-4 col-md-12 "></div>
              <hr style={{ marginTop: "10px" }} />
              <p className="footer-p">© 2022 UFE. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </FooterStyle>
  );
};

export default Footer;
