import { useEffect, useState } from "react";
import SimpleImageSlider from "react-simple-image-slider";
import Carousel from "react-bootstrap/Carousel";

const Slider = (props: any) => {
  const { postMode } = props;

  const [images, setImages]: any = useState([]);
  const imgBase = process.env.NEXT_PUBLIC_FILE_HOST;

  useEffect(() => {
    let imgs = [];
    let url;
    for (let img of postMode.images) {
      url = "" + imgBase + img.filePath;
      imgs.push({
        url: "" + imgBase + img.filePath,
      });
    }
    setImages(imgs);
  }, []);
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex: any, e: any) => {
    setIndex(selectedIndex);
  };
  return (
    <div>
      <>
        <div className="mt-5">
          <Carousel activeIndex={index} onSelect={handleSelect}>
            {images.map((slide: any, i: number) => {
              return (
                <Carousel.Item key={i}>
                  <div className="st" style={{}}>
                    <img
                      style={{
                        display: "block",
                        objectFit: "cover",
                        maxWidth: "100%",
                        objectPosition: "center center",
                        borderRadius: "16px",
                      }}
                      className="d-block w-100 "
                      src={`${slide?.url}`}
                      alt="Image One"
                    />
                  </div>
                </Carousel.Item>
              );
            })}
          </Carousel>
        </div>
      </>
    </div>
  );
};
export default Slider;
