import React from 'react'
import CarouselItems from './CarouselItems';

const Carousel = () =>
{
  const caroU = [
    "/bg/bg14.png",
    "/bg/bg15.png",
    "/bg/bg16.png",
    "/bg/bg17.png",
    "/bg/bg19.png",
    "/bg/bg20.png",
    "/bg/bg21.png",
    "/bg/bg22.png",
    "/bg/bg23.png",
  ];
  const caroL = [
    "/bg/bg1.png",
    "/bg/bg2.png",
    "/bg/bg3.png",
    "/bg/bg4.png",
    "/bg/bg5.png",
    "/bg/bg6.png",
    "/bg/bg7.png",
    "/bg/bg8.png",
    "/bg/bg9.png",
  ];
  return (
    <div className="w-full h-screen flex items-center justify-center ">
      <CarouselItems images={caroU} from={0} to={"-100%"}/>
    </div>
  )
}

export default Carousel
