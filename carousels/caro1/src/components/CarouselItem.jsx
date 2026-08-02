import React from 'react'
import { motion } from "motion/react"

const CarouselItem = ({images,from, to}) => {
  return (
    <div className="flex mb-5">
        <motion.div
          initial={{ x: `${from}` }}
          animate={ { x: `${to}` } }
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          className="flex flex-shrink-0 "
        >
          {images.map((item, index) => {
            return (
              <img
                src={item}
                alt="im"
                key={index}
                className="w-[300px] h-[200px] pr-4"
              />
            );
          })}
        </motion.div>

        <motion.div
          initial={{ x: `${from}` }}
          animate={ { x: `${to}` } }
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          className="flex flex-shrink-0 "
        >
          {images.map((item, index) => {
            return (
              <img
                src={item}
                alt="im"
                key={index}
                className="w-[300px] h-[200px] pr-4"
              />
            );
          })}
        </motion.div>
      </div>
  )
}

export default CarouselItem
