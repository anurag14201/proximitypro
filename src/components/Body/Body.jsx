import Aos from "aos";
import Serve from '../../../imge/compa/We serve the com.jpg';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import withAutoplay from 'react-awesome-slider/dist/autoplay';

import heroPic from '../../../imge/compa/business-colleagues-banner-concept-with-copy-space_23-2149601494.jpg'
import heroPic2 from '../../../imge/compa/hbs.jpg';
import heroPic3 from '../../../imge/compa/representation-user-experience-interface-design_23-2150169850.jpg'

import 'aos/dist/aos.css'
import { useEffect } from "react";

import Connect from "../Connect/Connect";
import { Link } from "react-router-dom";
import { Parallax } from "react-parallax";
const AutoplaySlider = withAutoplay(AwesomeSlider);
// import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
// import { Carousel } from 'react-responsive-carousel';

const Body = () => {

    useEffect(() => {
        Aos.init({ duration: 4000 });
    }, []);
    return (
        <div>
            <AutoplaySlider
                play={true}
                cancelOnInteraction={false} // should stop playing on user interaction
                interval={6000}
                onTransitionEnd={() => Aos.refresh()}
            >

                <div className="w-full h-[60vh] m-0 p-0" style={{
                    backgroundImage: `url(${heroPic2})`,
                    backgroundAttachment: "fixed",
                    backgroundSize: "cover",
                    backgroundPosition: "center",

                }}>

                    <div className="backdrop-blur-md w-full lg:w-1/2 mt-40 sm:mt-52 m-4 p-4 lg:m-8 lg:p-8 rounded-br-lg" data-aos="fade-right">
                        <h1 className="text-start text-2xl sm:text-3xl lg:text-4xl text-black font-bold">Strategic Product Management Consulting Services</h1>
                        <p className="text-start text-sm sm:text-base lg:text-xl text-black">
                            Helping Small Businesses Scale to $1M+ and Empowering Mid-Sized Corporations to Maximize Profits and Market Dominance.
                        </p>
                    </div>




                </div>
                <div className="w-full h-[60vh] m-0 p-0" style={{
                    backgroundImage: `url(${heroPic3})`,
                    backgroundAttachment: "fixed",
                    backgroundSize: "cover",
                    backgroundPosition: "center",

                }}>

                    <div className="backdrop-blur-md w-full lg:w-1/2 mt-40 sm:mt-52 m-4 p-4 lg:m-8 lg:p-8 rounded-br-lg" data-aos="fade-right">
                        <h1 className="text-start text-2xl sm:text-3xl lg:text-4xl text-white font-bold">Strategic Product Management Consulting Services</h1>
                        <p className="text-start text-sm sm:text-base lg:text-xl text-white" >
                            Are you a small or midsize business owner or a startup? Do you have multiple products and customer segments? However, you lack clarity on which products to prioritize, where to allocate resources, or how to adapt to evolving customer demographics and preferences?
                        </p>
                    </div>




                </div>
                <div className="w-full h-[60vh] m-0 p-0" style={{
                    backgroundImage: `url(${heroPic})`,
                    backgroundAttachment: "fixed",
                    backgroundSize: "cover",
                    backgroundPosition: "center",

                }}>
                    <div className="backdrop-blur-md w-full lg:w-1/2 mt-40 sm:mt-52 m-4 p-4 lg:m-8 lg:p-8 rounded-br-lg" data-aos="fade-right" >
                        <h1 className="text-start text-2xl sm:text-3xl lg:text-4xl  text-white font-bold" >Strategic Product Management Consulting Services</h1>
                        <p className="text-start text-sm sm:text-base lg:text-xl text-white">
                            If this sounds like you, we understand your struggles and challenges.With decades of experience<br />we can help you determine which products or services to prioritize guiding you toward the highest-impact opportunities.
                        </p>
                    </div>
                </div>
            </AutoplaySlider>

            <div>

                <p className="pt-10 pb-8 text-center text-3xl text-black font-bold uppercase">
                    Services
                </p>
            </div>


            <div
                className="flex flex-wrap justify-center gap-8 pt-12 px-4 lg:px-10"
                data-aos="zoom-in-up"
            >
                {[
                    {
                        title: "Product Portfolio Analysis",
                        description:
                            "Only 20% of your high-value products can drive up to 80% of your revenue.",
                        img: "https://i.pinimg.com/originals/fc/01/d6/fc01d6058d64e7f9e25292d1980f8500.gif",
                    },
                    {
                        title: "Customer Segmentation",
                        description:
                            "Just 20% of your high-ticket customers will drive the majority of your revenue.",
                        img: "https://i.pinimg.com/originals/fd/21/b4/fd21b4ee9bb835fe3a3914a6811a6b67.gif",
                    },
                    {
                        title: "Market Trend Analysis",
                        description:
                            "Guide companies in monitoring market trends and adjusting their product offerings.",
                        img: "https://i.pinimg.com/originals/9a/64/55/9a6455ffeee524d0a4c27f4112f7df3a.gif",
                    },
                    {
                        title: "Scalability Strategies",
                        description:
                            "We empower companies to not only survive but thrive in today’s competitive environment.",
                        img: "https://i.pinimg.com/originals/c0/7b/09/c07b0987532e9e70532f5a7efb9d9643.gif",
                    },
                ].map((card, index) => (
                    <Link
                        to="/services"
                        key={index}
                        className="card card-compact bg-base-100 w-80 shadow-xl transform transition-all duration-300 hover:scale-105"
                    >
                        <figure>
                            <img src={card.img} alt={card.title} className="object-cover" />
                        </figure>
                        <div className="card-body">
                            <h2 className="text-center text-lg font-bold">{card.title}</h2>
                            <p className="text-center text-gray-700">{card.description}</p>
                        </div>
                    </Link>
                ))}
            </div>


            {/* <div className="object-center flex gap-10 pt-12 pl-10  flex-col lg:flex-row justify-center flex-wrap " data-aos="zoom-in-up">

                <Link to='/services'>
                    <div className="card card-compact bg-base-100 w-80 shadow-xl">
                        <figure>
                            <img
                                src="https://i.pinimg.com/originals/fc/01/d6/fc01d6058d64e7f9e25292d1980f8500.gif"
                                alt="Shoes" />
                        </figure>
                        <div className="card-body">
                            <h2 className="text-center text-lg font-bold">Product Portfolio Analysis</h2>
                            <p className="text-gray-700 text-center	">Only 20% of your high-value products can drive up to 80% of your revenue.
                            </p>

                        </div>
                    </div>
                </Link>

                <Link to='/services'>
                    <div className="card card-compact bg-base-100 w-80 shadow-xl  ">
                        <figure>
                            <img
                                src="https://i.pinimg.com/originals/fd/21/b4/fd21b4ee9bb835fe3a3914a6811a6b67.gif"
                                alt="Shoes" />
                        </figure>
                        <div className="card-body">
                            <h2 className="text-center text-lg  font-bold">Customer Segmentation</h2>
                            <p className="text-gray-700 text-center	">Just 20% of your high-ticket customers will drive the majority of your revenue.
                            </p>

                        </div>
                    </div>
                </Link>
                <Link to='/services'>
                    <div className="card card-compact bg-base-100 w-80 shadow-xl ">
                        <figure>
                            <img
                                src="https://i.pinimg.com/originals/9a/64/55/9a6455ffeee524d0a4c27f4112f7df3a.gif"

                                alt="Shoes" />
                        </figure>
                        <div className="card-body">
                            <h2 className="text-center text-lg font-bold">Market Trend Analysis
                            </h2>
                            <p className="text-gray-700 text-center	">Guide companies in monitoring market trends and adjusting their product offerings.
                            </p>

                        </div>
                    </div>
                </Link>
                <Link to='/services'>
                    <div className="card card-compact bg-base-100 w-80 shadow-xl ">
                        <figure>
                            <img
                                src="https://i.pinimg.com/originals/c0/7b/09/c07b0987532e9e70532f5a7efb9d9643.gif"
                                alt="Shoes" />
                        </figure>
                        <div className="card-body">
                            <h2 className="text-center text-lg font-bold">Scalability Strategies

                            </h2>
                            <p className=" text-center text-gray-700">We empower companies to not only survive but thrive in today’s competitive environment.

                            </p>

                        </div>
                    </div>
                </Link>

            </div> */}

            <div>

                <p className="pt-20 pb-8 text-center text-3xl text-black font-bold uppercase">
                    Our Mission
                </p>
            </div>


            <div>

                <div className="bg-gradient-to-r from-emerald-900 to-emerald-300" >

                    <div className="flex flex-col lg:flex-row m-4 pt-2">
                        <div className="w-full lg:w-1/2 flex justify-center mb-4 lg:mb-0">
                            <img
                                src="https://i.pinimg.com/1200x/0c/26/30/0c2630eb6e191574fcdf9b8e66085d68.jpg"
                                className=" rounded-lg shadow-2xl" />
                        </div>

                        <div className=" w-full lg:w-1/2 flex items-center">
                            <p className="py-6 text-white text-2xl text-center lg:text-left px-4">
                                Our mission is to future-proof businesses by identifying profitable products and strategies that adapt to market trends, positioning them for sustainable growth and market leadership

                            </p>
                        </div>
                    </div>
                </div>

            </div>



            <div className="bg-gray-100 py-16">
                {/* Section Title */}
                <div className="text-center mb-12">
                    <p className="text-3xl font-bold text-black uppercase">Industries We Serve</p>
                </div>

                {/* Full-Width Parallax Background */}
                <Parallax
                    strength={-200}
                    bgImage={Serve}
                    bgImageAlt="Industries Background"
                    bgImageStyle={{
                        width: "100vw", // Make the background image span full width.
                        height: "auto",
                        objectFit: "cover", // Ensure the image covers its container proportionally.
                    }}
                    className="w-screen -mx-4"
                >
                    {/* Content Inside Parallax */}
                    <div className="w-full py-16 px-8">
                        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
                            {/* Card Items */}
                            {[
                                "Manufacturers",
                                "Service Providers",
                                "Healthcare",
                                "Technology",
                                "SaaS",
                                "Reason",
                            ].map((industry, index) => (
                                <div
                                    key={index}
                                    className="card bg-white shadow-xl hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300"
                                >
                                    <div className="card-body flex items-center justify-center h-24">
                                        <p className="text-lg font-bold text-center">{industry}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </Parallax>
            </div>




            <Connect></Connect>
            {/* <Swiperss></Swiperss> */}
        </div>
    );
};

export default Body;