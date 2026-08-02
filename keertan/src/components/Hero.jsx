import KeertanCarousel from "./KeertanCarousel"



function Hero() {
  return (
    <div className="text-center justify-center bg-orange-200 p-5">
        <h1 className="text-lg text-orange-700 ">Welcome to Delhi Keertan Service!</h1>
        <p className="text-lg text-orange-700 ">We offer Keertan services in Delhi NCR & can perform in India abroad.</p>
        <div >
            <KeertanCarousel/>
        </div>
    </div>
  )
}

export default Hero