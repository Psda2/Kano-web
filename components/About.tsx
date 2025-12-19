import Image from 'next/image';

const About = () => {
    return (
        <section id="about" className="py-20 px-8 bg-white">
            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
                {/* Image Side */}
                <div className="relative h-[500px] w-full rounded-xl overflow-hidden shadow-2xl">
                    <Image
                        src="/ella.png"
                        alt="About Kano Travels"
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    <div className="absolute bottom-6 left-6 text-white">
                        <p className="text-lg font-medium">Discovering the unseen beauty of Sri Lanka</p>
                    </div>
                </div>

                {/* Content Side */}
                <div className="text-left">
                    <h2 className="text-4xl font-serif font-bold text-[#003366] mb-6">Who We Are</h2>
                    <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                        Kano Travels is a leading local travel company based in Sri Lanka, dedicated to offering exciting and affordable travel packages across the island. From breathtaking hill country adventures to coastal getaways and cultural explorations, we bring the beauty of Sri Lanka closer to you.
                    </p>

                    <div className="space-y-8">
                        <div className="flex items-start space-x-4">
                            <div className="bg-[#e0f7fa] p-3 rounded-lg">
                                <svg className="w-8 h-8 text-[#00838f]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                                </svg>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-[#003366] mb-2">Our Mission</h3>
                                <p className="text-gray-600">
                                    To provide high-quality, personalized local travel experiences that allow our customers to explore the true essence of Sri Lanka.
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start space-x-4">
                            <div className="bg-[#e0f7fa] p-3 rounded-lg">
                                <svg className="w-8 h-8 text-[#00838f]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                                </svg>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-[#003366] mb-2">Our Vision</h3>
                                <p className="text-gray-600">
                                    To become Sri Lanka's most trusted travel partner, creating unforgettable memories through safe and enjoyable journeys.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
