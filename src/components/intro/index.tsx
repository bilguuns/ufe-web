import BachelorCard from "../common/card/bachelorCard";
import IntroCard from "./card";
import PostDetail from "components/post/detail";
import EmployeeModule from "components/module/employee";
import RegisterButton from "components/common/register-button";

const Intro = ({ introData }: any) => {
  console.log(introData, "introDataintroDataintroData");

  const intros =
    introData.childIntros.length > 0 ? introData.childIntros : introData.intros;
  const introPost =
    introData.introPosts.length > 0 ? introData.introPosts[0] : null;

  return (
    <div className="container my-5">
      {!introPost && (
        <div>
          <div className="row mb-5 ">
            <div className="col-lg d-flex justify-content-end">
              <div className="more-button">
                <RegisterButton />
              </div>
            </div>
          </div>
          <div className={"row"}>
            {intros.map((intro: any, index: number) => {
              return (
                <div key={intro.id} className="col-md-4 mb-3">
                  <IntroCard introData={intro} />
                </div>
              );
            })}
          </div>
        </div>
      )}

      {introPost && <PostDetail postData={introPost} introData={intros[0]} />}
    </div>
  );
};

export default Intro;
