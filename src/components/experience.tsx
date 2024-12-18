const experiences = [
    {
        company: "Seiko Gakuin Junior High School",
        position: "student",
        period: "2022 - now",
        description:
            "I am currently a student at Seiko Gakuin Junior High School.",
    },
];

export default function Experience() {
    return (
        <section id="experience" className="py-16">
            <h2 className="text-2xl font-bold mb-6 text-gray-900">
                Experience
            </h2>
            <div className="space-y-6">
                {experiences.map((exp, index) => (
                    <div
                        key={index}
                        className="border-l-2 border-blue-200 pl-4 ml-2"
                    >
                        <h3 className="text-lg font-semibold text-gray-800">
                            {exp.position}
                        </h3>
                        <p className="text-gray-600 text-sm">
                            {exp.company} | {exp.period}
                        </p>
                        <p className="mt-2 text-gray-700">{exp.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
