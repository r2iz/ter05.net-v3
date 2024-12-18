import { Twitter, GithubIcon, Mail } from "lucide-react";

export default function Contact() {
    return (
        <section id="contact" className="py-16">
            <h2 className="text-2xl font-bold mb-6 text-gray-900">
                Get in Touch
            </h2>
            <div className="max-w-lg ">
                <div className="space-y-4">
                    <a
                        href="https://x.com/Pz2Or_"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-3 text-gray-700 hover:text-blue-500 transition-colors"
                    >
                        <Twitter size={24} />
                        <span>Send me a DM on Twitter</span>
                    </a>
                    <a
                        href="https://github.com/Pz2Or"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-3 text-gray-700 hover:text-blue-500 transition-colors"
                    >
                        <GithubIcon size={24} />
                        <span>Connect with me on GitHub</span>
                    </a>
                    <a
                        href="mailto:pub@ter05.net"
                        className="flex items-center space-x-3 text-gray-700 hover:text-blue-500 transition-colors"
                    >
                        <Mail size={24} />
                        <span>Send me an email</span>
                    </a>
                </div>
            </div>
        </section>
    );
}
