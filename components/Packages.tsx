"use client";

import { useState } from 'react';
import Image from 'next/image';
import RevealOnScroll from './RevealOnScroll';
import Button from './Button';

interface Package {
    id: number;
    name: string;
    price: string;
    image: string;
    highlights: string[];
    description: string;
    duration: string;
}

const packages: Package[] = [
    {
        id: 1,
        name: "Cultural Triangle Tour",
        price: "$450",
        image: "/sigiriya.png",
        highlights: [
            "Visit Sigiriya Rock Fortress",
            "Explore Anuradhapura Ancient City",
            "Dambulla Cave Temple tour",
            "Traditional Sri Lankan lunch"
        ],
        description: "Immerse yourself in the rich history of Sri Lanka with our Cultural Triangle Tour. This 4-day journey takes you through the heart of the island's ancient civilizations. You'll witness the architectural marvel of Sigiriya, the spiritual serenity of Anuradhapura, and the artistic wonders of the Dambulla Cave Temples. Our expert guides will bring the stories of kings and monks to life, ensuring an educational and inspiring experience.",
        duration: "4 Days / 3 Nights"
    },
    {
        id: 2,
        name: "Southern Coast Escape",
        price: "$380",
        image: "/mirissa.png",
        highlights: [
            "Whale watching in Mirissa",
            "Galle Fort walking tour",
            "Relax on Unawatuna Beach",
            "Stilt fishing experience"
        ],
        description: "Experience the sun, sand, and sea of Sri Lanka's southern coast. This package is perfect for those looking to unwind and enjoy the coastal beauty. From the historic charm of Galle Fort to the thrill of whale watching in Mirissa, every moment is designed for relaxation and discovery. Enjoy fresh seafood, golden sunsets, and the warm hospitality of the southern locals.",
        duration: "5 Days / 4 Nights"
    },
    {
        id: 3,
        name: "Hill Country Adventure",
        price: "$420",
        image: "/ella.png",
        highlights: [
            "Scenic train ride to Ella",
            "Visit Nine Arch Bridge",
            "Tea plantation & factory tour",
            "Hike to Little Adam's Peak"
        ],
        description: "Breathe in the fresh mountain air and witness the stunning landscapes of Sri Lanka's hill country. This adventure takes you through misty mountains, lush tea estates, and charming hill stations. The highlight is the world-famous train journey from Kandy to Ella, offering breathtaking views at every turn. Perfect for nature lovers and photography enthusiasts.",
        duration: "3 Days / 2 Nights"
    }
];

const Packages = () => {
    const [selectedPackage, setSelectedPackage] = useState<Package | null>(null);

    const handleBookNow = (packageName: string) => {
        const message = encodeURIComponent(`Hello! I'm interested in booking the ${packageName} package with Kano travel & Tours.`);
        const whatsappUrl = `https://wa.me/94722740944?text=${message}`;
        window.open(whatsappUrl, '_blank');
    };

    return (
        <section id="packages" className="py-20 px-8 bg-gray-50">
            <div className="max-w-7xl mx-auto">
                <RevealOnScroll>
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-serif font-bold text-[#003366] mb-4">Our Exclusive Packages</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Choose from our carefully curated travel experiences designed to show you the very best of Sri Lanka.
                        </p>
                    </div>
                </RevealOnScroll>

                <div className="grid md:grid-cols-3 gap-8">
                    {packages.map((pkg, index) => (
                        <RevealOnScroll key={pkg.id} delay={index * 100}>
                            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 flex flex-col h-full border border-gray-100 group">
                                {/* Image Section */}
                                <div className="relative h-64 overflow-hidden">
                                    <Image
                                        src={pkg.image}
                                        alt={pkg.name}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute top-4 right-4 bg-[#00838f] text-white px-4 py-1 rounded-full font-bold shadow-md">
                                        {pkg.price}
                                    </div>
                                    <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-lg text-sm font-medium text-[#003366] flex items-center">
                                        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                        </svg>
                                        {pkg.duration}
                                    </div>
                                </div>

                                {/* Content Section */}
                                <div className="p-8 flex-grow flex flex-col">
                                    <h3 className="text-2xl font-bold text-[#003366] mb-4">{pkg.name}</h3>

                                    <ul className="space-y-3 mb-8 flex-grow">
                                        {pkg.highlights.map((highlight, i) => (
                                            <li key={i} className="flex items-start text-gray-600 text-sm">
                                                <svg className="w-5 h-5 text-[#00838f] mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                                </svg>
                                                {highlight}
                                            </li>
                                        ))}
                                    </ul>

                                    <div className="grid grid-cols-2 gap-4 mt-auto">
                                        <button
                                            onClick={() => setSelectedPackage(pkg)}
                                            className="px-4 py-2.5 rounded-xl border-2 border-[#00838f] text-[#00838f] font-bold hover:bg-[#00838f] hover:text-white transition-all duration-300 text-sm"
                                        >
                                            Read More
                                        </button>
                                        <button
                                            onClick={() => handleBookNow(pkg.name)}
                                            className="px-4 py-2.5 rounded-xl bg-[#00838f] text-white font-bold hover:bg-[#005662] transition-all duration-300 text-sm shadow-md flex items-center justify-center"
                                        >
                                            <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                                            </svg>
                                            Book
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </RevealOnScroll>
                    ))}
                </div>
            </div>

            {/* Modal */}
            {selectedPackage && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-300">
                    <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl relative animate-in zoom-in-95 duration-300">
                        <button
                            onClick={() => setSelectedPackage(null)}
                            className="absolute top-6 right-6 text-gray-400 hover:text-gray-600 transition-colors z-10 bg-gray-100 rounded-full p-2"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                            </svg>
                        </button>

                        <div className="relative h-72 w-full">
                            <Image
                                src={selectedPackage.image}
                                alt={selectedPackage.name}
                                fill
                                className="object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                            <div className="absolute bottom-8 left-8 text-white">
                                <h3 className="text-3xl font-bold mb-2">{selectedPackage.name}</h3>
                                <div className="flex items-center space-x-4">
                                    <span className="bg-[#00838f] px-3 py-1 rounded-full text-sm font-bold">{selectedPackage.price}</span>
                                    <span className="flex items-center text-sm font-medium">
                                        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                        </svg>
                                        {selectedPackage.duration}
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div className="p-8">
                            <h4 className="text-xl font-bold text-[#003366] mb-4">Package Details</h4>
                            <p className="text-gray-600 leading-relaxed mb-8">
                                {selectedPackage.description}
                            </p>

                            <h4 className="text-xl font-bold text-[#003366] mb-4">What's Included</h4>
                            <ul className="grid md:grid-cols-2 gap-4 mb-8">
                                {selectedPackage.highlights.map((highlight, i) => (
                                    <li key={i} className="flex items-start text-gray-600">
                                        <svg className="w-5 h-5 text-[#38bdf8] mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                        </svg>
                                        <span className="text-sm">{highlight}</span>
                                    </li>
                                ))}
                            </ul>

                            <div className="flex justify-end">
                                <button
                                    onClick={() => handleBookNow(selectedPackage.name)}
                                    className="px-8 py-3 rounded-xl bg-[#00838f] text-white font-bold hover:bg-[#005662] transition-all duration-300 shadow-lg flex items-center"
                                >
                                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                                    </svg>
                                    Book on WhatsApp
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};

export default Packages;
