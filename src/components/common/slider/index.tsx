import {useEffect, useState} from "react";
import SimpleImageSlider from "react-simple-image-slider";

const Slider = ({postMode}: any) => {
    const [images, setImages]: any = useState([]);
    const imgBase = process.env.NEXT_PUBLIC_FILE_HOST;

    useEffect(() => {
        let imgs = [];
        let url;
        for (let img of postMode.images) {
            url = "" + imgBase + img.filePath;
            imgs.push({
                url: "" + imgBase + img.filePath
            });
        }
        setImages(imgs);
    }, []);

    return (
        <div>
            <>
                <SimpleImageSlider
                    width={"100%"}
                    height={"500px"}
                    images={images}
                    showBullets={false}
                    showNavs={true}
                />
            </>
        </div>
    );
};
export default Slider;
