import {useRouter} from "next/router";
import {json} from "stream/consumers";
import image from "assets/images/education.png";
import PageHeader from "components/layout/page/page-header";
import Module from "components/module/index";
import axios from "config/axios";


const MenuDetail = ({props, id, slug, module, pageData}: any) => {
    const {query} = useRouter();
    console.log(query);

    return (
        <>
            <PageHeader image={image} title={slug}/>


            {
                pageData.menu.contentType === "intro" &&
                JSON.stringify(pageData)
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

    const res = await fetch(`http://ufeweb.local/_api/menu/${id}/detail`);
    const pageData = await res.json();

    console.log(pageData);


    // Pass data to the page via props
    return {props: {id, slug, module, pageData}};
}

export default MenuDetail;
