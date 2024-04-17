import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import foto1 from "./Images-Carousel/1.png"
import foto2 from "./Images-Carousel/2.png"
import foto3 from "./Images-Carousel/3.png"

function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <Carousel.Caption>
          <img src={foto1} alt="" />
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Carousel.Caption>
        <img src={foto2} alt="" />
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Carousel.Caption>
        <img src={foto3} alt="" />
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default ControlledCarousel;