import Carousel from 'react-bootstrap/Carousel';

export const HomeCarousel = () => {
  return (
    <Carousel>
      <Carousel.Item interval={4000}>
        <img
          className="d-block w-100"
          src="../header1-1200x600.png"
          alt="First slide"
        />
        
      </Carousel.Item>
      <Carousel.Item interval={4000}>
        <img
          className="d-block w-100"
          src="../header2-1200x600.png"
          alt="Second slide"
        />
        
      </Carousel.Item>
      <Carousel.Item interval={4000}>
        <img
          className="d-block w-100"
          src="../header3-1200x600.png"
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  )
}
