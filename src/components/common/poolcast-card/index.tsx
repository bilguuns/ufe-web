import { PodcastCardStyle } from "./style";

const PoolcastCard = (props: any) => {
  const { item } = props;

  return (
    <PodcastCardStyle>
      <div className="card" style={{ width: "100%", borderRadius: "16px" }}>
        <img
          className="card-img-top"
          src="/image/podcast.png"
          alt="image-alt-text"
          style={{ borderRadius: "16px 16px 0 0" }}
        />
        <div className="card-img-overlay d-flex  flex-wrap align-items-end">
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

            <button
              className="btn btn-primary "
              style={{
                marginBottom: "4px",
                borderRadius: "6px",
              }}
            >
              {item?.title}
            </button>
            <br />
            <button
              className="btn btn-warning"
              style={{
                borderRadius: "6px",
              }}
            >
              {item?.name}
            </button>
            {/* </h6> */}
          </div>
        </div>
      </div>
    </PodcastCardStyle>
  );
};

export default PoolcastCard;
