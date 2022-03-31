import axios from "axios";
import useSWR from "swr";
// import Image from "next/image";
import IntroDataService from "pages/api/intro/service/intro.service";
export default function Users() {
  const address = `https://api.ufe.edu.mn/_api/menu`;
  const fetcher = async (url: any) =>
    await axios.get(url).then((res) => res.data);
  const { data, error } = useSWR(address, fetcher);

  if (error) <p>Loading failed...</p>;
  if (!data) <h1>Loading...</h1>;
  console.log(data);
  return (
    <div>
      <div className="container">
        {/* {data &&
          data.map((item: any) => (
            <div key={item.cell} className={`user-card  ${item.gender}`}>
              <div>
                <h3>{`${item.name.first}  ${item.name.last}`}</h3>
              </div>
              <div className="details">
                <p>Country: {item.location.country}</p>
                <p>State: {item.location.state}</p>
                <p>Email: {item.email}</p>
                <p>Phone: {item.phone}</p>
                <p>Age: {item.dob.age}</p>
              </div>
            </div>
          ))} */}
      </div>
    </div>
  );
}
