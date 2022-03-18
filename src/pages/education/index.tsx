import Image from "next/image";
import { EducationStyle } from "./style";
import { BsChevronRight } from "react-icons/bs";

import Link from "next/link";
import items from "../../../data";
const myLoader = ({ src, width, quality }: any) => {
  return `https://i.ibb.co/bW7TXc3/Revolving-Building-Background-1-1.png/${src}?w=${width}&q=${
    quality || 100
  }`;
};
const menuData = JSON.stringify(items);
const Education = () => {
  return (
    <div>
      <EducationStyle>
        <div>
          <Image
            loader={myLoader}
            src="i.png"
            alt=" Some quick example "
            layout="responsive"
            width="100%"
            height="100"
            objectFit="cover"
          />
        </div>

        <section id="card_list" className="card_list section">
          <div className="container">
            <div className="row">
              <ul className="nav navbar-nav">
                {/* <li>
                  <a className="fw-bold">Сургалт</a>
                  <BsChevronRight style={{ color: "#393E41" }} />
                </li> */}

                {items.map((item): any => {
                  return (
                    <li key={item.id}>
                      {/* <Link href={"/menu/" + item.id + "/" + item.slug}>
                        <a className="ex1"> {item.name}</a>
                      </Link> */}
                      {item.parents.map((parents: any) => (
                        <div key={parents.id}>
                          <Link href={"/menu/" + item.id + "/" + item.slug}>
                            <a className="fw-bold">{parents.name}</a>
                          </Link>
                          <BsChevronRight style={{ color: "#393E41" }} />
                        </div>
                      ))}
                      {item.siblings.map((siblings: any) => (
                        <div key={siblings.id}>
                          <Link href={"/menu/" + item.id + "/" + item.slug}>
                            <a className="ex1">{siblings.name}</a>
                          </Link>
                        </div>
                      ))}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
          <hr></hr>
        </section>
      </EducationStyle>
    </div>
  );
};

export default Education;
