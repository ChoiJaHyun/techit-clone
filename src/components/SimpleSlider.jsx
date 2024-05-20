import Slider from "react-slick";
import SlideBanner from "./SlideBanner";

const SimpleSlider = () => {
  return (
    <Slider speed={500}>
      <SlideBanner />
      <div>
        <h3>2</h3>
      </div>
      <div>
        <h3>3</h3>
      </div>
      <div>
        <h3>4</h3>
      </div>
      <div>
        <h3>5</h3>
      </div>
      <div>
        <h3>6</h3>
      </div>
    </Slider>
  );
};

export default SimpleSlider;
