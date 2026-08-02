import React from "react";

import CarouselItem from "./CarouselItem";

const Carousel = () => {
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
      <CarouselItem images={caroU} from={0} to={"-100%"}/>
      {/* <div className="flex mb-5  gap-4 ">
        <motion.div
          initial={{ x: 0 }}
          animate={ { x: "-100%" } }
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          className="flex flex-shrink-0 gap-4"
        >
          {caroU.map((item, index) => {
            return (
              <img
                src={item}
                alt="im"
                key={index}
                className="w-[300px] h-[200px] "
              />
            );
          })}
        </motion.div>

        <motion.div
          initial={{ x: 0 }}
          animate={ { x: "-100%" } }
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          className="flex flex-shrink-0 gap-4"
        >
          {caroU.map((item, index) => {
            return (
              <img
                src={item}
                alt="im"
                key={index}
                className="w-[300px] h-[200px] "
              />
            );
          })}
        </motion.div>
      </div> */}

      {/* <div className="flex gap-4 ">
        <motion.div
          initial={{ x:  "-100%"}}
          animate={ { x: 0 } }
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          className="flex flex-shrink-0 gap-4"
        >
          {caroL.map((item, index) => {
            return (
              <img
                src={item}
                alt="im"
                key={index}
                className="w-[300px] h-[200px] "
              />
            );
          })}
        </motion.div>

        <motion.div
          initial={{ x:  "-100%"}}
          animate={ { x: 0 } }
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          className="flex flex-shrink-0 gap-4"
        >
          {caroL.map((item, index) => {
            return (
              <img
                src={item}
                alt="im"
                key={index}
                className="w-[300px] h-[200px] "
              />
            );
          })}
        </motion.div>
      </div> */}
    </div>
  );
};

export default Carousel;
