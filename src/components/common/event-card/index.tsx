const EventCard = (props: any) => {
  const { item } = props;

  return (
    <div className="card" style={{ width: "100%", borderRadius: "16px" }}>
      <div className="hover-zoomin">
        <img
          className="card-img-top"
          src={`/image/education.png`}
          alt="image-alt-text"
          style={{
            borderRadius: "16px 16px 0 0",
            objectFit: "cover",
            width: "100%",
            height: "200px",
          }}
        />
      </div>
      <div className="card-body">
        <p className="card-title fw-bold hover-underline-animation">test</p>
        <p className="card-text">test</p>
        <button>test</button>
      </div>
    </div>
  );
};

export default EventCard;
