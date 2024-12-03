import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import who_we_are from "../../../imge/compa/Who we are.jpg"
import who_choose_us from "../../../imge/compa/Why choose 2.jpg"
import { useState } from 'react';

const About = () => {
    const [openSection, setOpenSection] = useState(null);

    const toggleSection = (section) => {
        setOpenSection((prevSection) => (prevSection === section ? null : section));
    };
    return (

        <div>
            <div className="pt-20">
                <h1 className="text-white text-4xl text-center p-10 font-bold w-full bg-gradient-to-r from-emerald-900 to-emerald-300">
                    About Us
                </h1>
            </div>

            <div>
                <div>
                    <p className="pt-12 pb-10 text-center text-3xl font-bold text-black uppercase">
                        Who We Are
                    </p>
                </div>

                <div className="bg-base-200 shadow-xl rounded-xl">
                    <div className="flex flex-col lg:flex-row m-4 pt-2">
                        <div className="w-full lg:w-1/2 flex justify-center mb-4 lg:mb-0">
                            <img className=" rounded-lg shadow-2xl w-full m-4"
                                src={who_we_are}
                            />
                        </div>
                        <div className="w-full lg:w-1/2 flex items-center">
                            <div className="p-2 text-black text-center lg:text-left text-lg">
                                <p className="p-2">If your business is not yet at the stage where you are able to hire a full-time product manager/team, we provide the resources necessary to help you with the struggles and challenges that come with innovative product development.<br />
                                </p>
                                <p className="p-2">
                                    With decades of experience, <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-emerald-900 to-emerald-300">ProximityPro</span> understands your struggle and the challenges you face as a business owner, and we want to help.</p>
                                <p className="p-2">
                                    We are a team of product strategists that will help you determine which products or services to prioritize, guiding you toward the highest-impact opportunities. We provide a structured analysis of your products, define high-value focus areas, and implement scaling strategies tailored to your business size and market.
                                </p>
                                <p className="p-2">
                                    We believe that every company, regardless of size, deserves strong product management, which focuses on the customers effectively and efficiently.
                                </p>
                            </div>



                        </div>
                    </div>
                </div>

            </div>
            <div>
                <p className="pt-20 pb-10 text-center text-3xl font-bold text-black uppercase">
                    Our Approach
                </p>
            </div>
            <div>
                <p className=" text-center text-2xl font-bold text-gray-600 uppercase">
                    Whether you're a startup or an established company, <span className='font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-emerald-900 to-emerald-300'>ProximityPro</span> is designed to help you achieve product-market fit quickly and efficiently

                </p>
            </div>
            <div>
                <div className=''>
                    <div className="card lg:card-side bg-base-100 shadow-xl">
                        <div className="card-body">
                            <div className="collapse collapse-plus bg-base-200">
                                <input type="radio" name="my-accordion-3" checked="checked" />
                                <div className="collapse-title text-xl text-white bg-gradient-to-r from-emerald-900 to-emerald-300 font-medium">
                                    Provide Innovative product roadmap
                                </div>
                                <div className="collapse-content">
                                    <p>Success begins with a well-crafted plan. Our team works with you to develop product roadmaps that are not only innovative but also aligned with your business vision.
                                        Strategic Planning: We will help you to define the product’s long-term goals, by focusing on features, releases, and milestones.
                                        Market Research: Our team conducts deep research into market trends, competitors, and customer needs to guide our journey together.
                                        Alignment with Business Objectives: We ensure the roadmap reflects your overall business objectives, ensuring synergy between your product and company strategy.
                                        With our product services, you will always have a clear vision of where your product is heading</p>
                                </div>
                            </div>
                            <div className="collapse collapse-plus bg-base-100">
                                <input type="radio" name="my-accordion-3" />
                                <div className="collapse-title text-xl text-white font-medium bg-gradient-to-r from-emerald-900 to-emerald-300">
                                    Next generation Product Identification

                                </div>
                                <div className="collapse-content">
                                    <p>Staying ahead requires constant innovation. At ProximityPro, we help you identify the next big opportunities for your product line by focusing on:
                                        Emerging Trends: Using market analysis tools, we spot upcoming trends that your company can capitalize on.
                                        Customer Insights: We dive into customer behavior and preferences to discover unmet needs and areas for product innovation.
                                        Competitive Analysis: By keeping an eye on competitors, we identify gaps in the market that you can exploit with a unique product offering.
                                        Through this service, we help you not only keep up with the market but also lead it.
                                    </p>
                                </div>
                            </div>
                            <div className="collapse collapse-plus bg-base-200">
                                <input type="radio" name="my-accordion-3" />
                                <div className="collapse-title text-xl text-white font-medium bg-gradient-to-r from-emerald-900 to-emerald-300">
                                    Market trend analysis and Adaptation Strategy

                                </div>
                                <div className="collapse-content">
                                    <p>To stay competitive, it’s essential to adapt your product and business strategy to current market conditions. We offer:
                                        Comprehensive Market Research: Our team delivers authentic data on current and projected market trends.
                                        Adaptation Strategies: Based on the analysis, we recommend sufficient strategies to adjust your product and business approach.
                                        Risk Mitigation: By staying ahead of the market, we help you minimize risks and position your product for long-term success.
                                        Our team’s data-driven insights ensure that your product evolves with the market, keeping you at the forefront of your industry.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>


                    {/* <div className="card lg:card-side bg-base-100 shadow-xl">
                        <div className="card-body">
                            <div className="collapse bg-base-200">
                                <div
                                    onClick={() => toggleSection(1)}
                                    className="collapse-title text-xl text-white bg-gradient-to-r from-emerald-900 to-emerald-300 font-medium cursor-pointer"
                                >
                                    Provide Innovative Product Roadmap
                                </div>
                                {openSection === 1 && (
                                    <div className="collapse-content">
                                        <p>
                                            Success begins with a well-crafted plan. Our team works with you to develop product roadmaps that are not only innovative but also aligned with your business vision.
                                            <br />
                                            <b>Strategic Planning:</b> We will help you define the product’s long-term goals by focusing on features, releases, and milestones.
                                            <br />
                                            <b>Market Research:</b> Our team conducts deep research into market trends, competitors, and customer needs to guide our journey together.
                                            <br />
                                            <b>Alignment with Business Objectives:</b> We ensure the roadmap reflects your overall business objectives, ensuring synergy between your product and company strategy.
                                            <br />
                                            With our product services, you will always have a clear vision of where your product is heading.
                                        </p>
                                    </div>
                                )}
                            </div>

                            <div className="collapse bg-base-100">
                                <div
                                    onClick={() => toggleSection(2)}
                                    className="collapse-title text-xl text-white bg-gradient-to-r from-emerald-900 to-emerald-300 font-medium cursor-pointer"
                                >
                                    Next Generation Product Identification
                                </div>
                                {openSection === 2 && (
                                    <div className="collapse-content">
                                        <p>
                                            Staying ahead requires constant innovation. At ProximityPro, we help you identify the next big opportunities for your product line by focusing on:
                                            <br />
                                            <b>Emerging Trends:</b> Using market analysis tools, we spot upcoming trends that your company can capitalize on.
                                            <br />
                                            <b>Customer Insights:</b> We dive into customer behavior and preferences to discover unmet needs and areas for product innovation.
                                            <br />
                                            <b>Competitive Analysis:</b> By keeping an eye on competitors, we identify gaps in the market that you can exploit with a unique product offering.
                                            <br />
                                            Through this service, we help you not only keep up with the market but also lead it.
                                        </p>
                                    </div>
                                )}
                            </div>

                            <div className="collapse bg-base-200">
                                <div
                                    onClick={() => toggleSection(3)}
                                    className="collapse-title text-xl text-white bg-gradient-to-r from-emerald-900 to-emerald-300 font-medium cursor-pointer"
                                >
                                    Market Trend Analysis and Adaptation Strategy
                                </div>
                                {openSection === 3 && (
                                    <div className="collapse-content">
                                        <p>
                                            To stay competitive, it’s essential to adapt your product and business strategy to current market conditions. We offer:
                                            <br />
                                            <b>Comprehensive Market Research:</b> Our team delivers authentic data on current and projected market trends.
                                            <br />
                                            <b>Adaptation Strategies:</b> Based on the analysis, we recommend sufficient strategies to adjust your product and business approach.
                                            <br />
                                            <b>Risk Mitigation:</b> By staying ahead of the market, we help you minimize risks and position your product for long-term success.
                                            <br />
                                            Our team’s data-driven insights ensure that your product evolves with the market, keeping you at the forefront of your industry.
                                        </p>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div> */}
                </div>

            </div>

            <div>
                <div>
                    <p className="pt-12 pb-10 text-center text-3xl font-bold text-black uppercase">
                        Why Choose Us?
                    </p>
                </div>

                <div className="bg-base-200 shadow-xl rounded-xl">
                    <div className="flex flex-col lg:flex-row m-4 pt-2">
                        <div className="w-full lg:w-1/2 flex justify-center mb-4 lg:mb-0">
                            <img className=" rounded-lg shadow-2xl w-full m-4"
                                src={who_choose_us}
                            />
                        </div>
                        <div className="w-full lg:w-1/2 flex items-center">
                            <div className="p-2 text-black text-center lg:text-left text-lg">
                                <p className="p-2 font-bold">Unique Value Proposition.<br />
                                </p>
                                <div className="p-2">
                                    <h1 className="p-2 border shadow hover:text-white hover:bg-gradient-to-r from-emerald-900 to-emerald-300">
                                        Proven track record in scaling products<FontAwesomeIcon icon="fa-mug-hot" />

                                    </h1>
                                    <h1 className="p-2 border shadow hover:text-white hover:bg-gradient-to-r from-emerald-900 to-emerald-300">
                                        10+ years of industry experience in fortune 200 manufacturing companies

                                    </h1>
                                    <h1 className="p-2 border shadow hover:text-white hover:bg-gradient-to-r from-emerald-900 to-emerald-300">
                                        10+ years of industry experience in top tech companies

                                    </h1>
                                    <h1 className="p-2 border shadow hover:text-white hover:bg-gradient-to-r from-emerald-900 to-emerald-300">
                                        10+ years of industry experience in startups

                                    </h1>
                                    <h1 className="p-2 border shadow hover:text-white hover:bg-gradient-to-r from-emerald-900 to-emerald-300">
                                        Focus on innovation, resilience and diversity.

                                    </h1>
                                </div>
                            </div>



                        </div>
                    </div>
                </div>

            </div>
        </div>

    );
};

export default About;