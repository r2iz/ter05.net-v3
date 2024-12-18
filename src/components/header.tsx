"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="border-b border-gray-200 bg-white sticky top-0 z-10">
            <div className="max-w-5xl mx-auto px-4 py-4 flex justify-between items-center">
                <Link href="/" className="flex items-center space-x-2">
                    <Image
                        src="/icon.webp"
                        alt="とるか"
                        width={34}
                        height={34}
                        className="rounded-full"
                    />
                </Link>
                <nav className="hidden md:block">
                    <ul className="flex space-x-6 text-sm">
                        <li>
                            <Link
                                href="/#about"
                                className="text-gray-600 hover:text-blue-500 transition-colors"
                            >
                                About
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/#skills"
                                className="text-gray-600 hover:text-blue-500 transition-colors"
                            >
                                Skills
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/blog"
                                className="text-gray-600 hover:text-blue-500 transition-colors"
                            >
                                Blog
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/#contact"
                                className="text-gray-600 hover:text-blue-500 transition-colors"
                            >
                                Contact
                            </Link>
                        </li>
                    </ul>
                </nav>
                <button
                    className="md:hidden"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>
            {isMenuOpen && (
                <nav className="md:hidden">
                    <ul className="flex flex-col space-y-2 px-4 py-2 bg-white">
                        <li>
                            <Link
                                href="/#about"
                                className="block py-2 text-gray-600 hover:text-blue-500 transition-colors"
                            >
                                About
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/#skills"
                                className="block py-2 text-gray-600 hover:text-blue-500 transition-colors"
                            >
                                Skills
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/blog"
                                className="block py-2 text-gray-600 hover:text-blue-500 transition-colors"
                            >
                                Blog
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/#contact"
                                className="block py-2 text-gray-600 hover:text-blue-500 transition-colors"
                            >
                                Contact
                            </Link>
                        </li>
                    </ul>
                </nav>
            )}
        </header>
    );
}
