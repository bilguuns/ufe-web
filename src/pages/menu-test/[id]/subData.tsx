import axios from "axios";
import useSWR from "swr";

export default function SubMenu() {
  const address = `https://api.ufe.edu.mn/_api/menu`;
  const fetcher = async (url: any) =>
    await axios.get(url).then((res) => res.data.menus);

  const { data, error } = useSWR(address, fetcher);

  if (error) <p>Loading failed...</p>;
  if (!data) <h1>Loading...</h1>;
  console.log(data);

  return (
    <div>
      <div className="container">
        {data?.map((item: any, index: any) => (
          <div key={index}>
            <a className="fw-bold">{item.id}</a>

            {item.translates.map((index: any) => (
              <div key={index.id}>
                <a className="fw-bold">{index.name}</a>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
