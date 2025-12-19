import RevealOnScroll from './RevealOnScroll';

const Services = () => {
    const services = [
        { title: "Hotel Booking", description: "Luxury and affordable stays." },
        { title: "Transport", description: "Comfortable rides across the island." },
        { title: "Tour Packages", description: "Curated experiences for you." },
        { title: "Event Management", description: "Weddings and corporate events." },
    ];

    return (
        <section id="services" className="py-20 px-8 bg-[#e0f7fa]">
            <div className="max-w-6xl mx-auto text-center">
                <RevealOnScroll>
                    <h2 className="text-4xl font-serif font-bold text-gray-800 mb-12">Our Services</h2>
                </RevealOnScroll>
                <div className="grid md:grid-cols-4 gap-8">
                    {services.map((service, index) => (
                        <RevealOnScroll key={index} delay={index * 100} effect="zoom-in">
                            <div
                                className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl hover:-translate-y-2 hover:border-[#00838f] border border-transparent transition-all duration-300 ease-in-out cursor-pointer"
                            >
                                <div className="w-16 h-16 bg-blue-100 rounded-full mx-auto mb-4 flex items-center justify-center text-blue-600 transition-transform duration-300 group-hover:scale-110">
                                    {/* Placeholder Icon */}
                                    <span className="text-2xl font-bold">{index + 1}</span>
                                </div>
                                <h3 className="text-xl font-bold text-gray-800 mb-2">{service.title}</h3>
                                <p className="text-gray-600">{service.description}</p>
                            </div>
                        </RevealOnScroll>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
