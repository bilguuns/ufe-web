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
      <h4>ASDF</h4>
      {postData.modes.map((postMode: any, index: number) => {
        return (
          <>
            <div className={"mb-4"}>
              {postMode.modeType == "G" && (
                <>
                  <h4>Gallery render</h4>

                  <Slider postMode={postMode} />
                </>
              )}
              {postMode.modeType == "A" && (
                <>
                  <h4>Article</h4>
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
