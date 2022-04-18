import CustomButton from "components/common/custom-button";
import { useRouter } from "next/router";

const IntroCard = ({ introData }: any) => {
  const { query } = useRouter();

  console.log(introData);

  const translate: any =
    introData.translates.length > 0 ? introData.translates[0] : null;
  const imgBase = process.env.NEXT_PUBLIC_ENTRYPOINT;

  const imgSrc =
    introData.images[0] && introData.images[0].filePath
      ? imgBase + introData.images[0].filePath
      : null;

  return (
    <>
      <div
        className="card m-2"
        style={{ width: "100%", borderRadius: "16px", maxHeight: "452px" }}
      >
        <div className="hover-zoomin">
          <img
            className="card-img-top"
            src={`${imgSrc}`}
            alt="image-alt-text"
            width={350}
            height={200}
            style={{ borderRadius: "16px 16px 0 0" }}
          />
        </div>
        <div className="card-body">
          <p className="card-title fw-bold hover-underline-animation">
            {translate?.name}
          </p>
          <p className="card-text">{translate?.description}</p>
          <CustomButton
            uri={`/c/${query.m_id}/${query.m_slug}/i/${introData.id}/${
              translate ? translate.name : "ufe"
            }`}
          />
        </div>
      </div>
    </>
  );
};

export default IntroCard;
