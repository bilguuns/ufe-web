import { route } from "next/dist/server/router";
import { useRouter } from "next/router";

const MenuDetail = (props: any, data: any) => {
  const { query } = useRouter();

  const postId = query.id;
  console.log({ data });
  console.log("------------------------");

  console.log(postId);
  console.log("------------------------");
  return (
    <>
      <h1>Menu detail-{postId}</h1>
      {/* <p>{query.id}</p> */}
    </>
  );
};

export default MenuDetail;
