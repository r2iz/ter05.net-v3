import Image from 'next/image'

const projects = [
  { 
    id: 1, 
    title: 'E-commerce Platform', 
    description: 'A full-stack e-commerce solution with React, Node.js, and MongoDB.', 
    image: '/placeholder.svg?height=150&width=250',
    technologies: ['React', 'Node.js', 'MongoDB', 'Express']
  },
  { 
    id: 2, 
    title: 'Task Management App', 
    description: 'A Kanban-style task management application built with Next.js and Firebase.', 
    image: '/placeholder.svg?height=150&width=250',
    technologies: ['Next.js', 'Firebase', 'Tailwind CSS']
  },
  { 
    id: 3, 
    title: 'AI-powered Chatbot', 
    description: 'An intelligent chatbot using natural language processing and machine learning.', 
    image: '/placeholder.svg?height=150&width=250',
    technologies: ['Python', 'TensorFlow', 'Flask', 'React']
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-16">
      <h2 className="text-2xl font-bold mb-6 text-gray-900">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <div key={project.id} className="border border-gray-200 rounded-md overflow-hidden transition-all hover:shadow-md">
            <Image src={project.image} alt={project.title} width={250} height={150} className="w-full" />
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2 text-gray-800">{project.title}</h3>
              <p className="text-sm text-gray-600 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, index) => (
                  <span key={index} className="bg-blue-100 text-blue-700 px-2 py-1 rounded-md text-xs">{tech}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

