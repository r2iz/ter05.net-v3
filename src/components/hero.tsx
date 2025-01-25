"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

export default function Hero() {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return null;
    }

    return (
        <section className="py-10 px-6 overflow-hidden">
            <div className="max-w-5xl mx-auto">
                <div className="text-center mb-10">
                    <h1 className="text-5xl font-extrabold tracking-tight text-gray-800 sm:text-6xl mb-6">
                        Torlka Nicla <br />
                        <span className="text-3xl text-gray-500">
                            a.k.a. とるきゃっと
                        </span>
                    </h1>
                    <p className="text-xl text-gray-600 mb-10 leading-relaxed max-w-3xl mx-auto">
                        Zero-Stack Engineer
                    </p>
                    <div className="flex justify-center space-x-4">
                        <Button
                            size="lg"
                            variant="outline"
                            className="bg-gray-900 text-white"
                            asChild
                        >
                            <a href="#contact">Get in Touch</a>
                        </Button>
                    </div>
                </div>
                <div className="relative h-64 sm:h-80 md:h-96 mt-16">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 rounded-lg shadow-xl overflow-hidden">
                        <svg
                            className="absolute bottom-0 left-0 mb-8"
                            viewBox="0 0 375 283"
                            fill="none"
                            style={{ transform: "scale(1.5)", opacity: 0.1 }}
                        >
                            <rect
                                x="159.52"
                                y="175"
                                width="152"
                                height="152"
                                rx="8"
                                transform="rotate(-45 159.52 175)"
                                fill="white"
                            />
                            <rect
                                y="107.48"
                                width="152"
                                height="152"
                                rx="8"
                                transform="rotate(-45 0 107.48)"
                                fill="white"
                            />
                        </svg>
                        <div className="relative z-10 flex items-center justify-center h-full px-8 py-16 text-white">
                            <code className="text-lg sm:text-xl md:text-2xl font-mono">
                                const developer = &#123;
                                <br />
                                &nbsp;&nbsp;name: &apos;Torlka Nicla&apos;,
                                <br />
                                &nbsp;&nbsp;age: 15,
                                <br />
                                &nbsp;&nbsp;hobbies:
                                &#91;&apos;Programming&apos;,
                                &apos;Reading&apos;&#93;
                                <br />
                                &#125;;
                            </code>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
