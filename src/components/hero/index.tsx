import Image from "next/image";
import ufe_icon from "../../assets/images/Revolving-Building-Background .png";
import { HeroStyle } from "./style";

const AppHero = () => {
  return (
    <HeroStyle>
      <div className="hero-image">
        <Image src={ufe_icon} alt="" layout="responsive" />

        <div className="hero-text">
          <h1>Эрхэм баян Эрдэм</h1>
          <p>
            A subititle for your landing page describing your product or service
            that you provide.
          </p>
        </div>
      </div>
    </HeroStyle>
  );
};

export default AppHero;
