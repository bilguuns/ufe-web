import Slider from "components/common/slider";

import ReactHtmlParser, {
  processNodes,
  convertNodeToElement,
  htmlparser2,
} from "react-html-parser";

const PostDetail = ({ postData }: any) => {
  console.log(postData, "gallery");

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
                <>
                  {postData.translates[0].title}
                  {ReactHtmlParser(postMode.translates[0].htmlContent)}
                </>
              )}
            </div>
          </>
        );
      })}
    </>
  );
};

export default PostDetail;
