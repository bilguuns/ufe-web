import { useEffect, useState } from "react";
import SimpleImageSlider from "react-simple-image-slider";

const Slider = (props: any) => {
  const { postMode } = props;
  let [imageSrc, setImages] = useState([]);

  const imgBase = process.env.NEXT_PUBLIC_FILE_HOST;

  // const imgSrc =
  //   postMode.images[0] && postMode.images[0].filePath
  //     ? imgBase + postMode.images[0].filePath
  //     : null;

  useEffect(() => {
    let imgSrc = postMode.images.map((e: any) => e);

    setImages(
      imgSrc[0] && imgSrc[0].filePath ? imgBase + imgSrc[0].filePath : null
    );
  }, []);

  const imageData = [
    {
      url: imageSrc,
    },
  ];
  const images1 = [{ url: "/image/education.png" }, { url: "/icon/exit.svg" }];
  console.log(images1, "imgimgimgimgimg");
  console.log(imageSrc, "imageDataimageDataimageDataimageData");

  return (
    <div>
      <>
        {/* {imageData.map((img: any, index: number) => { */}
        {/* console.log(img, "img"); */}
        <SimpleImageSlider
          width={"80%"}
          height={"500px"}
          images={imageData}
          showBullets={false}
          showNavs={true}
        />
        {/* })} */}
      </>
    </div>
  );
};
export default Slider;
