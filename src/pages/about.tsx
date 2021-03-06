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

  const urlBase = process.env.NEXT_PUBLIC_ENTRYPOINT;
  const res = await fetch(`${urlBase}/menu`);
  const data = await res.json();

  return {
    props: { data: data },
  };
}

export default About;

// TODO: any төрөл ашиглаж болохгүй.
// TODO: API дуудаж байгаа сервисээ өөр фолдерт хийнэ.
// TODO: Menu item - аа тусд component болгож гаргах
// TODO: axios http client library суулгах
