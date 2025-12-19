import Image from 'next/image';
import RevealOnScroll from './RevealOnScroll';

const Destinations = () => {
    const destinations = [
        { name: "Sigiriya", image: "/sigiriya.png" },
        { name: "Ella", image: "/ella.png" },
        { name: "Mirissa", image: "/mirissa.png" },
        { name: "Kandy", image: "/kandy.png" },
    ];

    return (
        <section id="popular-destinations" className="py-20 px-8 bg-white">
            <div className="max-w-6xl mx-auto text-center">
                <RevealOnScroll>
                    <h2 className="text-4xl font-serif font-bold text-gray-800 mb-12">Popular Destinations</h2>
                </RevealOnScroll>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {destinations.map((dest, index) => (
                        <RevealOnScroll key={index} delay={index * 100} effect="fade-up">
                            <div className="group relative overflow-hidden rounded-lg shadow-lg cursor-pointer h-80">
                                <Image
                                    src={dest.image}
                                    alt={dest.name}
                                    fill
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                                    className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                                    <span className="text-white text-xl font-bold transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                        {dest.name}
                                    </span>
                                </div>
                                <div className="absolute bottom-4 left-4 text-white font-bold text-lg drop-shadow-md group-hover:opacity-0 transition-opacity duration-300 z-10">
                                    {dest.name}
                                </div>
                            </div>
                        </RevealOnScroll>
                    ))}
                </div>
            </div >
        </section >
    );
};

export default Destinations;
