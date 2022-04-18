import BachelorCard from "../common/card/bachelorCard";
import IntroCard from "./card";
import PostDetail from "components/post/detail";
import EmployeeModule from "components/module/employee";

const Intro = ({ introData }: any) => {
  const intros =
    introData.childIntros.length > 0 ? introData.childIntros : introData.intros;
  const introPost =
    introData.introPosts.length > 0 ? introData.introPosts[0] : null;

  return (
    <div className="container my-5">
      {!introPost && (
        <div className={"row"}>
          {intros.map((intro: any, index: number) => {
            return (
              <div key={intro.id} className="col-md-4">
                <IntroCard introData={intro} />
              </div>
            );
          })}
        </div>
      )}

      {introPost && <PostDetail postData={introPost} />}
    </div>
  );
};

export default Intro;
