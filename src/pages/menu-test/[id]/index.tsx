import axios from "axios";
import useSWR from "swr";
// import Image from "next/image";
import IntroDataService from "pages/api/intro/service/intro.service";

export default function Menu() {
  const address = `https://api.ufe.edu.mn/_api/menu`;
  const fetcher = async (url: any) =>
    await axios.get(url).then((res) => res.data.menus);

  const { data, error } = useSWR(address, fetcher);

  if (error) <p>Loading failed...</p>;
  if (!data) <h1>Loading...</h1>;
  console.log(data);
  //   console.log(data.find((e: any) => e.parentId === 0)); // {foo: 'bar'} (first match)

  return (
    <div>
      <div className="container">
        {data?.map(
          (item: any, index: any) =>
            item.parentId == 0 && (
              <div key={index}>
                <a className="fw-bold">{item.id}</a>

                {item.translates.map((index: any) => (
                  <div key={index.id}>
                    <a className="fw-bold">{index.name}</a>
                  </div>
                ))}
              </div>
            )
        )}
      </div>
    </div>
  );
}
