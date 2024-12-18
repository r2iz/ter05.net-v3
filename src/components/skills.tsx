const skills = [
    {
        category: "Frontend",
        items: ["React", "Next.js", "Tailwind CSS"],
    },
    {
        category: "Backend",
        items: ["Node.js", "Express", "Hono", "Golang"],
    },
    {
        category: "Database",
        items: ["MongoDB", "PostgreSQL", "Redis", "Firebase"],
    },
    {
        category: "Others",
        items: ["Docker", "Git", "Linux", "Cloudflare", "Vercel", "etc."],
    },
];

export default function Skills() {
    return (
        <section id="skills" className="py-16">
            <h2 className="text-2xl font-bold mb-6 text-gray-900">Skills</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {skills.map((skillSet) => (
                    <div key={skillSet.category}>
                        <h3 className="text-lg font-semibold mb-3 text-gray-800">
                            {skillSet.category}
                        </h3>
                        <div className="flex flex-wrap gap-2">
                            {skillSet.items.map((skill, index) => (
                                <span
                                    key={index}
                                    className="bg-blue-100 text-blue-700 px-3 py-1 rounded-md text-sm"
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
