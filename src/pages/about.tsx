import { useRouter } from "next/router";

const About = ({ data }: any) => {
  const { query } = useRouter();
  console.log(query);
  console.log(data);
  return (
    <div>
      Dataaa: <b>{data.lang}</b>
      {data.menus.map((item: any) => {
        return (
          <div key={item.id}>
            <p>{item.id}</p>
            <p>{item.moduleName}</p>
          </div>
        );
      })}
    </div>
  );
};
export async function getServerSideProps({ query }: any) {
  const res = await fetch("https://127.0.0.1:8000/_api/menu");
  const data = await res.json();

  return {
    props: { data: data },
  };
}

export default About;
