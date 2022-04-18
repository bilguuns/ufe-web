import SimpleImageSlider from "react-simple-image-slider";

const Slider = (props: any) => {
  const { postData } = props;
  const imgBase = process.env.NEXT_PUBLIC_ENTRYPOINT;

  const imgSrc =
    postData.modes[0].image[0] && postData.modes[0].image[0].filePath
      ? imgBase + postData.modes[0].image[0].filePath
      : null;

  const imageData = [
    {
      url: imgSrc,
    },
  ];

  return (
    <div>
      <SimpleImageSlider
        width={1000}
        height={504}
        images={imageData}
        showBullets={false}
        showNavs={true}
      />
    </div>
  );
};
export default Slider;
