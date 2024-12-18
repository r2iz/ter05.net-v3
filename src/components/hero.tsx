export default function Hero() {
    return (
        <section className="py-20 px-6 bg-gradient-to-r from-blue-100 to-purple-100 rounded-lg my-8">
            <div className=" mx-auto">
                <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
                    Torlka Nicla
                </h1>
                <p className="text-xl text-gray-700 mb-6">
                    Zero-Stack Developer
                </p>
                <a
                    href="#contact"
                    className="bg-blue-700 text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-blue-600 transition-colors inline-block"
                >
                    Get in touch
                </a>
            </div>
        </section>
    );
}
