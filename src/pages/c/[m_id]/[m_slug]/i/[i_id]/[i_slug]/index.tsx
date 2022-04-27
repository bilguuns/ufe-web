import image from "assets/images/education.png";
import PageHeader from "components/layout/page/page-header";
import Module from "components/module/index";
import IntroPage from "components/intro/index";
import EmployeeModule from "components/module/employee";
import HtmlComponent from "components/common/html-component";

const MenuIntroDetail = ({ m_id, m_slug, pageData, introData, iId }: any) => {
  console.log("HtmlComponentHtmlComponentHtmlComponentHtmlComponent", iId);

  return (
    <>
      <PageHeader image={image} title={m_slug} />
      {<IntroPage introData={introData} />}
    </>
  );
};

// This gets called on every request
export async function getServerSideProps({ query }: any) {
  // Fetch data from external API

  const m_id = query.m_id;
  const m_slug = query.m_slug;
  const module = query.module ? query.module : "";

  const iId = query.i_id;
  const iSlug = query.i_slug;

  const urlBase = process.env.NEXT_PUBLIC_ENTRYPOINT;

  const res = await fetch(`${urlBase}/intro/${iId}/detail`);
  const introData = await res.json();

  console.log(introData);

  // Pass data to the page via props
  return { props: { m_id, m_slug, module, introData } };
}

export default MenuIntroDetail;
