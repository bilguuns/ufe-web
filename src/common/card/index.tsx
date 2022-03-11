import React from "react";
import { CardStyle } from "./style";
import CardImage from "../../assets/images/unsplash.png";
import Image from "next/image";

export default function AppCard() {
  return (
    <CardStyle>
      <section id="team" className="team section-bg">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
              <div className="member">
                <Image src={CardImage} alt="" />
                {/* <img src="assets/img/team/team-1.jpg" alt=""> */}
                <h4>Walter White</h4>
                <span>Chief Executive Officer</span>
                <p>
                  Magni qui quod omnis unde et eos fuga et exercitationem. Odio
                  veritatis perspiciatis quaerat qui aut aut aut
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
              <div className="member">
                <div className="img">
                  <Image src={CardImage} alt="" />
                </div>

                <h4>Sarah Jhinson</h4>
                <span>Product Manager</span>
                <p>
                  Repellat fugiat adipisci nemo illum nesciunt voluptas
                  repellendus. In architecto rerum rerum temporibus
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
              <div className="member">
                <div className="img">
                  <Image src={CardImage} alt="" />
                </div>
                <h4>William Anderson</h4>
                <span>CTO</span>
                <p>
                  Voluptas necessitatibus occaecati quia. Earum totam
                  consequuntur qui porro et laborum toro des clara
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </CardStyle>
  );
}
