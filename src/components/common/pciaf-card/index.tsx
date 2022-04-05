import Image from "next/image";
import pciafCard from "assets/images/pciaf-card.png";

const PciefCard = () => {
  return (
    <div className="card " style={{ width: "18rem", borderRadius: "16px" }}>
      <div className="">
        <Image alt="example" src={pciafCard} />
      </div>

      <div className="card-body">
        <p className="card-title fw-bold hover-underline-animation text-center">
          BPP University
        </p>
      </div>
    </div>
  );
};

export default PciefCard;
