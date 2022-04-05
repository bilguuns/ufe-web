import { useRouter } from "next/router";
import image from "assets/images/education.png";
import PageHeader from "components/layout/page/page-header";
import Module from "components/module/index";
import BachelorCard from "../../../../components/common/card/bachelorCard";
import VideoPlayer from "components/common/video-player";
import SliderCard from "components/common/slider-card";
import AvatarCard from "components/common/avatar-card";
import Timeline from "components/common/timeline";
import GalleryCard from "components/common/gallery-card";
import PciefCard from "components/common/pciaf-card";

const MenuDetail = ({ props, id, slug, module, pageData }: any) => {
  const { query } = useRouter();
  console.log(pageData);

  return (
    <>
      <PageHeader image={image} title={slug} />
      {pageData.menu.contentType === "intro" ? (
        <div className="container my-5">
          <BachelorCard />
        </div>
      ) : (
        <div className="container my-5">
          <BachelorCard />
          <hr />

          <SliderCard />
          <hr />

          <AvatarCard />
          <hr />

          <Timeline />
          <hr />
          <GalleryCard />
          <hr />
          <PciefCard />
        </div>
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

  const id = query.id;
  const slug = query.slug;
  const module = query.module ? query.module : "";

  // const result = await axios.get(`/menu/${id}/detail`);
  const res = await fetch(`https://api.ufe.edu.mn/_api/menu/${id}/detail`);
  const pageData = await res.json();

  // Pass data to the page via props
  return { props: { id, slug, module, pageData } };
}

export default MenuDetail;
