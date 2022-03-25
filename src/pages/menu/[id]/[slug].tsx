import { useRouter } from "next/router";
import { json } from "stream/consumers";
import data from "../../../../data";
const MenuDetail = ({ props, data, id, slug }: any) => {
  const { query } = useRouter();
  console.log(query);

  console.log("----------------------------------------------------");
  const menuData = JSON.stringify(data);
  console.log(data);

  return (
    <div>
      {data.map((item: any) => {
        //browser render
        return (
          <div key={item.id}>
            {item.name}-{item.slug}
            <ul>
              {item.parents.map((parents: any) => (
                <li key={parents.id}>{parents.name}</li>
              ))}
            </ul>
          </div>
        );
      })}
    </div>

    // <div>
    //   {data.map((item: any) => {
    //     return (
    //       <div key={item.id}>
    //         <p>{item.menu.id}</p>
    //         <p>{item.menu.name}</p>
    //         <p>{item.menu.slug}</p>
    //         <p>Parent-{item.menu.parents}</p>

    //         <hr></hr>
    //       </div>
    //     );
    //   })}
    //   <p>{id}</p>
    //   <p>{slug}</p>
    // </div>
  );
};

// This gets called on every request
export async function getServerSideProps({ query }: any) {
  // Fetch data from external API

  const posts = data;

  const id = query.id;
  const slug = query.slug;

  // Pass data to the page via props
  return { props: { data, id, slug } };
}

export default MenuDetail;
