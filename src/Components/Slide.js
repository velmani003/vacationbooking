import React from 'react';
import { Carousel }from 'react-bootstrap';
import './Slide.css';

function Slide () {
 return (
<Carousel>
  <Carousel.Item>
  <img
      className="d-block w-100"
      src="images/img-3.jpg"
      alt="First Place"
      style={{height: '100vh'}}
    />
  
    <Carousel.Caption>
      <h3>Offer Places</h3>
      <p>"Welcome to the fantasy of a dreamy island with utmost perfectional beauty"-This is how the pictures of Bora Bora 
        entice you for a vacation. A part of French Polynesia, 
         this magical island has some of the most beautiful sights to behold- a tropical island surrounded by the amazing blue lagoon and coral reefs, 
        accompanied by small islets (Motus) scattered around Bora Bora.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="images/img-2.jpg"
      alt="Second Place"
      style={{height: '100vh'}}
    />

    <Carousel.Caption>
      <h3>Offer Places</h3>
      <p>Stretching for 2300 kilometres off the east coast of Australia, the Great Barrier Reef is one of nature's greatest marvels. 
        It is officially the biggest structure made by living organisms and can be seen from even outer space!! </p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="images/img-9.jpg"
      alt="Third Place"
      style={{height: "100vh"}}
    />

    <Carousel.Caption>
      <h3>Offer Places</h3>
      <p>A mystery of its real purpose surrounds the place and historians till date continue to debate on the matter. 
        A hotspot within the ruins itself, The Temple of the Sun is known for having windows perfectly positioned 
        to let the rays of the sun inside in intricate patterns. Apart from the archaeological site itself,
         the panoramic view of the Huayna Picchu peak is a breathtaking sight you can never forget.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
 );
}

export default Slide;