import React from 'react'
import { motion } from "motion/react"

const CarouselItems = ({images,from, to}) => {
  return (
    <div className="flex">
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
                className="w-[1272px] h-[494px] pr-4 "
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
                className="w-[1272px] h-[494px] pr-4"
              />
            );
          })}
        </motion.div>
      </div>
  )
}

export default CarouselItems
