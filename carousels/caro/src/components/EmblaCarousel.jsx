import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import leaders from "./shared/Data.json";
// import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";



Autoplay.globalOptions = { delay: 4000 };

function EmblaCarousel() {
//   const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay()]);
  return (
    <main className="flex-grow flex flex-col items-center justify-center px-4 md:px-24 py-12">
      <section className="text-center mb-8 md:mb-12">
        <h1 className="text-2xl md:text-3xl font-bold">Hello Carousel</h1>
      </section>
      <Carousel 
      plugins={[Autoplay({delay: 2000})]}
      className="w-full max-w-">
        <CarouselContent>
        {
          leaders.leaders?.map((leader, index) => (
            <CarouselItem key={index} className="pl-1 md:basis-1/2 lg:basis-1/3">
              <Card>
                <CardContent>
                  <img
                    className="w-full h-[250px] object-cover gap-3"
                    src={leader.img}
                    alt={leader}
                  />
                  <h2 className="text-center">{leader.name}</h2>
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
  );
}
export default EmblaCarousel;
