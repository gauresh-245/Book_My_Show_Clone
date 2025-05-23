import Carousel from "react-bootstrap/Carousel";


function UncontrolledExample() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://assets-in.bmscdn.com/promotions/cms/creatives/1717080055549_playcardweb.jpg"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://assets-in.bmscdn.com/promotions/cms/creatives/1724854232606_alanwalker2024webshowcase1240x300.jpg"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://assets-in.bmscdn.com/promotions/cms/creatives/1724742767313_internationalclownfestival1240x300.jpg"
        />
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://assets-in.bmscdn.com/promotions/cms/creatives/1724854572932_sunburndesktop.jpg"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default UncontrolledExample;
