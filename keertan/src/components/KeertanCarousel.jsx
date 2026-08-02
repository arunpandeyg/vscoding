import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";


// import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import keertans from '../data/keertans.json'
Autoplay.globalOptions = { delay: 2000 };

function KeertanCarousel() {
  return (
    <main className="flex-grow flex flex-col items-center justify-center px-4 md:px-24 py-4">
    <section className="text-center mb-4 md:mb-3">
      <h1 className="text-2xl md:text-3xl font-bold text-orange-700">We Calibrating</h1>
    </section>
    <Carousel 
    plugins={[Autoplay({delay: 2000})]}
    className="w-full ">
      <CarouselContent>
        {
          keertans.keertans?.map((keertan, index) => (
            <CarouselItem key={index} className="pl-1 md:basis-1/2 lg:basis-1/3">
              <Card>
                <CardContent>
                  <img
                    className="w-full h-[300px] object-cover gap-3"
                    src={keertan.img}
                    alt={keertan}
                  />
                  
                </CardContent>
              </Card>
            </CarouselItem>
          ))
        }
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  </main>
  )
}

export default KeertanCarousel