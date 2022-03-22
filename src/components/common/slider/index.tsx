import SimpleImageSlider from "react-simple-image-slider";

const images = [
  {
    url: "https://images.unsplash.com/photo-1553095066-5014bc7b7f2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8d2FsbCUyMGJhY2tncm91bmR8ZW58MHx8MHx8&w=1000&q=80",
  },
  {
    url: "https://media.istockphoto.com/photos/wood-tv-cabinet-interior-wall-mockup-in-modern-empty-roomminimal-picture-id1308740147",
  },
];

const Slider = () => {
  return (
    <div>
      <SimpleImageSlider
        width={896}
        height={504}
        images={images}
        showBullets={false}
        showNavs={true}
      />
    </div>
  );
};
export default Slider;
