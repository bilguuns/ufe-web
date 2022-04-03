import {useRouter} from "next/router";
import {json} from "stream/consumers";
import image from "assets/images/education.png";
import PageHeader from "components/layout/page/page-header";


const MenuDetail = ({props, id, slug}: any) => {
    const {query} = useRouter();
    console.log(query);

    return (
        <>
            <PageHeader image={image} title={slug}/>

        </>
    );
};

// This gets called on every request
export async function getServerSideProps({query}: any) {
    // Fetch data from external API

    const id = query.id;
    const slug = query.slug;

    // Pass data to the page via props
    return {props: {id, slug}};
}

export default MenuDetail;
