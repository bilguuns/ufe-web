import RegisterButton from "components/common/register-button";
import Slider from "components/common/slider";
import Widget from "components/widget";

import ReactHtmlParser, {
  processNodes,
  convertNodeToElement,
  htmlparser2,
} from "react-html-parser";

const PostDetail = ({ postData, introData }: any) => {
  console.log(introData, "gallery,gallery,gallery");

  const imgBase = process.env.NEXT_PUBLIC_FILE_HOST;
  const translate: any =
    introData.translates.length > 0 ? introData.translates[0] : null;
  const imgSrc =
    introData.images[0] && introData.images[0].filePath
      ? imgBase + introData.images[0].filePath
      : null;
  console.log(imgSrc, "imgSrcimgSrcimgSrc");
  return (
    <>
      {postData.modes.map((postMode: any, index: number) => {
        return (
          <>
            <div className={"mb-4"}>
              {postMode.modeType == "G" && (
                <>
                  <Slider postMode={postMode} />
                </>
              )}
              {postMode.modeType == "A" && (
                <>{ReactHtmlParser(postMode.translates[0].htmlContent)}</>
              )}
            </div>
          </>
        );
      })}
      <div className="row">
        <div className="col-lg-5">
          <a>
            <img
              style={{
                display: "block",
                objectFit: "cover",
                borderRadius: "16px",
                height: "300px",
                width: "500px",
                objectPosition: "center center",
              }}
              src={`${imgSrc}`}
              width="100%"
              alt="image-alt-text"
            />
          </a>
        </div>
        <div className="col-lg-5 d-flex justify-content-start">
          <div className="more-button px-2" style={{ marginTop: "20vh" }}>
            <p className="fw-bold">{translate.name} хөтөлбөрт бүртгүүлэх үү?</p>

            <RegisterButton />
          </div>
        </div>
      </div>
    </>
  );
};

export default PostDetail;
