import { useRouter } from "next/router";
import image from "assets/images/education.png";
import PageHeader from "components/layout/page/page-header";
import Header from "components/layout/page/header";
import Module from "components/module/index";
import IntroPage from "components/intro/index";
import { MenuSWR } from "../../../../lib/api/menu";
import { useEffect, useState } from "react";
import HtmlComponent from "components/common/html-component";

const MenuDetail = ({ props, m_id, m_slug, module, pageData }: any) => {
  const { query } = useRouter();
  console.log("wwwwww", m_id);

  return (
    <>
      <PageHeader image={image} title={m_slug} />

      <hr />

      {pageData.menu.moduleName === "360" && <HtmlComponent />}
      {pageData.menu.contentType === "intro" && (
        <IntroPage introData={pageData} />
      )}
      {pageData.menu.contentType === "module" && (
        <Module moduleName={pageData.menu.moduleName} />
      )}
    </>
  );
};

// This gets called on every request
export async function getServerSideProps({ query }: any) {
  // Fetch data from external API

  const m_id = query.m_id;
  const m_slug = query.m_slug;
  const module = query.module ? query.module : "";

  // const result = await axios.get(`/menu/${id}/detail`);

  const urlBase = process.env.NEXT_PUBLIC_ENTRYPOINT;

  const res = await fetch(`${urlBase}/menu/${m_id}/detail`);

  console.log(res);

  const pageData = await res.json();

  // Pass data to the page via props
  return { props: { m_id, m_slug, module, pageData } };
}

export default MenuDetail;
