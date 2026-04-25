import React from 'react';

import RevealOnScroll from './RevealOnScroll';

const WhyChooseUs = () => {
    const features = [
        {
            icon: (
                <svg className="w-12 h-12 text-[#00838f]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"></path>
                </svg>
            ),
            title: "Island-Wide Coverage",
            description: "We organize tours across every corner of Sri Lanka — from the cool highlands to the sunny southern beaches."
        },
        {
            icon: (
                <svg className="w-12 h-12 text-[#00838f]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
            ),
            title: "Personalized Packages",
            description: "Tailor-made itineraries to suit your preferences, budget, and travel style for a truly unique experience."
        },
        {
            icon: (
                <svg className="w-12 h-12 text-[#00838f]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"></path>
                </svg>
            ),
            title: "Reliable Support",
            description: "24/7 customer support to ensure your journey is smooth, safe, and hassle-free from start to finish."
        },
        {
            icon: (
                <svg className="w-12 h-12 text-[#00838f]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
            ),
            title: "Comfortable Transport",
            description: "Travel in style and comfort with our fleet of modern, air-conditioned vehicles and experienced drivers."
        },
        {
            icon: (
                <svg className="w-12 h-12 text-[#00838f]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
            ),
            title: "Affordable Pricing",
            description: "Competitive rates with no hidden charges, ensuring you get the best value for your money."
        },
        {
            icon: (
                <svg className="w-12 h-12 text-[#00838f]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
            ),
            title: "Local Expertise",
            description: "Our team of local experts will guide you to the hidden gems and authentic experiences of Sri Lanka."
        }
    ];

    return (
        <section className="py-20 px-8 bg-white">
            <div className="max-w-7xl mx-auto text-center">
                <RevealOnScroll>
                    <h2 className="text-4xl font-serif font-bold text-[#003366] mb-16">Why Choose Kano travel & Tours?</h2>
                </RevealOnScroll>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <RevealOnScroll key={index} delay={index * 100} effect="fade-up">
                            <div
                                className="bg-[#f0f8ff] p-8 rounded-xl hover:shadow-xl transition-shadow duration-300 flex flex-col items-center text-center h-full"
                            >
                                <div className="mb-6 p-4 bg-white rounded-full shadow-sm">
                                    {feature.icon}
                                </div>
                                <h3 className="text-xl font-bold text-[#003366] mb-4">{feature.title}</h3>
                                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                            </div>
                        </RevealOnScroll>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
