import {useRouter} from "next/router";
import image from "assets/images/education.png";
import PageHeader from "components/layout/page/page-header";
import Module from "components/module/index";
import BachelorCard from "../../../../components/common/card/bachelorCard";
import AppCard from "../../../../components/common/card-list";

const bachelorCardDummyData = [
    {
        url: "/image/education.png",
        name: "bank",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
        id: 1
    },
    {
        url: "/image/education.png",
        name: "bank",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
        id: 2
    },
    {
        url: "/image/education.png",
        name: "bank",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
        id: 3
    }
]


const MenuDetail = ({props, id, slug, module, pageData}: any) => {
    const {query} = useRouter();
    console.log(pageData);

    return (
        <>
            <PageHeader image={image} title={slug}/>
            {
                pageData.menu.contentType === "intro" ?
                    <div className="container my-5">
                        <BachelorCard data={bachelorCardDummyData}/>
                        <AppCard/>
                    </div>
                    :
                    <div className="container  my-5">
                        <div className="row">
                            {bachelorCardDummyData.map((data)=>{
                                return(
                                    <div className="col-md-4">
                                        <BachelorCard key={data.id} data={data}/>
                                    </div>

                                )
                            })}
                        </div>

                        <AppCard/>
                    </div>


            }
            {
                pageData.menu.contentType === "module" &&
                <Module
                    moduleName={pageData.menu.moduleName}
                />
            }


        </>
    );
};

// This gets called on every request
export async function getServerSideProps({query}: any) {
    // Fetch data from external API

    const id = query.id;
    const slug = query.slug;
    const module = query.module ? query.module : '';

    // const result = await axios.get(`/menu/${id}/detail`);
    const res = await fetch(`https://api.ufe.edu.mn/_api/menu/${id}/detail`);
    const pageData = await res.json();

    // Pass data to the page via props
    return {props: {id, slug, module, pageData}};
}

export default MenuDetail;
