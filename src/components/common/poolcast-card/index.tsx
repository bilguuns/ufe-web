import { PoolcastCardStyle } from "./style";

const PoolcastCard = (props: any) => {
  const { item } = props;

  return (
    <PoolcastCardStyle>
      <div className="card" style={{ width: "100%", borderRadius: "16px" }}>
        <img
          className="card-img-top"
          src="/image/podcast.png"
          alt="image-alt-text"
          style={{ borderRadius: "16px 16px 0 0" }}
        />
        <div className="card-img-overlay d-flex flex-wrap align-items-end">
          <div className="overlay-content">
            <div>
              <a target={item?.url} href={item?.url}>
                <img
                  className="vertical-center"
                  src="/icon/play-fill.svg"
                  alt="image-alt-text"
                />
              </a>
            </div>

            <span
              className="badge bg-primary "
              style={{
                marginBottom: "5px",
                borderRadius: "6px",
              }}
            >
              <p
                className="text-center text-white "
                style={{
                  marginTop: "16px",
                  color: "#FFFFFF",
                  fontWeight: "400",
                }}
              >
                {item?.title}
              </p>
            </span>
            <br />
            <span
              className="badge bg-warning "
              style={{
                borderRadius: "6px",
              }}
            >
              <p
                className="text-center  text-dark"
                style={{
                  marginTop: "16px",
                  color: "#FFFFFF",
                  fontWeight: "400",
                }}
              >
                {item?.name}
              </p>
            </span>
            {/* </h6> */}
          </div>
        </div>
      </div>
    </PoolcastCardStyle>
  );
};

export default PoolcastCard;
