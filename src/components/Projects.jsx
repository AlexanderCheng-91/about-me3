import React, { useState } from 'react';
import { Carousel, CarouselItem, CarouselControl, CarouselIndicators, CarouselCaption } from 'reactstrap';

import FruitfulHealthWebsiteScreenshot from '../pictures/FruitfulHealthWebsiteScreenshot.png';
import FruitfulHealthWebsiteScreenshot3 from '../pictures/FruitfulHealthWebsiteScreenshot3.png';
// ./pictures/FruitfulHealthWebsiteScreenshot.png
// ../pictures/FruitfulHealthWebsiteScreenshot.png

const items = [
   {
      src: FruitfulHealthWebsiteScreenshot,
      altText: 'landing page for fruitful health',
      caption: 'Slide 1',
   },
   {
      src: FruitfulHealthWebsiteScreenshot3,
      altText: 'Slide 2',
      caption: 'Slide 2',
   },
];

const Projects = props => {
   const [activeIndex, setActiveIndex] = useState(0);
   const [animating, setAnimating] = useState(false);

   const next = () => {
      if (animating) return;
      const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
      setActiveIndex(nextIndex);
   };

   const previous = () => {
      if (animating) return;
      const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
      setActiveIndex(nextIndex);
   };

   const goToIndex = newIndex => {
      if (animating) return;
      setActiveIndex(newIndex);
   };

   const slides = items.map(item => {
      return (
         <CarouselItem
            onExiting={() => setAnimating(true)}
            onExited={() => setAnimating(false)}
            key={item.src}
            href={item.href}
         >
            <img src={item.src} alt={item.altText} style={{ maxWidth: 800, maxHeight: 406.74 }} />
            <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
         </CarouselItem>
      );
   });

   return (
      <div className="projects">
         <div className="projects-title">Projects</div>
         <div className="demarcation-padding">
            <div className="demarcation"></div>
         </div>

         <Carousel activeIndex={activeIndex} next={next} previous={previous}>
            <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
            {slides}
            <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
            <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
         </Carousel>
      </div>
   );
};

export default Projects;
