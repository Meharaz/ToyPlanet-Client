import React from 'react';
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import { FaArrowRight } from 'react-icons/fa';
const Banner = () => {
    const [sliderRef] = useKeenSlider(
        {
            loop: true,
        },
        [
            (slider) => {
                let timeout
                let mouseOver = false
                function clearNextTimeout() {
                    clearTimeout(timeout)
                }
                function nextTimeout() {
                    clearTimeout(timeout)
                    if (mouseOver) return
                    timeout = setTimeout(() => {
                        slider.next()
                    }, 2000)
                }
                slider.on("created", () => {
                    slider.container.addEventListener("mouseover", () => {
                        mouseOver = true
                        clearNextTimeout()
                    })
                    slider.container.addEventListener("mouseout", () => {
                        mouseOver = false
                        nextTimeout()
                    })
                    nextTimeout()
                })
                slider.on("dragStarted", clearNextTimeout)
                slider.on("animationEnded", nextTimeout)
                slider.on("updated", nextTimeout)
            },
        ]
    )
    return (
        <div>
            {/* <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                    <img className='rounded-2xl' src="https://i.ibb.co/frpZp4z/318669-1-600.webp" />
                    <div>
                        <h1 className="text-5xl font-bold">Outdoor Play!</h1>
                        <p className="py-6">More outdoor time is linked with improved motor development and lower obesity rates and myopia (nearsightedness) risk. </p>
                        <button className="btn btn-primary">
                            Outdoor Toys <FaArrowRight />
                        </button>
                    </div>
                </div>
            </div> */}

            <div ref={sliderRef} className="keen-slider">
                <div className="keen-slider__slide number-slide1"><div className="hero min-h-screen bg-base-200">
                    <div className="hero-content flex-col lg:flex-row">
                        <img className='rounded-2xl' src="https://i.ibb.co/frpZp4z/318669-1-600.webp" />
                        <div>
                            <h1 className="text-5xl font-bold">Outdoor Play!</h1>
                            <p className="py-6">More outdoor time is linked with improved motor development and lower obesity rates and myopia (nearsightedness) risk. </p>
                            <button className="btn btn-primary">
                                Outdoor Toys <FaArrowRight />
                            </button>
                        </div>
                    </div>
                </div>
                </div>
                <div className="keen-slider__slide number-slide2"><div className="hero min-h-screen bg-base-200">
                    <div className="hero-content flex-col lg:flex-row">
                        <img className='rounded-2xl lg:h-full lg:w-2/4 md:w-full md:h-full sm:w-1/2 sm:h-2/4' src="https://i.ibb.co/2tRPvk9/Organizing-Indoor-Play-Area.png" />
                        <div>
                            <h1 className="text-5xl font-bold">Indoor Play!</h1>
                            <p className="py-6">It helps build coordination and balance also kids can build their communication skills by interacting with other kids.</p>
                            <button className="btn btn-primary">
                                Indoor Toys <FaArrowRight />
                            </button>
                        </div>
                    </div>
                </div>
                </div>                                
            </div>

            {/* <div className="carousel w-full h-96">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src="https://i.ibb.co/frpZp4z/318669-1-600.webp" className="w-full h-full " />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src="/images/stock/photo-1609621838510-5ad474b7d25d.jpg" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src="/images/stock/photo-1414694762283-acccc27bca85.jpg" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <img src="/images/stock/photo-1665553365602-b2fb8e5d1707.jpg" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div> */}

        </div>
    );
};

export default Banner;