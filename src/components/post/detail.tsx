import Slider from "components/common/slider";

const PostDetail = ({ postData }: any) => {
  return (
    <>
      <h4>{postData.modes[0].translates[0].title}</h4>
      <p>{postData.modes[0].translates[0].htmlContent}</p>

      <Slider postData={postData} />
    </>
  );
};

export default PostDetail;
