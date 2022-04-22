import { WidgetDetailId } from "components/widgetDetail";
import { useRouter } from "next/router";

const WidgetDetail = ({ props, i_id, pageData }: any) => {
  return (
    <>
      {pageData.id}

      <WidgetDetailId pageData={pageData} />
    </>
  );
};

// This gets called on every request
export async function getServerSideProps({ query }: any) {
  // Fetch data from external API

  const m_id = query.id;

  const urlBase = process.env.NEXT_PUBLIC_ENTRYPOINT;

  const res = await fetch(`${urlBase}/post/widget/detail/${m_id}`);

  console.log(res, "resresresresresresresres");

  const pageData = await res.json();

  // Pass data to the page via props
  return { props: { m_id, pageData } };
}
export default WidgetDetail;
