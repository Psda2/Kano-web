"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';

const Hero = () => {
    const images = [
        "/logo-hero.png",
        "/hero-horses.png",
        "/hero-lighthouse.png"
    ];

    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 5000); // Change image every 5 seconds

        return () => clearInterval(interval);
    }, [images.length]);

    return (
        <div className="relative h-screen w-full overflow-hidden">
            {/* Background Images with Crossfade */}
            {images.map((src, index) => (
                <div
                    key={src}
                    className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ease-in-out ${index === currentImageIndex ? 'opacity-100' : 'opacity-0'
                        }`}
                >
                    <Image
                        src={src}
                        alt="Hero Background"
                        fill
                        className="object-cover"
                        priority={index === 0}
                    />
                </div>
            ))}

            {/* Overlay */}
            <div className="absolute top-0 left-0 w-full h-full bg-black/10 z-10"></div>

            {/* Content */}
            <div className="relative z-20 flex flex-col items-center justify-center h-full text-center text-white px-4">
                <h1 className="text-5xl md:text-7xl font-serif font-bold mb-4 drop-shadow-lg">
                    Welcome to <br />Kano travel & Tours
                </h1>
                <p className="text-lg md:text-2xl max-w-2xl drop-shadow-md">
                    Explore the beauty of Sri Lanka with our personalized travel packages.
                </p>
            </div>
        </div>
    );
};

export default Hero;
